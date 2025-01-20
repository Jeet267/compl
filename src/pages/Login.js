import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (role) => {
    login({ role });
  };

  return (
    <div>
      <button onClick={() => handleLogin("Employee")}>Login as Employee</button>
      <button onClick={() => handleLogin("Manager")}>Login as Manager</button>
    </div>
  );
};

export default Login;
