"use client";
import { useEffect, useRef, useState } from "react";

type Theme = "system" | "light" | "dark";
type EffectiveTheme = Exclude<Theme, "system">;

const labels: Record<Theme, string> = { system: "do sistema", light: "claro", dark: "escuro" };

function initialTheme(): Theme {
  if (typeof document === "undefined") return "system";
  const preference = document.documentElement.dataset.themePreference;
  return preference === "light" || preference === "dark" ? preference : "system";
}

function effectiveTheme(theme: Theme): EffectiveTheme {
  return theme === "system" ? (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cleanupRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(cleanupRef.current);
  }, []);

  function cycle() {
    const next: Theme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    const root = document.documentElement;
    const currentEffective = effectiveTheme(theme);
    const nextEffective = effectiveTheme(next);
    const rect = buttonRef.current?.getBoundingClientRect();

    window.clearTimeout(cleanupRef.current);
    root.style.setProperty("--theme-origin-x", `${rect ? rect.left + rect.width / 2 : window.innerWidth}px`);
    root.style.setProperty("--theme-origin-y", `${rect ? rect.top + rect.height / 2 : 0}px`);
    root.dataset.themeDirection = nextEffective === "light" ? "to-light" : "to-dark";
    root.classList.toggle("theme-transitioning", currentEffective !== nextEffective);

    // Force the transition styles to be active before changing the theme tokens.
    void root.offsetWidth;
    setTheme(next);
    root.dataset.themePreference = next;
    if (next === "system") {
      localStorage.removeItem("theme");
      delete root.dataset.theme;
    } else {
      localStorage.setItem("theme", next);
      root.dataset.theme = next;
    }

    cleanupRef.current = window.setTimeout(() => {
      root.classList.remove("theme-transitioning");
      delete root.dataset.themeDirection;
    }, 720);
  }

  return <button ref={buttonRef} className="theme-toggle" type="button" onClick={cycle} aria-label={`Tema atual: ${labels[theme]}. Alterar tema`} suppressHydrationWarning>{theme === "system" ? "◐" : theme === "light" ? "☼" : "☾"}</button>;
}
