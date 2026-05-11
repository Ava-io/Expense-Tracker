// import NavbarComponent from "../components/Navbar/NavbarComponent";

// import { RechartsDevtools } from "@recharts/devtools";

import NavbarComponent from "../components/Navbar/NavbarComponent";

// const Analytics = (isAnimationActive = true, defaultIndex = undefined) => {

//   // Area Chart
//   const data = [
//     { name: "Jan", uv: "#2250" },
//     { name: "Feb", uv: "#3000" },
//     { name: "Mar", uv: "#2750" },
//     { name: "Apr", uv: "#3750" },
//     { name: "May", uv: "2900" },
//     { name: "Jun", uv: "4000" },
//   ];
//   return (
//     <div>
//       <NavbarComponent
//         pathTitle="Analytics"
//         showDash={false}
//         showExport={false}
//         showPage={false}
//         label=""
//         label2=""
//       />
//       {/* Interface or Array */}
//       <div className="flex gap-3 p-6 items-start">
// //         {Flex.map((item) => (
// <div className="border w-full px-4 py-5 rounded-lg flex flex-col border-white/5 bg-[#131218] ">
//   <div className="flex flex-col  gap-2 text-white">
//     <h1 className="text-[15px] text-white font-bold">{item.title}</h1>
//   </div>

//   <span className={` text-[24px] font-bold p-2 ${item.color}`}>
//     {item.amount}
//   </span>

//   <span className="text-[13px] text-[#8779D2]">{item.desription}</span>
// </div>;
// //         ))}
//       </div>

//       {/* second layer */}
//       <div className="mt-2 flex flex-col md:flex-row gap-2">
//         <div className="border border-white/5 rounded-lg gap-2 px-[10px] flex-1 flex flex-col w-1/2">
//           <div className="border border-white rounded-lg">
//             <div className="p-2 ">
//               <h1 className="text-[14.5px] font-sans"> Monthly Spend Trend</h1>
//               <span className="text-[11px] text-[#8779D2]">
//                 Expenses over time
//               </span>
//             </div>

// <div style={{ width: "50%", height: "400px" }}>
//   <ResponsiveContainer width="100%" height="100%">
//     <AreaChart
//       data={data}
//       margin={{
//         top: 20,
//         right: 0,
//         left: 0,
//         bottom: 0,
//       }}
//       onContextMenu={(_, e) => e.preventDefault()}
//     >
//       <CartesianGrid strokeDasharray="3 3" />

//       <XAxis dataKey="name" />

//       <YAxis width="auto" />

//       <Tooltip />

//       <Area
//         type="monotone"
//         dataKey="uv"
//         stroke="#8884d8"
//         fill="#8884d8"
//       />
//     </AreaChart>
//   </ResponsiveContainer>
// </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Analytics {
  title: string;
  amount: string;
  desription: string;
  color?: string;
}

const Analytics = () => {
  // Area Chart
  const data = [
    { name: "Jan", uv: "2250" },
    { name: "Feb", uv: "1000" },
    { name: "Mar", uv: "3750" },
    { name: "Apr", uv: "5750" },
    { name: "May", uv: "2900" },
    { name: "Jun", uv: "6000" },
  ];

  // Stacked Area Chart
  const stackedData = [
    { title: "Jan", uv: "2250", amount: "3000" },
    { title: "Feb", uv: "1000", amount: "2104" },
    { title: "Mar", uv: "3750", amount: "500" },
    { title: "Apr", uv: "5750", amount: "8000" },
    { title: "May", uv: "2900", amount: "5000" },
    { title: "Jun", uv: "6000", amount: "8400" },
  ];
  const Flex: Analytics[] = [
    {
      title: "Total Expenses",
      amount: "#0",
      desription: "All time recorded",
      color: "text-[#C55368]",
    },
    {
      title: "Biggest Single Expense",
      amount: "#0",
      desription: "No data",
      color: "text-[#EDA141]",
    },
    {
      title: "Top Spending Category",
      amount: "-",
      desription: "No expenses yet",
      color: "text-white",
    },
  ];
  return (
    <div className="gap-4">
      <NavbarComponent pathTitle="Analytics" />

      <div className="w-full grid gap-4 p-[30px]">
        {/* section 1 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {Flex.map((item) => (
            <div className="border w-full px-4 py-5 rounded-lg flex flex-col border-white/5 bg-[#131218]">
              <div className="flex flex-col  gap-2 text-white">
                <h1 className="text-[15px] text-white font-bold">
                  {item.title}
                </h1>
              </div>
              <span className={` text-[24px] font-bold p-2 ${item.color}`}>
                {item.amount}
              </span>

              <span className="text-[13px] text-[#8779D2]">
                {item.desription}
              </span>
            </div>
          ))}
        </div>

        {/* section 2 */}
        <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-4">
          {/* Area Chart Div */}
          <div className="w-full col-span-1 md:col-span-1 border bg-secondary text-white border-white/5 rounded-lg gap-2 px-[10px] flex-1 flex-col">
            {/* Text Above */}
            <div>
              <h1 className="text-[14.5px] font-bold font-sans">
                {" "}
                Monthly Spend Trend
              </h1>
              <span className="text-[11px] text-[#8779D2]">
                Expenses over time
              </span>
            </div>

            {/* Area chart */}
            <div style={{ width: "100%", height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  onContextMenu={(_, e) => e.preventDefault()}
                >
                  <CartesianGrid strokeDasharray="0 0" stroke="#ffffff0d" />

                  <XAxis dataKey="name" />

                  <YAxis width="auto" />

                  <Tooltip />

                  <Area
                    type="monotone"
                    strokeWidth={4}
                    dataKey="uv"
                    stroke="#D3576F"
                    fill="#291A23"
                    fillOpacity={0.4}
                    isAnimationActive={true}
                    animationDuration={2000}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Spending Category */}
          <div>
            {/* Text above */}
            <div className="border p-2 border-white/5 rounded-lg bg-secondary min-h-[350px] h-full">
              <h1 className="text-[14.5px] font-sans font-bold text-white">
                Spending by Category
              </h1>
              <span className="text-[11px]  text-[#8779D2]">
                Where money goes
              </span>

              <div className="text-center justify-center flex align-center">
                <h1 className="text-[#8779D2] text-[12px]">
                  No expense data yet
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div>
          <div className="border p-2 border-white/5 rounded-lg bg-secondary min-h-[300px] h-full">
            {/* Text above Stacked Area chart */}
            <div className="flex flex-col gap-1">
              <h1 className="text-[14.5px] font-sans font-bold text-white">
                Income vs Expense History
              </h1>
              <span className="text-[11px] text-[#8779D2]">
                Full comparison
              </span>
            </div>

            {/* Stacked Area chart */}
            <div className="w-full min-h-[80px] h-full">
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                  responsive
                  data={stackedData}
                  margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="0 0" stroke="#ffffff0d" />
                  <XAxis dataKey="title" niceTicks="snap125" />
                  <YAxis width="auto" niceTicks="snap125" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#6867C9"
                    strokeWidth={4}
                    fill="#222F3A"
                  />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stackId="1"
                    stroke="#297860"
                    strokeWidth={4}
                    fill="#182526"
                  />
                  {/* <RechartsDevtools /> */}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
