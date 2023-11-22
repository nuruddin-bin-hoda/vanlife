import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

export function loader({ params: { id } }) {
  return getVans(id);
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
