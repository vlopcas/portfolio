type Props = { className?: string };

export function ThemeBackground({ className = "" }: Props) {
  return <span className={`theme-background ${className}`} aria-hidden="true">
    <span className="theme-background-layer theme-background-light" />
    <span className="theme-background-layer theme-background-dark" />
  </span>;
}
