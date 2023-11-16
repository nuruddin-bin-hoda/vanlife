import styled from "styled-components";
import Home from "../pages/Home";

const StyledHome = styled(Home)`
  & {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
      url("/images/home-hero.png") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 350px;
    color: white;
    padding: 45px 23px;
  }

  & h1 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 42px;
  }

  & p {
    line-height: 24px;
  }

  & a {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    background-color: #ff8c38;
    border: none;
    width: 100%;
    margin-top: 27px;
    padding-block: 0.75rem;
    color: white;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
  }

  & a:hover {
    transform: translate(1px, 1px);
  }
`;

export default StyledHome;
