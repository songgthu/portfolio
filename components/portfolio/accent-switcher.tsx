"use client";

import { accentOptions, type AccentMode } from "@/data/portfolio";

type AccentSwitcherProps = {
  value: AccentMode;
  onChange: (value: AccentMode) => void;
};

export function AccentSwitcher({ value, onChange }: AccentSwitcherProps) {
  const currentOption = accentOptions.find((option) => option.value === value) ?? accentOptions[0];
  const currentIndex = accentOptions.findIndex((option) => option.value === currentOption.value);
  const nextOption = accentOptions[(currentIndex + 1) % accentOptions.length];

  return (
    <button
      aria-label={`Switch accent color. Current accent: ${currentOption.label}`}
      className="accent-switcher__button"
      onClick={() => onChange(nextOption.value)}
      title={`Switch to ${nextOption.label}`}
      type="button"
    >
      <span
        aria-hidden="true"
        className={`accent-switcher__swatch accent-switcher__swatch--${value}`}
      />
      <span className="accent-switcher__label">Theme</span>
    </button>
  );
}
