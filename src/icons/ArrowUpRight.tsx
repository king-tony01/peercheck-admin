import * as React from "react";

const ArrowUpRight: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#525866",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill={color}
      d="m10.447 6.416-5.251 5.25-.863-.862 5.25-5.25H4.956v-1.22h6.71v6.71h-1.22z"
    ></path>
  </svg>
);

export default ArrowUpRight;
