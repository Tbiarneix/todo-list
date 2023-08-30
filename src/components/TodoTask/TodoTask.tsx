import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

import { Task, TodoTaskProps } from "../../interfaces/Interface.types"

import "./todo-task.css"

const TodoTask: React.FC<TodoTaskProps> = ({ task, taskList, setTaskList }) => {
  const location = useLocation()

  const [complete, setComplete] = useState<boolean>(task.complete)

  const handleCheckboxChange = () => {
    setComplete(!complete)
    const newTaskList: Task[] = taskList.map((taskItem) => {
      if (taskItem.id === task.id) {
        return {
          ...taskItem,
          updated_at: new Date().toJSON(),
          complete: !taskItem.complete,
        }
      } else {
        return taskItem
      }
    })
    setTaskList(newTaskList)
  }

  const handleDelete = () => {
    const newTaskList: Task[] = taskList.filter((taskItem) => {
      return taskItem.id !== task.id
    })
    setTaskList(newTaskList)
  }

  return (
    <div className={`task ${complete ? "complete" : ""}`}>
      <div>
        <label>
          <input
            type="checkbox"
            checked={complete}
            onChange={handleCheckboxChange}
          />
          <span>{task.title}</span>
        </label>
      </div>
      <div className="action-buttons">
        <Link to={`/task/${task.id}`} state={{ background: location }}>
          <button>Show details</button>
        </Link>
        <button onClick={handleDelete}>X</button>
      </div>
      <Outlet />
    </div>
  )
}

export default TodoTask
