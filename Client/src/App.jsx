import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Common Components (UNCHANGED)
import Header from "./Components/Header";
import FooterComp from "./Components/FooterComp";
import ScrollToTop from "./Components/ScrollToTop";
import PrivateRoute from "./Components/PrivateRoute";
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute";

// Pages (EXISTING)
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

// Pages (NEW – Subscription Module)
import Plans from "./Pages/Plans";
import MySubscription from "./Pages/MySubscription";
import AdminSubscriptions from "./Pages/AdminSubscriptions";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
     
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* PLANS PAGE (PUBLIC VIEW, SUBSCRIBE REQUIRES LOGIN) */}
        <Route path="/plans" element={<Plans />} />

        {/* PROTECTED ROUTES (LOGGED-IN USERS) */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-subscription" element={<MySubscription />} />
        </Route>

        {/* ADMIN-ONLY ROUTES */}
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route
            path="/admin/subscriptions"
            element={<AdminSubscriptions />}
          />
        </Route>

        {/* 404 FALLBACK */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-3xl">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>

      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
