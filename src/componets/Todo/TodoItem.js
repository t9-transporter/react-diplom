import React from "react";
import "./TodoStyles.css";

function TodoItem({ todo, index, onChange }) {
  let classes = ["listItemText"];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="listItem">
      <div className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <h2 className="listItemH2">{index + 1}</h2>
        {todo.title}
      </div>
      <button className="listItemBtn">x</button>
    </li>
  );
}
export default TodoItem;
