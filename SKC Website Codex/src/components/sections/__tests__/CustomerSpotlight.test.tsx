import { render, screen } from "@testing-library/react";
import { CustomerSpotlight } from "../CustomerSpotlight";

describe("CustomerSpotlight (Communication hub)", () => {
  it("renders newsroom and social links (happy path)", () => {
    render(<CustomerSpotlight />);

    expect(screen.getByRole("heading", { name: /newsroom/i })).toBeVisible();
    expect(screen.getByText(/SKC announces Q3 earnings/i)).toBeInTheDocument();
    expect(screen.getByText(/SKC Social Media/i)).toBeInTheDocument();
  });

  it("renders nothing when no content provided", () => {
    const { container } = render(
      <CustomerSpotlight news={[]} media={[]} socials={[]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
