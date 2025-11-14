import { render, screen } from "@testing-library/react";
import { FeatureShowcase } from "../FeatureShowcase";
import { features } from "@/data/sections";

describe("FeatureShowcase", () => {
  it("renders all features from data (happy path)", () => {
    render(<FeatureShowcase />);

    features.forEach((feature) => {
      const headings = screen.getAllByText(feature.title);
      expect(headings.length).toBeGreaterThan(0);
      expect(screen.getByText(feature.description)).toBeInTheDocument();
      expect(screen.getByText(feature.metric)).toBeInTheDocument();
    });
  });

  it("displays exactly 4 features", () => {
    render(<FeatureShowcase />);

    const featureTitles = screen.getAllByRole("heading", { level: 3 });
    expect(featureTitles).toHaveLength(4);
  });
});
