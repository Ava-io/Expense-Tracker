import { Router } from "express";
import { verifyToken } from "../../Middleware/verifyToken.js";
import {
  createSubCategoryService,
  editSubCategory,
  getSubCategories,
  getSubCategory,
} from "../../Services/subCategoryService.js";
import { delBudgetById } from "../../Services/budgetService.js";

const router = Router();

router.post("/create-subCategory", verifyToken, createSubCategoryService);
router.get("/get-sub-Categories", verifyToken, getSubCategories);
router.get("/get-sub-category/:id", verifyToken, getSubCategory);
router.patch("/edit-sub-category/:id", verifyToken, editSubCategory);
router.delete("/delete-sub-category/:id", verifyToken, delBudgetById);

export default router;
