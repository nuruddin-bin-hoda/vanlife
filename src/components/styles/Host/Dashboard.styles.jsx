import styled from "styled-components";
import Dashboard from "../../pages/Host/Dashboard";

const StyledDashboard = styled(Dashboard)`
  & .host-dashboard-earnings {
    background-color: #ffead0;
    padding: 37px 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .host-dashboard-earnings > .info > h1 {
    font-size: 36px;
    color: #161616;
    margin: 0;
  }

  & .host-dashboard-earnings > .info > p {
    color: #4d4d4d;
  }

  & .host-dashboard-earnings > .info > p > span {
    text-decoration: underline;
    font-weight: bold;
  }

  & .host-dashboard-earnings > .info > h2 {
    margin: 0;
    font-size: 38px;
    color: #161616;
    font-weight: 900;
  }

  & .host-dashboard-reviews {
    background-color: #ffddb2;
    padding: 25px 26px;
    display: flex;
    align-items: center;
  }

  & .host-dashboard-reviews > h2 {
    margin: 0;
  }

  & .host-dashboard-reviews .star {
    color: #ff8c38;
    margin-left: 15px;
    font-size: 25px;
  }

  & .host-dashboard-reviews p {
    margin-left: 5px;
    font-size: 20px;
    color: #4d4d4d;
    margin-right: auto;
  }

  & .host-dashboard-reviews p > span {
    font-weight: bold;
    color: #161616;
  }

  & .host-dashboard-vans {
    padding: 38px 26px;
  }

  & .host-dashboard-vans > .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .host-dashboard-vans .host-vans-list {
    padding-inline: 0;
  }

  .host-van-single {
    display: flex;
    align-items: center;
    background-color: white;
    margin-bottom: 15px;
    padding-block: 18px;
    padding-left: 24px;
  }

  .host-van-single > img {
    height: 70px;
    border-radius: 5px;
    margin-right: 17px;
  }

  .host-van-single > a {
    margin-left: auto;
    margin-right: 3rem;
  }

  a {
    color: black;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
  }
`;

export default StyledDashboard;
