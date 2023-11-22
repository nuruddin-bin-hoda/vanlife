import styled from "styled-components";
import Login from "../Login";

const StyledLogin = styled(Login)`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 27px;
    margin-bottom: 2rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }

  .login-form > input {
    border: 1px solid rgba(209, 213, 219);
    height: 40px;
    text-indent: 10px;
    font-family: "Inter", sans-serif;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    font-weight: 400;
  }

  .login-form > input:focus {
    outline: none;
  }

  .login-form > input:first-of-type {
    border-radius: 6px 6px 0px 0px;
  }

  .login-form > input:last-of-type {
    border-radius: 0px 0px 6px 6px;
    border-top: none;
  }

  .login-form > button {
    background-color: #ff8c38;
    border: none;
    border-radius: 6px;
    height: 55px;
    margin-top: 22px;
    color: white;
    font-family: "Inter", sans-serif;
  }
`;

export default StyledLogin;
