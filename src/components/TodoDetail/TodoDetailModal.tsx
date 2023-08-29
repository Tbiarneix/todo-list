import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import { Task } from "../../interfaces/Interface.types"

import "./todo-detail-modal.css"

const TodoDetailModal = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [currentTask, setCurrentTask] = useState<Task | undefined>(undefined)

  const getTask = () => {
    try {
      axios.get(`http://localhost:5000/tasks/${id}`).then((task) => {
        setCurrentTask(task.data)
        console.log(`Status : ${task.status}`)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTask()
  }, [])

  return (
    <div className="todo-detail-modal">
      <div className="modal-content">
        <div>
          <h2>{currentTask?.title}</h2>
          <p>{currentTask?.description}</p>
        </div>
        <p>Status: {currentTask?.complete ? "Completed" : "To complete"}</p>
        <button onClick={() => navigate(-1)}>Close details</button>
      </div>
    </div>
  )
}

export default TodoDetailModal
