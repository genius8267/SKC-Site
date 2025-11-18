import { render, screen } from "@testing-library/react";
import { SectionHeading } from "../section-heading";

describe("SectionHeading", () => {
  it("renders title (happy path)", () => {
    render(<SectionHeading title="Test Heading" />);

    expect(screen.getByRole("heading", { name: /test heading/i })).toBeInTheDocument();
  });

  it("renders eyebrow when provided", () => {
    render(<SectionHeading title="Test" eyebrow="New Feature" />);

    expect(screen.getByText("New Feature")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<SectionHeading title="Test" description="This is a test description" />);

    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("does not render eyebrow when not provided", () => {
    render(<SectionHeading title="Test" />);

    const eyebrow = screen.queryByText(/new feature/i);
    expect(eyebrow).not.toBeInTheDocument();
  });

  it("applies center alignment when specified", () => {
    const { container } = render(<SectionHeading title="Test" align="center" />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("section-heading--center");
  });
});
