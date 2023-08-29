import { BrowserRouter } from "react-router-dom"

import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import TodoDetailModal from "../components/TodoDetail/TodoDetailModal.js"

const taskData = [
  {
    id: "1",
    title: "Create front app repository",
    description:
      "To begin create a repository which will contain the front app",
    created_at: "2023-10-28T10:00:00.000Z",
    updated_at: "2023-08-28T11:00:00.000Z",
    complete: true,
  },
]

test("if Todo Detail Modal render Task informations correctly", () => {
  render(
    <BrowserRouter>
      <TodoDetailModal taskList={taskData} taskId="1" />
    </BrowserRouter>,
  )
  const taskTitle = screen.getByText(taskData[0].title)
  const taskDescription = screen.getByText(taskData[0].description)

  expect(taskTitle).toBeInTheDocument()
  expect(taskDescription).toBeInTheDocument()
})
