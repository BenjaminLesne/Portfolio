import React from "react";
import { expect, test, describe } from "vitest";
import { render } from "@testing-library/react";
import { LanguageSelector } from "./LanguageSelector";

describe("The LanguageSelector component", () => {
  test("the snapshot match", () => {
    const languageSelector = render(<LanguageSelector />);
    expect(languageSelector).toMatchSnapshot();
  });
});
