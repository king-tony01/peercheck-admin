"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styles from "./styles/Chart.module.css";

const COLORS = ["#FFA726", "#4FC3F7", "#BA68C8", "#E91E63", "#66BB6A"];

function CustomPieChart({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle?: string;
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
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

      <div className={styles.pie_container}>
        <ResponsiveContainer width="50%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={4}
              cornerRadius={8}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color || COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.pie_legend}>
          {data.map((entry, index) => (
            <div key={index} className={styles.pie_legend_item}>
              <div
                className={styles.pie_legend_dot}
                style={{
                  background: entry.color || COLORS[index % COLORS.length],
                }}
              />
              <div className={styles.pie_legend_content}>
                <span className={styles.pie_legend_label}>{entry.name}</span>
                <span className={styles.pie_legend_value}>
                  {entry.value.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomPieChart;
