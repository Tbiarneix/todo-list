import { BrowserRouter } from "react-router-dom"

import { expect, test, vi } from "vitest"
import { render, screen } from "@testing-library/react"

import TodoTask from "../components/TodoTask/TodoTask.js"

const setTaskListMock = vi.fn()
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

test("if TodoTask render Task title correctly", () => {
  render(
    <BrowserRouter>
      <TodoTask
        task={taskData[0]}
        taskList={taskData}
        setTaskList={setTaskListMock}
      />
    </BrowserRouter>,
  )
  const taskTitle = screen.getByText(taskData[0].title)
  expect(taskTitle).toBeInTheDocument()
})
