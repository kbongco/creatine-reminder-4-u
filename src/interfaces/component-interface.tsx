export default interface ButtonProps {
  label?: string;
  size?: string;
  onClick?: () => void;
}

export default interface CardProps {
  header?: string;
  body?: any;
  footer?: string;
  size?: string;
}

export default interface InputProps {
  icon?: any;
  label?: string;
  type?: string;
  placeholder?: string;
  inputStyle: string;
  onChange: any;
}