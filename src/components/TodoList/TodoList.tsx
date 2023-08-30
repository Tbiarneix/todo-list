import { memo, useCallback, useEffect, useState } from "react"
import update from "immutability-helper"
import { useDrop } from "react-dnd"

import {
  ItemTypes,
  Task,
  TodoListProps,
} from "../../interfaces/Interface.types"
import TodoTask from "../TodoTask/TodoTask"
import TodoDragTask from "../TodoTask/TodoDragTask"

import "./todo-list.css"

const TodoList: React.FC<TodoListProps> = memo(function TodoList({
  taskList,
  setTaskList,
}) {
  const [uncompleteTaskList, setUncompleteTaskList] = useState<Task[]>([])
  const [completeTaskList, setCompleteTaskList] = useState<Task[]>([])

  useEffect(() => {
    setUncompleteTaskList(
      taskList
        .filter((task) => task.complete === false)
        .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)),
    )
    setCompleteTaskList(
      taskList
        .filter((task) => task.complete === true)
        .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)),
    )
  }, [taskList])

  const findTask = useCallback(
    (id: string) => {
      const task = uncompleteTaskList.filter((c) => `${c.id}` === id)[0]
      return {
        task,
        index: uncompleteTaskList.indexOf(task),
      }
    },
    [uncompleteTaskList],
  )

  const moveTask = useCallback(
    (id: string, atIndex: number) => {
      const { task, index } = findTask(id)
      setUncompleteTaskList(
        update(uncompleteTaskList, {
          $splice: [
            [index, 1],
            [atIndex, 0, task],
          ],
        }),
      )
    },
    [findTask, uncompleteTaskList, setUncompleteTaskList],
  )

  const [, drop] = useDrop(() => ({ accept: ItemTypes.TASK }))

  return (
    <>
      <h2>Tasks list</h2>
      <div data-testid="todo-list">
        <div ref={drop} className="task-list">
          {uncompleteTaskList.map((task) => (
            <TodoDragTask
              key={task.id}
              id={`${task.id}`}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              moveTask={moveTask}
              findTask={findTask}
            />
          ))}
        </div>
        <div className="task-list">
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
    </>
  )
})

export default TodoList
