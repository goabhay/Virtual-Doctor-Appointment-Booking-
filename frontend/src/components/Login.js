import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import axios from "axios";
import { login } from "./store/authSlice.js";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const log = useSelector((state) => state.isLoggedIn);

  //console.log("loginStatus", log);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    console.log("handle submit");
    e.preventDefault();

    console.log(loginData.email, loginData.password);

    try {
      const res = await axios.post(
        "http://localhost:4000/user/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        toast.success("Login successful");
        dispatch(login());
        localStorage.setItem("userId", res.data.data._id);
        localStorage.setItem("login", true);
        navigate("/home");
      } else {
        toast.error("some error");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <h1 className="text-slate-500 text-3xl m-8">Login Form</h1>
      <div className="modal-box bg-slate-100 p-2 h-full">
        <form
          action=""
          className="flex flex-col justify-center items-center m-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-8 w-3/4 m-8">
            <input
              type="email"
              name="email"
              placeholder="Email@gmail.com"
              className="p-2 border-2 rounded-md"
              value={loginData.email}
              onChange={(e) => {
                setLoginData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 border-2 rounded-md"
              value={loginData.password}
              onChange={(e) => {
                setLoginData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />

            <input
              type="submit"
              value="Login"
              className="bg-teal-500 text-white p-2 m-auto btn hover:bg-teal-950 rounded-md"
            />
          </div>
          <span className="ml-1 flex mt-2 ">
            <h3>Don't have an account?</h3>
            <Link to="/signup" className="ml-1 underline text-blue-500">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
