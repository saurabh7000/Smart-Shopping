import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Pages/Main/Main";
import Product from "./Components/Pages/ProductDetail.jsx/ProductDetail";
import Profile from "./Components/Pages/Profile/Profile";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import ProtectRoute from "./Components/Layout/ProtectRoute";
import store from "./store";
import { loadUserAction } from "./Redux/Actions/userAction";
import { useSelector } from "react-redux";
import UpdatePassword from "./Components/Pages/Update/UpdatePassword/UpdatePassword";
import ForgotPassword from "./Components/Pages/Password/ForgotPassword";
import ResetPassword from "./Components/Pages/Password/ResetPassword";
import Cart from "./Components/Pages/Cart/Cart";
import Shipping from "./Components/Pages/Cart/Shipping";
import ConfirmOrder from "./Components/Pages/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./Components/Pages/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  const [stripeApiKey, setStripeApiKey] = useState("");

  const getStripeApiKey = async () => {
    const { data } = await axios.get("/api/v1/stripeapikey");
    console.log(data.stripeApiKey);
    setStripeApiKey(data.stripeApiKey);
  };

  useEffect(() => {
    store.dispatch(loadUserAction());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/reset/password/:token" element={<ResetPassword />} />
        <Route
          path="/product-detail/:id"
          element={
            <ProtectRoute>
              <Product />
            </ProtectRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />
        <Route
          path="/update/password"
          element={
            <ProtectRoute>
              <UpdatePassword />
            </ProtectRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/shipping"
          element={
            <ProtectRoute>
              <Shipping />
            </ProtectRoute>
          }
        />
        <Route
          path="/order/confirm"
          element={
            <ProtectRoute>
              <ConfirmOrder />
            </ProtectRoute>
          }
        />

        <Route
          path="/order/payment"
          element={
            <ProtectRoute>
              {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              )}
            </ProtectRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
