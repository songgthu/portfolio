"use client";

import { Copy, ExternalLink, GitBranch, Globe, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

import { FadeInSection } from "@/components/portfolio/fade-in-section";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ContactSectionProps = {
  profile: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  contact: {
    title: string;
  };
};

export function handleCopy(profileString: string) {
  navigator.clipboard.writeText(profileString)
    .then(() => {
      toast.success("Email address copied to clipboard.");
    })
    .catch(() => {
      toast.error("Clipboard access is unavailable. Please copy the email manually.");
    });
}

export function ContactSection({ profile, contact }: ContactSectionProps) {

  return (
    <FadeInSection id="contact" className="portfolio-section">
      <SectionHeading title={contact.title} />

      <div className="contact-grid">
        <Card>
          <CardContent className="contact-card__content">
            <a className="contact-link" onClick={() => handleCopy(profile.email)}>
              <span className="contact-link__label">
                <Mail className="size-4" />
                {profile.email}
              </span>
              <Copy className="size-4" />
            </a>

            <a className="contact-link" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              <span className="contact-link__label">
                <Phone className="size-4" />
                {profile.phone}
              </span>
              <ExternalLink className="size-4" />
            </a>

            <a className="contact-link" href={profile.github} rel="noreferrer" target="_blank">
              <span className="contact-link__label">
                <GitBranch className="size-4" />
                GitHub
              </span>
              <ExternalLink className="size-4" />
            </a>

            <a className="contact-link" href={profile.linkedin} rel="noreferrer" target="_blank">
              <span className="contact-link__label">
                <Globe className="size-4" />
                LinkedIn
              </span>
              <ExternalLink className="size-4" />
            </a>
          </CardContent>
        </Card>

      </div>
    </FadeInSection>
  );
}


