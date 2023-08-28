import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import TodoTask from "../components/TodoTask/TodoTask.js"

const taskData = {
  id: 1,
  title: "Create front app repository",
  description: "To begin create a repository which will contain the front app",
  created_at: "2023-10-28T10:00:00.000Z",
  updated_at: "2023-08-28T11:00:00.000Z",
  done: true,
}

test("if TodoTask render Task title correctly", () => {
  render(<TodoTask task={taskData} />)
  const taskTitle = screen.getByText(taskData.title)
  expect(taskTitle).toBeInTheDocument()
})
