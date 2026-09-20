import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { SiteHeader } from "./site-header";

vi.mock("next/navigation", () => ({ usePathname: () => "/projects/medaudit" }));
afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("theme-transitioning");
  delete document.documentElement.dataset.theme;
  delete document.documentElement.dataset.themeDirection;
  delete document.documentElement.dataset.themePreference;
});

describe("SiteHeader", () => {
  it("marks a parent navigation item as current on nested routes", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    expect(screen.getByRole("navigation", { name: "Navegação principal" }).querySelector('a[aria-current="page"]')).toHaveTextContent("Projetos");
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(screen.getByRole("navigation", { name: "Navegação móvel" }).querySelector('a[aria-current="page"]')).toHaveTextContent("Projetos");
  });

  it("opens and closes the mobile navigation with keyboard controls", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const trigger = screen.getByRole("button", { name: "Abrir menu" });
    await user.click(trigger);
    expect(screen.getByRole("navigation", { name: "Navegação móvel" })).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("navigation", { name: "Navegação móvel" })).not.toBeInTheDocument();
  });

  it("closes the mobile navigation when clicking outside the header", async () => {
    const user = userEvent.setup();
    render(<><SiteHeader /><main>Conteúdo da página</main></>);
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(screen.getByRole("navigation", { name: "Navegação móvel" })).toBeInTheDocument();
    await user.click(screen.getByRole("main"));
    expect(screen.queryByRole("navigation", { name: "Navegação móvel" })).not.toBeInTheDocument();
  });

  it("toggles and persists only light and dark themes", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const trigger = screen.getByRole("button", { name: /Tema atual/ });
    await user.click(trigger);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement.dataset.themePreference).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement).toHaveClass("theme-transitioning");
    expect(document.documentElement.dataset.themeDirection).toBe("to-dark");
    await user.click(trigger);
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(document.documentElement.dataset.themePreference).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("starts from the preference applied before hydration", () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.dataset.theme = "dark";
    document.documentElement.dataset.themePreference = "dark";
    render(<SiteHeader />);
    expect(screen.getByRole("button", { name: "Tema atual: escuro. Alterar para tema claro" })).toBeInTheDocument();
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<SiteHeader />);
    expect((await axe(container)).violations).toHaveLength(0);
  });
});
