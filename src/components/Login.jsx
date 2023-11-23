import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { loginUser } from "../../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function Login({ className }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();

  async function handleSubmit(e) {
    setStatus("submitting");
    setError(null);
    e.preventDefault();

    try {
      const user = await loginUser(loginFormData);
      console.log(user);
    } catch (e) {
      setError(e);
    } finally {
      setStatus("idle");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className={className}>
      <h1>Sign in to your account</h1>
      {error && <h2>{error.message}</h2>}
      {message && <h2>{message}</h2>}

      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Loggin in..." : "Lon in"}
        </button>
      </form>
    </div>
  );
}
