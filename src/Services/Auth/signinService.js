import { pool } from "../../Config/db.js";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../../Utils/generateToken.js";
import { errorResponse, successResponse } from "../../Utils/responseHandler.js";


const SigninService = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        // to check if fields have been filled
        if (!email || !password) {
          return  errorResponse(res, 400, "All fields are required");
        }

        // to check if the credentials are valid
        const userExists = await pool.query(
            "SELECT * FROM users WHERE email = $1" [email]
        );

        console.log("Check response",userExists)
        if (userExists.rows.length === 0) {
           return errorResponse(res, 400, "Invalid credentials");
        }

        // to save the response from pg as a variable
        const user = userExists.rows[0];
        console.log(user);

        // to check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        console.table([user.email, user.password, password]);
        console.log("check pg response", userExists);

        // bcrypt compare is to compare the users password to the hashed password from bcrypt
        console.log("is match", isMatch);

        if (!isMatch) {
           return errorResponse(res, 400, "Invalid credentials");
        }


        const token = generateJwtToken(user.id);
        return successResponse(res, 500, "Login Successful", token, userExists.rows);

    } catch (error) {
        console.log(error);
        return errorResponse(res, 500, "Signin Failed");
    }

}

export default SigninService;