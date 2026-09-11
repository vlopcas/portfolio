import type { ReactNode } from "react";
import { ThemeBackground } from "./theme-background";

type Props = { children: ReactNode; className?: string };

export function RouteHero({ children, className = "" }: Props) {
  return <header className={`page-header route-hero ${className}`}>
    <ThemeBackground />
    {children}
  </header>;
}
