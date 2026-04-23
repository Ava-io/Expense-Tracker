import { pool } from "../Config/db.js";
import { errorResponse, successResponse } from "../Utils/responseHandler.js";

// CREATE
export const createGoalService = async (req, res) => {
  try {
    const { goal_name, target_amount, saved_sofar, deadline } = req.body;
    if (!goal_name || !target_amount || !saved_sofar || !deadline) {
      return errorResponse(res, 400, "All fields are required");
    }

    const goalExists = await pool.query(
      "SELECT * FROM goals WHERE goal_name = $1 ",
      [goal_name],
    );

    console.log(goalExists);

    if (goalExists.rows.length > 0) {
      return errorResponse(res, 400, "Goal already exists");
    }

    const createGoalQuery = `
    INSERT INTO goals(goal_name, target_amount,  saved_sofar, deadline)
    VALUES($1, $2, $3, $4)
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
    console.log(error);
    return errorResponse(res, 500, "Create Goal Failed");
  }
};

// GET
export const getGoals = async (req, res) => {
  try {
    const getGoals = await pool.query(`SELECT * FROM goals`);
    console.log(getGoals);
    return successResponse(
      res,
      200,
      "Goals gotten successfully",
      getGoals.rows,
    );
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Get Goals Failed");
  }
};
// GET BY ID
export const getGoal = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const idExists = await pool.query("SELECT * FROM goals WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Goal not found");
    }

    const getGoal = await pool.query(`SELECT * FROM goals WHERE id = $1`, [id]);
    console.log(getGoal);

    return successResponse(res, 200, "Goal fetched successfully", getGoal.rows);
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, "Fetch Goal Failed");
  }
};

// UPDATE OR EDIT

export const editGoal = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);

    const { goal_name, target_amount, saved_sofar, deadline } = req.body;

    const idExists = await pool.query("SELECT * FROM goals WHERE id = $1", [
      id,
    ]);
    console.log(idExists);

    if (idExists.rows.length === 0) {
      return errorResponse(res, 400, "Goal not found");
    }
    const editGoal = await pool.query(
      `
      UPDATE goals SET goal_name = COALESCE($1, goal_name), target_amount = COALESCE($2, target_amount), 
      saved_sofar = COALESCE ($3, saved_sofar), deadline = COALESCE($4, deadline)
      WHERE id = $5
      RETURNING *   
        `,
      [goal_name, target_amount, saved_sofar, deadline, id],
    );
    console.log(editGoal);

    return successResponse(res, 200, "Goal edited successfully", editGoal.rows);
  } catch (error) {
    console.log(error);
    return errorResponse(res, 400, "Edit goal failed");
  }
};

// Delete by id
export const delGoal = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const delGoal = await pool.query(`DELETE FROM goals WHERE id = $1`, [id]);
    console.log(delGoal);

    const idExists = await pool.query(`DELETE FROM goals WHERE id = $1`, [id]);
    console.log(idExists);

    if (!idExists.rows.length === 0) {
      return errorResponse(res, 404, "Goal not found");
    }

    return successResponse(res, 200, "Goal deleted successfully");
  } catch (error) {}
};
