import styled from "styled-components";
import HostVansDetail from "../pages/HostVansDetail";

const StyledHostVanDetail = styled(HostVansDetail)`
  .back-link {
    margin: 0 26px;
    font-size: 1rem;
    color: black;
    font-weight: 500;
  }

  .host-van-detail-layout-container {
    background-color: white;
    padding: 24px;
    margin: 30px 26px;
  }

  .host-van-detail {
    display: flex;
    align-items: center;
  }

  .host-van-detail > img {
    height: 160px;
    border-radius: 5px;
    margin-right: 20px;
  }

  .host-van-detail-info-text > h3 {
    margin-top: 24px;
    margin-bottom: 5px;
    font-size: 26px;
    font-weight: 700;
  }

  .host-van-detail-info-text > h4 {
    font-size: 20px;
    margin-block: 0;
  }

  .van-type {
    height: 34px;
    padding: 6px 26px;
    font-style: normal;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    background-color: #ffead0;
    color: #4d4d4d;
    transition: 200ms all cubic-bezier(0.4, 0, 0.2, 1);
  }

  .van-type:hover {
    color: #ffead0;
  }

  .van-type:focus {
    outline: none;
  }

  .van-type.selected {
    color: #ffead0;
  }

  .van-type.simple:hover,
  .van-type.simple.selected {
    background-color: #e17654;
  }

  .van-type.rugged:hover,
  .van-type.rugged.selected {
    background-color: #115e59;
  }

  .van-type.luxury:hover,
  .van-type.luxury.selected {
    background-color: #161616;
  }

  .van-type.clear-filters {
    margin-left: -20px;
    height: 34px;
    padding: 6px 26px;
    font-style: normal;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    text-decoration: underline;
    background-color: transparent;
    color: #4d4d4d;
  }

  i[class*="van-type-"] {
    padding: 7px 14px;
  }

  .host-van-detail-nav {
    display: flex;
    margin-block: 25px;
  }

  .host-van-detail-nav a {
    text-decoration: none;
    color: #4d4d4d;
    font-weight: 500;
    padding: 5px 20px;
  }

  .host-van-detail-nav a:first-of-type {
    text-decoration: none;
    color: #4d4d4d;
    font-weight: 500;
    padding: 5px 15px;
    margin-left: -15px;
  }

  .host-van-detail-nav a:hover {
    color: #161616;
    text-decoration: underline;
    font-weight: 700;
  }
`;

export default StyledHostVanDetail;
