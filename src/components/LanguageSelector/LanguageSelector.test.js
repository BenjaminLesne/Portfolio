import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import data from "../../utils/data";
import LanguageSelector from "./";

test("renders english and french flag", async () => {
  render(
    <LanguageSelector textContent={data.LanguageSelector} language={"FR"} />
  );

  const ukFlag = screen.getByAltText(/French flag \/ Drapeau français/i);
  const frenchFlag = screen.getByAltText(/UK flag \/ Drapeau anglais/i);
  expect(ukFlag).toBeInTheDocument();
  expect(frenchFlag).toBeInTheDocument();
});

test("setLanguage should be called on click", async () => {
  const setLanguage = jest.fn();
  render(
    <LanguageSelector
      textContent={data.LanguageSelector}
      language={"FR"}
      setLanguage={setLanguage}
    />
  );

  const languageButton = screen.getByTestId("LanguageSelectorButton");
  userEvent.click(languageButton);

  expect(setLanguage).toHaveBeenCalledTimes(1);
});
