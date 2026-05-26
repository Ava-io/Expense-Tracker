import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import {
  createTransactionService,
  delTransaction,
  editTransaction,
  getTransaction,
  getTransactions,
} from "../../Services/transactionService.js";

const router = Router();

router.post("/create-transaction", verifyToken, createTransactionService);
router.get("/get-transactions", verifyToken, getTransactions);
router.get("/get-transaction/:id", verifyToken, getTransaction);
router.patch("/edit-transaction/:id", verifyToken, editTransaction);
router.delete("/delete-transaction/:id", verifyToken, delTransaction);

export default router;
