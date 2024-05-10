import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PatientList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const did = searchParams.get("did");
  const [data, setData] = useState([]);

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
          </tr>
        </thead>
        <tbody>
          {data.map((appointment, index) => (
            <tr key={appointment._id}>
              <td className="border border-gray-300 py-2 px-4">{index + 1}</td>
              <td className="border border-gray-300 py-2 px-4">
                {appointment.patient.name}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {appointment.status}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {appointment.createdAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
