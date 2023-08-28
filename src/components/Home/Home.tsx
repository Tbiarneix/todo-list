import tasksData from "../../../server/db.json"
import TodoList from "../TodoList/TodoList"

const HomePage = () => {
  return (
    <div>
      <h2>Tasks list</h2>
      <TodoList tasks={tasksData.tasks} />
    </div>
  )
}

export default HomePage
