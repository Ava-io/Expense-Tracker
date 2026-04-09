import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/Routes/Auth/Auth.js";
import budgetRoutes from "./src/Routes/User/budget.js";
import goalRoutes from "./src/Routes/User/goals.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/budget", budgetRoutes);
app.use("/goal", goalRoutes);
// app.use("/user", user)

app.listen(port, () => {
  console.log(`My server is running at https://localhost:${port}`);
});
