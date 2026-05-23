import { ArrowUpRight, Star } from "lucide-react";

import { FadeInSection } from "@/components/portfolio/fade-in-section";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectItem } from "@/data/portfolio";

type ProjectsSectionProps = {
  projects: ProjectItem[];
  filters: string[];
  selectedFilter: string;
  onFilterSelect: (filter: string) => void;
  onOpenProject: (projectId: string) => void;
};

export function ProjectsSection({
  projects,
  filters,
  selectedFilter,
  onFilterSelect,
  onOpenProject,
}: ProjectsSectionProps) {
  return (
    <FadeInSection id="projects" className="portfolio-section">
      <SectionHeading title="Projects" />

      <div className="projects-shell">
        <div className="projects-toolbar">
          <div className="projects-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`projects-filter ${selectedFilter === filter ? "is-active" : ""}`}
                onClick={() => onFilterSelect(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-list">
          {projects.length ? (
            projects.map((project) => (
              <Card key={project.id}>
                <CardContent className="project-card__content">
                  <div className="project-card__body">
                    <div className="project-card__copy">
                      <div className="project-card__header">
                        <div>
                          <div className="project-card__title-row">
                            <h3 className="project-card__title">{project.name}</h3>
                            
                          </div>
                          <p className="project-card__meta">
                            {project.role} · {project.period}
                          </p>
                        </div>

                        <div className="project-card__tags">
                          {project.tags.map((tag) => (
                            <Badge key={`${project.id}-${tag}`} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="project-card__description">{project.description}</p>
                      <p className="project-card__impact">{project.impact}</p>
                    </div>

                    <div className="project-card__actions">
                      <Button onClick={() => onOpenProject(project.id)}>
                        View case study
                        <ArrowUpRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="projects-empty">
                <p className="projects-empty__title">No projects match that filter yet.</p>
                <p className="projects-empty__text">
                  Try another tech stack filter.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </FadeInSection>
  );
}
