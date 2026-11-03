import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:brightness-110",
        destructive:
          "bg-destructive text-white shadow-md shadow-destructive/25 hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/35",
        outline:
          "border-2 border-border/80 bg-background/80 backdrop-blur-xs text-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 hover:shadow-sm",
        ghost:
          "hover:bg-accent/80 hover:text-accent-foreground shadow-none",
        link:
          "text-primary underline-offset-4 hover:underline shadow-none font-medium p-0 h-auto",
        glow:
          "bg-primary text-white shadow-[0_0_20px_rgba(0,81,186,0.35)] hover:shadow-[0_0_25px_rgba(0,81,186,0.55)] hover:brightness-105",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg gap-1.5 px-3.5 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
