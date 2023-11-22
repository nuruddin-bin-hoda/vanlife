import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import StyledHome from "./styles/Home.styles";
import StyledAbout from "./styles/About.styles";
import StyledVans from "./styles/Vans.styles";
import { loader as vansLoader } from "./pages/Vans";
import StyledVanDetail from "./styles/VanDetail.styles";
import StyledLayout from "./styles/Layout.styles";
import StyledHostLayout from "./styles/HostLayout.styles";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";
import StyledHostVans from "./styles/HostVans.styles";
import StyledHostVanDetail from "./styles/HostVanDetail.styles";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import StyledNotFoundPage from "./styles/NotFoundPage.styles";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<StyledLayout />}>
      <Route index element={<StyledHome />} />
      <Route path="about" element={<StyledAbout />} />

      <Route path="vans">
        <Route index element={<StyledVans />} loader={vansLoader} />
        <Route path=":id" element={<StyledVanDetail />} />
      </Route>

      <Route path="host" element={<StyledHostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<StyledHostVans />} />

        <Route path="vans/:id" element={<StyledHostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>

        <Route path="reviews" element={<Reviews />} />
      </Route>

      <Route path="*" element={<StyledNotFoundPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
