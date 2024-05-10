import React from "react";
import { CiStethoscope } from "react-icons/ci";

function Card({ name, img, type, desc }) {
  return (
    <div className="card  rounded-none w-46 bg-slate-50 border-4 border-slate-100 shadow-md m-2 hover:shadow-xl ">
      <figure className="px-2 pt-2">
        {img == undefined ? (
          <CiStethoscope className="w-24 h-24" />
        ) : (
          <img src={img} alt="img" className="w-full h-full" />
        )}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-lg">{type === undefined ? name : type}</h2>
        <p className={desc === undefined ? "hidden" : "visible"}>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
