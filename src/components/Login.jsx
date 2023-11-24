/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/";

  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedin", true);

    const res = redirect(redirectTo);
    res.body = true;
    return res;
  } catch (e) {
    localStorage.setItem("loggedin", false);
    return e.message;
  }
}

export default function Login({ className }) {
  const message = useLoaderData();
  const loginError = useActionData();
  const { state } = useNavigation();

  return (
    <div className={className}>
      <h1>Sign in to your account</h1>
      {message && <h2>{message}</h2>}
      {loginError && <h4>{loginError}</h4>}

      <Form method="post" replace className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={state === "submitting"}>
          {state === "submitting" ? "Loggin in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
