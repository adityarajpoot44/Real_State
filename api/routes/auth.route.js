import express from "express";
import { signin, signup,signOut,deleteUser, updateUserDetails } from "../controller/auth.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin",signin);
router.get("/signout",signOut);
router.delete('/delete/:id',verifyUser,deleteUser);
router.put('/update/:id',verifyUser,updateUserDetails);

export default router;