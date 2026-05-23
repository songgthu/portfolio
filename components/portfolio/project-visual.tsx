"use client";

import { createPortal } from "react-dom";
import { X } from "lucide-react";

import type { ProjectGallerySlide } from "@/data/portfolio";

type ProjectVisualProps = {
  slide: ProjectGallerySlide;
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
};

export function ProjectVisual({
  slide,
  expanded,
  onExpandedChange,
}: ProjectVisualProps) {
  const isVideo =
    slide.src.endsWith(".mp4") ||
    slide.src.endsWith(".webm");

  return (
    <>
      <button
        aria-label="Expand project visual"
        className="project-visual"
        onClick={() => onExpandedChange(true)}
        type="button"
      >
        {isVideo ? (
          <video
            className="project-visual__image"
            src={slide.src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            className="project-visual__image"
            src={slide.src}
            alt={slide.alt}
          />
        )}
      </button>

      {expanded
        ? createPortal(
            <div
              aria-label="Expanded project visual"
              aria-modal="true"
              className="project-visual-modal"
              onClick={() => onExpandedChange(false)}
              onPointerDown={(event) => event.stopPropagation()}
              role="dialog"
            >

              {isVideo ? (
                <video
                  className="project-visual-modal__content"
                  src={slide.src}
                  controls
                  autoPlay
                  onClick={(event) => event.stopPropagation()}
                  onPointerDown={(event) => event.stopPropagation()}
                />
              ) : (
                <img
                  className="project-visual-modal__content"
                  src={slide.src}
                  alt={slide.alt}
                  onClick={(event) => event.stopPropagation()}
                  onPointerDown={(event) => event.stopPropagation()}
                />
              )}

              <p className="project-visual-modal__hint">
                Use arrow keys to browse and ESC to close
              </p>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
