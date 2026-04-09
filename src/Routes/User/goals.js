import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import {
  createGoalService,
  delGoalById,
  editGoalById,
  getGoalById,
  getGoals,
} from "../../Services/goalService.js";

const router = Router();

router.post("/create-goal", verifyToken, createGoalService);
router.get("/get-goals", verifyToken, getGoals);
router.get("/get-goal-id/:id", verifyToken, getGoalById);
router.patch("/edit-goal/:id", verifyToken, editGoalById);
router.delete("/delete-goal/:id", verifyToken, delGoalById);

export default router;
