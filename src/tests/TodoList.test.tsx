import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"
import TodoList from "../components/TodoList/TodoList"
import tasksData from "../../server/db.json"

describe("Test if TodoList component render the good number of tasks by done status", () => {
  const doneTasks = tasksData.tasks.filter((task) => task.done === true)
  const undoneTasks = tasksData.tasks.filter((task) => task.done === false)

  it("should render 2 task when doneStatus is true", () => {
    const doneTaskList = render(
      <TodoList tasks={tasksData.tasks} doneStatus={true} />,
    )
    expect(doneTaskList.getByTestId("todo-list").children.length).toBe(
      doneTasks.length,
    )
  })
  it("should render 1 task when doneStatus is false", () => {
    const doneTaskList = render(
      <TodoList tasks={tasksData.tasks} doneStatus={false} />,
    )
    expect(doneTaskList.getByTestId("todo-list").children.length).toBe(
      undoneTasks.length,
    )
  })
})
