import { ReactNode } from "react";

export default interface ButtonProps {
  label?: string;
  size?: string;
  onClick?: () => void;
}

export default interface CardProps {
  header?: string;
  body?: string | ReactNode;
  footer?: string | ReactNode;
  size?: string;
}

export default interface InputProps {
  icon?: ReactNode;
  label?: string;
  type?: string;
  placeholder?: string;
  inputStyle?: string;
  onChange?: any;
}

export default interface CheckboxProps {
  label: string;
}