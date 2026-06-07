import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import { editProfById, getProfileById } from "../../Services/profileService.js";

const router = Router();

router.get("/get-profile/:id", verifyToken, getProfileById);
router.patch("/edit-profile", verifyToken, editProfById);

export default router;
