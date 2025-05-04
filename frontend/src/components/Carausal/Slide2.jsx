import React from "react";
import { Slider2 } from "../../assets";

function Slide2() {
  return (
    <div className="h-full w-screen relative z-10 flex items-center overflow-x-hidden ">
      <div className="h-full w-full absolute -z-0 wood">
        <img
          src={Slider2}
          className="h-full w-full absolute top-0  left-0 -z-0 "
          preload="true"
          alt=""
        />
      </div>

      <div className="h-full w-full z-100 flex items-center justify-center">
        <div className="w-[min(78%,500px)] mt-16 bg-black/15 shadow-2xl flex justify-center flex-col gap-10">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Unlock the Beauty of Sustainable Travel With Eco-Tourism.
          </h1>

          <button className="bg-white text-black px-6 py-2 rounded-3xl font-bold w-fit cursor-pointer hover:bg-black hover:text-white transition-all ease-in duration-200">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Slide2;
