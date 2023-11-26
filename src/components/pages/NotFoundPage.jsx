/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function NotFoundPage({ className }) {
  return (
    <div className={className}>
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="link-button">
        Return to Home
      </Link>
    </div>
  );
}
