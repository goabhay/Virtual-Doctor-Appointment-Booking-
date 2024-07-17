import React, { useState, useEffect } from "react";
import axios from "axios";
import botImg from "./photos/chatbot.jpg";
import { Link } from "react-router-dom";

function MeetDoctors() {
  const [categories, setCategories] = useState([]);
  const [specDoctor, setSpecDoctor] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/category", {
          withCredentials: true,
        });
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Error fetching categories");
      }
    };
    const setDoctor = async () => {
      try {
        const spec = localStorage.getItem("spec");
        if (spec != "") {
          const doctors = await axios(
            `http://localhost:4000/category/doctors?spec=${spec}`,
            {
              withCredentials: true,
            }
          );
          setSpecDoctor(doctors.data.data);
          console.log("spec=", specDoctor);
        }
      } catch (err) {}
    };

    fetchData();
    setDoctor();
  }, []);

  const handleClick = (speciality) => {
    try {
      localStorage.setItem("spec", speciality);
      window.location.reload();
    } catch (error) {
      console.error("Error handling click:", error);
      setError("Error handling click");
    }
  };
  const uniqueCategories = [
    ...new Map(categories.map((item) => [item.speciality, item])).values(),
  ];

  return (
    <div className="container px-4 mb-80 mt-8">
      <div className="grid grid-cols-5 gap-4">
        {uniqueCategories.map((category) => (
          <div
            key={category._id}
            className="relative p-4 border border-gray-300 cursor-pointer rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            onClick={() => handleClick(category.speciality)}
          >
            <h2 className="text-lg font-bold mb-2">{category.speciality}</h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2">
        <div className="border-2 mt-8 p-4 bg-white rounded-md shadow-md">
          {specDoctor.length > 0 ? (
            specDoctor.map((x) => (
              <div
                key={x._id}
                className="border-b py-2 flex justify-between items-center"
              >
                <div className="font-bold font-sans text-xl ml-8">
                  Name: {x.name}
                </div>
                <Link
                  to={`/profileDoctor/${x._id}`}
                  className="btn bg-blue-500 text-white hover:bg-red-500 hover:text-white px-4 py-2 rounded-md"
                >
                  See Profile
                </Link>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center py-2">
              No doctors found.
            </div>
          )}
        </div>

        <div className="image-box">
          <div className="border-2 mt-8 flex flex-col justify-center items-center">
            <img src={botImg} alt="bot" className="h-96" />
            <Link
              to="https://2894-106-51-8-242.ngrok-free.app"
              className="btn bg-blue-500 text-white hover:bg-red-500 hover:text-white mb-4 px-4 py-2 rounded-md"
            >
              Talk to Bot
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetDoctors;
