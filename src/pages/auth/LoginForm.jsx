import React from "react";
import "./LoginForm.scss";

const LoginForm = ({ switchToRegister }) => {
  return (
    <form className="login-form">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p className="toggle-link">
        Don't have an account? <span onClick={switchToRegister}>Register</span>
      </p>
    </form>
  );
};

export default LoginForm;
