import "./App.css";
// import Navbar from "./Navbar";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./SingUp";
// import Signup from "./SingUp";
// const Login = () => <h2>Login</h2>;
// const SingUp = () => <h2>SingUp</h2>;
function App() {
  return (
    <div>
      <Login />
      <Signup />
    </div>
    // <>
    //   <Router>
    //     <div>
    //       <Navbar />
    //       <Route path="/" exact component={Login} />
    //       <Route path="/" component={SingUp} />
    //     </div>
    //   </Router>
    // </>
  );
}

export default App;
