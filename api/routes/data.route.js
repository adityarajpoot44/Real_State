import express from 'express';
import { allPropertiesList, propertiesList } from '../controller/data.controller.js';
const router = express.Router();

router.get('/propertiesList/:id', propertiesList);
router.get('/propertiesAllList', allPropertiesList);

export default router;