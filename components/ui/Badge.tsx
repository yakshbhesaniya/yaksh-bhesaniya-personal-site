import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "success" | "accent";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "border-border bg-surface text-text-secondary": variant === "default",
                    "border-success/20 bg-success/10 text-success": variant === "success",
                    "border-accent/20 bg-accent/10 text-accent": variant === "accent",
                },
                className
            )}
            {...props}
        />
    );
}
