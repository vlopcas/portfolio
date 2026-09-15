"use client";
import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const labels: Record<Theme, string> = { light: "claro", dark: "escuro" };

function initialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const applied = document.documentElement.dataset.theme;
  if (applied === "light" || applied === "dark") return applied;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function oppositeTheme(theme: Theme): Theme { return theme === "light" ? "dark" : "light"; }

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cleanupRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(cleanupRef.current);
  }, []);

  function cycle() {
    const next = oppositeTheme(theme);
    const root = document.documentElement;
    const rect = buttonRef.current?.getBoundingClientRect();

    window.clearTimeout(cleanupRef.current);
    root.style.setProperty("--theme-origin-x", `${rect ? rect.left + rect.width / 2 : window.innerWidth}px`);
    root.style.setProperty("--theme-origin-y", `${rect ? rect.top + rect.height / 2 : 0}px`);
    root.dataset.themeDirection = next === "light" ? "to-light" : "to-dark";
    root.classList.add("theme-transitioning");

    // Force the transition styles to be active before changing the theme tokens.
    void root.offsetWidth;
    setTheme(next);
    root.dataset.themePreference = next;
    localStorage.setItem("theme", next);
    root.dataset.theme = next;

    cleanupRef.current = window.setTimeout(() => {
      root.classList.remove("theme-transitioning");
      delete root.dataset.themeDirection;
    }, 980);
  }

  const next = oppositeTheme(theme);
  return <button ref={buttonRef} className="theme-toggle" type="button" onClick={cycle} aria-label={`Tema atual: ${labels[theme]}. Alterar para tema ${labels[next]}`} suppressHydrationWarning>{theme === "light" ? "☼" : "☾"}</button>;
}
