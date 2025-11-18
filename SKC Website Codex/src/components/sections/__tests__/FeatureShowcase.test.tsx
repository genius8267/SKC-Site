import { render, screen } from "@testing-library/react";
import { creationTracks } from "@/data/sections";
import { FeatureShowcase } from "../FeatureShowcase";

describe("FeatureShowcase", () => {
  it("renders creation track cards (happy path)", () => {
    render(<FeatureShowcase />);

    creationTracks.forEach((track) => {
      expect(screen.getByText(track.title)).toBeInTheDocument();
      track.items.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  it("renders nothing when no tracks supplied", () => {
    const { container } = render(<FeatureShowcase tracks={[]} />);

    expect(container.firstChild).toBeNull();
  });
});
