import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"

import { Task, TodoAddFormProps } from "../../interfaces/Interface.types"

import "./todo-add-form.css"
import axios from "axios"

const TodoAddForm: React.FC<TodoAddFormProps> = ({ setUpdatedAt }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<Task>()

  const [showAddTaskForm, setShowAddTaskForm] = useState(false)

  const onSubmit: SubmitHandler<Task> = (data) => {
    const newTask = {
      ...data,
      id: uuidv4(),
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      complete: false,
    }
    try {
      axios.post(`http://localhost:5000/tasks/`, newTask).then((task) => {
        console.log(task)
      })
      setUpdatedAt(new Date())
    } catch (error) {
      console.log(error)
    }
    resetField("title")
    resetField("description")
    setShowAddTaskForm(!showAddTaskForm)
  }

  const handleShowAddTaskForm = () => {
    resetField("title")
    resetField("description")
    setShowAddTaskForm(!showAddTaskForm)
  }

  return (
    <>
      {!showAddTaskForm && (
        <button className="show-form-button" onClick={handleShowAddTaskForm}>
          Add a new task
        </button>
      )}
      {showAddTaskForm && (
        <form className="todo-add-container" onSubmit={handleSubmit(onSubmit)}>
          <h2>Add a new task</h2>
          <div className="todo-add-form">
            <div className="todo-add-input-container">
              <div className="todo-add-input-section">
                <label htmlFor="title">Add task title *</label>
                <input
                  placeholder="Add a task"
                  {...register("title", { required: true })}
                />
                {errors.title && <span>This field is required</span>}
              </div>
              <div className="todo-add-input-section">
                <label htmlFor="description">Add task description</label>
                <input
                  placeholder="Add a task description (optionnal)"
                  {...register("description")}
                />
              </div>
            </div>
            <button type="submit">Add</button>
          </div>
          <div className="hide-form">
            <button onClick={handleShowAddTaskForm}>Hide form</button>
          </div>
        </form>
      )}
    </>
  )
}

export default TodoAddForm
