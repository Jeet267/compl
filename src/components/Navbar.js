import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <h1 className="text-lg">Transaction App</h1>
      <div>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
