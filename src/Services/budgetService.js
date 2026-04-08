import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

export const createBudgetService = async (req, res) => {
  try {
    // verify needed details
    const { category, monthly_limit } = req.body;

    if (!category || !monthly_limit) {
      return errorResponse(res, 400, "All fields are required");
    }

    const budgetExists = await pool.query(
      "SELECT * FROM budget WHERE category = $1",
      [category],
    );

    console.log("check if budget exists", budgetExists);
    if (budgetExists.rows.length > 0) {
      return errorResponse(res, 400, "Budget already exists");
    }

    const createBudgetQuery = `
    INSERT INTO budget(category, monthly_limit)
    VALUES ($1, $2)
    RETURNING * 
    `;

    const budgetResult = await pool.query(createBudgetQuery, [
      category,
      monthly_limit,
    ]);
    console.log(budgetResult);

    const budgets = budgetResult.rows[0];
    console.log(budgets);

    return successResponse(
      res,
      201,
      "budget created successfully",
      budgetResult.rows,
    );
  } catch (error) {
    return errorResponse(res, 500, "Failed to create budget");
  }
};



// // create  budget
// export const 