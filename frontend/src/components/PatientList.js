import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function PatientList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const did = searchParams.get("did");
  const [data, setData] = useState([]);
  const selectedRowRef = useRef([]); // Initialize an empty array to hold references

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/appointment/", {
          withCredentials: true,
        });
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [did]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to toggle the background color and text color
  const handleAccept = (index) => {
    if (selectedRowRef.current[index]) {
      const currentBgColor =
        selectedRowRef.current[index].style.backgroundColor;
      const currentTextColor = selectedRowRef.current[index].style.color;

      selectedRowRef.current[index].style.backgroundColor =
        currentBgColor === "green" ? "white" : "green";
      selectedRowRef.current[index].style.color =
        currentTextColor === "white" ? "black" : "white";
    }
  };

  const handleClear = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/appointment/${id}`, {
        withCredentials: true,
      });
      // Update the local state to remove the deleted appointment
      setData((prevData) =>
        prevData.filter((appointment) => appointment._id !== id)
      );
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Patient List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 py-2 px-4">S.NO</th>
            <th className="border border-gray-300 py-2 px-4">Patient Name</th>
            <th className="border border-gray-300 py-2 px-4">Status</th>
            <th className="border border-gray-300 py-2 px-4">Date</th>
            <th className="border border-gray-300 py-2 px-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((appointment, index) => (
            <tr
              key={appointment._id}
              ref={(el) => (selectedRowRef.current[index] = el)}
            >
              <td className="border border-gray-300 py-2 px-4">{index + 1}</td>
              <td className="border border-gray-300 py-2 px-4">
                {appointment.patient.name}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {appointment.status}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {formatDate(appointment.createdAt)}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {appointment.desc}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <button
                  className="bg-red-600 rounded-md p-2 text-white hover:bg-red-500"
                  onClick={() => handleClear(appointment._id)}
                >
                  Clear
                </button>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <button
                  className="bg-blue-900 rounded-md p-2 text-white hover:bg-blue-500"
                  onClick={() => handleAccept(index)}
                >
                  Accept
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
