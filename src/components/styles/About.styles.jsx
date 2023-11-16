import styled from "styled-components";
import About from "../pages/About";

const StyledAbout = styled(About)`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & img {
    max-width: 100%;
  }

  & div {
    padding-inline: 23px;
    color: #161616;
    margin-bottom: 55px;
  }

  & div h1 {
    line-height: 38px;
  }

  & div p {
    line-height: 22px;
  }

  .about-page-cta {
    background-color: #ffcc8d;
    color: #161616;
    padding-inline: 32px;
    padding-bottom: 32px;
    margin-inline: 27px;
    border-radius: 5px;
  }

  .about-page-cta h2 {
    margin: 0;
    padding-block: 37px;
  }

  .about-page-cta .link-button {
    background-color: #161616;
    color: white;
    border-radius: 10px;
  }

  .link-button {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    border: none;
    padding: 0.75rem 1.375rem;
    color: initial;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
  }

  .link-button:hover {
    transform: translate(1px, 1px);
  }
`;

export default StyledAbout;
