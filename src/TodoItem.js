import React, { useEffect, useRef } from "react";

const TodoItem = ({ todo, index, toggleEdit, editItem, deleteItem, moveItem, todosLength }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (todo.isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [todo.isEditing]);

  const handleEditKeyPress = (e) => {
    if (e.key === "Enter" && todo.text.trim()) {
      toggleEdit(index);
    }
  };

  return (
    <li className="flex items-center p-2 bg-gray-100 rounded w-full">
      {todo.isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={todo.text}
          onChange={(e) => editItem(index, e.target.value)}
          onKeyPress={handleEditKeyPress}
          className="flex-grow p-1 border rounded mr-4"
        />
      ) : (
        <span className="flex-grow text-wrap break-words min-w-0 pr-4">
          {todo.text}
        </span>
      )}
      <div className="flex space-x-2 flex-none">
        <button
          onClick={() => toggleEdit(index)}
          className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        >
          {todo.isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteItem(index)}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => moveItem(index, -1)}
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={index === 0}
        >
          ↑
        </button>
        <button
          onClick={() => moveItem(index, 1)}
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={index === todosLength - 1}
        >
          ↓
        </button>
      </div>
    </li>
  );
};

export default TodoItem;