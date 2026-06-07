import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

// Get by id
export const getProfileById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const idExists = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Setting not found");
    }

    const getProfile = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      id,
    ]);
    console.log(getProfile);

    return successResponse(
      res,
      200,
      "settings fetched successfully",
      getProfile.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Get settings failed");
  }
};

// Update by id
export const editProfById = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      currency,
      language,
      dark_mode,
      compact_view,
      animations,
      budget_alerts,
      weekly_summary,
      goal_milestone,
      large_transaction,
    } = req.body;
    const id = parseInt(req.params.id);
    console.log(id);

    const idExists = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Setting not found");
    }
    const editProf = await pool.query(
      `UPDATE users SET first_name = COALESCE($1, first_name), last_name = COALESCE($2, last_name),
      email = COALESCE($3, email), currency = COALESCE($4, currency), language = COALESCE($5, language),
      dark_mode = COALESCE($6, dark_mode), compact_view = COALESCE($7, compact_view),
       animations = COALESCE($8, animations), budget_alerts = COALESCE($9, budget_alerts),
       weekly_summary = COALESCE($10, weekly_summary), goal_milestone = COALESCE($11, goal_milestone),
       large_transactions = COALESCE($12, large_transactions) WHERE id = $13  RETURNING *`,
      [
        first_name,
        last_name,
        email,
        currency,
        language,
        dark_mode,
        compact_view,
        animations,
        budget_alerts,
        weekly_summary,
        goal_milestone,
        large_transaction,
        id,
      ],
    );

    return successResponse(
      res,
      200,
      "Settings gotten successfully",
      editProf.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Edit settings failed");
  }
};
