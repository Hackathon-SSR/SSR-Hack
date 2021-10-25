import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

function NavUser() {
  const history = useHistory();
  return (
    <header className="header">
      <div className="logo">
        <Link to="/home">SSR HACK</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/uprofile">Approval</Link>
          </li>
          <li>
            <Link to="/uprofile">Profile</Link>
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

export default NavUser;
