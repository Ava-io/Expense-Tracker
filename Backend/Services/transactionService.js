import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

// Create transaction endpoint
export const createTransactionService = async (req, res) => {
  try {
    const { transaction, category_id, date, amount, sub_category_id } =
      req.body;

    if (!transaction || !category_id || !date || !amount || !sub_category_id) {
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
    INSERT INTO transactions(transaction, category_id, date, amount, sub_category_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;

    const transactionResult = await pool.query(createTransactionQuery, [
      transaction,
      category_id,
      date,
      amount,
      sub_category_id,
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
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, "Create transaction failed");
  }
};

// Get all
export const getTransactions = async (req, res) => {
  try {
    let { page = 1, perPage = 10, search, category, subCategory } = req.query;
    page = Math.max(1, parseInt(page) || 1);
    perPage = Math.min(100, parseInt(perPage) || 10);
    let offset = (page - 1) * perPage;

    console.log("check", page, perPage);
    const conditions = [];
    const params = [];
    let paramIndex = 1;

    if (search) {
      conditions.push(`transaction ILIKE $${paramIndex}`);
      params.push(`%${search}%`);
      paramIndex++;
    }

    if (category) {
      conditions.push(`category_id ILIKE $${paramIndex}`);
      params.push(`%${category}%`);
      paramIndex++;
    }

    if (subCategory) {
      conditions.push(`sub_category ILIKE $${paramIndex}`);
      params.push(`%${subCategory}%`);
      paramIndex++;
    }

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND")} ` : "";
    console.log("whereee", whereClause);

    const getTransactions = await pool.query(
      `
      SELECT * FROM transactions ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
      `,
      [...params, perPage, offset],
    );
    console.log("whereee", whereClause);
    console.log(getTransactions);

    return successResponse(
      res,
      200,
      "Transactions gotten successfully",
      getTransactions.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Get all transactions failed");
  }
};

// GET BY ID
export const getTransaction = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const idExists = await pool.query(
      "SELECT * FROM transactions WHERE id = $1",
      [id],
    );
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Transaction not found");
    }

    const getTransaction = await pool.query(
      "SELECT  * FROM transactions WHERE id = $1",
      [id],
    );
    console.log(getTransaction);

    return successResponse(
      res,
      200,
      "Transaction fetched successfully",
      getTransaction.rows,
    );
  } catch (error) {
    return errorResponse(res, 500, "Fetch Transaction failed");
  }
};

// Update by ID
export const editTransaction = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);

    const { transaction, category_id, date, amount, sub_category_id } =
      req.body;

    const idExists = await pool.query(
      "SELECT * FROM transactions WHERE id = $1",
      [id],
    );
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Transaction not found");
    }
    const editTransaction = await pool.query(
      `
      UPDATE transactions SET transaction = COALESCE($1, transaction), category_id = COALESCE($2, category_id), 
      date = COALESCE ($3, date), amount = COALESCE($4, amount), sub_category_id = COALESCE($5, sub_category_id)
      WHERE id = $6
      RETURNING *   
        `,
      [transaction, category_id, date, amount, sub_category_id, id],
    );
    console.log(editTransaction);

    return successResponse(
      res,
      200,
      "Transaction edited successfully",
      editTransaction.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Edit transaction failed");
  }
};

// Delete By Id
export const delTransaction = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const delTransaction = await pool.query(
      `DELETE FROM transactions WHERE id = $1`,
      [id],
    );
    console.log(delTransaction);

    const idExists = await pool.query(
      `DELETE FROM transactions WHERE id = $1`,
      [id],
    );
    console.log(idExists);

    if (!idExists.rows.length === 0) {
      return errorResponse(res, 404, "Transaction not found");
    }

    return successResponse(res, 200, "Transaction deleted successfully");
  } catch (error) {}
};
