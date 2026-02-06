import styles from "./styles/Loader.module.css";

type LoaderProps = {
  variant?: "skeleton" | "spinner";
  size?: "sm" | "md" | "lg";
  className?: string;
};

function Loader({ variant = "skeleton", size = "md", className }: LoaderProps) {
  const classes = [styles.loader, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} />;
}

export default Loader;
