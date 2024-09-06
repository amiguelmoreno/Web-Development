import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    let error = "";
    if (name === "email") {
      error = validateEmail(value) ? "" : "Invalid email address";
    } else if (name === "password") {
      error = validatePassword(value)
        ? ""
        : "Password must be at least 6 characters";
    } else if (name === "confirmPassword") {
      error = value === formData.password ? "" : "Passwords do not match";
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      formData.email &&
      formData.password &&
      formData.confirmPassword
    ) {
      console.log("Form submitted successfully!");
    } else {
      console.log("There are errors in the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>

      <button
        type='submit'
        disabled={
          errors.email ||
          errors.password ||
          errors.confirmPassword ||
          !formData.email ||
          !formData.password ||
          !formData.confirmPassword
        }
      >
        Register
      </button>
    </form>
  );
}

export default App;
