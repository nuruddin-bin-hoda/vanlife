import { useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

// get vans data
export async function loader() {
  return getVans();
}

export default function Vans({ className }) {
  const vans = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  const filteredVans = typeFilter
    ? vans.filter((van) => {
        return van.type === typeFilter;
      })
    : vans;

  const handleFilterChange = (key, value) => {
    setSearchParams((pParams) => {
      if (value === null) {
        pParams.delete(key);
      } else {
        pParams.set(key, value);
      }

      return pParams;
    });
  };

  const vanElements = filteredVans.map((van) => {
    return (
      <div key={van.id} className="van-tile">
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), type: typeFilter }}
        >
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    );
  });

  if (error) {
    return (
      <div style={{ marginLeft: "1rem" }}>
        <h1>{error.status}</h1>
        <h2>There was an error: {error.message}</h2>
      </div>
    );
  }

  return (
    <div className={className}>
      <h1>Explore our van options</h1>

      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <div className="van-list">{vanElements}</div>
    </div>
  );
}
