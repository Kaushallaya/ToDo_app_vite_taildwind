import React,{ useState } from "react";
import { useAuth } from "../services/AuthContext";
import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { user, logout } = useAuth();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold">Welcome, {user.email}!</h1>
//         <button
//           onClick={logout}
//           className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

const Dashboard = () => {
  const { logout } = useAuth();  // Using logout function from AuthContext
  const navigate = useNavigate();

  // State for managing To-Do List
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Handle adding a new task
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

  // Handle toggling task completion
  const toggleTodoCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Handle deleting a task
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/");  // Redirect to login page
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
              className={`p-4 bg-white shadow-sm rounded-lg ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{todo.title}</h2>
                  <p className="text-gray-600">{todo.description || "No description"}</p>
                  <span
                    className={`mt-2 inline-block px-2 py-1 text-sm font-semibold ${
                      todo.completed ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
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
                  <button
                    onClick={() => handleDeleteTodo(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
