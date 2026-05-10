import { Children, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  onClick?: () => void;
  className?: string;
  size?: string;
}

const Button = ({ onClick, children, bgColor, className }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center## gap-1 ${className} text-white text-[12px] rounded-md py-1.5 px-3   `}
    >
      {children}
    </button>
  );
};
export default Button;
