// dependencies
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// main
const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
      >
        <defs key="defs">
          <linearGradient
            key="colorClicks"
            id="colorClicks"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              key="stop1"
              offset="5%"
              stopColor="#3b82f6"
              stopOpacity={0.3}
            />
            <stop
              key="stop2"
              offset="95%"
              stopColor="#3b82f6"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          key="grid"
          strokeDasharray="3 3"
          stroke="rgba(255,255,255,0.05)"
          vertical={false}
        />
        <XAxis
          key="xaxis"
          dataKey="name"
          stroke="#64748b"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          key="yaxis"
          stroke="#64748b"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Tooltip
          key="tooltip"
          contentStyle={{
            backgroundColor: "#0B0F19",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
          }}
          itemStyle={{ color: "#fff" }}
        />
        <Area
          key="area"
          type="monotone"
          dataKey="clicks"
          stroke="#3b82f6"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorClicks)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
