import { Route, Routes } from "react-router-dom";
import Transaction from "./pages/Transaction";
import Analytics from "./pages/Analytics";
import Budget from "./pages/Budget";
import Category from "./pages/Category";
import Goals from "./pages/Goals";
import SigninComponents from "./components/Signin/SigninComponents";
import LoginComponents from "./components/Login/LoginComponents";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./components/Login/ForgotPassword";
import Otp from "./components/Login/Otp";
import SetPassword from "./components/Login/SetPassword";

const App = () => {
  // const [theme, setTheme] = useState(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   return savedTheme || "light";
  // });
  // useEffect(() => {
  //   const root = window.document.documentElement;

  //   if (theme === "dark") {
  //     root.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     root.classList.remove("dark");
  //     root.classList.add("light");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [theme]);

  // const setDark = () => {
  //   localStorage.setItem("theme", "dark");
  //   setTheme("dark");
  // };
  // const setLight = () => {
  //   localStorage.setItem("theme", "light");
  //   setTheme("light");
  // };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // One single toggle function instead of two
  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  // };

  return (
    <div className="bg-gray-400 font-sans">
      <Toaster position="top-right" />
      {/* <button className=" text-amber-300" onClick={toggleTheme}>
        dark test
      </button>
      <button className=" text-amber-300" onClick={toggleTheme}>
        light test
      </button> */}
      <Routes>
        <Route>
          <Route path="/signup" element={<SigninComponents />} />
          <Route path="/login" element={<LoginComponents />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="setpassword" element={<SetPassword />} />

          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/category" element={<Category />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
