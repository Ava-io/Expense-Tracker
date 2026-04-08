import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import { createBudgetService } from "../../Services/budgetService.js";

const router = Router();

router.post("/create-budget", verifyToken, createBudgetService);

export default router;
