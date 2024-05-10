import React from "react";

function Forms() {
  return (
    <div className="flex flex-col w-max m-auto p-4 justify-center items-center border-4 ">
      <h1 className="text-3xl mt-8 mt-8">Book Your appointment</h1>
      <hr />
      <form action="" className="mt-8 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-4 justify-center items-center p-4">
          <input
            type="text"
            placeholder="Patient Name"
            className="bg-slate-300 rounded-md  p-2 " // Adjusted col-span
          />
          <input
            type="text"
            placeholder="Age"
            className="bg-slate-300 rounded-md  p-2"
          />
          <select className="bg-slate-300 rounded-md p-2" defaultValue="Choose">
            <option value="Emergency">Emergency</option>
            <option value="Normal">Normal</option>
            <option value="Type" disabled hidden>
              Type
            </option>
          </select>

          <select className="bg-slate-300 rounded-md p-2" defaultValue="Choose">
            <option value="Emergency">Orthopedic</option>
            <option value="Normal">Dermetologist</option>
            <option value="Normal">Gycnologist</option>
            <option value="Normal">ENT</option>
            <option value="Normal">Neurologist</option>
            <option value="Choose" selected disabled hidden>
              Type
            </option>
          </select>

          <textarea // Changed from input to textarea for multi-line text
            placeholder="Description" // Corrected the spelling of "Description"
            className="bg-slate-300 rounded-md p-2 col-span-2" // Adjusted col-span
          />
        </div>

        <input
          type="submit"
          value="Book An Appointment"
          className="btn bg-teal-400 mt-8 w-full"
        />
      </form>
    </div>
  );
}

export default Forms;
