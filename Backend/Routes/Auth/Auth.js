import { Router } from "express";
import SigninService from "../../Services/Auth/signinService.js";
import SignupService from "../../Services/Auth/signupService.js";

const router = Router();

router.post("/signup", SignupService);
router.post("/signin", SigninService);

export default router;
