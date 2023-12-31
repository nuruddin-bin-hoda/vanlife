import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import StyledHome from "./styles/Home.styles";
import StyledAbout from "./styles/About.styles";
import StyledVans from "./styles/Vans/Vans.styles";
import { loader as vansLoader } from "./pages/Vans/Vans";
import StyledVanDetail from "./styles/Vans/VanDetail.styles";
import { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import StyledLayout from "./styles/Layout.styles";
import StyledHostLayout from "./styles/HostLayout.styles";
import StyledDashboard from "./styles/Host/Dashboard.styles";
import { loader as dashboardLoader } from "./pages/Host/Dashboard";
import StyledIncome from "./styles/Host/Income.styles";
import StyledReviews from "./styles/Host/Reviews.styles";
import StyledHostVans from "./styles/Host/HostVans.styles";
import { loader as hostVansLoader } from "./pages/Host/HostVans";
import StyledHostVanDetail from "./styles/Host/HostVanDetail.styles";
import { loader as hostVansDetailLoader } from "./pages/Host/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import StyledNotFoundPage from "./styles/NotFoundPage.styles";
import StyledError from "./styles/Error.styles";
import StyledLogin from "./styles/Login.styles";
import {
  loader as lgoinLoader,
  action as loginAction,
} from "../components/Login";
import { requireAuth } from "../../utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<StyledLayout />}>
      <Route index element={<StyledHome />} />
      <Route path="about" element={<StyledAbout />} />
      <Route
        path="login"
        element={<StyledLogin />}
        loader={lgoinLoader}
        action={loginAction}
      />

      <Route path="vans">
        <Route
          index
          element={<StyledVans />}
          errorElement={<StyledError />}
          loader={vansLoader}
        />
        <Route
          path="/vans:id"
          element={<StyledVanDetail />}
          errorElement={<StyledError />}
          loader={vanDetailLoader}
        />
      </Route>

      <Route path="host" element={<StyledHostLayout />}>
        <Route index element={<StyledDashboard />} loader={dashboardLoader} />
        <Route
          path="income"
          element={<StyledIncome />}
          loader={async () => await requireAuth()}
          errorElement={<StyledError />}
        />
        <Route
          path="vans"
          element={<StyledHostVans />}
          errorElement={<StyledError />}
          loader={hostVansLoader}
        />

        <Route
          path="vans/:id"
          element={<StyledHostVanDetail />}
          errorElement={<StyledError />}
          loader={hostVansDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>

        <Route
          path="reviews"
          element={<StyledReviews />}
          loader={async () => await requireAuth()}
        />
      </Route>

      <Route path="*" element={<StyledNotFoundPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
