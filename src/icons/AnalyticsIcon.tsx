import * as React from "react";

const AnalyticsIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "var(--active-color, #737373)",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <mask
      id="mask0_1_20586"
      width="24"
      height="24"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
    </mask>
    <g mask="url(#mask0_1_20586)">
      <path
        fill={color}
        d="M7.366 16.75h1.5v-6.5h-1.5zm3.884 0h1.5v-9.5h-1.5zm3.885 0h1.5v-3.5h-1.5zM5.308 20.5q-.758 0-1.283-.525a1.75 1.75 0 0 1-.525-1.283V5.308q0-.758.525-1.283T5.308 3.5h13.384q.758 0 1.283.525t.525 1.283v13.384q0 .758-.525 1.283t-1.283.525zm0-1.5h13.384a.3.3 0 0 0 .212-.096.3.3 0 0 0 .096-.212V5.308a.3.3 0 0 0-.096-.212.3.3 0 0 0-.212-.096H5.308a.3.3 0 0 0-.212.096.3.3 0 0 0-.096.212v13.384q0 .116.096.212a.3.3 0 0 0 .212.096"
      ></path>
    </g>
  </svg>
);

export default AnalyticsIcon;
