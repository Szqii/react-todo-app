import { useTodoContext } from "../../contexts/todo.context";
import "./todo-filter.styles.scss";

const TodoFilter = () => {
  const { filter, setFilter } = useTodoContext();

  const handleFilterChange = async (e) => {
    await setFilter(e.target.innerText.toLowerCase());
    const buttons = document.querySelectorAll(".todo-filter-button");
    buttons.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div className="todo-filter-container">
      <button
        className="todo-filter-button active"
        onClick={(e) => handleFilterChange(e)}
      >
        ALL
      </button>
      <button
        className="todo-filter-button"
        onClick={(e) => handleFilterChange(e)}
      >
        ACTIVE
      </button>
      <button
        className="todo-filter-button"
        onClick={(e) => handleFilterChange(e)}
      >
        COMPLETED
      </button>
    </div>
  );
};

export default TodoFilter;
