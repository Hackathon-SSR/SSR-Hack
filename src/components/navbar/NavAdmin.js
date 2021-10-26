import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

function NavAdmin() {
  const history = useHistory();
  return (
    <header className="header">
      <div className="logo">
        <Link to="/ahome">SSR HACK</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/pending-approval">Pending Approvals</Link>
          </li>
          <li>
            <Link to="/roaster">Roaster</Link>
          </li>
          <li>
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavAdmin;
