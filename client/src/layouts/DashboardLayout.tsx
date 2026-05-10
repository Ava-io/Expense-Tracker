import Sidebar from "../shared/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import NavbarComponent from "../components/Navbar/NavbarComponent";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  console.log("Current Pathname:", pathname);

  const routeTitles: Record<string, string> = {
    "/": "Dashboard",
    "/dashboard/transactions": "Transaction",
    "/dashboard/analytics": "Analytics",
    "/dashboard/budgets": "Budgets",
    "/dashboard/goals": "Goals",
    "/dashboard/settings": "Settings",
  };

  const pathTitle = routeTitles[pathname];
  return (
    <div className="flex bg-[#0B0A11] ">
      <div className="md:flex hidden">
        <Sidebar />
      </div>
      <div className="flex-1 ">
       

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
