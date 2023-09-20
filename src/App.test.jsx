import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /React Hook Form vs Custom Form with Built-in React Hooks/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /This demo compares the performance of forms build using React's Built-in Hooks and React Hook Form./i
      )
    ).toBeInTheDocument();

    expect(screen.getByText(/Note:/i)).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /React Developer Tools/i })
    ).toHaveAttribute(
      "href",
      "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
    );
  });
});
