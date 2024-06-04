import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RoutesList from "./RoutesList.jsx";

it('renders the dogs page', function () {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <RoutesList />
    </MemoryRouter>
  );

  const h1Text = getByText("Dog Finder");
  expect(h1Text).toBeInTheDocument();
});