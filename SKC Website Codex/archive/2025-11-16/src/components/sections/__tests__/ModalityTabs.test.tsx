import { render, screen, fireEvent } from "@testing-library/react";
import { ModalityTabs } from "../ModalityTabs";

describe("ModalityTabs", () => {
  it("renders all modality tabs (happy path)", () => {
    render(<ModalityTabs />);

    expect(screen.getByRole("button", { name: /chat/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voice/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /multi-modal/i })).toBeInTheDocument();
  });

  it("shows chat content by default", () => {
    render(<ModalityTabs />);

    expect(screen.getByText(/conversational chat agents/i)).toBeInTheDocument();
  });

  it("switches content when clicking voice tab", () => {
    render(<ModalityTabs />);

    const voiceButton = screen.getByRole("button", { name: /voice/i });
    fireEvent.click(voiceButton);

    expect(screen.getByText(/emotionally aware voice experiences/i)).toBeInTheDocument();
  });

  it("handles rapid tab switching", () => {
    render(<ModalityTabs />);

    const voiceButton = screen.getByRole("button", { name: /voice/i });
    const chatButton = screen.getByRole("button", { name: /chat/i });
    const multiModalButton = screen.getByRole("button", { name: /multi-modal/i });

    fireEvent.click(voiceButton);
    fireEvent.click(multiModalButton);
    fireEvent.click(chatButton);

    expect(screen.getByText(/conversational chat agents/i)).toBeInTheDocument();
  });
});
