"use client";

import type { HTMLAttributes, RefObject } from "react";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type FadeInSectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
};

export function FadeInSection({
  as = "section",
  className,
  children,
  ...props
}: FadeInSectionProps) {
  const { ref, isInView } = useInView();
  const sharedClassName = cn(
    "fade-section",
    isInView && "is-visible",
    className,
  );

  if (as === "div") {
    return (
      <div
        ref={ref as RefObject<HTMLDivElement | null>}
        className={sharedClassName}
        {...(props as HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );
  }

  return (
    <section
      ref={ref}
      className={sharedClassName}
      {...(props as HTMLAttributes<HTMLElement>)}
    >
      {children}
    </section>
  );
}
