import styled from "styled-components";
import HostLayout from "../HostLayout";

const StyledHostLayout = styled(HostLayout)`
  & {
    display: flex;
  }

  & a {
    text-decoration: none;
    color: #4d4d4d;
    font-weight: 500;
    padding: 5px 20px;
  }

  & a:hover {
    color: #161616;
    text-decoration: underline;
    font-weight: 600;
  }
`;

export default StyledHostLayout;
