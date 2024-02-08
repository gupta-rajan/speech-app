import express from "express";
const router = express.Router();
import { getNews } from "../controllers/newsController.js";

router.route('/').get(getNews);

export default router;