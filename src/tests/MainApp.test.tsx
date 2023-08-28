import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"

test("if App render correctly", () => {
  render(<App />)
  const titleElement = screen.getByText("Todo List App")
  expect(titleElement).toBeInTheDocument()
})
