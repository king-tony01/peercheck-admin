import * as React from "react";

const BillingIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "var(--active-color, #737373)",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12 4.8c5.468 0 9.9 2.417 9.9 5.4v3.6c0 2.983-4.432 5.4-9.9 5.4-5.37 0-9.742-2.332-9.895-5.24L2.1 13.8v-3.6c0-2.983 4.432-5.4 9.9-5.4m0 10.8c-3.348 0-6.309-.906-8.1-2.295v.495c0 1.694 3.495 3.6 8.1 3.6 4.509 0 7.954-1.827 8.096-3.494l.004-.106v-.495C18.31 14.693 15.35 15.6 12 15.6m0-9c-4.605 0-8.1 1.906-8.1 3.6s3.495 3.6 8.1 3.6 8.1-1.906 8.1-3.6-3.495-3.6-8.1-3.6"
    ></path>
  </svg>
);

export default BillingIcon;
