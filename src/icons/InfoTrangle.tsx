import * as React from "react";

const InfoTriangle: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#AB2A2C",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="10"
    fill="none"
    viewBox="0 0 11 10"
  >
    <path
      fill={color}
      d="m5.682.252 4.751 8.325a.51.51 0 0 1-.182.689.5.5 0 0 1-.25.067H.5a.5.5 0 0 1-.432-.252.51.51 0 0 1 0-.504L4.818.252A.5.5 0 0 1 5.25 0a.5.5 0 0 1 .432.252m-.93 6.559V7.82h.997V6.81zm0-3.532v2.523h.997V3.279z"
    ></path>
  </svg>
);

export default InfoTriangle;
