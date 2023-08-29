import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import axios from "axios"

import { TodoTaskProps } from "../../interfaces/Interface.types"

import "./todo-task.css"

const TodoTask: React.FC<TodoTaskProps> = ({ task, setUpdatedAt }) => {
  const location = useLocation()

  const [complete, setComplete] = useState<boolean>(task.complete)

  const handleCheckboxChange = () => {
    try {
      const updatedTask = {
        ...task,
        updated_at: new Date().toJSON(),
        complete: !task.complete,
      }
      axios
        .patch(`http://localhost:5000/tasks/${task.id}`, updatedTask)
        .then((task) => {
          console.log(task.data)
        })
      setUpdatedAt(new Date())
    } catch (error) {
      console.log(error)
    }
    setComplete(!complete)
  }

  const handleDelete = () => {
    try {
      axios.delete(`http://localhost:5000/tasks/${task.id}`).then((task) => {
        console.log(task.status)
      })
      setUpdatedAt(new Date())
    } catch (error) {
      console.log(error)
    }
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
      <div>
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
