/* eslint-disable react/prop-types */
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Header({ className }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/", { replace: true });
  };

  return (
    <header className={className}>
      <Link to="/" className="site-logo">
        #Vanlife
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="login"
        >
          Login
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}
