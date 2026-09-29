import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

/** Shared class list so links can look like buttons without nesting <button> in <a>. */
export function buttonClasses(variant: ButtonProps["variant"] = "primary", size: ButtonProps["size"] = "md", className?: string) {
    return cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
        "disabled:pointer-events-none disabled:opacity-50",
        {
            "bg-accent text-black font-semibold shadow-[0_10px_40px_-12px_rgba(198,255,61,0.55)] hover:bg-white hover:-translate-y-0.5":
                variant === "primary",
            "glass text-text-primary hover:border-accent/40 hover:-translate-y-0.5": variant === "secondary",
            "border border-white/15 text-text-primary hover:border-accent/60 hover:bg-white/[0.04] hover:-translate-y-0.5":
                variant === "outline",
            "text-text-secondary hover:text-white": variant === "ghost",
            "min-h-[2.25rem] px-4 py-1.5 text-sm": size === "sm",
            "min-h-[2.75rem] px-5 py-2 text-sm": size === "md",
            "min-h-[3.25rem] px-7 py-3 text-base": size === "lg",
        },
        className
    );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return <button className={buttonClasses(variant, size, className)} ref={ref} {...props} />;
    }
);
Button.displayName = "Button";

export { Button };
