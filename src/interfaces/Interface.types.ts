export interface Task {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
  complete: boolean
}

export interface TaskProps {
  task: Task
}

export interface TaskListProps {
  taskList: Task[]
}

export interface TodoAddFormProps {
  setUpdatedAt: React.Dispatch<React.SetStateAction<Date>>
}

export interface TodoListProps {
  taskList: Task[]
  setUpdatedAt: React.Dispatch<React.SetStateAction<Date>>
}

export interface TodoTaskProps {
  task: Task
  setUpdatedAt: React.Dispatch<React.SetStateAction<Date>>
}
