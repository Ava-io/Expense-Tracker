import { Router } from "express";
import SignupService from "../../Services/Auth/signupService.js";

const router = Router();

router.post("/signup", SignupService);

export default router;
