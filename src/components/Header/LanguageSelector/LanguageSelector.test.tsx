import React from "react";
import { expect, test, describe, vi } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";

describe("The LanguageSelector component", () => {
  test("the snapshot match", () => {
    const languageSelector = render(<LanguageSelector />);
    expect(languageSelector).toMatchSnapshot();
  });
});
