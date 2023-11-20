import { Route, Routes } from "react-router-dom";
import StyledHome from "./styles/Home.styles";
import StyledAbout from "./styles/About.styles";
import StyledVans from "./styles/Vans.styles";
import StyledVanDetail from "./styles/VanDetail.styles";
import StyledLayout from "./styles/Layout.styles";
import StyledHostLayout from "./styles/HostLayout.styles";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";

export default function App() {
  return (
    <Routes>
      <Route element={<StyledLayout />}>
        <Route index element={<StyledHome />} />
        <Route path="about" element={<StyledAbout />} />

        <Route path="vans">
          <Route index element={<StyledVans />} />
          <Route path=":id" element={<StyledVanDetail />} />
        </Route>

        <Route path="host" element={<StyledHostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
