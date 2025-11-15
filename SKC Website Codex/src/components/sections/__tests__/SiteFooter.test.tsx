import { render, screen } from "@testing-library/react";
import { SiteFooter } from "../SiteFooter";

describe("SiteFooter", () => {
  it("renders site map sections (happy path)", () => {
    render(<SiteFooter />);

    expect(screen.getByText(/Corporation/i)).toBeInTheDocument();
    expect(screen.getByText(/Creation/i)).toBeInTheDocument();
    expect(screen.getByText(/Communication/i)).toBeInTheDocument();
    expect(screen.getByText(/SK Ethical Management/i)).toBeInTheDocument();
  });

  it("renders family sites and copyright", () => {
    render(<SiteFooter />);

    expect(screen.getByText(/Family site/i)).toBeInTheDocument();
    const skcLinks = screen.getAllByRole("link", { name: /SKC/i });
    expect(skcLinks.length).toBeGreaterThan(0);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} SKC`, "i"))).toBeInTheDocument();
  });
});
