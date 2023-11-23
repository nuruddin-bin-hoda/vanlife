import { redirect } from "react-router-dom";

export async function requireAuthLink() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    const response = redirect("/login");
    response.body = true;
    return response;
  }

  return null;
}

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    throw redirect("/login");
  }

  return null;
}
