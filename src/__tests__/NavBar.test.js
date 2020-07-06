import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("renders properties component", () => {
  const history = createMemoryHistory();
  const { asFragment } = render(
    <Router history={history}>
      <NavBar />
    </Router>
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});
