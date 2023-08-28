export interface Task {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
  done: boolean
}

export interface TodoTaskProps {
  task: Task
}
