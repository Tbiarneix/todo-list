import { useEffect, useState } from "react"

import { TodoListProps } from "../../interfaces/TaskListInterface"
import { Task } from "../../interfaces/TaskInterface"
import TodoTask from "../TodoTask/TodoTask"

import "./todo-list.css"

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<Task[]>(tasks)

  const [uncompleteTaskList, setUncompleteTaskList] = useState<Task[]>([])
  const [completeTaskList, setCompleteTaskList] = useState<Task[]>([])

  useEffect(() => {
    setUncompleteTaskList(taskList.filter((task) => task.complete === false))
    setCompleteTaskList(taskList.filter((task) => task.complete === true))
  }, [taskList])

  return (
    <div data-testid="todo-list">
      <div className="uncompleted-todo-list">
        {uncompleteTaskList.map((task) => (
          <TodoTask
            key={task.id}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
      <div>
        {completeTaskList.map((task) => (
          <TodoTask
            key={task.id}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
