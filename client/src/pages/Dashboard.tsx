

import NavbarComponent from "../components/Navbar/NavbarComponent";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";
import PieChartCom from "../components/pieChart";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { MdArrowDownward, MdArrowRightAlt, MdArrowUpward, MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import Modal from "../shared/Modal";

// import { useEffect, useState } from "react";

interface DashboardProps {
  title: string;
  amount: string;
  data: string;
  color: string;
  bgGradientColor: string;
}


interface modalCategory {
  thumbnail: string;
  category: string;
}

const Dashboard = ({ isAnimationActive = true }) => {
  const [transactionModal, setTransactionModal] = useState(false);


  const Flex1: modalCategory[] = [
    {
      thumbnail: "🍔",
      category: "Food",
    },
    {
      thumbnail: "🚗",
      category: "Transport",
    },
    {
      thumbnail: "🏠",
      category: "Housing",
    },
    {
      thumbnail: "💊",
      category: "Health",
    },
    {
      thumbnail: "🎮",
      category: "Fun",
    },
    {
      thumbnail: "🛍️",
      category: "Shopping",
    },
    {
      thumbnail: "📚",
      category: "Education",
    },
    {
      thumbnail: "💡",
      category: "Utilities",
    },
    {
      thumbnail: "💵",
      category: "Salary",
    },
    {
      thumbnail: "💻",
      category: "Freelance",
    },
    {
      thumbnail: "📈",
      category: "Business",
    },
    {
      thumbnail: "🎁",
      category: "Gift",
    },
    {
      thumbnail: "💰",
      category: "Savings",
    },
    {
      thumbnail: "⌾",
      category: "Others",
    },
  ];

  const Flex: DashboardProps[] = [
    {
      title: "NET BALANCE",
      amount: "#0",
      data: "No data",
      color: "text-[#8779D2]",
      bgGradientColor:
        "bg-gradient-to-tr from-[#131218] via-secondary  to-[#1B1929]",
    },
    {
      title: "TOTAL INCOME",
      amount: "#0",
      data: "0 entries",
      color: "text-[#1FC593]",
      bgGradientColor:
        "bg-gradient-to-tr  from-[#131218] via-[#131218] to-[#162023]",
    },
    {
      title: "TOTAL EXPENSES",
      amount: "#0",
      data: "0 entries",
      color: "text-[#CB5168]",
      bgGradientColor:
        "bg-gradient-to-tr from-[#131218] via-secondary  to-[#231720]",
    },
    {
      title: "SAVINGS RATE",
      amount: "0%",
      data: "of income",
      color: "text-[#CA8632]",
      bgGradientColor:
        "bg-gradient-to-tr from-[#131218] via-secondary to-[#231C1C]",
    },
  ];

  // bar chart
  const data = [
    { name: "Jan", income: "2750", expense: "2250" },
    { name: "Feb", income: "3600", expense: "3000" },
    { name: "Mar", income: "2400", expense: "2750" },
    { name: "Apr", income: "4400", expense: "3750" },
    { name: "May", income: "3250", expense: "2900" },
    { name: "Jun", income: "500", expense: "400" },
  ];

  const navigate = useNavigate();

  return (
    <div className=" gap-4 ">
      {/* Nav bar component */}
      <NavbarComponent
        pathTitle="Dashboard"
        showDash={true}
        showPage={false}
        showExport={false}
        label="Add Transaction"
        label2=""
        buttonClick={()=>setTransactionModal(true)}
      />

      <Modal isOpen={transactionModal}>
        <div className="p-6 bg-[#131319] rounded-lg border border-white/5">
          <div className="justify-between flex">
            <div>
              <h1 className="text-white">New Transaction</h1>
            </div>

            <div>
              <Button
                className="border border-white/5 rounded-lg p-4 bg-[#1A1B22]"
                onClick={() => setTransactionModal(true)}
              >
                <MdOutlineCancel className="text-[14px] text-white" />
              </Button>
            </div>
          </div>

          <div className="border border-white/5 p-1 grid grid-cols-2 gap-2 rounded-lg bg-[#131319] mt-2 ">
            <div className="  hover:bg-[#31212B] group flex gap-1 items-center justify-center  rounded-lg col-span-1 p-2  ">
              <div className="  text-[#8779D2]  group-hover:text-[#7C3B4B]">
                <MdArrowDownward />
              </div>{" "}
              <h1 className="text-[#8779D2] text-[12px] group-hover:text-[#7C3B4B] ">
                Expense
              </h1>
            </div>

            <div className="  hover:bg-[#1F2E2F] group flex gap-1 items-center justify-center  rounded-lg col-span-1 p-2  ">
              <div className="  text-[#8779D2]  group-hover:text-[#2A6D5B]">
                <MdArrowUpward />
              </div>{" "}
              <h1 className="text-[#8779D2] text-[12px] group-hover:text-[#2A6D5B] ">
                Income
              </h1>
            </div>
          </div>

          <div className="gap-2 mt-3">
            <form className="mt-2 w-full grid grid-cols-2 gap-2">
              <div className="col-span-2 w-full">
                <label className="text-[#8779D2] text-[10px]">AMOUNT</label>

                <input
                  type="number"
                  placeholder="0.00"
                  className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                />
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-[#8779D2] text-[10px] ">
                      DESCRIPTION
                    </label>
                    <input
                      type="text"
                      placeholder="What was this for?"
                      className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="text-[#8779D2] text-[10px]">DATE</label>
                    <input
                      type="date"
                      placeholder="22/05/2026"
                      className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="text-[#8779D2] text-[10px]">
                      NOTE(OPTIONAL)
                    </label>

                    <input
                      type="text"
                      placeholder="Extra details..."
                      className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <label className="text-[#8779D2] text-[10px]">CATEGORY</label>
                <div className="grid grid-cols-4 gap-2">
                  {Flex1.map((item) => (
                    <div className="border hover:border-[#8779D2] hover:bg-[#211F38] group w-full p-3 rounded-md  flex flex-col border-white/5 bg-[#212127] items-center">
                      <div>
                        <span>{item.thumbnail}</span>
                      </div>
                      <div className="">
                        <h1 className="text-[#8779D2] text-[10px] group-hover:text-white ">
                          {item.category}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>

            <div className="col-span-2 ">
              <div className="grid grid-cols-2 mt-1 gap-4 ">
                <div className="col-span-1">
                  <Button
                    className="border border-white/5 w-full  rounded-lg bg-[#212127] p-4 space-y-2"
                    onClick={() => setTransactionModal(false)}
                  >
                    <h1 className="text-[#8779D2]">Cancel</h1>
                  </Button>
                </div>

                <div className="col-span-1">
                  <Button className="border w-full border-white/5 rounded-lg bg-[#8779D2] p-4 space-y-2">
                    Add Transaction
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="w-full grid gap-4 p-7.5 ">
        {/* section 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {Flex.map((item) => (
            <div
              className={`border w-full p-3 rounded-lg ${item.bgGradientColor}  flex flex-col border-white/5`}
            >
              <div className="flex flex-col  p-2 gap-2 text-white">
                <div className="flex items-center gap-1">
                  <div className={`size-2 rounded-full `} />
                  <h1 className="text-[10px] text-[#8779D2] font-syne">
                    {item.title}
                  </h1>
                </div>
                <span
                  className={`"text-[#8779D2] font-bold text-[24px] font-syne ${item.color}`}
                >
                  {item.amount}
                </span>
                <div className="text-[10.5px] font-sans">
                  <span className="border border-white/5 rounded-lg p-1 bg-[#272636] text-[#8779D2]">
                    {item.data}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* section 2 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Bar chart */}

          <div className="w-full col-span-1  md:col-span-4 border bg-[#131218]  text-white border-white/5  rounded-lg gap-2 px-[10px] flex-1 flex flex-col ">
            <div className="">
              <h1 className="text-[14.5px] font-sans"> Income vs Expenses</h1>
              <span className="text-[11px] text-[#8779D2]">
                6-months overview
              </span>
            </div>

            <div className=" w-full relative ">
              <BarChart
                style={{
                  width: "100%",
                  // maxWidth: "1000px",
                  maxHeight: "30vh",
                  aspectRatio: 1.618,
                }}
                responsive
                data={data}
              >
                <CartesianGrid
                  stroke="#e5e7eb"
                  strokeWidth={0.2}
                  strokeOpacity={0.3}
                  vertical={true}
                />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#131218",
                    border: "none",
                    borderRadius: "8px",
                    padding: "6px 10px 0px",
                  }}
                  cursor={false}
                />
                <Legend
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ paddingBottom: "20px", fontSize: "11px" }}
                />
                <Bar
                  dataKey="income"
                  fill="#2C9675"
                  isAnimationActive={isAnimationActive}
                  radius={[10, 10, 0, 0]}
                  animationDuration={800}
                  animationEasing={"ease-out"}
                />
                <Bar
                  dataKey="expense"
                  fill="#5A4EAF"
                  radius={[10, 10, 0, 0]}
                  isAnimationActive={isAnimationActive}
                  animationDuration={800}
                  animationEasing={"ease-out"}
                />
              </BarChart>
            </div>
          </div>

          {/* PIE CHART */}

          <div className="p-6  col-span-1 border border-white/4 rounded-lg w-full bg-secondary">
            <h1 className="text-white text-[17px] font-bold"> By Category</h1>
            <span className="text-[#8779D2] text-[12px]">
              Expense Breakdown
            </span>
            <PieChartCom />
          </div>
        </div>

        {/* section 3 */}
        <div className="p-6 bg-secondary border border-white/5 rounded-lg">
          <div className="justify-between flex">
            <div className="flex flex-col ">
              <h1 className="text-white text-[17px]">Recent Transactions</h1>
              <span className="text-[#8779D2] text-[10px]">
                0 total transactions
              </span>
            </div>

            <div className="gap-1">
              <Button
                className="border-white/5 items-center rounded-lg border text-[#8779D2]"
                onClick={() => navigate("/transactions")}
              >
                <h1 className="text-[#8779D2]">View all</h1>
                <MdArrowRightAlt className="text-[15px] text-[#8779D2]" />
              </Button>
            </div>
          </div>
          <div className="items-center justify-center align-center flex min-h-[250px] h-full flex-col">
            <h1 className="text-[#8779D2] text-[12px]">No transactions yet </h1>
            <span className="text-[#8779D2] text-[12px]">
              Add your first one to get started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
