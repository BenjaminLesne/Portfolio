import { render, screen } from "@testing-library/react";
import { expect, describe, it } from 'vitest'
import App from "./App";

describe('my app component', () => {
  it('has the default language in the lang attribute', () => {
  render(<App />);

  const AppElement = screen.getByTestId("App");
  expect(AppElement).toHaveProperty("lang", "fr");
  })
})
