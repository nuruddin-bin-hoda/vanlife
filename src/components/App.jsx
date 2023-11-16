import { Route, Routes } from "react-router-dom";
import StyledHeader from "./styles/Header.styles";
import StyledHome from "./styles/Home.styles";
import StyledAbout from "./styles/About.styles";

export default function App() {
  return (
    <>
      <h1>My App</h1>
      <StyledHeader />
      <Routes>
        <Route path="/" element={<StyledHome />} />
        <Route path="about" element={<StyledAbout />} />
      </Routes>
    </>
  );
}
