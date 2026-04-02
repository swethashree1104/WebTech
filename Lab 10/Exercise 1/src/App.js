import React, { useState } from "react";

function App() {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for errors
  const [errors, setErrors] = useState({});

  // Validate function
  const validate = () => {
    let tempErrors = {};

    if (!name) {
      tempErrors.name = "Name is required";
    }

    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      tempErrors.email = "Enter a valid email";
    }

    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (validate()) {
      alert("Form Submitted Successfully!");

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        {/* Email */}
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;