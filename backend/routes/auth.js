import express from "express";

import {
  login,
  logout,
  register,
  forgotPassword,
  resetPassword,
  registerAdmin,
  verifyEmail
 
} from "../controllers/auth.js";

import { verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email",verifyEmail);


router.post("/forgot-password", forgotPassword);
router.patch("/reset-password/:token", resetPassword);


router.post("/register-admin",verifyAdmin,registerAdmin)


export default router;
