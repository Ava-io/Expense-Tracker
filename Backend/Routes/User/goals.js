import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import {
  createGoalService,
  getGoals,
  getGoal,
  editGoal,
  delGoal,
} from "../../Services/goalService.js";

const router = Router();

router.post("/create-goal", verifyToken, createGoalService);
router.get("/get-goals", verifyToken, getGoals);
router.get("/get-goal-id/:id", verifyToken, getGoal);
router.patch("/edit-goal/:id", verifyToken, editGoal);
router.delete("/delete-goal/:id", verifyToken, delGoal);

export default router;
