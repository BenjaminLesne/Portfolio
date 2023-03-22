import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";
import { describe, expect, test } from "vitest";
import "../../translation/config";

describe("The Header component", () => {
  const header = render(<Header />);
  test("the snapshot match", () => {
    expect(header).toMatchSnapshot();
  });
});
