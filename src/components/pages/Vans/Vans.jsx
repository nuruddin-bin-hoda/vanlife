/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Suspense } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../../../api";

// get vans data
export async function loader() {
  return defer({ vans: getVans() });
}

export default function Vans({ className }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vansPromise = useLoaderData();

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

  const renderVanElements = (loadedVans) => {
    const filteredVans = typeFilter
      ? loadedVans.filter((van) => {
          return van.type === typeFilter;
        })
      : loadedVans;

    const vanElements = filteredVans.map((van) => {
      return (
        <div key={van.id} className="van-tile">
          <Link
            to={van.id}
            state={{
              search: searchParams.toString(),
              type: typeFilter,
            }}
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

    return (
      <>
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
      </>
    );
  };

  return (
    <div className={className}>
      <h1>Explore our van options</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={vansPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
}
