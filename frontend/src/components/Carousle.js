import React from "react";
import dimg from "../";

function Carousle() {
  return (
    <div className="flex flex-col justfiy-center items-center mt-4 p-4  bg-slate-200 w-full">
      <p className="text-4xl m-8">Our Testimonals</p>
      <div className="carousel w-3/4 ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.pinimg.com/236x/a1/e0/1d/a1e01d037d45857d125b8656041f0146.jpg"
            className="w-full h-96 rounded-md"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.pinimg.com/236x/6a/fa/17/6afa17c7e388b0401da3c9b457b870a2.jpg"
            className="w-full h-96 rounded-md"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.pinimg.com/236x/4a/90/a1/4a90a13c6dbfa6b9eff460bf38df117e.jpg"
            className="w-full h-96 rounded-md"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.pinimg.com/236x/a4/f4/aa/a4f4aaf47e1d674497bea9fbd4cb60d2.jpg"
            className="w-full h-96 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}

export default Carousle;
