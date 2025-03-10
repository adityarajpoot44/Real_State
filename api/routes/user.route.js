import express from "express";
import { properties_details } from "../controller/user.controller.js";

const router = express.Router();


router.post('/property-detail',properties_details);


export default router;