import { BrowserRouter } from "react-router-dom"

import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"

import TodoList from "../components/TodoList/TodoList"

import tasksData from "../../server/db.json"

describe("Test if TodoList component render the good number of tasks by complete status", () => {
  const completeTasks = tasksData.tasks.filter((task) => task.complete === true)
  const uncompleteTasks = tasksData.tasks.filter(
    (task) => task.complete === false,
  )

  it("should render 2 task when completeStatus is true", () => {
    const completeTaskList = render(
      <BrowserRouter>
        <TodoList tasks={tasksData.tasks} />,
      </BrowserRouter>,
    )
    expect(completeTaskList.getByTestId("todo-list").children.length).toBe(
      completeTasks.length,
    )
  })
  it("should render 1 task when completeStatus is false", () => {
    const completeTaskList = render(
      <BrowserRouter>
        <TodoList tasks={tasksData.tasks} />,
      </BrowserRouter>,
    )
    expect(completeTaskList.getByTestId("todo-list").children.length).toBe(
      uncompleteTasks.length,
    )
  })
})
