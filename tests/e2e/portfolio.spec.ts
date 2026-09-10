import { expect, test } from "@playwright/test";

const routes = ["/", "/projects", "/projects/medaudit", "/about", "/experience"];

for (const route of routes) {
  test(`${route} renders without overflow or console errors`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main")).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
    expect(errors).toEqual([]);
    if (route === "/") await page.screenshot({ path: testInfo.outputPath("home.png"), fullPage: true });
  });
}

test("mobile navigation and theme work", async ({ page }, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    const menu = page.getByRole("button", { name: "Abrir menu" });
    await menu.click();
    await expect(page.getByRole("navigation", { name: "Navegação móvel" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("navigation", { name: "Navegação móvel" })).toBeHidden();
  }
  const theme = page.getByRole("button", { name: /Tema atual/ });
  await theme.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await theme.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.screenshot({ path: testInfo.outputPath("theme-dark.png"), fullPage: true });
});
