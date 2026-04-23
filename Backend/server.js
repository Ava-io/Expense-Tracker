import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/Auth/Auth.js";
import budgetRoutes from "./Routes/User/budget.js";
import goalRoutes from "./Routes/User/goals.js";
import transRoutes from "./Routes/User/transaction.js";
import catRoutes from "./Routes/User/category.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());


app.use("/auth", authRoutes);
app.use("/budget", budgetRoutes);
app.use("/goal", goalRoutes);
app.use("/transaction", transRoutes);
app.use("/category", catRoutes);
// app.use("/user", user)

app.listen(port, () => {
  console.log(`My server is running at https://localhost:${port}`);
});
