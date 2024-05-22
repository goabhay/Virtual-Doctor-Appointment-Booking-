import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./components/Contact";
import About from "./components/About";
import Layout from "./components/Layout";
import Blogs from "./components/Blogs";
import Signup from "./components/Signup";
import Testing from "./components/Testing.js";

import { store } from "./components/store/store.js";
import Login from "./components/Login.js";
import PatientList from "./components/PatientList.js";
import ProfileLayout from "./components/ProfileLayout.js";
import { Provider } from "react-redux";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="profile/:id" element={<ProfileLayout />}>
        {/* <Route path="userAppointment" element={UserAppointment} /> */}
        <Route path="patient" element={<PatientList />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
