"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { ProjectVisual } from "@/components/portfolio/project-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { ProjectItem } from "@/data/portfolio";

type ProjectDialogProps = {
  project?: ProjectItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visualExpanded, setVisualExpanded] =
    useState(false);
  const galleryLength = project?.gallery.length ?? 0;

  useEffect(() => {
    setSlideIndex(0);
    setVisualExpanded(false);
  }, [project?.id]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && visualExpanded) {
        event.preventDefault();
        setVisualExpanded(false);
        return;
      }

      if (galleryLength < 2) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSlideIndex((index) =>
          index === 0 ? galleryLength - 1 : index - 1,
        );
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSlideIndex((index) => (index + 1) % galleryLength);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryLength, open, visualExpanded]);

  if (!project) {
    return null;
  }

  const activeSlide =
    project.gallery[slideIndex] ?? project.gallery[0];

  const showVisual = Boolean(
    project.gallery.length && activeSlide,
  );
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen && visualExpanded) {
      return;
    }

    onOpenChange(nextOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="project-dialog"
        onInteractOutside={(event) => {
          event.preventDefault();
        }}
        onPointerDownOutside={(event) => {
          event.preventDefault();
        }}
        onEscapeKeyDown={(event) => {
          if (visualExpanded) {
            event.preventDefault();
            setVisualExpanded(false);
          }
        }}
      >
        <DialogHeader>
          <div className="project-dialog__header">
            <div>
              <DialogTitle>{project.name}</DialogTitle>

              <DialogDescription>
                {project.role} · {project.period}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div
          className={`project-dialog__grid ${
            showVisual ? "" : "project-dialog__grid--single"
          }`}
        >
          {showVisual ? (
            <div className="project-dialog__visuals">
              <ProjectVisual
                expanded={visualExpanded}
                onExpandedChange={setVisualExpanded}
                slide={activeSlide}
              />

              {project.gallery.length > 1 ? (
                <div className="project-dialog__carousel">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      setSlideIndex((index) =>
                        index === 0
                          ? project.gallery.length - 1
                          : index - 1,
                      )
                    }
                  >
                    <ChevronLeft className="size-4" />
                    Previous
                  </Button>

                  <div className="project-dialog__dots">
                    {project.gallery.map((slide, index) => (
                      <button
                        key={`${project.id}-${slide.src}`}
                        className={`project-dialog__dot ${
                          slideIndex === index
                            ? "is-active"
                            : ""
                        }`}
                        onClick={() => setSlideIndex(index)}
                        type="button"
                      >
                        <span className="sr-only">
                          Go to slide {index + 1}
                        </span>
                      </button>
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      setSlideIndex(
                        (index) =>
                          (index + 1) % project.gallery.length,
                      )
                    }
                  >
                    Next
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="project-dialog__details">
            <div className="detail-panel">
              <p className="detail-panel__title">Problem</p>

              <p className="detail-panel__body">
                {project.problem}
              </p>
            </div>

            <div className="detail-panel">
              <p className="detail-panel__title">Solution</p>

              <p className="detail-panel__body">
                {project.solution}
              </p>
            </div>

            <div className="detail-panel">
              <p className="detail-panel__title">Impact</p>

              <p className="detail-panel__body">
                {project.impact}
              </p>
            </div>

            <div className="detail-panel">
              <p className="detail-panel__title">Stack</p>

              <div className="education-card__badges">
                {project.tags.map((tag) => (
                  <Badge
                    key={`${project.id}-${tag}`}
                    variant="secondary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="detail-panel">
              <p className="detail-panel__title">
                Key highlights
              </p>

              <ul className="detail-list">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="detail-list__item"
                  >
                    <span className="detail-list__dot" />

                    <span className="detail-list__text">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-actions">
              {project.githubUrl ? (
                <Button asChild variant="secondary">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitBranch className="size-4" />
                    GitHub
                  </a>
                </Button>
              ) : null}

              {project.liveUrl ? (
                <Button asChild variant="outline">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="size-4" />
                    Live site
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
