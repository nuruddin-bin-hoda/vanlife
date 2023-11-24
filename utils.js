import { redirect } from "react-router-dom";

export async function requireAuthLink() {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  if (!isLoggedIn) {
    const response = redirect("/login?message=You must login first");
    response.body = true;
    return response;
  }

  return null;
}

export async function requireAuth() {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  if (!isLoggedIn) {
    throw redirect("/login");
  }

  return null;
}
