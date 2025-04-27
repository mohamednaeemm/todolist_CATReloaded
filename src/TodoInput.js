import React from "react";

const TodoInput = ({ newTodo, setNewTodo, addItem }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-4/5 p-2 border rounded-l focus:outline-none"
        placeholder="Add a new task..."
      />
      <button
        onClick={addItem}
        className="w-1/5 px-4 bg-blue-700 text-white rounded-r hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;