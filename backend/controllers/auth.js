import User from "../models/User.js";
import jwt from "jsonwebtoken";
import {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendResetSuccessEmail,
} from "../utils/Mailtrap/emails.js";
import { createError } from "../utils/error.js";
import crypto from "crypto";
//@desc   Register a new user
//route   POST /api/auth/register
//@access Public

// ########################################################################
export const register = async (req, res, next) => {
  const { email, acceptPrivacyPolicy } = req.body;

  try {
    //Check if user exist
    const isUser = await User.findOne({ email });
    if (isUser) {
      return next(createError(400, "User already exists!"));
    }

    if (acceptPrivacyPolicy !== "Yes")
      return next(
        createError(
          400,
          "You must  accept our privacy policy to create an account"
        )
      );

    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    //Create User
    const user = new User({
      ...req.body,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await user.save();
    console.log(`Verification Token : ${user.verificationToken}`);
    console.log(
      `Verification Token Expires At: ${user.verificationTokenExpiresAt}`
    );

    await sendVerificationEmail(user.email, verificationToken);
    res.status(201).json({
      success: true,
      message: "User account created successfully.",
    });
  } catch (err) {
    next(err);
  }
};

// #####################################################
// @desc  Verify Email Account
// route   POST /api/admin/register
// @access Public

export const verifyEmail = async (req, res, next) => {
  const { verificationCode } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: verificationCode,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return next(createError(400, "Invalid or expired verification code!"));
    }
    console.log(`Verification Token : ${user.verificationToken}`);
    console.log(
      `Verification Token Expires At: ${user.verificationTokenExpiresAt}`
    );

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save({ validateBeforeSave: false });

    await sendWelcomeEmail(user.email, user.name);

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (err) {
    next(err);
  }
};

// ########################################################################

//@desc  Login user
//route   POST /api/auth/login
//@access Public
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //Check if Email ID or Password was provided
    if (!email || !password)
      return next(
        createError(400, "Please provide email ID & Password for login!")
      );
    //Check If User Exist
    const user = await User.findOne({ email }).select("+password");

    //Compare Password
    // const isPswdMatch = await user.comparePWD(password, user.password);
    if (!user || !(await user.comparePWD(password, user.password)))
      return next(createError(400, "Access Denied. Invalid Credential!"));

    if (!user.isVerified)
      return next(createError(400, "Access Denied. Please verify your email!"));
    //JWT Token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
        sameSite: "strict", // Prevent CSRF attacks
        maxAge: 86_400_000,
      })
      .status(200)
      .json({
        success: true,
        firstName: user.firstName,
        lastName:user.lastName,
      });
  } catch (err) {
    next(err);
  }
};

//@desc  Logout user
//route   POST /api/auth/logout
//@access Public

export const logout = async (req, res, next) => {
  try {
    res.cookie("access_token", "", {
      httpOnly: true,
      expires: new Date(),
    });
    res.status(200).json({ success: true, message: "User logged out" });
  } catch (err) {
    next(err);
  }
};

//#####################################################################################
//FORGOT PASSWORD
export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    //1. GET USER BASED ON POSTED EMAIL
    const user = await User.findOne({ email });
    if (!user) {
      return next(createError(400, "User with this email does not exits!"));
    }
    //2. GENERATE A RANDOM RESET TOKEN
    const resetToken = user.createPswdResetToken();
    await user.save({ validateBeforeSave: false });

    // send email
    await sendPasswordResetEmail(
      user.email,
      `${process.env.FRONTEND_URL}/reset-password/${resetToken}`
    );
    res.status(200).json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (err) {
    next(err);
  }
};

//##############################################################################
export const resetPassword = async (req, res, next) => {
  try {
    const token = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user)
      return next(createError(401, "Token is invalid or  has expired!"));

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    user.passworddChangedAt = Date.now();
    await user.save();

    await sendResetSuccessEmail(user.email);

    res
      .status(200)
      .json({ success: true, message: "Password reset successful" });
  } catch (err) {
    next(err);
  }
};

// #####################################################
//@desc  Create Admin Account
//route   POST /api/admin/register
//@access Public

export const registerAdmin = async (req, res, next) => {
  const { email, acceptPrivacyPolicy } = req.body;

  try {
    //Check if user exist
    let user = await User.findOne({ email });
    if (user) return next(createError(400, "User already exists!"));

    if (acceptPrivacyPolicy !== "Yes")
      return next(
        createError(
          400,
          "You must  accept our privacy policy to create an account"
        )
      );

    //Create User
    user = new User({
      ...req.body,
      isAdmin: true,
      isVerified: true,
    });
    await user.save();

    res.status(201).json({
      success: true,
      name: user.name,
    });
  } catch (err) {
    next(err);
  }
};
