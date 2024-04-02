import express from "express";
const router = express.Router();
import { getResearch ,getResearchById} from "../controllers/researchController.js";

router.route('/').get(getResearch);
router.route('/:id').get(getResearchById);

export default router;