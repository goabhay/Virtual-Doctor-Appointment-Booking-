import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { roleSetter } from "./store/authSlice";
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Speciality, setSpeciality] = useState("");
  const [Role, setRole] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/user/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
        speciality: Speciality,
        role: Role,
      });

      console.log("signup-speciality", {
        name: user.name,
        email: user.email,
        password: user.password,
        speciality: Speciality,
        role: Role,
      });

      if (res.data.status === "success") {
        toast.success("User registered successfully");
        navigate("/home");
      } else {
        toast.error("Signup Error");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("Signup Error");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap -4 ">
        <button
          disabled={Role !== ""}
          className="p-4 m-4 border-2 bg-slate-200 rounded-md hover:shadow-md"
          onClick={() => {
            setRole("doctor");
            dispatch(roleSetter("doctor"));
          }}
        >
          As Doctor
        </button>

        <button
          disabled={Role !== ""}
          className="p-4 m-4 border-2 bg-slate-200 rounded-md hover:shadow-md"
          onClick={() => {
            setRole("patient");
            dispatch(roleSetter("patient"));
          }}
        >
          As Patient
        </button>
      </div>
      <div className="modal-box bg-slate-100 p-2">
        <form
          action=""
          className="flex flex-col justify-center items-center m-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-8 w-3/4">
            <input
              type="text"
              placeholder="Username"
              className="p-2 border-2 rounded-md"
              onChange={(e) => {
                setUser((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
            />
            <input
              type="email"
              placeholder="Email@gmail.com"
              onChange={(e) => {
                setUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
              className="p-2 border-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
              className="p-2 border-2 rounded-md"
            />
            {Role === "doctor" ? (
              <input
                type="text"
                placeholder="Speciality"
                className="p-2 border-2 rounded-md"
                onChange={(e) => setSpeciality(e.target.value)}
              />
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Doctor/Patient"
              value={Role}
              readOnly
              className="p-2 border-2 rounded-md"
            />
            <input
              type="submit"
              value="Create Account"
              className="bg-teal-500 text-white p-2 m-auto btn hover:bg-teal-950 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
