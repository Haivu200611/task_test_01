import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <nav>
        <NavLink to="/" end className="nav-item">
          Home
        </NavLink>

        <NavLink to="/users" className="nav-item">
          Users
        </NavLink>

        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
      </nav>
    </div>
  );
}
export default Sidebar;