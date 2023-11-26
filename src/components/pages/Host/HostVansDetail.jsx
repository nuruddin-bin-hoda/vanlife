/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getVan } from "../../../../api";
import { requireAuth } from "../../../../utils";

export async function loader({ params: { id } }) {
  await requireAuth();
  return getVan(id);
}

export default function HostVansDetail({ className }) {
  const van = useLoaderData();

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

          <Outlet context={van} />
        </div>
      </section>
    </>
  );
}
