import NavbarComponent from "../components/Navbar/NavbarComponent";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

interface AnalyticsProps {
  title: string;
  amount: string;
  desription: string;
  color?: string;
}

const Analytics = (isAnimationActive = true, defaultIndex = undefined) => {
  const Flex: AnalyticsProps[] = [
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


  // Area Chart
  const data = [
    
  ]
  return (
    <div>
      <NavbarComponent
        pathTitle="Analytics"
        showDash={false}
        showExport={false}
        showPage={false}
        label=""
        label2=""
      />
      {/* Interface or Array */}
      <div className="flex gap-3 p-6 items-start">
        {Flex.map((item) => (
          <div className="border w-full px-4 py-5 rounded-lg flex flex-col border-white/5 bg-[#131218] ">
            <div className="flex flex-col  gap-2 text-white">
              <h1 className="text-[15px] text-white font-bold">{item.title}</h1>
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

      {/* second layer */}
      <div className="mt-2 flex flex-col md:flex-row gap-2">
        <div className="border border-white/5 rounded-lg gap-2 px-[10px] flex-1 flex flex-col">
          <div>
            <h1 className="text-[14.5px] font-sans"> Monthly Spend Trend</h1>
            <span className="text-[11px] text-[#8779D2]">
              Expenses over time
            </span>
          </div>

          <div className="">
            <AreaChart
              style={{
                width: "100%",
                maxWidth: "700px",
                maxHeight: "70vh",
                aspectRatio: 1.618,
              }}
              responsive
              data={data}
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              onContextMenu={(_, e) => e.preventDefault()}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" niceTicks="snap125" />
              <YAxis width="auto" niceTicks="snap125" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <RechartsDevtools />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
