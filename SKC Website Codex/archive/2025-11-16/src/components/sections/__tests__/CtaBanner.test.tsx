import { render, screen } from "@testing-library/react";
import { CtaBanner } from "../CtaBanner";

describe("CtaBanner", () => {
  it("renders the CTA heading (happy path)", () => {
    render(<CtaBanner />);

    expect(
      screen.getByRole("heading", { name: /ready to see the giga ai agent/i })
    ).toBeInTheDocument();
  });

  it("renders the demo link", () => {
    render(<CtaBanner />);

    const link = screen.getByRole("link", { name: /book a demo/i });
    expect(link).toHaveAttribute("href", "/demo");
  });

  it("renders the contact link", () => {
    render(<CtaBanner />);

    const link = screen.getByRole("link", { name: /talk to sales/i });
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("displays the supporting text", () => {
    render(<CtaBanner />);

    expect(
      screen.getByText(/ai agents handle complex workflows at scale/i)
    ).toBeInTheDocument();
  });
});
