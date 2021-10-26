import { useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import "./Login.css";

function UserAuth() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlelogin = (e) => {
    history.push("/ahome");
  };

  return (
    <section className="user-auth">
      <h1>Admin Login</h1>
      <form>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="actionsss">
          <button onClick={handlelogin}>Login</button>
          <button
            className="toggle"
            onClick={() => {
              history.push("/");
            }}
          >
            User Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserAuth;
