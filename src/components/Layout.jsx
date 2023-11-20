import { Outlet } from "react-router-dom";
import StyledHeader from "./styles/Header.styles";
import Footer from "./Footer";

export default function Layout({ className }) {
  return (
    <div className={className}>
      <StyledHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
