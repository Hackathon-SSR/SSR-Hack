import { Link } from "react-router-dom";
import "./Navbar.css";

function NavUser() {
  return (
    <header className="header">
      <div className="logo">SSR HACK</div>
      <nav>
        <ul>
          <li>
            <Link to="/uprofile">Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavUser;
