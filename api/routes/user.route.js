import express from "express";
import { myProperty, properties_details } from "../controller/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const  router = express.Router();

router.post('/property-detail' ,upload.array("propImage", 5),properties_details);
router.post('/my-property',myProperty);

export default router;