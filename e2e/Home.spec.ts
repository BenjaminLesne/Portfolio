import { test, expect } from "@playwright/test";
import i18next from "i18next";

test.describe("The Home page", () => {
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
    const ukFlag = page.getByTestId("LanguageSelectorButton--english");
    const firstAnchor = page.locator(".Header__anchor").first();

    await ukFlag.click();
    await expect(firstAnchor).toContainText(/skills/i);
    await languageSelector.click();
    await expect(firstAnchor).toContainText(/compétences/i);
  });

  test("click on nav items scroll to anchor", async ({ page }) => {
    const ukFlag = page.getByTestId("LanguageSelectorButton--english");
    await ukFlag.click();

    const skillsLink = page.locator("header").getByText(/skills/i);
    const myProjects = page.locator("header").getByText(/my projects/i);
    const contactMe = page.locator("header").getByText(/contact me/i);

    const skillsHeading = page.locator(".Skills__heading");
    const myProjectsHeading = page.locator(".MyProjects__heading");
    const contactMeHeading = page.locator(".ContactMe__heading");

    await expect(skillsLink).toHaveAttribute("href", "#skills");
    await skillsLink.click();
    await expect(skillsHeading).toBeInViewport();

    await expect(myProjects).toHaveAttribute("href", "#my-projects");
    await myProjects.click();
    await expect(myProjectsHeading).toBeInViewport();

    await expect(contactMe).toHaveAttribute("href", "#contact-me");
    await contactMe.click();
    await expect(contactMeHeading).toBeInViewport();
  });
  test("match snapshots", async ({ page }) => {
    const ukFlag = page.getByTestId("LanguageSelectorButton--english");
    await ukFlag.click();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      name: "home-english.png",
    });

    const frFlag = page.getByTestId("LanguageSelectorButton--french");
    await frFlag.click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      name: "home-french.png",
    });
  });
});
