import * as React from "react";

const ReviewsIcon: React.FC<React.SVGProps<SVGElement>> = ({
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
      id="mask0_1_20606"
      width="24"
      height="24"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
    </mask>
    <g mask="url(#mask0_1_20606)">
      <path
        fill={color}
        d="M9.296 13.962 12 12.321l2.704 1.64-.718-3.075 2.398-2.068-3.155-.265L12 5.654l-1.229 2.9-3.156.265 2.399 2.067zM2.5 21.037V4.308q0-.758.525-1.283T4.308 2.5h15.384q.758 0 1.283.525t.525 1.283v11.384q0 .758-.525 1.283t-1.283.525H6.038zM5.4 16h14.292a.3.3 0 0 0 .212-.096.3.3 0 0 0 .096-.212V4.308a.3.3 0 0 0-.096-.212.3.3 0 0 0-.212-.096H4.308a.3.3 0 0 0-.212.096.3.3 0 0 0-.096.212v13.077z"
      ></path>
    </g>
  </svg>
);

export default ReviewsIcon;
