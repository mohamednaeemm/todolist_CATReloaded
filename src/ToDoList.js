import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addItem = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, isEditing: false }]);
      setNewTodo("");
    }
  };

  const deleteItem = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleEdit = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  const editItem = (index, newText) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    ));
  };

  const moveItem = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex >= 0 && newIndex < todos.length) {
      const updatedTodos = [...todos];
      const [movedItem] = updatedTodos.splice(index, 1);
      updatedTodos.splice(newIndex, 0, movedItem);
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="mx-auto my-10 p-6 bg-teal-500 rounded shadow-lg w-full sm:w-3/5 md:w-2/5 min-w-[300px] max-w-[600px]">
        <h1 className="text-2xl font-bold text-center mb-6">To-Do List</h1>
        <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addItem={addItem} />
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              toggleEdit={toggleEdit}
              editItem={editItem}
              deleteItem={deleteItem}
              moveItem={moveItem}
              todosLength={todos.length}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;