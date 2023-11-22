import { useState } from "react";

export default function Login({ className }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
    setLoginFormData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData((pData) => ({
      ...pData,
      [name]: value,
    }));
  };

  return (
    <div className={className}>
      <h1>Sign in to your account</h1>
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
        <button>Log in</button>
      </form>
    </div>
  );
}
