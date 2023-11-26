/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../../../api";
import { requireAuth } from "../../../../utils";

export async function loader() {
  await requireAuth();
  return defer({ hostVans: getVans() });
}

export default function HostVans({ className }) {
  const hostVansPromise = useLoaderData();

  function renderHostVanElements(vans) {
    return vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <section className={className}>
      <h1 className="host-vans-title">Your listed vans</h1>

      <div className="host-vans-list">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={hostVansPromise.hostVans}>
            {renderHostVanElements}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}
