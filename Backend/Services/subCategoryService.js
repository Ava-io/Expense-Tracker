import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

// Create
export const createSubCategoryService = async (req, res) => {
  try {
    const { name, category_id } = req.body;
    if (!name || !category_id) {
      return errorResponse(res, 400, "All fields are required");
    }

    const subcategoryExists = await pool.query(
      "SELECT * FROM sub_category WHERE name = $1 ",
      [name],
    );

    console.log(subcategoryExists);

    if (subcategoryExists.rows.length > 0) {
      return errorResponse(res, 400, "Sub Category already exists");
    }

    const createSubCategoryQuery = `
    INSERT INTO sub_category(name, category_id)
    VALUES($1, $2)
    RETURNING * 
    `;

    const subCategoryResult = await pool.query(createSubCategoryQuery, [
      name,
      category_id,
    ]);
    console.log(subCategoryResult);

    const subCategory = subCategoryResult.rows[0];
    console.log(subCategory);

    return successResponse(
      res,
      201,
      "Sub Category created successfully",
      subCategoryResult.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, "Create sub category Failed");
  }
};

// Get all Sub-category
export const getSubCategories = async (req, res) => {
  try {
    const getSubCategories = await pool.query(`SELECT * FROM sub_category`);
    console.log(getSubCategories.rows);

    return successResponse(
      res,
      200,
      "All Sub_Categories gotten successfully",
      getSubCategories.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Get sub_categories failed");
  }
};

// Get Sub-category by Id
export const getSubCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const idExists = await pool.query(
      "SELECT * FROM sub_category WHERE id =$1",
      [id],
    );
    console.log(idExists);

    const getSubCategory = await pool.query(
      "SELECT * FROM sub_category WHERE id = $1",
      [id],
    );
    console.log(getSubCategories);

    return successResponse(
      res,
      200,
      "Sub category gotten successfully",
      getSubCategories.rows,
    );
  } catch (error) {
    return errorResponse(res, 500, "Fetch sub category failed");
  }
};

// UPDATE sub-category by id
export const editSubCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);

    const { name, category_id } = req.body;

    const idExists = await pool.query(
      "SELECT * FROM sub_category WHERE id = $1",
      [id],
    );

    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Sub category not found");
    }

    const editSubCategory = await pool.query(
      `
     UPDATE sub_category SET name = COALESCE($1, name), category_id = COALESCE($2, category_id)
     WHERE id = $3
     RETURNING *
      `,
      [name, category_id, id],
    );
    console.log(editSubCategory);

    return successResponse(res, 400, "Edit sub_category failed");
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Edit sub category failed");
  }
};

// Delete sub-category by id
export const delSubCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const delSubCategory = await pool.query(
      `
      DELETE FROM sub_category WHERE id = $1
      `,
      [id],
    );
    console.log(delSubCategory);

    const idExists = await pool.query(
      `DELETE FROM sub_category WHERE id = $1`,
      [id],
    );
    console.log(idExists);

    if (!idExists.rows.length === 0) {
      return errorResponse(res, 404, "Sub_category not found");
    }

    return successResponse(res, 200, "Sub_Category deleted successfully");
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, "Sub Category Failed");
  }
};
