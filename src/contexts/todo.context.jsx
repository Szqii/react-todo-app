import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initTodoListState = [{ title: "Learn React", isCompleted: false }];

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initTodoListState);
  const [filter, setFilter] = useState("all");

  const addTodo = (todoText) => {
    setTodoList([...todoList, { title: todoText, isCompleted: false }]);
  };

  const removeTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const toggleTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
    setTodoList(newTodoList);
  };

  const toggleAllTodo = () => {
    const isCompleted = todoList.every((todo) => todo.isCompleted);
    const newTodoList = [...todoList];
    newTodoList.forEach((todo) => (todo.isCompleted = !isCompleted));
    setTodoList(newTodoList);
  };

  const contextValue = {
    todoList,
    filter,
    setFilter,
    addTodo,
    removeTodo,
    toggleTodo,
    toggleAllTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;
