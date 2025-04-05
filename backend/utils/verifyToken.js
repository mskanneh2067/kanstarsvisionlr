import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import User from "../models/User.js";
import util from "util";
//################################################################################
//VERIFY TOKEN
let data;
export const verifyToken = async (req, res, next) => {
  try {
    //1.Read the token & check if it exist
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }
    //2.Validate the token
    data = await util.promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET,
      (err) => {
        if (err) return next(createError(403, "Token is not valid!"));
      }
    );

    console.log("1.", data);

    //3.If the user exists
    const user = await User.findById(data.id);
    console.log("2. req.data.id", data.id);
    if (!user)
      return next(createError(401, "User with this token does not exist!"));

    //4.If the user changed password after the token was issued
    const isPasswordChanged = await user.isPasswordChanged(data.iat);
    console.log("3. req.data.iat", data.iat);
    if (isPasswordChanged) {
      return next(
        createError(
          401,
          "Password has been changed recently. Please login again!"
        )
      );
    }

    //5.Allow user to access route

    next();
  } catch (err) {
    next(err);
  }
};

//################################################################################
//VERIFY USER
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (data === undefined) {
      return next(
        createError(403, "You have to be login to perform this action!")
      );
    } else if (data.id === req.params.id || data.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (data === undefined) {
      return next(
        createError(403, "You have to be login to perform this action!")
      );
    } else if (data.isAdmin) {
      next();
    } else {
      return next(
        createError(403, "You do not have permission to perform this action!")
      );
    }
  });
};
