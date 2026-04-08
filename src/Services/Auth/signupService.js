import { pool } from "../../Config/db.js";
import { generatePassword } from "../../Utils/generatePassword.js";
import { errorResponse, successResponse } from "../../Utils/responseHandler.js";
import bcrypt from "bcrypt";

const SignupService = async (req, res) => {
  const client = await pool.connect();

  try {
    console.log(req.body);

    const { first_name, last_name, email, phone_number } = req.body;

    if (!first_name || !last_name || !email || !phone_number) {
      return errorResponse(res, 400, "All fields are required");
    }

    // to avoid duplicate email from signing up
    const emailExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );

    if (emailExists.rows.length != 0) {
      console.log(emailExists);
      return errorResponse(res, 400, "Email already exists");
    }

    // await client.query("BEGIN");

    const password = generatePassword("users");
    const role = "users";
    console.log("this is userpassword", password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating user query
    const createUserQuery = `
    INSERT INTO users(first_name, last_name, email, phone_number, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;

    console.log(email);

    const userResult = await pool.query(createUserQuery, [
      first_name,
      last_name,
      email,
      phone_number,
      hashedPassword,
    ]);

    const user = userResult.rows[0];
    console.log(user);

    await client.query("COMMIT");
    return successResponse(res, 201, "Signup successful", userResult.rows);
  } catch (error) {
    await client.query("ROLLBACK");
    console.log(error);
    errorResponse(res, 500, "Signup Failed");
  }
};

export default SignupService;
