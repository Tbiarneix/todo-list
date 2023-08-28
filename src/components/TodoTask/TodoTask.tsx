import React, { useState } from "react"
import { Task, TodoTaskProps } from "../../interfaces/TaskInterface"

import "./todo-task.css"

const TodoTask: React.FC<TodoTaskProps> = ({ task, taskList, setTaskList }) => {
  const [complete, setComplete] = useState<boolean>(task.complete)

  const handleCheckboxChange = () => {
    setComplete(!complete)
    const newTaskList: Task[] = taskList.map((taskItem) => {
      if (taskItem.id === task.id) {
        return { ...taskItem, complete: !taskItem.complete }
      } else {
        return taskItem
      }
    })
    setTaskList(newTaskList)
  }

  return (
    <div className={`task ${complete ? "complete" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={complete}
          onChange={handleCheckboxChange}
        />
        <span>{task.title}</span>
      </label>
    </div>
  )
}

export default TodoTask
