import styled from "styled-components";
import Footer from "../Footer";

const StyledFooter = styled(Footer)`
  & {
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }
`;

export default StyledFooter;
