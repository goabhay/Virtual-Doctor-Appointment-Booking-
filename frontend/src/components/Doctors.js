import React from "react";
import Card from "./Card";
import data from "../data/treatment.json";
import appoint from "../components/photos/appoint.jpg";

function Doctors() {
  return (
    <div className="flex flex-col justify-center items-center">
      <hr />
      <h1 className="text-3xl mt-4">Meet Our Team</h1>
      <div className="grid grid-cols-4 gap-2 w-3/4 h-3/4  m-8 p-2">
        {data.slice(0, 4).map((x, index) => (
          <Card key={index} name={x.name} img={appoint} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
