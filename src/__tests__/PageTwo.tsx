import React from "react";
import { fireEvent, render } from "test-utils";

import PageTwo from "../components/PageTwo";

test("step two completion", async () => {
  const { getByText, getAllByTestId } = render(<PageTwo />, {
    parts: [0, 0, 0, 0],
    stepsCompleted: 1,
  });

  // Next btn disabled
  expect(getByText("Next")).toHaveClass("-disabled");

  // Entering value to sum up 100 and btn status is enabled
  getAllByTestId("percent").forEach((node) => {
    fireEvent.change(node, { target: { value: "25" } });
  });
  expect(getByText("Next")).not.toHaveClass("-disabled");

  // Entering value sum not 100 and btn is disabled
  getAllByTestId("percent").forEach((node) => {
    fireEvent.change(node, { target: { value: "10" } });
  });
  expect(getByText("Next")).toHaveClass("-disabled");
});
