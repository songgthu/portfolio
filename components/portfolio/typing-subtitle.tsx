"use client";

import { useEffect, useState } from "react";

type TypingSubtitleProps = {
  items: string[];
};

export function TypingSubtitle({ items }: TypingSubtitleProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!items.length) {
      return;
    }

    const current = items[phraseIndex] ?? "";

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
          return;
        }

        setIsDeleting(true);
        return;
      }

      if (displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
        return;
      }

      setIsDeleting(false);
      setPhraseIndex((index) => (index + 1) % items.length);
    }, !isDeleting && displayed === current ? 1200 : isDeleting ? 40 : 85);

    return () => window.clearTimeout(timeout);
  }, [displayed, isDeleting, items, phraseIndex]);

  return (
    <span className="typing-subtitle">
      {displayed}
      <span className="typing-subtitle__cursor" aria-hidden="true" />
    </span>
  );
}
