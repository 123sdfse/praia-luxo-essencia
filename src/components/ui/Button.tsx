
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "premium";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-navy text-white hover:bg-navy/90 active:bg-navy/80": variant === "primary",
          "bg-sand text-navy hover:bg-sand/90 active:bg-sand/80": variant === "secondary",
          "bg-transparent border border-navy text-navy hover:bg-navy/5 active:bg-navy/10": variant === "outline",
          "bg-transparent text-navy hover:bg-navy/5 active:bg-navy/10": variant === "ghost",
          "bg-transparent text-navy p-0 hover:underline focus:ring-0": variant === "link",
          "bg-gradient-to-r from-navy to-navy/80 text-white hover:from-navy/90 hover:to-navy/70 shadow-sm hover:shadow": variant === "premium",
          "h-9 px-4 rounded-md text-sm": size === "sm",
          "h-10 px-5 rounded-md text-base": size === "md",
          "h-12 px-8 rounded-md text-lg": size === "lg",
          "h-10 w-10 rounded-full p-0": size === "icon",
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
