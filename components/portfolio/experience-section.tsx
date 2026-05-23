import { BriefcaseBusiness, MapPin } from "lucide-react";

import { FadeInSection } from "@/components/portfolio/fade-in-section";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ExperienceSectionProps = {
  items: {
    id: string;
    company: string;
    role: string;
    location: string;
    period: string;
    summary: string;
    highlights: string[];
    tags: string[];
  }[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <FadeInSection id="experience" className="portfolio-section">
      <SectionHeading title="Experience" />

      <div className="experience-timeline">
        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="experience-item__content">
              <div className="experience-item__icon">
                <BriefcaseBusiness className="size-4" />
              </div>

              <div className="project-card__body">
                <div className="experience-item__header">
                  <div>
                    <p className="experience-item__period">{item.period}</p>
                    <h3 className="experience-item__title">{item.role}</h3>
                    <div className="experience-item__meta">
                      <span>{item.company}</span>
                      <span className="experience-item__location">
                        <MapPin className="size-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="experience-item__tags">
                    {item.tags.map((tag) => (
                      <Badge key={`${item.id}-${tag}`} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="experience-item__summary">{item.summary}</p>

                <div className="experience-highlights">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="experience-highlight">
                      <span className="experience-highlight__dot" />
                      <p className="experience-highlight__text">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </FadeInSection>
  );
}
