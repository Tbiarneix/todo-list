export interface Task {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
  complete: boolean
}

export interface TodoTaskProps {
  task: Task
  taskList: Task[]
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
}
