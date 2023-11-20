import { Route, Routes } from "react-router-dom";
import StyledHeader from "./styles/Header.styles";
import StyledHome from "./styles/Home.styles";
import StyledAbout from "./styles/About.styles";
import StyledVans from "./styles/Vans.styles";

export default function App() {
  return (
    <>
      <StyledHeader />
      <h1>Some text for test</h1>
      <Routes>
        <Route path="/" element={<StyledHome />} />
        <Route path="about" element={<StyledAbout />} />
        <Route path="vans" element={<StyledVans />} />
      </Routes>
    </>
  );
}
