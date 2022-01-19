import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ROUTES from "./navigation/routes";

// Screens
import OnboardSignup from "./pages/onboard/signup";
import OnboardInformation from "./pages/onboard/information";

// Components
import DefaultLayout from "./containers/layouts/default";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path={ROUTES.HOMESCREEN} element={<OnboardSignup />} />
          <Route path={ROUTES.PATIENT_INFO} element={<OnboardInformation />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
