import type { ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface GrainGradientProps {
  variant?: "hero" | "soft" | "dark" | "field" | "earth"
  image?: string
  imageAlt?: string
  className?: string
  children?: ReactNode
}

export function GrainGradient({
  variant = "hero",
  image,
  imageAlt = "",
  className,
  children,
}: GrainGradientProps) {
  return (
    <div className={cn("grain-surface relative overflow-hidden", `grain-${variant}`, className)}>
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={variant === "hero"}
            className="object-cover"
            sizes="100vw"
          />
          <div
            className={cn(
              "absolute inset-0",
              variant === "hero" && "bg-gradient-to-t from-forest/95 via-forest/75 to-forest/50",
              variant === "dark" && "bg-forest/85",
              variant === "field" && "bg-gradient-to-r from-forest/80 via-forest/50 to-transparent",
            )}
          />
        </div>
      )}
      <div className="grain-noise pointer-events-none" aria-hidden="true" />
      <div className="grain-glow pointer-events-none" aria-hidden="true" />
      {variant === "soft" && <div className="field-rows pointer-events-none absolute inset-0 z-0 opacity-60" aria-hidden="true" />}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  )
}
