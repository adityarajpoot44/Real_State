import express from "express";
import { properties_details } from "../controller/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router = express.Router();

router.post('/property-detail' ,upload.array("images", 5),properties_details);


export default router;