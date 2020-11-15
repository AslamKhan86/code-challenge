import React from "react";
import { render } from "test-utils";

import Stepper from "../components/Stepper";
import theme from "../theme";

test("renders properly", async () => {
  const { getByText } = render(<Stepper step={2} totalSteps={3} />);

  expect(getByText("1")).toHaveStyle(`
    background: ${theme.colors.primary};
  `);
  expect(getByText("2")).toHaveStyle(`
    background: ${theme.colors.primary};
  `);
  expect(getByText("3")).toHaveStyle(`
    background: ${theme.colors.secondary};
  `);
});
