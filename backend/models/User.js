import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const bcryptSalt = process.env.BCRYPT_SALT;
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name is a required field."],
      maxlength: [30, "Name must be less than or equal 30 characters "],
      minlength: [5, "Name must be more than 5 characters "],
    },
    lastName: {
      type: String,
      required: [true, "Name is a required field."],
      maxlength: [30, "Name must be less than or equal 30 characters "],
      minlength: [5, "Name must be more than 5 characters "],
    },
    company: {
      type: String,
      required: false,
      maxlength: [30, "Name must be less than or equal 30 characters "],
      minlength: [5, "Name must be more than 5 characters"],
    },
    position: String,
    email: {
      type: String,
      required: [true, "Email required."],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Email required."],
    },
    password: {
      type: String,
      required: [true, "Password required.."],
      maxlength: [27, "Password must be less than or equal 27 characters "],
      minlength: [
        8,
        "Password must be greater than or equal to  8 characters ",
      ],
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm  password required!"],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "Password & Confirm Password don't match!",
      },
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    passwordChangedAt: Date,
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,

    acceptPrivacyPolicy: {
      type: String,
      required: true,
    },

    cartData: { type: Object, default: {} },
    avatar: {
      type: String,
      required: false,
    },
    address: { type: Object, default: { line1: "", line2: "" } },
    phone: { type: String, default: "+0 000-000-0000" },
    country: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { minimize: false },
  { timestamps: true }
);

//Password Hashing
userSchema.pre("save", async function (next) {
  //if password is not modified, don't encrypt it
  if (!this.isModified("password")) return next();

  //Encrypt password before saving it
  this.password = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.confirmPassword = undefined;
  next();
});

//Get only active users from the database with any query starting with find
userSchema.pre(/^find/, function (next) {
  this.find({ active: true });
  next();
});
// #################################################################################
//Compare password received from the req.body to the password in the database
userSchema.methods.comparePWD = async function (pswdUser, pswdDB) {
  return await bcrypt.compare(pswdUser, pswdDB);
};
// #################################################################################
//Check if user login with token has change password
userSchema.methods.isPasswordChanged = async function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const pswdChangedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    /*  console.log(
      `pswdChangedTimestamp: ${pswdChangedTimestamp}, JWTTimestamp: ${JWTTimestamp}`
    ); */

    return JWTTimestamp < pswdChangedTimestamp;
  }
  return false;
};
// #################################################################################
userSchema.methods.createPswdResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpiresAt = Date.now() + 10 * 60 * 1000;

  // console.log(resetToken, this.pswdResetToken);
  return resetToken;
};
// #################################################################################
const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
