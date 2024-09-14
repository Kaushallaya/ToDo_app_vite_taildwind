import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Load initial todos from localStorage or default to an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track the index of the todo being edited

  // Save todos to localStorage whenever the todos array changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (title.trim()) {
      const newTodo = {
        title: title,
        description: description,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTitle("");  // Reset form after submission
      setDescription("");
    }
  };

  // Handle toggling todo completion status
  const toggleTodoCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Handle deleting a todo
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Handle updating the todo's title and description
  const handleSaveEdit = (index, updatedTitle, updatedDescription) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, title: updatedTitle, description: updatedDescription } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null); // Exit edit mode
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Logout Button at the top-right corner */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Logout
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">To-Do List</h1>

      {/* Form for adding a new todo */}
      <div className="space-y-4 mb-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title (required)"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description (optional)"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          onClick={handleAddTodo}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
        >
          Add Task
        </button>
      </div>

      {/* List of todos */}
      <ul className="space-y-4">
        {todos.length === 0 ? (
          <p className="text-gray-600">No tasks added yet.</p>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              className="p-4 bg-white shadow-sm rounded-lg"
            >
              {editIndex === index ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={todo.title}
                    onChange={(e) =>
                      setTodos(
                        todos.map((t, i) =>
                          i === index ? { ...t, title: e.target.value } : t
                        )
                      )
                    }
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <textarea
                    value={todo.description}
                    onChange={(e) =>
                      setTodos(
                        todos.map((t, i) =>
                          i === index ? { ...t, description: e.target.value } : t
                        )
                      )
                    }
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleSaveEdit(index, todo.title, todo.description)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{todo.title}</h2>
                    <p className="text-gray-600">
                      {todo.description || "No description"}
                    </p>
                    <span
                      className={`mt-2 inline-block px-2 py-1 text-sm font-semibold ${
                        todo.completed
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      } rounded-full`}
                    >
                      {todo.completed ? "Completed" : "Incomplete"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleTodoCompletion(index)}
                      className={`px-4 py-2 rounded-lg ${
                        todo.completed
                          ? "bg-yellow-400 text-white hover:bg-yellow-500"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {todo.completed ? "Mark as Incomplete" : "Mark as Completed"}
                    </button>
                    {!todo.completed && (
                      <button
                        onClick={() => setEditIndex(index)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteTodo(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
