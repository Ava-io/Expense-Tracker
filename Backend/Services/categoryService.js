import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

export const createCategoryService = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return errorResponse(res, 400, "All fields are required");
    }

    const categoryExists = await pool.query(
      "SELECT * FROM categories WHERE name = $1",
      [name],
    );
    console.log(categoryExists);

    if (categoryExists.rows.length > 0) {
      return errorResponse(res, 400, "Category already exists");
    }

    const createCategoryQuery = `
    INSERT INTO categories(name)
    VALUES ($1)
    RETURNING *
    `;

    const categoryResult = await pool.query(createCategoryQuery, [name]);
    console.log(categoryResult);

    const category = categoryResult.rows[0];
    console.log(category);

    return successResponse(
      res,
      201,
      "category created successfully",
      categoryResult.rows,
    );
  } catch (error) {
    return errorResponse(res, 500, "Failed to create category");
  }
};

// get all categories
export const getCategories = async (req, res) => {
  try {
    const getCategories = await pool.query(`SELECT * FROM categories`);
    console.log(getCategories.rows);

    return successResponse(
      res,
      200,
      "All Categories gotten successfully",
      getCategories.rows,
    );
  } catch (error) {
    return errorResponse(res, 400, "Get categories failed");
  }
};

// get category by id
export const getCatById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const getCat = await pool.query(`SELECT * FROM categories WHERE id = $1`, [
      id,
    ]);
    console.log(getCat);

    const idExists = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id],
    );

    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Category not found");
    }

    return successResponse(
      res,
      200,
      "category fetched successfully",
      getCat.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Get category failed");
  }
};

// edit category by id
export const editCatById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);

    const { name } = req.body;
    const editCat = await pool.query(
      `UPDATE categories
            SET name = COALESCE($1, name)
            WHERE id = $2
            RETURNING *`,
      [name, id],
    );

    const idExists = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id],
    );

    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Category not found");
    }

    return successResponse(
      res,
      200,
      "Category edited sucessfully",
      editCat.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Edit category failed");
  }
};

// delete category by id

export const delCatById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const idExists = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id],
    );
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 404, "category does not exist");
    }

    const deleteCat = await pool.query(`DELETE FROM categories WHERE id = $1`, [
      id,
    ]);
    console.log(deleteCat);

    return successResponse(res, 200, "category deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
