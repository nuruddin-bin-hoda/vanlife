import { Outlet } from "react-router-dom";
import StyledHeader from "./styles/Header.styles";

export default function Layout() {
  return (
    <>
      <StyledHeader />
      <Outlet />
    </>
  );
}
