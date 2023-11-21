import { useEffect, useState } from "react";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";

export default function VanDetail({ className }) {
  const [van, setVan] = useState({});
  const { id } = useParams();
  const {
    state: { search, type },
  } = useLocation();

  const goBackLink = search ? `?${search}` : "";
  const backMsg = type ? `Back to ${type} vans` : "Back to all vans";

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.van));
  }, [id]);

  return (
    <>
      {van ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
