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

const App = () => {
  return (
    <div className="bg-gray-400 font-sans">
      <Routes>
        <Route>
          {/* <Route path="/" element={<SigninComponents />} /> 
          <Route path="/" element={<LoginComponents />} />  */}

          <Route element={<DashboardLayout /> }>
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

