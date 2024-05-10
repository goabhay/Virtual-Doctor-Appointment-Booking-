import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </Provider>
  );
}

export default Layout;
