import React from "react";
import { cottage1, wooden1 } from "../../assets";
import { TypeAnimation } from "react-type-animation";

function Slide1() {
  return (
    <div className="h-full w-screen relative z-10 flex items-center overflow-x-hidden ">
      <div className="h-full w-full absolute -z-0 wood">
        <img
          src={wooden1}
          preload="true"
          className="h-full w-full absolute top-0  left-0 -z-0 "
          alt=""
        />
      </div>

      <div className="w-full flex items-center justify-center z-10 md:px-10 flex-col md:flex-row gap-10 md:gap-0">
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center ml-10 md:items-start gap-8">
          <div className="">
            <div className="h-[90px] text-4xl font-bold">
              <TypeAnimation
                sequence={[
                  "StayCay in Our Cottage...",
                  2000,
                  "Your Private Retreat Awaits...",
                  2000,
                ]}
                className="w-[300px]"
                wrapper="div"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-white/40 italic">
              "Where comfort meets adventure
            </p>
            <p className="text-white/40 italic">
              book your dream stay today!"
            </p>
          </div>

          <button className="px-6 rounded-3xl font-semibold cursor-pointer hover:scale-105 py-2 bg-white text-black">
            Book Now
          </button>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center ">
          <div className="w-[300px] h-[350px] md:w-[400px] md:h-[500px] lg:h-[600px] lg:w-[500px] -rotate-10 rounded-2xl bg-white/70 px-10 py-8">
            <img src={cottage1} alt="" className="w-full h-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide1;
