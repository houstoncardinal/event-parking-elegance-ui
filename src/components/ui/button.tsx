
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 no-tap-highlight",
  {
    variants: {
      variant: {
        default: "btn-vip",
        destructive: "btn-vip bg-red-900/20 border-red-500/30 text-red-300 hover:bg-red-900/40",
        outline: "btn-vip border-white/20 bg-transparent hover:bg-white/5",
        secondary: "btn-vip bg-white/5 hover:bg-white/10",
        ghost: "btn-vip bg-transparent border-none hover:bg-white/5",
        link: "text-white underline-offset-4 hover:underline no-tap-highlight",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "no-tap-highlight")}
        ref={ref}
        style={{
          WebkitTapHighlightColor: 'transparent',
          tapHighlightColor: 'transparent',
          outline: 'none'
        }}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
