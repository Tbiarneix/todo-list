import { TodoListProps } from "../../interfaces/TaskListInterface"
import TodoTask from "../TodoTask/TodoTask"
import "./todo-list.css"

const TodoList: React.FC<TodoListProps> = ({ tasks, doneStatus }) => {
  const filteredTasks = tasks.filter((task) => task.done === doneStatus)

  const sortedTasks = filteredTasks.slice().sort((a, b) => {
    return Date.parse(b.created_at) - Date.parse(a.created_at)
  })

  return (
    <div className="todo-list" data-testid="todo-list">
      {sortedTasks.map((task) => (
        <TodoTask key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TodoList
