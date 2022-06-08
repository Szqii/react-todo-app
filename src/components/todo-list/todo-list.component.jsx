import { useTodoContext } from "../../contexts/todo.context";
import "./todo-list.styles.scss";

const TodoList = () => {
  const { todoList, removeTodo, toggleTodo, filter } = useTodoContext();

  // Create a function to filter the todo list based on the filter value
  const filterTodoList = (todoList) => {
    if (filter === "all") {
      return todoList;
    } else if (filter === "active") {
      return todoList.filter((todo) => !todo.isCompleted);
    } else if (filter === "completed") {
      return todoList.filter((todo) => todo.isCompleted);
    }
  };

  return (
    <div className="todo-list-container">
      {filterTodoList(todoList).map((todo, index) => (
        <div key={index} className="todo-list-item">
          <div className="todo-item-desc" onClick={() => toggleTodo(index)}>
            <input
              type="checkbox"
              className="complete-todo-checkbox"
              name="complete"
              id="complete"
              checked={todo.isCompleted}
              onChange={(e) => {}} // Bug fix
            />
            <i className="fa-solid fa-circle-check"></i>
            <span>
              {todo.isCompleted ? <del>{todo.title}</del> : todo.title}
            </span>
          </div>

          <button
            className="remove-todo-button"
            onClick={() => removeTodo(index)}
          >
            <i className="fas fa-trash" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
