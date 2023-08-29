import { useEffect, useState } from "react"
import axios from "axios"

import { Task } from "../../interfaces/Interface.types"
import TodoAddForm from "../TodoAddForm/TodoAddForm"
import TodoList from "../TodoList/TodoList"

const HomePage = () => {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [updatedAt, setUpdatedAt] = useState<Date>(new Date())

  const getData = () => {
    try {
      axios.get(`http://localhost:5000/tasks`).then((tasks) => {
        setTaskList(tasks.data)
        console.log(`Status : ${tasks.status}`)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [updatedAt])

  return (
    <div>
      <TodoAddForm setUpdatedAt={setUpdatedAt} />
      <TodoList taskList={taskList} setUpdatedAt={setUpdatedAt} />
    </div>
  )
}

export default HomePage
