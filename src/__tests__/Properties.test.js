import React from "react";
import { render } from "@testing-library/react";
import Properties from "../components/Properties";

test("renders properties component", () => {
  const { asFragment } = render(<Properties />);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});

test("renders Properties Page text", () => {
  const { getByText } = render(<Properties />);
  expect(getByText(/properties page/i)).toBeInTheDocument();
});
