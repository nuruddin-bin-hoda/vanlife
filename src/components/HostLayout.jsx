import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout({ className }) {
  return (
    <>
      <nav className={className}>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
