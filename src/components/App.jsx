import { Route, Routes } from "react-router-dom";
import StyledHome from "./styles/Home.styles";
import StyledAbout from "./styles/About.styles";
import StyledVans from "./styles/Vans.styles";
import StyledVanDetail from "./styles/VanDetail.styles";
import Layout from "./Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<StyledHome />} />
        <Route path="about" element={<StyledAbout />} />
        <Route path="vans" element={<StyledVans />} />
        <Route path="vans/:id" element={<StyledVanDetail />} />
      </Route>
    </Routes>
  );
}
