interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

interface DropdownOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface DropdownInputProps {
  options: DropdownOption[];
  selectedOption?: DropdownOption;
  onSelect?: (option: DropdownOption) => void;
  type: "primary" | "secondary";
  position?:
    | "left"
    | "right"
    | "center"
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
}
interface ActionDropdownProps {
  options: DropdownOption[];
  clickedChild?: DropdownOption;
  onChildClick?: (option?: DropdownOption) => void;
  type: "primary" | "secondary";
  position?:
    | "left"
    | "right"
    | "center"
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
}
