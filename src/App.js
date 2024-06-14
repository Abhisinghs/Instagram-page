import { useState } from "react";
import "./App.css";

function App() {
  let [login, setLogin] = useState(true);
  let logo =
    "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png";
  function loginSwitch() {
    setLogin(!login);
  }
  return (
    <div className="container">
      <div id="sub-container">
        <img src={logo} alt="instagram" />
        <input
          hidden={login}
          type="text"
          placeholder="Mobile number or email"
        />
        <input hidden={login} type="text" placeholder="Full name" required />
        <input
          type="text"
          placeholder="Phone number, username, or email"
          required
        />
        <input type="password" placeholder="Password" required />
        <button type="button">{login ? "Sign in" : "Sign Up"}</button>
      </div>
      <footer>
        <div>
          {login ? "Don't have an account?" : "Have an account?"}{" "}
          <span onClick={loginSwitch}>{login ? "Sign Up" : "Sign in"}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
