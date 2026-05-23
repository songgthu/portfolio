import { HeartHandshake } from "lucide-react";

import { FadeInSection } from "@/components/portfolio/fade-in-section";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";

type AboutSectionProps = {
  about: {
    heading: string;
    paragraphs: string[];
  };
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <FadeInSection id="about" className="portfolio-section">
      <SectionHeading title={about.heading} />


        <Card className="about-copy-card">
          <CardContent className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>

    </FadeInSection>
  );
}
