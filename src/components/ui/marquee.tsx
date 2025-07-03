import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
  variant?: "default" | "luxury"
}

export function Marquee({
  children,
  pauseOnHover = true,
  direction = "left",
  speed = 25,
  variant = "default",
  className,
  ...props
}: MarqueeProps) {
  const baseClasses = "w-full overflow-hidden relative z-10"
  const variantClasses = {
    default: "bg-gradient-to-r from-yellow-400 to-amber-400",
    luxury: cn(
      "bg-gradient-to-r from-gold-50 via-white to-gold-50",
      "border-y border-gold-200/30",
      "shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]"
    )
  }

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )} 
      {...props}
    >
      {/* Subtle gradient overlays for premium effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      
      <div className="relative flex overflow-hidden py-4 sm:py-6">
        <div 
          className={cn(
            "flex w-max items-center gap-8 sm:gap-16",
            "animate-[marquee_var(--duration)_linear_infinite]",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "[animation-direction:reverse]"
          )}
          style={{ 
            "--duration": `${speed}s`,
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)"
          } as React.CSSProperties}
        >
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}