import { HomeProps } from "../../interfaces/Interface.types"
import TodoAddForm from "../TodoAddForm/TodoAddForm"
import TodoList from "../TodoList/TodoList"

const HomePage: React.FC<HomeProps> = ({ taskList, setTaskList }) => {
  return (
    <div>
      <TodoAddForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default HomePage
