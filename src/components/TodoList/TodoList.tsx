import { useEffect, useState } from "react"

import { Task, TodoListProps } from "../../interfaces/Interface.types"
import TodoTask from "../TodoTask/TodoTask"

import "./todo-list.css"

const TodoList: React.FC<TodoListProps> = ({ taskList, setUpdatedAt }) => {
  const [uncompleteTaskList, setUncompleteTaskList] = useState<Task[]>([])
  const [completeTaskList, setCompleteTaskList] = useState<Task[]>([])

  useEffect(() => {
    setUncompleteTaskList(
      taskList
        .filter((task) => task.complete === false)
        .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)),
    )
    setCompleteTaskList(
      taskList
        .filter((task) => task.complete === true)
        .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)),
    )
  }, [taskList])

  return (
    <>
      <h2>Tasks list</h2>
      <div data-testid="todo-list">
        <div className="task-list">
          {uncompleteTaskList.map((task) => (
            <TodoTask key={task.id} task={task} setUpdatedAt={setUpdatedAt} />
          ))}
        </div>
        <div className="task-list">
          {completeTaskList.map((task) => (
            <TodoTask key={task.id} task={task} setUpdatedAt={setUpdatedAt} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TodoList
