import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function HostVansDetail({ className }) {
  const [van, setVan] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [id]);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <section className={className}>
        <Link to=".." relative="path" className="back-link">
          &larr; Back to all vans
        </Link>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={van.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${van.type}`}>{van.type}</i>
              <h3>{van.name}</h3>
              <h4>${van.price}/day</h4>
            </div>
          </div>
          <nav className="host-van-detail-nav">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet />
        </div>
      </section>
    </>
  );
}
