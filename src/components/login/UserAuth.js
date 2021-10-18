import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function UserAuth({ setUserLogin }) {
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
    // e.preventDefaults();
    axios.post("http://localhost:9004/login", user).then((res) => {
      // alert(res.data.message);
      setUserLogin(res.data.user);
      history.push("/user");
    });
  };

  return (
    <section className="user-auth">
      <h1>Employee Login</h1>
      <form>
        <div className="control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="actions">
          <button onClick={handlelogin}>Login</button>
          <button
            className="toggle"
            onClick={() => {
              history.push("/admin");
            }}
          >
            Admin Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserAuth;
