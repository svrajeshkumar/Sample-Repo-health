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
import LookUpInsuranceScreen from "./pages/auth-stack/look-up-insurance-screen";
import ShippingDetailsScreen from "./pages/auth-stack/shipping-details-screen";
import AboutYouScreen from "./pages/auth-stack/about-you-screen";
import AddYourDoctorsScreen from "./pages/auth-stack/add-doctors";
import AddVitaminsScreen from "./pages/onboardin-stack/add-vitamins-screen";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
        <Route path={ROUTES.HOMESCREEN} element={<SignUpScreen />} />
          <Route path={ROUTES.HOMESCREEN} element={<HomeScreen />} />
          <Route path={ROUTES.HOWITSWORK} element={<HowItsWorkScreen />} />
          <Route path={ROUTES.PRICING} element={<PricingScreen />} />

          <Route
            path={ROUTES.UPLOAD_PRESCRIPTION_SCREEN}
            element={<HomeScreen />}
          />
          <Route
            path={ROUTES.INSURANCE_DETAILS_SCREEN}
            element={<InsuranceDetailsScreen />}
          />
          <Route
          path={ROUTES.LOOK_UP_INSURANCE_SCREEN}
          element={<LookUpInsuranceScreen/>}
          />
          <Route
          path={ROUTES.SHIPPING_ADD_SCREEN}
          element={<ShippingDetailsScreen/>}
          />
           <Route
          path={ROUTES.ABOUT_YOU_SCREEN}
          element={<AboutYouScreen/>}
          />
        <Route
          path={ROUTES.ADD_YOUR_DOCTORS}
          element={<AddYourDoctorsScreen/>}
          />
           <Route
          path={ROUTES.ADD_VITAMINS_SCREEN}
          element={<AddVitaminsScreen/>}
          />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
