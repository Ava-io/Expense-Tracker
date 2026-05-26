import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import { getTransactionStart } from "../Service/startService.js";

const router = Router();

router.get("/transaction-start", verifyToken, getTransactionStart);

export default router;
