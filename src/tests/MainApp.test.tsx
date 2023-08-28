import { BrowserRouter } from "react-router-dom"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

import App from "../App"

test("if App render correctly", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
  const titleElement = screen.getByText("Todo List App")
  expect(titleElement).toBeInTheDocument()
})
