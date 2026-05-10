import { PieChart, Pie, Label, Cell, Tooltip } from "recharts";

const data = [{ name: "Group A", value: 400, fill: "#201E25" }];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          border: " solid #373651",
          borderRadius: "8px",
          padding: "10px 14px",
          fontSize: "13px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ fontWeight: 600, color: "#1f2937", marginBottom: 2 }}>
          {payload[0].name}
        </p>
        <p style={{ color: "#1f2937" }}>{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function PieChartCom() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "16px",
        alignItems: "center",
      }}
    >
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={55}
          innerRadius={35}
          isAnimationActive={true}
          strokeWidth={2}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}

          <Label
            content={({ viewBox }) => {
              // ✅ This fixes the cx and cy error
              const { cx, cy } = viewBox as { cx: number; cy: number };

              return (
                <text x={cx} y={cy} textAnchor="middle">
                  <tspan
                    x={cx}
                    dy="-0.3em"
                    fontSize="22"
                    fontWeight="700"
                    fill="#373651"
                  >
                    {total}
                  </tspan>
                  <tspan x={cx} dy="1.4em" fontSize="12" fill="#C4C2C9">
                    Total
                  </tspan>
                </text>
              );
            }}
          />
        </Pie>

        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
}
