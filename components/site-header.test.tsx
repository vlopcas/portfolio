import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { SiteHeader } from "./site-header";

vi.mock("next/navigation", () => ({ usePathname: () => "/projects" }));
afterEach(() => { cleanup(); localStorage.clear(); delete document.documentElement.dataset.theme; });

describe("SiteHeader", () => {
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

  it("cycles and persists light, dark and system themes", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const trigger = screen.getByRole("button", { name: /Tema atual/ });
    await user.click(trigger);
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    await user.click(trigger);
    expect(document.documentElement.dataset.theme).toBe("dark");
    await user.click(trigger);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(localStorage.getItem("theme")).toBeNull();
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<SiteHeader />);
    expect((await axe(container)).violations).toHaveLength(0);
  });
});
