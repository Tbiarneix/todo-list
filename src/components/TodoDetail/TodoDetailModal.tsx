import { useNavigate, useParams } from "react-router-dom"

import { TaskModalProps } from "../../interfaces/TaskModal"
import tasksData from "../../../server/db.json"

import "./todo-detail-modal.css"
import { useEffect, useState } from "react"
import { Task } from "../../interfaces/TaskInterface"

const TodoDetailModal: React.FC<TaskModalProps> = ({ task }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [currentTask, setCurrentTasks] = useState<Task | undefined>(task)

  useEffect(() => {
    if (!task) {
      const currenTaskId = Number(id)
      const currentTask = tasksData.tasks.find(
        (task) => task.id === currenTaskId,
      )
      setCurrentTasks(currentTask)
    } else {
      setCurrentTasks(task)
    }
  }, [])

  return (
    <div className="todo-detail-modal">
      <div className="modal-content">
        <div>
          <h2>{currentTask?.title}</h2>
          <p>{currentTask?.description}</p>
        </div>
        <button onClick={() => navigate(-1)}>Close details</button>
      </div>
    </div>
  )
}

export default TodoDetailModal
