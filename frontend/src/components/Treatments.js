import React, { useEffect, useState } from "react";
import Card from "./Card";
import treatmentData from "../data/treatment.json"; // Rename imported JSON data variable
import axios from "axios";
import data from "../data/treatment.json";

function Treatments() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/user/getUsers");

        if (res.status === 200) {
          setUserData(res.data.data);
          userData.forEach((x) => console.log(x));
        } else {
          alert("Error fetching data");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <hr />
      <h1 className="text-4xl mt-4 font-bold font-serif text-slate-500">
        Our Treatments
      </h1>
      <h1 className="mt-4">Take a look at our treatments</h1>
      <div className="grid grid-cols-4 gap-2 w-3/4 h-3/4 m-8 p-2">
        {data.slice(0, 8).map((x, index) => (
          <Card key={index} type={x.name} desc={x.desc} />
        ))}
      </div>
    </div>
  );
}

export default Treatments;
