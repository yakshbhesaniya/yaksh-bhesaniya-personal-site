import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-accent text-background hover:bg-accent/90": variant === "primary",
                        "bg-surface text-text-primary hover:bg-surface/80 border border-border": variant === "secondary",
                        "border border-border text-text-primary hover:bg-surface/50": variant === "outline",
                        "text-text-primary hover:bg-surface/50": variant === "ghost",
                        "min-h-[2rem] px-3 py-1 text-sm": size === "sm",
                        "min-h-[2.5rem] px-4 py-2 text-base": size === "md",
                        "min-h-[3rem] px-6 py-3 text-lg": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
