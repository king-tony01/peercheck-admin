interface OverviewCard {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    direction: "up" | "down";
    percentage: number;
  };
  chip?: {
    label: string;
    color: ChipColor;
  };
}

type ChipColor = "green" | "red";

interface Chip {
  label: string;
  color: ChipColor;
  direction?: "up" | "down";
}
