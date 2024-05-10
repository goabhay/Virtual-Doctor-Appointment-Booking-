import React from "react";
import docImg from "./photos/doctor.jpg";
import { CiStethoscope } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { PiWheelchairDuotone } from "react-icons/pi";

function Adds() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 mt-4 p-4">
        <div className="flex justify-end mr-12">
          <img src={docImg} alt="docotr.jpg" className="w-96 h-96" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl text-teal-800 font-normal font-bold  w-3/4 mt-8 ">
            SWEET TREATMENT FOR ALL YOUR PAINS
          </p>
          <p className="w-3/4 mt-8 font-semibold  text-xl font-normal  text-teal-500">
            We Provide Best HealthCare For You
          </p>
          <p className="w-3/4 font-normal text-slate-600 mt-8">
            Hospital Treamment is very benificial for the people as it is very
            useful and efficiend in treating an immense range of diseases and
            long-term illness
          </p>

          <div className="w-3/4 mt-8">
            <button className="btn bg-teal-400 hover:bg-teal-800 text-white ">
              Purchase this now
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 h-20">
        <p className="m-auto bg-teal-600 w-full h-full flex items-center justify-center  ">
          <CiCirclePlus className="mr-5 bg-white rounded-md h-10 w-10" />
          <h1 className="font-bold text-white text-xl">
            Care About Your Health
          </h1>
        </p>
        <p className="m-auto bg-teal-300 w-full h-full flex items-center justify-center">
          <CiStethoscope className="mr-5 bg-white rounded-md h-10 w-10" />
          <h1 className="font-bold text-white text-xl">Professional Doctors</h1>
        </p>
        <p className="m-auto bg-teal-600 w-full h-full flex items-center justify-center">
          <PiWheelchairDuotone className="mr-5 bg-white rounded-md h-10 w-10" />
          <h1 className="font-bold text-white text-xl">
            150000+ People Treated
          </h1>
        </p>
        <p className="m-auto bg-teal-300 w-full h-full flex items-center justify-center">
          <CiCirclePlus className="mr-5 bg-white rounded-md h-10 w-10" />
          <h1 className="font-bold text-white text-xl">
            Fast And Flex Service
          </h1>
        </p>
      </div>
    </>
  );
}

export default Adds;
