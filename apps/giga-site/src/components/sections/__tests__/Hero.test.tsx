import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: { children: ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("Hero", () => {
  it("renders the Talk to us CTA (happy path)", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /talk to us/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/AI that talks like a human/i)
    ).toBeVisible();
  });
});
