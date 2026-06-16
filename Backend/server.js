import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/Auth/Auth.js";
import budgetRoutes from "./Routes/User/budget.js";
import goalRoutes from "./Routes/User/goals.js";
import transRoutes from "./Routes/User/transaction.js";
import catRoutes from "./Routes/User/category.js";
import statsRoutes from "./Start/Route/startRoute.js";
import subCatRoutes from "./Routes/User/subCategory.js";
// import setRoutes from "./Routes/User/settings.js";
import profRoutes from "./Routes/User/profile.js";
// import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/budget", budgetRoutes);
app.use("/api/v1/goal", goalRoutes);
app.use("/api/v1/transaction", transRoutes);
app.use("/api/v1/category", catRoutes);
app.use("/api/v1/stats", statsRoutes);
app.use("/api/v1/subCat", subCatRoutes);
app.use("/api/v1/profile", profRoutes);

// to configure or specify urls that can have access to this backend
const allowedOrigins = [
  "https://expense-tracker-theta-three-18.vercel.app",
  " http://localhost:5173",
];
// app.use(
//   cors({
//     origin: allowedOrigins,
//     methods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Authorization", "Content-Type"],
//   }),
// );
// app.use("/settings", setRoutes);
// app.use("/user", user)

app.post("/test",(req,res)=>{
  res.status(200).json({
    message:"working!!!"
  })
})

app.listen(port, () => {
  console.log(`My server is running at https://localhost:${port}`);
});
