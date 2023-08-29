import { Routes, Route, useLocation } from "react-router-dom"

import Home from "./components/Home/Home"
import TodoDetailModal from "./components/TodoDetail/TodoDetailModal"
import ErrorPage from "./ErrorPage"

import "./App.css"

const App = () => {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
    <div id="app-container">
      <h1>Todo List App</h1>
      <Routes location={background || location}>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/task/:id" element={<TodoDetailModal />} />
        </Routes>
      )}
    </div>
  )
}

export default App
