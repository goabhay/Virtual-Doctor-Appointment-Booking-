import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { roleSetter } from "./store/authSlice";
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [speciality, setSpeciality] = useState("");
  const [role, setRole] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/user/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
        speciality: role === "doctor" ? speciality : "",
        role: role,
      });

      if (res.data.status === "success") {
        dispatch(roleSetter(role));
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
      <div className="grid grid-cols-2 gap-4 ">
        <button
          disabled={role !== ""}
          className="p-4 m-4 border-2 bg-slate-200 rounded-md hover:shadow-md"
          onClick={() => handleRoleSelection("doctor")}
        >
          As Doctor
        </button>
        <button
          disabled={role !== ""}
          className="p-4 m-4 border-2 bg-slate-200 rounded-md hover:shadow-md"
          onClick={() => handleRoleSelection("patient")}
        >
          As Patient
        </button>
      </div>
      <div className="modal-box bg-slate-100 p-2">
        <form
          className="flex flex-col justify-center items-center m-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-8 w-3/4">
            <input
              type="text"
              placeholder="Username"
              className="p-2 border-2 rounded-md"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email@gmail.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="p-2 border-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="p-2 border-2 rounded-md"
            />
            {role === "doctor" && (
              <input
                type="text"
                placeholder="Speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className="p-2 border-2 rounded-md"
              />
            )}
            <input
              type="text"
              placeholder="Doctor/Patient"
              value={role}
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
