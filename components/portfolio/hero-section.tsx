import { ArrowUpRight, Download, Copy, Globe, Mail, GitBranch } from "lucide-react";

import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { TypingSubtitle } from "@/components/portfolio/typing-subtitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { handleCopy } from "@/components/portfolio/contact-section";

type HeroSectionProps = {
  profile: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
    heroRotations: string[];
  };
  onNavigate: (id: string) => void;
  onOpenResume: () => void;
};

export function HeroSection({
  profile,
  onNavigate,
  onOpenResume,
}: HeroSectionProps) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-card">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-copy__body">
              <h1 className="hero-name">{profile.name}</h1>
              <div className="hero-subtitle">
                <TypingSubtitle items={profile.heroRotations} />
              </div>
              
            </div>

            <div className="hero-actions">
              <MagneticButton size="lg" onClick={() => onNavigate("projects")}>
                View projects
              </MagneticButton>
              <Button variant="outline" size="lg" onClick={onOpenResume}>
                <Download className="size-4" />
                Resume preview
              </Button>
            </div>
          </div>

          <Card className="snapshot-card">
            <CardContent className="snapshot-card__body">
              <div className="snapshot-card__panel">
                <p className="snapshot-card__label">Availability</p>
                <p className="snapshot-card__availability">
                  Open to software engineering and AI-focused opportunities
                </p>
              </div>

              <div className="snapshot-card__panel">
                <p className="snapshot-card__contacts-title">Quick contact</p>
                <div className="snapshot-card__contacts">
                  <a className="contact-link" onClick={() => handleCopy(profile.email)}>
                    <span className="contact-link__label">
                      <Mail className="size-4" />
                      {profile.email}
                    </span>
                    <Copy className="size-4" />
                  </a>
                  
                  <a
                    className="contact-link"
                    href={profile.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="contact-link__label">
                      <Globe className="size-4" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a 
                    className="contact-link" 
                    href={profile.github} 
                    rel="noreferrer" 
                    target="_blank"
                  >
                    <span className="contact-link__label">
                      <GitBranch className="size-4" />
                      GitHub
                    </span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
