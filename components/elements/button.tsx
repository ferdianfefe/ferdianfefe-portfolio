"use client";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary";
  href?: string;
  className?: string;
}

const styles = {
  primary: "bg-primary-100 hover:bg-primary-200 text-white py-2 px-4 rounded",
  secondary:
    "border-primary-100 bg-secondary-100 border-2 hover:border-primary-200 text-primary-100 py-2 px-4 rounded",
};

const sizes = {
  sm: "py-1 px-2 text-xs",
  md: "py-2 px-4 text-sm",
  lg: "py-3 px-6 text-lg",
};

const Button = ({
  type = "primary",
  children,
  href,
  onClick,
  className,
}: ButtonProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    if (href) {
      router.push(href);
      return;
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <button onClick={onClickHandler} className={`${styles[type]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
