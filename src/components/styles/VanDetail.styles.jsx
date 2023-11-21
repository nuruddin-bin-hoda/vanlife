import styled from "styled-components";
import VanDetail from "../pages/VanDetail";

const StyledVanDetail = styled(VanDetail)`
  & {
    display: flex;
    flex-direction: column;
    color: #161616;
    margin: 3rem;
    margin-top: 0;
  }

  & img {
    border-radius: 5px;
    margin-block: 47px;
  }

  & h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  & > i {
    align-self: flex-start;
  }

  & .van-price {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  & .van-price span {
    font-weight: 700;
    font-size: 1.5rem;
  }

  & .link-button {
    background-color: #ff8c38;
    color: white;
    font-size: 1.125rem;
  }

  .back-link {
    margin: 0 26px;
    font-size: 1rem;
    color: black;
    font-weight: 500;
  }
`;

export default StyledVanDetail;
