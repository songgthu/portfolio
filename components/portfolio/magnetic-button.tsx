"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";

export function MagneticButton({ onPointerLeave, onPointerMove, style, ...props }: ButtonProps) {
  const [transform, setTransform] = React.useState<string>();

  return (
    <Button
      {...props}
      style={{ ...style, transform }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;
        setTransform(`translate3d(${x}px, ${y}px, 0)`);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        setTransform(undefined);
        onPointerLeave?.(event);
      }}
    />
  );
}
