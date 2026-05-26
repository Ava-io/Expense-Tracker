import { pool } from "../../Config/db.js";
import { errorResponse, successResponse } from "../../Utils/responseHandler.js";

export const getTransactionStart = async (req, res) => {
  try {
    const getTransactionStart = await pool.query(
      `SELECT 
       COALESCE( SUM ( CASE WHEN categories.name = 'Income' THEN t.amount ELSE 0 END),0) AS total_income,
       COALESCE( SUM ( CASE WHEN categories.name = 'Expense' THEN t.amount ELSE 0 END),0) AS total_expense,
       COALESCE( SUM ( CASE WHEN categories.name = 'Income' THEN t.amount ELSE 0 END),0)  -
       COALESCE( SUM ( CASE WHEN categories.name = 'Expense' THEN t.amount ELSE 0 END),0) AS balance, 
       COALESCE( 
       (COALESCE(SUM(CASE WHEN categories.name = 'Income' THEN t.amount END),0) -
       COALESCE(SUM(CASE WHEN categories.name = 'Expense' THEN t.amount END),0)) /
       NULLIF(COALESCE(SUM(CASE WHEN categories.name = 'Income' THEN t.amount END),0),0) * 100,0) AS percentage
      FROM transactions t
      JOIN categories ON categories.id = t.category_id
      `,
    );
    console.log(getTransactionStart);

    return successResponse(
      res,
      200,
      "Transaction count gotten successfully",
      getTransactionStart.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, "Transaction not successful");
  }
};
