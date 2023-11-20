import { Link, Outlet } from "react-router-dom";

export default function HostLayout({ className }) {
  return (
    <>
      <nav className={className}>
        <Link to="/host">Dashboard</Link>
        <Link to="income">Income</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}
