"use client";

import { useEffect, useState, startTransition } from "react";

import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectDialog } from "@/components/portfolio/project-dialog";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ResumeDialog } from "@/components/portfolio/resume-dialog";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SkillsSection } from "@/components/portfolio/skills-section";
import {
  navigationItems,
  portfolioData,
  type AccentMode,
  type ThemeMode,
} from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = ["hero", ...navigationItems.map((item) => item.id)] as const;
const preferredFilterOrder = [
  "All",
  "Python",
  "Next.js/React.js",
  "TypeScript",
  "React Native",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Ruby on Rails",
  "Firebase",
];

export function PortfolioShell() {
  const activeSection = useActiveSection(sectionIds);
  const [accent, setAccent] = useState<AccentMode>("cyan");
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem("portfolio-theme") as ThemeMode | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
      }
    } catch {
      // Ignore localStorage access issues and use the default theme.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Ignore localStorage access issues to keep the UI usable in restricted browsers.
    }
  }, [theme]);

  const uniqueProjectTags = Array.from(
    new Set(portfolioData.projects.flatMap((project) => project.tags)),
  );

  const filters = preferredFilterOrder.filter(
    (filter) => filter === "All" || uniqueProjectTags.includes(filter),
  );

  const filteredProjects = portfolioData.projects.filter((project) =>
    selectedFilter === "All" ? true : project.tags.includes(selectedFilter),
  );

  const selectedProject = portfolioData.projects.find(
    (project) => project.id === selectedProjectId,
  );

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFilterSelect = (filter: string) => {
    startTransition(() => {
      setSelectedFilter(filter);
    });
  };

  return (
    <div className="portfolio-theme portfolio-page" data-accent={accent} data-theme={theme}>
      <SiteHeader
        activeSection={activeSection}
        onNavigate={scrollToSection}
        accent={accent}
        onAccentChange={setAccent}
        theme={theme}
        onThemeToggle={() =>
          setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
        }
      />

      <main className="portfolio-main">
        <HeroSection
          profile={portfolioData.profile}
          onNavigate={scrollToSection}
          onOpenResume={() => setResumeOpen(true)}
        />
        <AboutSection about={portfolioData.about} />
        <ExperienceSection items={portfolioData.experience} />
        <EducationSection education={portfolioData.education} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection
          projects={filteredProjects}
          filters={filters}
          selectedFilter={selectedFilter}
          onFilterSelect={handleFilterSelect}
          onOpenProject={setSelectedProjectId}
        />
        <ContactSection
          profile={portfolioData.profile}
          contact={portfolioData.contact}
        />
      </main>

      <ResumeDialog
        open={resumeOpen}
        onOpenChange={setResumeOpen}
        resumePath={portfolioData.profile.resumePath}
      />

      <ProjectDialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProjectId(null);
          }
        }}
        project={selectedProject}
      />
    </div>
  );
}
