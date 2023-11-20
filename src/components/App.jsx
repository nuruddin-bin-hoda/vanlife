import { Route, Routes } from "react-router-dom";
import StyledHeader from "./styles/Header.styles";
import StyledHome from "./styles/Home.styles";
import StyledAbout from "./styles/About.styles";
import StyledVans from "./styles/Vans.styles";
import StyledVanDetail from "./styles/VanDetail.styles";

export default function App() {
  return (
    <>
      <StyledHeader />
      <Routes>
        <Route path="/" element={<StyledHome />} />
        <Route path="about" element={<StyledAbout />} />
        <Route path="vans" element={<StyledVans />} />
        <Route path="vans/:id" element={<StyledVanDetail />} />
      </Routes>
    </>
  );
}
