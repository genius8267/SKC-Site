import { render, screen } from "@testing-library/react";
import { CustomerSpotlight } from "../CustomerSpotlight";

describe("CustomerSpotlight", () => {
  it("renders DoorDash customer spotlight (happy path)", () => {
    render(<CustomerSpotlight />);

    expect(screen.getByText(/how doordash and giga built/i)).toBeInTheDocument();
    expect(screen.getByText("Andy Fang")).toBeInTheDocument();
    expect(screen.getByText("Co-Founder at DoorDash")).toBeInTheDocument();
  });

  it("displays the metric value", () => {
    render(<CustomerSpotlight />);

    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("DWR rate")).toBeInTheDocument();
  });

  it("shows the customer quote", () => {
    render(<CustomerSpotlight />);

    expect(
      screen.getByText(/we operate at a massive scale/i)
    ).toBeInTheDocument();
  });
});
