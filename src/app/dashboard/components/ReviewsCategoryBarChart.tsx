"use client";

import {
  Bar,
  BarChart,
  //   CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  //   YAxis,
  Cell,
} from "recharts";
import styles from "./styles/Chart.module.css";

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;
  const { category, value } = payload[0].payload;
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e5e5",
        borderRadius: 10,
        padding: "8px 10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        fontSize: 12,
        color: "#222",
        fontWeight: 600,
      }}
    >
      {category}: {value.toLocaleString()} reviews
    </div>
  );
};

function ReviewsCategoryBarChart({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle?: string;
  data: { category: string; value: number; color: string }[];
}) {
  return (
    <div className={styles.chart}>
      <div className={styles.header}>
        <div className={styles.title_container}>
          <h3
            className={`${styles.title} ${subtitle ? styles.title_with_subtitle : ""}`}
          >
            {title}
          </h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
        >
          {/* <CartesianGrid vertical={false} stroke="#f0f0f0" /> */}
          <XAxis
            dataKey="category"
            tickLine={false}
            axisLine={false}
            tickMargin={12}
          />
          {/* <YAxis tickLine={false} axisLine={false} tickMargin={12} width={50} /> */}
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.03)" }}
            content={<CustomTooltip />}
          />
          <Bar dataKey="value" radius={[12, 12, 12, 12]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.category}-${index}`}
                fill={entry.color}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReviewsCategoryBarChart;
