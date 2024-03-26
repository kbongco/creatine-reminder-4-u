import { ReactNode } from "react";

export default interface ButtonProps {
  label?: string;
  size?: string;
  onClick?: () => void;
}

export default interface CardProps {
  header: string;
  body: string | ReactNode;
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
  name?: string;
  value: string | number;
}

export default interface CheckboxProps {
  label?: string;
}

export default interface AccordionProps {
  title: string;
  content: ReactNode | string;
  isOpen: boolean;
  onClick?: () => void;
}

export default interface DoughtChartProps {
  data: string[];
  options: string[];
}

export default interface CarouselProps {
  items: any[];
}