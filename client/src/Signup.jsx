import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
    },
    container: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "300px",
    },
    header: {
      textAlign: "center",
      color: "#333333",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      color: "#666666",
      marginBottom: "5px",
      fontSize: "14px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #cccccc",
      borderRadius: "5px",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#6200ea",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#4500b8",
    },
    paragraph: {
      textAlign: "center",
      fontSize: "14px",
      color: "#333333",
    },
    link: {
      color: "#6200ea",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.header}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="name">
            Full Name
          </label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label style={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <input
            style={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.button} type="submit">
            Sign Up
          </button>
        </form>
        <p style={styles.paragraph}>
          Already have an account?{" "}
          <a style={styles.link} href="/login">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
