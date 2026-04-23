import { initDb } from "../Config/db.js";
import { pool } from "../Config/db.js";

const migrationStarted = async () => {
  console.log("migrationStarted");
  await initDb();
  await pool.end();

  console.log("migrationEnded");
};

migrationStarted();
