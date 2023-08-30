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

export interface TaskModalProps extends TaskListProps {
  taskId?: string
}

export interface TodoListProps {
  taskList: Task[]
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
}

export interface TodoTaskProps {
  task: Task
  taskList: Task[]
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
}

export interface TodoDragTaskProps extends TodoTaskProps {
  id: string
  moveTask: (id: string, atIndex: number) => void
  findTask: (id: string) => { index: number }
}

export type HomeProps = TodoListProps
export type TaskAddFormProps = TodoListProps

export const ItemTypes = {
  TASK: "task",
}

export interface Item {
  id: string
  originalIndex: number
}
