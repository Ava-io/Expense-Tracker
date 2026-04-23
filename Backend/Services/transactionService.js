import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

// Create transaction endpoint
export const createTransactionService = async (req, res) => {
  try {
    const { transaction, category_id, date, amount } = req.body;

    if (!transaction || !category_id || !date || !amount) {
      return errorResponse(res, 400, "All fields are required");
    }

    const transactionExists = await pool.query(
      "SELECT * FROM transactions WHERE transaction = $1",
      [transaction],
    );

    console.log(transactionExists);

    if (transactionExists.rows.length > 0) {
      return errorResponse(res, 400, "Transaction already exists");
    }

    const createTransactionQuery = `
    INSERT INTO transactions (transaction, category_id, date, amount)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;

    const transactionResult = await pool.query(createTransactionQuery, [
      transaction,
      category_id,
      date,
      amount,
    ]);
    console.log(transactionResult);

    const transactions = transactionResult.rows[0];
    console.log(transactions);

    return successResponse(
      res,
      201,
      "All transactions gotten successfully",
      transactionResult.rows,
    );
  } catch (error) {}
};
