export default interface ButtonProps {
  label: string;
  size?: string;
  onClick?: () => void;
}

export default interface CardProps {
  header?: string;
  body?: string;
  footer?: string;
  size?: string;
}