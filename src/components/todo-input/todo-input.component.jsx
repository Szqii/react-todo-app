import "./todo-input.styles.scss";
import { useState } from "react";
import { useTodoContext } from "../../contexts/todo.context";

const TodoInput = () => {
  const { todoList, setTodoList, addTodo, toggleAllTodo } = useTodoContext();
  const [todoItemText, setTodoItemText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!todoItemText) return;
    addTodo(todoItemText);
    setTodoItemText(""); // Clears input field
  };

  return (
    <>
      <div className="todo-input-container">
        <div className="select-all-container">
          <input
            type="checkbox"
            name="select-all"
            id="select-all"
            className="select-all"
            checked={todoList.every((todo) => todo.isCompleted)}
            onChange={() => toggleAllTodo()}
          />
          <i className="fa fa-check-double" />
        </div>

        <form onSubmit={handleAdd}>
          <input
            className="todo-input"
            type="text"
            placeholder="What needs to be done?"
            onChange={(e) => {
              setTodoItemText(e.target.value);
            }}
            value={todoItemText}
          />
          <button className="add-button" type="submit">
            <i class="fa-solid fa-circle-plus"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoInput;
