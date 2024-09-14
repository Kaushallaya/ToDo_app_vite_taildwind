import React from "react";
import { useAuth } from "../services/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome, {user.email}!</h1>
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
