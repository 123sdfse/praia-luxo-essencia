
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-navy text-white hover:bg-navy/90 active:bg-navy/80",
        secondary: "bg-sand text-navy hover:bg-sand/90 active:bg-sand/80",
        outline: "bg-transparent border border-navy text-navy hover:bg-navy/5 active:bg-navy/10",
        ghost: "bg-transparent text-navy hover:bg-navy/5 active:bg-navy/10",
        link: "bg-transparent text-navy p-0 hover:underline focus:ring-0",
        premium: "bg-gradient-to-r from-navy to-navy/80 text-white hover:from-navy/90 hover:to-navy/70 shadow-sm hover:shadow",
      },
      size: {
        sm: "h-9 px-4 rounded-md text-sm",
        md: "h-10 px-5 rounded-md text-base",
        lg: "h-12 px-8 rounded-md text-lg",
        icon: "h-10 w-10 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, fullWidth = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          {
            "w-full": fullWidth,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export default Button;
