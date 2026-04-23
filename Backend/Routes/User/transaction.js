import { Router } from "express";
import {verifyToken} from "../../Middleware/verifyToken.js"
import { createTransactionService } from "../../Services/transactionService.js";

const router = Router();

router.post("/create-trans", verifyToken, createTransactionService);

export default router;
