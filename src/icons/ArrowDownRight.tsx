import * as React from "react";

const ArrowDownRight: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#91B33C",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      fill={color}
      d="M8.386 9.14 3.792 4.547l.754-.754 4.595 4.593V4.337h1.067v5.871H4.337V9.141z"
    ></path>
  </svg>
);

export default ArrowDownRight;
