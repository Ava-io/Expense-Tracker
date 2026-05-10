import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaArrowsUpDown } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GrTarget } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { useState } from "react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";

interface SidebarRoute {
  name: string;
  path: string;
  icon: ReactElement;
  cat?: string;
  number?: string;
}
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string>("Dashboard");

  const User: SidebarRoute[] = [
    {
      name: "Dashboard",
      path: "/",
      icon: <RiDashboardHorizontalLine />,
      cat: "Overview",
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <FaArrowsUpDown />,
      number: "0",
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <IoAnalyticsSharp />,
      cat: "Insights",
    },
    { name: "Budgets", path: "/budget", icon: <GiMoneyStack /> },
    { name: "Goals", path: "/goals", icon: <GrTarget /> },
    {
      name: "Settings",
      path: "/settings",
      icon: <IoSettings />,
      cat: "Settings",
    },
  ];

  const shouldCollapse = !isCollapsed;
  return (
    <div
      className={`h-screen text-[13px] font-sans ${shouldCollapse === true ? "w-[60px] px-2" : "w-60"} gap-2 bg-[#131218] flex flex-col p-2 `}
      onMouseEnter={() => setIsCollapsed(true)}
      onMouseLeave={() => setIsCollapsed(false)}
    >
      <div className="w-full flex flex-col gap-2 items-start">
        <div className="flex gap-2 mt-8 items-center">
          <div
            className={`text-[#24203a]   bg-[#b37ffb] border border-none rounded-sm ${shouldCollapse === true ? "hidden" : "blocked"}`}
          >
            <PiCurrencyCircleDollarLight />{" "}
          </div>
          <h1
            className={` text-xl text-center font-bold text-white  ${shouldCollapse == true ? "hidden" : "blocked"}`}
          >
            SPENDLY
          </h1>
        </div>
        <div className=" w-full pt-5">
          {User.map((item, index) => (
            <div key={index}>
              <h1
                className={` text-[#403e50] font-normal p-1 ${shouldCollapse == true ? "hidden" : "blocked"} `}
              >
                {item.cat}
              </h1>
              <Link to={item.path} className="w-full">
                <div
                  className={`w-full py-2 pr-2 relative group ${activeRoute == item.name ? "bg-[#24203a] text-[#9987e2] rounded-lg " : " "} flex  gap-3 hover:bg-[#24203a]/50 mb-0.1 rounded-lg`}
                  onClick={() => setActiveRoute(item.name)}
                >
                  <div
                    className={`${activeRoute == item.name ? "border-l-[#9987e2] border-l-4 rounded-r-lg" : ""} `}
                  />

                  <div
                    className={`  flex justify-between w-full gap-2 items-center  ${activeRoute == item.name ? "text-[#9987e2]" : "text-white"} `}
                  >
                    <span className="flex items-center gap-2">
                      <div
                        className={` text-[#9987e2]  group-hover:text-white  ${shouldCollapse == true ? "flex items-center text-md " : " "}`}
                      >
                        {item.icon}
                      </div>
                      <h1
                        className={` text-[#9987e2] group-hover:text-white ${shouldCollapse == true ? "hidden" : "block"}`}
                      >
                        {" "}
                        {item.name}
                      </h1>
                    </span>
                    {item.number && (
                      <span
                        className={`size-5 flex items-center justify-center  rounded-full bg-purple-600 ${shouldCollapse == true ? "hidden" : "block"} `}
                      >
                        {item.number}{" "}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <hr className="text-white/8 px-3 mt-[480px]" />
      <div className={`flex gap-2 ${shouldCollapse == true ? "hidden" : " "}`}>
        <div className="size-10 bg-gradient-to-b from-purple-500 to-green-200  flex items-center justify-center rounded-full">
          <span className=" text-white text-[13px] ">AO</span>
        </div>
        <div className="flex flex-col text-white">
          <h2>Adaeze Obi</h2>
          <span>adaeze@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
