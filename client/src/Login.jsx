import React from "react";

const Login = () => {
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
        <h1 style={styles.header}>Login</h1>
        <form>
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
          />

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>
        <p style={styles.paragraph}>
          Don't have an account?{" "}
          <a style={styles.link} href="./register">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
