import { memo, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useDrag, useDrop } from "react-dnd"

import {
  Item,
  ItemTypes,
  Task,
  TodoDragTaskProps,
} from "../../interfaces/Interface.types"

import "./todo-task.css"

const TodoDragTask: React.FC<TodoDragTaskProps> = memo(function TodoTask({
  id,
  task,
  taskList,
  setTaskList,
  moveTask,
  findTask,
}) {
  const originalIndex = findTask(id).index
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.TASK,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveTask(droppedId, originalIndex)
        }
      },
    }),
    [id, originalIndex, moveTask],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findTask(id)
          moveTask(draggedId, overIndex)
        }
      },
    }),
    [findTask, moveTask],
  )

  const location = useLocation()

  const [complete, setComplete] = useState<boolean>(task.complete)

  const handleCheckboxChange = () => {
    setComplete(!complete)
    const newTaskList: Task[] = taskList.map((taskItem) => {
      if (taskItem.id === task.id) {
        return {
          ...taskItem,
          updated_at: new Date().toJSON(),
          complete: !taskItem.complete,
        }
      } else {
        return taskItem
      }
    })
    setTaskList(newTaskList)
  }

  const handleDelete = () => {
    const newTaskList: Task[] = taskList.filter((taskItem) => {
      return taskItem.id !== task.id
    })
    setTaskList(newTaskList)
  }

  const opacity = isDragging ? 0 : 1
  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`task ${complete ? "complete" : "uncomplete"}`}
      style={{ opacity }}
    >
      <div>
        <label>
          <input
            type="checkbox"
            checked={complete}
            onChange={handleCheckboxChange}
          />
        </label>
        <span>{task.title}</span>
      </div>
      <div className="action-buttons">
        <Link to={`/task/${task.id}`} state={{ background: location }}>
          <button>Show details</button>
        </Link>
        <button onClick={handleDelete}>X</button>
      </div>
      <Outlet />
    </div>
  )
})

export default TodoDragTask
