import { render, screen } from "@testing-library/react";
import { StatsRibbon } from "../StatsRibbon";

describe("StatsRibbon", () => {
  it("renders metrics and highlights (happy path)", () => {
    render(<StatsRibbon />);

    expect(
      screen.getByRole("heading", { name: /technology transformation/i }),
    ).toBeVisible();
    expect(screen.getByText(/Establishment/i)).toBeInTheDocument();
    expect(screen.getByText(/Woncheol Park/i)).toBeInTheDocument();
  });

  it("shows fallback if no data provided (failure mode)", () => {
    render(<StatsRibbon metrics={[]} highlights={[]} />);

    expect(screen.getByTestId("corporation-fallback")).toHaveTextContent(
      /data is empty/i,
    );
  });
});
