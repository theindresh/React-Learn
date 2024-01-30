import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup successful!");
  };

  return (
    <div>
      <h1>Signup Page</h1>
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
          Email:
          <input
            type="email"
            value={email}
            onChange={(enter) => setEmail(enter.target.value)}
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
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
}
export default Signup;
