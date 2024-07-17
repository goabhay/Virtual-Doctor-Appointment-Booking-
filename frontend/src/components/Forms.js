import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    emergency: "",
    category: "",
    desc: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(
        "http://localhost:4000/appointment",
        formData,
        {
          withCredentials: true,
        }
      );
      if (res.status) {
        console.log(res.data);
        toast.success("Registration Confirmed");
      }
    } catch (err) {
      console.log(err);
    }
    setFormData({
      name: "",
      age: "",
      emergency: "",
      category: "",
      desc: "",
    });
  };

  return (
    <div className="flex flex-col w-max m-auto p-4 justify-center items-center border-4 ">
      <h1 className="text-3xl mt-8 mt-8">Book Your appointment</h1>
      <hr />
      <form
        action=""
        className="mt-8 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4 justify-center items-center p-4">
          <input
            type="text"
            placeholder="Patient Name"
            className="bg-slate-300 rounded-md  p-2 "
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <input
            type="text"
            placeholder="Age"
            className="bg-slate-300 rounded-md  p-2"
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            value={formData.age}
          />
          <select
            className="bg-slate-300 rounded-md p-2"
            defaultValue="Choose"
            value={formData.emergency}
            onChange={(e) =>
              setFormData({ ...formData, emergency: e.target.value })
            }
          >
            <option value="Emergency">Emergency</option>
            <option value="Normal">Normal</option>
            <option value="Type" disabled hidden>
              Type
            </option>
          </select>

          <select
            className="bg-slate-300 rounded-md p-2"
            defaultValue="Choose"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="Emergency">Orthopedic</option>
            <option value="Normal">Dermetologist</option>
            <option value="Normal">Gycnologist</option>
            <option value="Normal">ENT</option>
            <option value="Normal">Neurologist</option>
            <option value="Choose" selected disabled hidden>
              Type
            </option>
          </select>

          <textarea
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            placeholder="Description"
            value={formData.desc}
            className="bg-slate-300 rounded-md p-2 col-span-2"
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
