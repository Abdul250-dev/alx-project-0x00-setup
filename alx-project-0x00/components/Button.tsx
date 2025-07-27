import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
}

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  className,
}) => {
  return (
    <button
      className={clsx(
        "bg-blue-600 text-white font-semibold hover:bg-blue-700 transition",
        sizeClasses[size],
        shape,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
