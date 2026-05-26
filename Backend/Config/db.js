import dotenv from "dotenv";
import pg from "pg";
import { createBudgetTable } from "../Model/createBudgetTable.js";
import { createTransactionTable } from "../Model/createTransactionTable.js";
import { createGoalTable } from "../Model/createGoalTable.js";
import { createUsersTable } from "../Model/createUsersTable.js";
import { createCategoryTable } from "../Model/createCategoryTable.js";
import {
  addSubCategory,
  addSubCategoryColumn,
  // removeCategoryColumn,
  // addCategoryColumn,
  // addTransactionCategoryColumn,
  // removeSubCategoryColumn,
  // removeTransactionCategoryColumn,
} from "../Model/createAltertable.js";
import { createSubCategoryTable } from "../Model/createSubCategoryTable.js";

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

    await client.query(createSubCategoryTable);
    console.log("sub_category table created successfully");

    // await client.query(removeCategoryColumn);
    // console.log("category removed successfully");

    // await client.query(addCategoryColumn);
    // console.log("category added successfully");

    // await client.query(addTransactionCategoryColumn);
    // console.log("transaction category removed sucessfully");

    // await client.query(removeTransactionCategoryColumn);
    // console.log("transaction category table removed successfully");

    // await client.query(removeSubCategoryColumn);
    // console.log("catgeory_id removed successfully");

    await client.query(addSubCategoryColumn);
    console.log("category_id added successfully");

    await client.query(addSubCategory);
    console.log("sub_category added successfully");

    // console.log("catge");
  } catch (error) {
    console.log(error, "Database not connected");
  }
};
