import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Task, TaskModalProps } from "../../interfaces/Interface.types"

import "./todo-detail-modal.css"

const TodoDetailModal: React.FC<TaskModalProps> = ({ taskList, taskId }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [currentTask, setCurrentTasks] = useState<Task | undefined>(undefined)

  useEffect(() => {
    const currentTask = taskList.find(
      (task) => task.id === (taskId ? taskId : id),
    )
    setCurrentTasks(currentTask)
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
