import styled from "styled-components";
import Header from "../Header";

const StyledHeader = styled(Header)`
  & {
    height: 110px;
    display: flex;
    align-items: center;
    padding-block: 10px;
  }

  & .site-logo {
    color: black;
    margin-right: auto;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 25px;
  }

  & a {
    text-decoration: none;
    color: #4d4d4d;
    font-weight: 600;
    padding: 5px 20px;
  }

  & a:hover {
    color: #161616;
    text-decoration: underline;
  }

  .active-link {
    color: black;
    text-decoration: underline;
    font-weight: bold;
  }
`;

export default StyledHeader;
