import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, describe, it } from "vitest";
import App from "./App";

describe("my app component", () => {
  it("has the default language in the lang attribute", () => {
    render(<App />);

    const AppElement = screen.getByTestId("App");
    expect(AppElement).toHaveProperty("lang", "fr");
  });

  it("has a lang attribute equal to en when click the lanuguage button", () => {
    render(<App />);

    const languageButton = screen.getByTestId("LanguageSelectorButton");

    userEvent.click(languageButton);

    const AppElement = screen.getByTestId("App");
    expect(AppElement).toHaveProperty("lang", "en");
  });
});
