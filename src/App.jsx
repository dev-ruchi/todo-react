import { useState } from "react";

export default function App() {

  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("")

  function toggleIsCompleted(todo) {
    setTodos(todos.map(todoItem => {
      if (todo.title === todoItem.title) {
        todo.isComplated = !todo.isComplated;
      }

      return todoItem;
    }))
  }

  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, { title: todoTitle, isComplated: false }]);
    setTodoTitle("");
  }

  return (
    <div className="py-4 px-20">
      <h1 className="text-3xl mb-10">My Todos</h1>

      <form onSubmit={addTodo}>
        <div className="mb-3">
          <label htmlFor="">Add new todo</label>
          <input required value={todoTitle} onChange={(e) => { setTodoTitle(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Add</button>
      </form>


      <div className="mt-10">
        {
          todos.map(todo => {
            return (
              <div key={todo.title} className="flex items-center">
                <input className="mr-2" type="checkbox" checked={todo.isComplated} onChange={() => { toggleIsCompleted(todo) }} />
                <h2 className="font-bold">{todo.title}</h2>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}
