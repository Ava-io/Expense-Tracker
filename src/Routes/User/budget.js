import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import {
  createBudgetService,
  getBudgetById,
  getBudgets,
} from "../../Services/budgetService.js";

const router = Router();

router.post("/create-budget", verifyToken, createBudgetService);
router.get("/get-budgets", verifyToken, getBudgets);
router.get("/getBudgetById/:id", verifyToken, getBudgetById);

export default router;
