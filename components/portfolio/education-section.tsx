import { GraduationCap, Medal } from "lucide-react";

import { FadeInSection } from "@/components/portfolio/fade-in-section";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type EducationSectionProps = {
  education: {
    school: string;
    degree: string;
    specialization: string;
    period: string;
    certifications: string[];
  };
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <FadeInSection id="education" className="portfolio-section">
      <SectionHeading title="Education" />

      <div className="education-grid">
        <Card>
          <CardHeader className="education-card__header">
            <div className="education-card__icon">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <p className="education-card__period">{education.period}</p>
              <CardTitle className="education-card__title">{education.school}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="education-card__content">
            <p className="education-card__degree">{education.degree}</p>
            <p className="education-card__text">{education.specialization}</p>
            <div className="education-card__badges">
              <Badge>Software Engineering</Badge>
              <Badge>Database Systems</Badge>
              <Badge>Computer Networks</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="education-card__header">
            <div className="education-card__icon">
              <Medal className="size-5" />
            </div>
            <CardTitle className="education-card__title">Certifications</CardTitle>
          </CardHeader>
          <CardContent className="education-certifications">
            {education.certifications.map((item) => (
              <div key={item} className="education-certification">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </FadeInSection>
  );
}
