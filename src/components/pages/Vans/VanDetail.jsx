/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVan } from "../../../../api";

export function loader({ params: { id } }) {
  return getVan(id);
}

export default function VanDetail({ className }) {
  const {
    state: { search, type },
  } = useLocation();

  const van = useLoaderData();

  const goBackLink = search ? `?${search}` : "";
  const backMsg = type ? `Back to ${type} vans` : "Back to all vans";

  return (
    <div className={className}>
      <Link to={`..${goBackLink}`} relative="path" className="back-link">
        &larr; {backMsg}
      </Link>

      <img src={van.imageUrl} />
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      <h2>{van.name}</h2>
      <p className="van-price">
        <span>${van.price}</span>/day
      </p>
      <p>{van.description}</p>
      <button className="link-button">Rent this van</button>
    </div>
  );
}
