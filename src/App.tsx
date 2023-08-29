import { useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import { Task } from "./interfaces/Interface.types"
import Home from "./components/Home/Home"
import TodoDetailModal from "./components/TodoDetail/TodoDetailModal"
import ErrorPage from "./ErrorPage"

import tasksData from "../server/db.json"

import "./App.css"

const App = () => {
  const location = useLocation()
  const background = location.state && location.state.background

  const [taskList, setTaskList] = useState<Task[]>(tasksData.tasks)

  return (
    <div id="app-container">
      <h1>Todo List App</h1>
      <Routes location={background || location}>
        <Route>
          <Route
            path="/"
            element={<Home taskList={taskList} setTaskList={setTaskList} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/task/:id"
            element={<TodoDetailModal taskList={taskList} />}
          />
        </Routes>
      )}
    </div>
  )
}

export default App
