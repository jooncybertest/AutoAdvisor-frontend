import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Layout from "./layouts/layout";
import Feature from "./components/Feature";
import AboutUs from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import UnAuthorizePage from "./pages/UnAuthorizePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import { GetYourCarInfoPage } from "./pages/GetYourCarInfoPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AiPredictPage } from "./pages/AiPredictPage";
import { AiDescription } from "./components/AiDescription";
import AutoshopsNearbyPage from "./pages/AutoshopsNearbyPage";
import SuccessPage from "./pages/SuccessPaymentPage";
import CancelPage from "./pages/CancelPaymentPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingPage } from "./pages/SettingPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomePage />
            <Footer />
          </>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/services"
        element={
          <Layout>
            <Feature />
          </Layout>
        }
      />
      <Route
        path="/autoshops-nearby"
        element={
          <Layout>
            <AutoshopsNearbyPage />
          </Layout>
        }
      />
      <Route
        path="/get-your-car-info"
        element={
          <Layout>
            <GetYourCarInfoPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <ProfilePage />
          </Layout>
        }
      />
      <Route
        path="/setting"
        element={
          <Layout>
            <SettingPage />
          </Layout>
        }
      />
      <Route
        path="/ai-predictor"
        element={
          <Layout>
            <>
              <AiDescription />
              <AiPredictPage />
            </>
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
      </Route>
      <Route path="/unauthorized" element={<UnAuthorizePage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
    </Routes>
  );
};
