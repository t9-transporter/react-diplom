import React from "react";
import TodoList from "./componets/Todo/TodoList";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Взять маркеры" },
    { id: 2, completed: false, title: "Отдать маркеры" },
    { id: 3, completed: false, title: "Починить интернет" },
  ]);

  function toggleTodo(id) {
    //переделать!
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className="taskApp">
      <h1>Tasks to complete</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
