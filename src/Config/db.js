import dotenv from "dotenv";
import pg from "pg";
import { createBudgetTable } from "../Model/createBudgetTable.js";
import { createTransactionTable } from "../Model/createTransactionTable.js";
import { createGoalTable } from "../Model/createGoalTable.js";
import { createUsersTable } from "../Model/createUsersTable.js";
import { createCategoryTable } from "../Model/createCategoryTable.js";

dotenv.config();

console.log(process.env.DB_PORT);

export const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export const initDb = async () => {
  try {
    const client = await pool.connect();

    // create tables
    await client.query(createBudgetTable);
    console.log("budget table created successfully");

    await client.query(createGoalTable);
    console.log("goal table created successfully");

    await client.query(createTransactionTable);
    console.log("transaction created successfully");

    await client.query(createUsersTable);
    console.log("users created successfully");

    await client.query(createCategoryTable);
    console.log("categories created successfully");

    
  } catch (error) {
    console.log(error, "Database not connected");
  }
};
