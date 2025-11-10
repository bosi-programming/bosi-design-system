import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("should show title, content and actions", () => {
    render(<Card title="Title" content="Content" actions="Actions" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });
  it("should accept className", () => {
    render(<Card title="Title" content="Content" className="test" />);
    expect(screen.getByTestId("card")).toHaveClass("test");
  });
});
