import "./main.styles.scss";
import TodoInput from "../todo-input/todo-input.component";
import TodoProvider from "../../contexts/todo.context";
import TodoList from "../todo-list/todo-list.component";
import TodoFilter from "../todo-filter/todo-filter.component";

const Main = () => {
  return (
    <div className="main-container">
      <TodoProvider>
        <TodoInput />
        <TodoList />
        <TodoFilter />
      </TodoProvider>
    </div>
  );
};

export default Main;
