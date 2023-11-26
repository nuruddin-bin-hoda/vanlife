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
import { loader as vanDetailLoader } from "./pages/VanDetail";
import StyledLayout from "./styles/Layout.styles";
import StyledHostLayout from "./styles/HostLayout.styles";
import StyledDashboard from "./styles/Host/Dashboard.styles";
import { loader as dashboardLoader } from "./pages/Dashboard";
import StyledIncome from "./styles/Host/Income.styles";
import StyledReviews from "./styles/Host/Reviews.styles";
import StyledHostVans from "./styles/HostVans.styles";
import { loader as hostVansLoader } from "./pages/HostVans";
import StyledHostVanDetail from "./styles/HostVanDetail.styles";
import { loader as hostVansDetailLoader } from "./pages/HostVansDetail";
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
import { requireAuthLink } from "../../utils";

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
          loader={async ({ request }) => await requireAuthLink(request)}
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
          loader={async ({ request }) => await requireAuthLink(request)}
        />
      </Route>

      <Route path="*" element={<StyledNotFoundPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
