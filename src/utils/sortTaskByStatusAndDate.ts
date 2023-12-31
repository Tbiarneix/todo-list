import { Task } from "../interfaces/Interface.types"

export const sortTasksByStatusAndDate = (taskList: Task[]): Task[] => {
  const completeTasks: Task[] = []
  const notCompleteTasks: Task[] = []

  taskList.forEach((task: Task) => {
    if (task.complete) {
      completeTasks.push(task)
    } else {
      notCompleteTasks.push(task)
    }
  })

  return [...notCompleteTasks, ...completeTasks]
}
