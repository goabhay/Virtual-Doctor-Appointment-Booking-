import React from "react";
import docImg from "./photos/appoint.jpg";
import Forms from "./Forms";

function Appointform() {
  return (
    <div className="grid  grid-cols-1 bg-slate-100 md:grid-cols-2 p-20">
      <div className=" w-full ">
        <Forms />
      </div>
      <div className="ml-20 h-full visible ">
        <img src={docImg} alt="" className="w-96 h-full" />
      </div>
    </div>
  );
}

export default Appointform;
