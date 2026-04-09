import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

// create goal endpoint
export const createGoalService = async (req, res) => {
  try {
    const { goal_name, target_amount, saved_sofar, deadline } = req.body;

    if (!goal_name || !target_amount || !saved_sofar || !deadline) {
      return errorResponse(res, 400, "All fields are required");
    }

    const goalExists = await pool.query(
      "SELECT * FROM goals WHERE goal_name = $1",
      [goal_name],
    );
    console.log(goalExists);

    if (goalExists.rows.length > 0) {
      return errorResponse(res, 400, "Goal already exists");
    }

    const createGoalQuery = `
    INSERT INTO goals(goal_name, target_amount, saved_sofar, deadline)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;

    const goalResult = await pool.query(createGoalQuery, [
      goal_name,
      target_amount,
      saved_sofar,
      deadline,
    ]);
    console.log(goalResult);

    const goals = goalResult.rows[0];
    console.log(goals);

    return successResponse(
      res,
      201,
      "Goal created successfully",
      goalResult.rows,
    );
  } catch (error) {
    return errorResponse(res, 500, "Failed to create goal");
  }
};

// get all goals endpoint
export const getGoals = async (req, res) => {
  try {
    const getGoals = await pool.query(`SELECT * FROM goals`);
    console.log(getGoals.rows);

    return successResponse(
      res,
      200,
      "All goals gotten successfully",
      getGoals.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Get goals failed");
  }
};

// get goal by id
export const getGoalById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const getGoal = await pool.query(`SELECT * FROM goals WHERE id =$1`, [id]);
    console.log(getGoal);

    const idExists = await pool.query("SELECT * FROM goals WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Goal not found");
    }

    return successResponse(res, 200, "Goal fetched successfully", getGoal.rows);
  } catch (error) {
    return errorResponse(res, 400, "Get goal failed");
  }
};

// edit goal by id
export const editGoalById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);

    console.log(req.body);
    const { goal_name, target_amount, saved_sofar, deadline } = req.body;

    const editGoal = await pool.query(
      `UPDATE goals
            SET goal_name = COALESCE($1, goal_name), target_amount = COALESCE($2, target_amount), 
            saved_sofar = COALESCE($3, saved_sofar), deadline = COALESCE($4, deadline)
            WHERE id = $5
            RETURNING *`,
      [goal_name, target_amount, saved_sofar, deadline, id],
    );

    const idExists = await pool.query("SELECT * FROM goals WHERE id = $1", [
      id,
    ]);

    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Goal not found");
    }

    return successResponse(res, 200, "Goal edited successfully", editGoal.rows);
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Edit Goal Failed");
  }
};

// delete goal by id
export const delGoalById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { goal_name, target_amount, saved_sofar, deadline } = req.body;
    if (!goal_name || !target_amount || !saved_sofar || !deadline) {
      return errorResponse(res, 400, "All fields are required");
    }

    const deleteGoal = await pool.query(`DELETE FROM goals WHERE id = $1`, [
      id,
    ]);

    console.log(deleteGoal);

    const idExists = await pool.query("SELECT * FROM goals WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 404, "Goal not found");
    }

    return successResponse(res, 200, "Goal deleted successfully");
  } catch (error) {}
};
