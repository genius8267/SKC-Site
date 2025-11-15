import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero", () => {
  it("renders hero slide content (happy path)", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { name: /global esg/i })).toBeVisible();
    expect(screen.getByText(/family companies/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /go to slide/i }).length).toBeGreaterThan(0);
  });

  it("shows fallback when no slides provided (failure mode)", () => {
    render(<Hero slides={[]} />);

    expect(screen.getByTestId("hero-fallback")).toHaveTextContent(
      /no hero slides/i,
    );
  });
});
