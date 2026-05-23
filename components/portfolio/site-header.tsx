"use client";

import { Moon, Sun } from "lucide-react";

import { AccentSwitcher } from "@/components/portfolio/accent-switcher";
import { Button } from "@/components/ui/button";
import { type AccentMode, type ThemeMode } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  activeSection: string;
  onNavigate: (id: string) => void;
  accent: AccentMode;
  onAccentChange: (value: AccentMode) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
};

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader({
  activeSection,
  onNavigate,
  accent,
  onAccentChange,
  theme,
  onThemeToggle,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <nav className="site-header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={cn(
                "site-header__nav-button",
                activeSection === item.id && "is-active",
              )}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onThemeToggle}
            size="icon"
            variant="secondary"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <AccentSwitcher value={accent} onChange={onAccentChange} />
        </div>
      </div>
    </header>
  );
}
