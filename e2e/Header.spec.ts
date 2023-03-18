import { test, expect } from "@playwright/test";
import i18next from "i18next";

test.describe("The Header component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });
  test("show active language button when language preference is english in the browser", async ({
    page,
  }) => {
    const { language } = i18next;
    const languageSelector = page.getByTestId("LanguageSelectorButton");
    if (language === "en") {
      await expect(languageSelector).toHaveClass("active");
    } else {
      await expect(languageSelector).not.toHaveClass("active");
    }
  });
  test("click on language selector change language of the content", async ({
    page,
  }) => {
    const languageSelector = page.getByTestId("LanguageSelectorButton");
    const skillsLinkFr = page.getByText("Compétences");
    const skillsLinkEn = page.getByText("Skills");

    await expect(skillsLinkFr).not.toBeVisible();
    await expect(skillsLinkEn).toBeVisible();
    await languageSelector.click();
    await expect(skillsLinkFr).toBeVisible();
    await expect(skillsLinkEn).not.toBeVisible();
  });

  test("click on nav items scroll to anchor", async ({ page }) => {
    const skillsLink = page.getByText("Skills");
    await expect(skillsLink).toHaveAttribute("href", "#skills");
  });
});
