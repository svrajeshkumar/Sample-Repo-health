import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ROUTES from "./navigation/routes";
import UploadingPrescriptionScreen from "./pages/auth-stack/upload-prescription-screen";
import InsuranceDetailsScreen from "./pages/auth-stack/insurance-details-screen";

// Screens
import HomeScreen from "./pages/onboardin-stack/home-screen";
import SignUpScreen from "./pages/auth-stack/sign-up-screen";
import HowItsWorkScreen from "./pages/howItsWork";
import PricingScreen from "./pages/pricing";

import DefaultLayout from "./containers/layouts/default";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path={ROUTES.HOMESCREEN} element={<HomeScreen />} />
          <Route path={ROUTES.HOWITSWORK} element={<HowItsWorkScreen />} />
          <Route path={ROUTES.PRICING} element={<PricingScreen />} />
          <Route path={ROUTES.SIGNUPSCREEN} element={<SignUpScreen />} />
          <Route
            path={ROUTES.UPLOAD_PRESCRIPTION_SCREEN}
            element={<UploadingPrescriptionScreen />}
          />
          <Route
            path={ROUTES.INSURANCE_DETAILS_SCREEN}
            element={<InsuranceDetailsScreen />}
          />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
