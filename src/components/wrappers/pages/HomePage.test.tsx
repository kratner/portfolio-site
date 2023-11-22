// HomePage.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders the HomePage component", () => {
  // Render the component
  render(<HomePage />);

  // Assert that specific text and alt text are present on the page
  const headingElement = screen.getByText(
    /Transforming ideas into captivating experiences/i
  );
  const altTextElement = screen.getByAltText(/Keith Ratner's Artwork/i);

  expect(headingElement).toBeInTheDocument();
  expect(altTextElement).toBeInTheDocument();
});

// Add more test cases based on your component's functionality.
