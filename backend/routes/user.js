import express from "express";
import {
  updatePswd,
  updateProfile,
  deleteUser,
  getUser,
  getUsers,
  deActivateProfile,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { upload } from "../multer.js";
const router = express.Router();

//UPDATE USER PASSWORD
router.patch("/update_password", verifyUser, updatePswd);

//UPDATE USER PROFILE
// router.patch("/:id", verifyUser, updateProfile);
router.patch("/update-profile", verifyUser,upload.single('avatar'), updateProfile);

//MAKE  PROFILE INACTIVE
router.delete("/deactivate_profile", verifyUser, deActivateProfile);

//DELETE USER PROFILE

router.delete("/:id", verifyAdmin, deleteUser);

//GET USER PROFILE
router.get("/:id", verifyUser, getUser);

//GET ALL USERS
// router.get("/", verifyUser, getUsers);
router.get("/",getUsers);

export default router;
