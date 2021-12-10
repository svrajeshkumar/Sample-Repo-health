import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/onboardin-stack/home-screen";
import SignUpScreen from "./pages/auth-stack/sign-up-screen";
import ROUTES from "./navigation/routes";
import UploadingPrescriptionScreen from "./pages/auth-stack/upload-prescription-screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOMESCREEN} element={<HomeScreen />} />
        <Route path={ROUTES.SIGNUPSCREEN} element={<SignUpScreen />} />
        <Route
          path={ROUTES.UPLOAD_PRESCRIPTION_SCREEN}
          element={<UploadingPrescriptionScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
