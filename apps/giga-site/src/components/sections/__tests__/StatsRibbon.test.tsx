import { render, screen } from "@testing-library/react";
import { StatsRibbon } from "../StatsRibbon";
import { stats } from "@/data/sections";

describe("StatsRibbon", () => {
  it("renders all stats from data (happy path)", () => {
    render(<StatsRibbon />);

    stats.forEach((stat) => {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.detail)).toBeInTheDocument();
    });
  });

  it("displays stats in correct order", () => {
    render(<StatsRibbon />);

    const labels = screen.getAllByText(/deflection rate|supported languages|custom agents/i);
    expect(labels).toHaveLength(3);
  });
});
