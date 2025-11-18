import { render, screen } from "@testing-library/react";
import { AgentCanvasSection } from "../AgentCanvasSection";
import { canvasSteps } from "@/data/sections";

describe("AgentCanvasSection", () => {
  it("renders section heading (happy path)", () => {
    render(<AgentCanvasSection />);

    expect(
      screen.getByRole("heading", {
        name: /the fastest way to build, govern, and scale/i,
      })
    ).toBeInTheDocument();
  });

  it("displays all canvas steps", () => {
    render(<AgentCanvasSection />);

    canvasSteps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    });
  });

  it("shows workflow counter", () => {
    render(<AgentCanvasSection />);

    expect(screen.getByText(/insights 1 of 28/i)).toBeInTheDocument();
  });

  it("renders document dropzone component", () => {
    render(<AgentCanvasSection />);

    expect(screen.getByLabelText(/upload training documents/i)).toBeInTheDocument();
  });
});
