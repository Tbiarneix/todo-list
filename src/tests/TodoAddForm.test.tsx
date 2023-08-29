import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"

import TodoAddForm from "../components/TodoAddForm/TodoAddForm"

const setTaskListMock = vi.fn()
const taskList = [
  {
    id: "857ccbf0-33e8-4ff2-81ed-e9ee1ea22604",
    title: "Create front app repository",
    description:
      "To begin create a repository which will contain the front app",
    created_at: "2023-10-28T10:00:00.000Z",
    updated_at: "2023-08-28T11:00:00.000Z",
    complete: true,
  },
]
test("if TodoAddForm is properly rendering", async () => {
  render(
    <BrowserRouter>
      <TodoAddForm taskList={taskList} setTaskList={setTaskListMock} />
    </BrowserRouter>,
  )

  const addButton = screen.getByText("Add a new task")
  await userEvent.click(addButton)

  expect(
    screen.getByRole("heading", { name: "Add a new task" }),
  ).toBeInTheDocument()

  expect(screen.getByPlaceholderText("Add a task")).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText("Add a task description (optionnal)"),
  ).toBeInTheDocument()

  expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument()
})

test("if TodoAddForm adds a new task when submitted", async () => {
  render(
    <BrowserRouter>
      <TodoAddForm taskList={taskList} setTaskList={setTaskListMock} />
    </BrowserRouter>,
  )

  const addButton = screen.getByText("Add a new task")
  await userEvent.click(addButton)

  const titleInput = screen.getByPlaceholderText("Add a task")
  const descriptionInput = screen.getByPlaceholderText(
    "Add a task description (optionnal)",
  )
  const addButtonInForm = screen.getByText("Add")

  await userEvent.type(titleInput, "New Task Title")
  expect(titleInput).toHaveValue("New Task Title")
  await userEvent.type(descriptionInput, "New Task Description")
  expect(descriptionInput).toHaveValue("New Task Description")
  await userEvent.click(addButtonInForm)

  expect(setTaskListMock).toHaveBeenCalledWith(
    expect.arrayContaining([
      expect.objectContaining({
        title: "New Task Title",
        description: "New Task Description",
        complete: false,
      }),
    ]),
  )
})

test("if error is display when title is missing", async () => {
  render(
    <BrowserRouter>
      <TodoAddForm taskList={taskList} setTaskList={setTaskListMock} />
    </BrowserRouter>,
  )

  const addButton = screen.getByText("Add a new task")
  await userEvent.click(addButton)

  const addButtonInForm = screen.getByText("Add")

  await userEvent.click(addButtonInForm)

  expect(screen.getByText("This field is required")).toBeInTheDocument()
})
