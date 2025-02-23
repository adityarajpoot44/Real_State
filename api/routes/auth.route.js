import express from "express";
import { signin, signup,signOut } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin",signin);
router.get("/signout",signOut);

export default router;