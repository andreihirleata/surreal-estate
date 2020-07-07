import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  test("it renders error message", () => {
    const { asFragment } = render(<Alert message="error" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("it renders success message", () => {
    const { asFragment } = render(<Alert message="success" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("it does not render an error or success message if message is empty", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("displays an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);

    expect(getByText(/error/i).textContent).toBe("Error!");
  });

  test("displays success message", () => {
    const { getByText } = render(<Alert message="Success!" success />);

    expect(getByText(/success/i).textContent).toBe("Success!");
  });
});
