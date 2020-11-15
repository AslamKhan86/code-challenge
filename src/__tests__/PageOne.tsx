import React from "react";
import { fireEvent, render } from "test-utils";

import PageOne from "../components/PageOne";

test("step one completion", async () => {
  const { getByText, getByTestId } = render(<PageOne />);

  // Next button disabled initially
  expect(getByText("Next")).toHaveClass("-disabled");

  // Enabling the next button by setting the part value
  fireEvent.change(getByTestId("number"), { target: { value: 2 } });
  expect(getByText("Next")).not.toHaveClass("-disabled");

});
