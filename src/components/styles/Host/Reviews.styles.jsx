import styled from "styled-components";
import Reviews from "../../pages/Reviews";

const StyledReviews = styled(Reviews)`
  & {
    padding-inline: 26px;
    color: #161616;
  }

  & .top-text {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  }

  & .top-text > h2 {
    font-weight: 700;
    font-size: 32px;
    margin: 0;
    margin-right: 20px;
  }

  & .top-text > p {
    margin: 0;
    color: #4d4d4d;
  }

  & .top-text > p span {
    text-decoration: underline;
    font-weight: bold;
  }

  & > img {
    margin-bottom: 36px;
  }

  & .review {
    margin-block: 25px;
  }

  & .review .info {
    display: flex;
  }

  & .review .name {
    color: #161616;
    margin-right: 10px;
    font-weight: 600;
  }

  & .review .date {
    color: #8c8c8c;
  }

  & hr {
    background-color: #c7c7c7;
    height: 1px;
    border: 0;
  }

  & .review-star {
    color: #ff8c38;
    margin-right: 5px;
  }
`;

export default StyledReviews;
