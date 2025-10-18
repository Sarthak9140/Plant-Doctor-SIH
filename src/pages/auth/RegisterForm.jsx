import React from "react";
import "./RegisterForm.scss";

const RegisterForm = ({ switchToLogin }) => {
  return (
    <form className="register-form">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Create Account</button>
      <p className="toggle-link">
        Already have an account? <span onClick={switchToLogin}>Login</span>
      </p>
    </form>
  );
};

export default RegisterForm;
