import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

export const createBudgetService = async (req, res) => {
  try {
    // verify needed details
    const { category_id, monthly_limit } = req.body;

    if (!category_id || !monthly_limit) {
      return errorResponse(res, 400, "All fields are required");
    }

    const budgetExists = await pool.query(
      "SELECT * FROM budget WHERE category_id = $1",
      [category_id],
    );

    console.log("check if budget exists", budgetExists);
    if (budgetExists.rows.length > 0) {
      return errorResponse(res, 400, "Budget already exists");
    }

    const createBudgetQuery = `
    INSERT INTO budget(category_id, monthly_limit)
    VALUES ($1, $2)
    RETURNING * 
    `;

    const budgetResult = await pool.query(createBudgetQuery, [
      category_id,
      monthly_limit,
    ]);
    console.log(budgetResult);

    const getBudget = await pool.query(
      `SELECT budget.category_id 
      FROM budget 
      INNER JOIN categories 
      ON budget.category_id = categories_id 
      ORDER BY budget.category_id ASC`,
    );

    console.log(getBudget.rows);
    const budgets = budgetResult.rows[0];
    console.log(budgets);

    return successResponse(
      res,
      201,
      "budget created successfully",
      budgetResult.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, "Failed to create budget");
  }
};

// get all budget
export const getBudgets = async (req, res) => {
  try {
    const getBudgets = await pool.query(`SELECT * FROM budget`);
    console.log(getBudgets.rows);

    return successResponse(
      res,
      200,
      "All budgets gotten successfully",
      getBudgets.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Get Budgets Failed");
  }
};

// get budget by id
export const getBudgetById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const getBudget = await pool.query(
      `
            SELECT * FROM budget WHERE id = $1 
            `,
      [id],
    );
    console.log(getBudget);

    const idExists = await pool.query("SELECT * FROM budget WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Budget not found");
    }

    return successResponse(
      res,
      200,
      "Budget fetched successfully",
      getBudget.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Get Budget Failed");
  }
};

// edit budget by id
export const editBudgetById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("req body", req.body);

    const { category_id, monthly_limit } = req.body;

    console.log(id);

    const editBudget = await pool.query(
      `     
            UPDATE budget 
            SET category_id = COALESCE($1, category_id), 
            monthly_limit = COALESCE($2, monthly_limit) 
            WHERE id = $3 
            RETURNING *
            `,
      [category_id, monthly_limit, id],
    );

    // console.log(editBudget);

    const idExists = await pool.query("SELECT * FROM budget WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Budget not found");
    }

    return successResponse(
      res,
      200,
      "Budget edited successfully",
      editBudget.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Edit Budget failed");
  }
};

// delete budget by id
export const delBudgetById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { category_id, monthly_limit } = req.body;

    if (!category_id || !monthly_limit) {
      return errorResponse(res, 400, "All fields are required");
    }

    const deletebudget = await pool.query(`DELETE FROM budget WHERE id = $1`, [
      id,
    ]);
    console.log(deletebudget);

    const idExists = await pool.query("SELECT * FROM budget WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 404, "Budget not found");
    }

    return successResponse(res, 200, "Budget deleted successfully");
  } catch (error) {}
};
