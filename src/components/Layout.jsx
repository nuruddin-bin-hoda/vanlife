import { Outlet } from "react-router-dom";
import StyledHeader from "./styles/Header.styles";
import StyledFooter from "./styles/Footer.styles";

export default function Layout({ className }) {
  return (
    <div className={className}>
      <StyledHeader />
      <main>
        <Outlet />
      </main>
      <StyledFooter />
    </div>
  );
}
