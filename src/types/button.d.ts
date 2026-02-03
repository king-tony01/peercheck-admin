interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  overrideStyles?: React.CSSProperties;
}
