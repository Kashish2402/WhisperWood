import React from "react";
import { Slider3 } from "../../assets";
import { TypeAnimation } from "react-type-animation";

function Slide3() {
  return (
    <div className="h-full w-screen relative z-10 flex items-center overflow-x-hidden ">
      <div className="h-full w-full absolute -z-0 wood">
        <img
          src={Slider3}
          preload="true"
          className="h-full w-full absolute top-0  left-0 -z-0 "
          alt=""
        />
      </div>

      <div className="h-full w-full z-100 flex items-center justify-center">
        <div className="w-[min(80%,400px)] mt-16 bg-black/15 shadow-2xl flex justify-center flex-col gap-10">
          <div>
            <h1 className="text-4xl  md:text-5xl font-bold h-[100px]">
              Wants to Enjoy In{" "}
              <TypeAnimation
                sequence={["Mountains?", 2000, "Hills...", 2000]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-white/40 italic ">Make your vacay unforgettable with our cozy cottages, luxe resorts, and comfy hotels!</p>
          </div>

          <button className="bg-white text-black px-6 py-2 rounded-3xl font-bold w-fit cursor-pointer hover:bg-black hover:text-white transition-all ease-in duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slide3;
