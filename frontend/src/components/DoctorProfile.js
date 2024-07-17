import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PatientList from "./PatientList";

function DoctorProfile() {
  const [user, setUser] = useState({});
  const [showContent, setShowContent] = useState(false);
  const { id } = useParams();
  console.log("docId = ", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/getUser/${id}`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data.data);
        console.log("user=", response.data.data);
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {/* First Component */}
      <div className="card card-side bg-base-100 shadow-xl w-1/2 m-auto">
        <figure>
          <img
            src="https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg"
            alt="User"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-4xl">{user.name}</h2>
          <p className="font-bold">Role: {user.role}</p>

          <h1 className="font-bold text-2xl">Speciality: {user.speciality}</h1>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
