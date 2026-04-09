import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import {
  createCategoryService,
  delCatById,
  editCatById,
  getCatById,
  getCategories,
} from "../../Services/categoryService.js";

const router = Router();

router.post("/create-cat", verifyToken, createCategoryService);
router.get("/get-cat", verifyToken, getCategories);
router.get("/get-cat-id/:id", verifyToken, getCatById);
router.patch("/edit-cat/:id", verifyToken, editCatById);
router.delete("/del-cat/:id", verifyToken, delCatById);

export default router;
