import styled from "styled-components";
import Income from "../../pages/Income";

const StyledIncome = styled(Income)`
  & {
    padding-inline: 26px;
    color: #161616;
  }

  & > p {
    color: #4d4d4d;
  }

  & > p span {
    text-decoration: underline;
    font-weight: bold;
  }

  & > h2 {
    font-size: 38px;
    color: #161616;
    font-weight: 900;
  }

  img.graph {
    width: 100%;
    max-width: 500px;
  }

  .host-income .info-header > p {
    color: #4d4d4d;
  }

  & .info-header > p span {
    text-decoration: underline;
    font-weight: bold;
  }

  & .info-header > h3 {
    font-weight: 700;
    font-size: 24px;
    margin-top: 60px;
  }

  & .transaction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-bottom: 31px;
    padding: 35px 29px;
    border-radius: 6px;
  }
  & .transaction > h3 {
    font-size: 36px;
    font-weight: 600;
    margin: 0;
  }

  & .transaction > p {
    font-weight: 500;
    font-size: 20px;
    color: #4d4d4d;
  }
`;

export default StyledIncome;
