import { TodoTaskProps } from "../../interfaces/TaskInterface"

import "./todo-task.css"

const TodoTask: React.FC<TodoTaskProps> = ({ task }) => {
  const done = task.done

  return (
    <div className={`task ${done ? "done" : ""}`}>
      <label>
        <span>{task.title}</span>
      </label>
    </div>
  )
}

export default TodoTask
