import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <br />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}

export default Login;
