import styled from "styled-components";
import NotFoundPage from "../pages/NotFoundPage";

const StyledNotFoundPage = styled(NotFoundPage)`
  & {
    padding-inline: 26px;
    display: flex;
    flex-direction: column;
  }

  & .link-button {
    width: 100%;
    background-color: #161616;
    color: white;
    padding: 1rem 0;
    border-radius: 0.2rem;
    text-align: center;
    margin: 2rem 0;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export default StyledNotFoundPage;
