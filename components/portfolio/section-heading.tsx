import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function SectionHeading({
  title,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", className)}>
      <h2 className="section-heading__title">{title}</h2>
    </div>
  );
}
