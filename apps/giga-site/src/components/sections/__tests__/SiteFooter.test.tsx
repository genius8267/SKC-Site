import { render, screen } from "@testing-library/react";
import { SiteFooter } from "../SiteFooter";

describe("SiteFooter", () => {
  it("renders all navigation sections (happy path)", () => {
    render(<SiteFooter />);

    expect(screen.getByText(/product/i)).toBeInTheDocument();
    expect(screen.getByText(/company/i)).toBeInTheDocument();
    expect(screen.getByText(/resources/i)).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("link", { name: /agent canvas/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /careers/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /blog/i })).toBeInTheDocument();
  });

  it("displays copyright information", () => {
    render(<SiteFooter />);

    expect(screen.getByText(/© 2025 giga ai, inc\./i)).toBeInTheDocument();
  });
});
