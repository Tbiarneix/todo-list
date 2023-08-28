import "./App.css"
import tasksData from "../server/db.json"
import TodoList from "./components/TodoList/TodoList"

const App = () => {
  return (
    <div id="app-container">
      <div>
        <h1>Todo List App</h1>
      </div>
      <div className="list">
        <h2>Tasks list</h2>
        <TodoList tasks={tasksData.tasks} doneStatus={false} />
        <TodoList tasks={tasksData.tasks} doneStatus={true} />
      </div>
    </div>
  )
}

export default App
