import { Link, useRouteError } from "react-router-dom";

export default function Error({ className }) {
  const { message, status, statusText } = useRouteError();

  return (
    <div className={className}>
      <h1>Error: {message}</h1>
      <pre>
        {status} - {statusText}
      </pre>
    </div>
  );
}
