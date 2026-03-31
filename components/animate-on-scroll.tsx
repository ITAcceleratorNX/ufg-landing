"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type AnimationVariant = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "fade" 
  | "scale" 
  | "slide-up"

interface AnimateOnScrollProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

const variantStyles: Record<AnimationVariant, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "fade": {
    initial: "opacity-0",
    animate: "opacity-100",
  },
  "scale": {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  "slide-up": {
    initial: "opacity-0 translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
}

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold })

  const styles = variantStyles[variant]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isInView ? styles.animate : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerChildren({
  children,
  staggerDelay = 100,
  className,
}: StaggerContainerProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{
                transitionDuration: "500ms",
                transitionDelay: `${index * staggerDelay}ms`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
