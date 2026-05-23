import type { ComponentType } from "react";
import { Bot, Cloud, Code2, Database, Layers3, ServerCog } from "lucide-react";

import { FadeInSection } from "@/components/portfolio/fade-in-section";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  "Front-end / UI": Layers3,
  "Back-end": ServerCog,
  "Data & Infrastructure": Database,
  "AI / ML": Bot,
  Tooling: Code2,
  Deployment: Cloud,
};

type SkillsSectionProps = {
  skills: {
    title: string;
    items: string[];
  }[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <FadeInSection id="skills" className="portfolio-section">
      <SectionHeading title="Technical Skills" />

      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = iconMap[group.title] ?? Code2;

          return (
            <Card key={group.title}>
              <CardHeader className="skills-card__header">
                <div className="skills-card__icon">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="skills-card__badges">
                {group.items.map((item) => (
                  <Badge key={`${group.title}-${item}`} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </FadeInSection>
  );
}
