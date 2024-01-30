import { useState } from "react";
function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Login successful!");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(enter) => setUsername(enter.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(enter) => setPassword(enter.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
