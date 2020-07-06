import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  test("page matches snapshot", () => {
    const { asFragment } = render(<AddProperty />);
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

  test("renders AddProperty component ", () => {
    const { getByTestId, getByLabelText, getByRole } = render(<AddProperty />);

    const mainDiv = getByTestId("add-property");

    expect(mainDiv).toBeInTheDocument();
    expect(getByRole("button")).toHaveTextContent(/add/i);
    expect(getByLabelText(/title/i)).toBeInTheDocument();
    expect(getByLabelText(/city/i)).toBeInTheDocument();
    expect(getByLabelText(/type/i)).toBeInTheDocument();
    expect(getByLabelText(/bedrooms/i)).toBeInTheDocument();
    expect(getByLabelText(/bathrooms/i)).toBeInTheDocument();
    expect(getByLabelText(/price/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
  });
});
