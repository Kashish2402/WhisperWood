import React, { useEffect, useRef, useState } from "react";
import Slide1 from "./Carausal/Slide1";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide2 from "./Carausal/Slide2";
import Slide3 from "./Carausal/Slide3";

const slides = [<Slide1 />, <Slide2 />, <Slide3 />];

function Carousal() {
  const slideRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);
  const totalSlides = slides.length;
  console.log(slideRef);

  useEffect(() => {
    const interval = setInterval(() => {
      nextButton();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextButton = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      setFade(false);
    }, 100);
  };
  const previousButton = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setFade(false);
    }, 100);
  };
  return (
    <div className="h-[100vh] w-[100%] relative overflow-hidden ">
      {/* LEFT SLIDER BUTTON && RIGHT SLIDER BUTTON*/}

      <div
        className="absolute z-100 top-[40%] left-0 text-white h-52 px-2 hover:bg-black/30 cursor-pointer flex items-center justify-center"
        onClick={previousButton}
      >
        <ChevronLeft size={32} />
      </div>
      <div
        className="absolute z-100 top-[40%] right-0 text-white h-52 px-2 hover:bg-black/30 cursor-pointer flex items-center justify-center"
        onClick={nextButton}
      >
        <ChevronRight size={32} />
      </div>
      <div className="w-full h-full overflow-x-auto">
        <div
          className={`flex flex-nowrap w-full h-full overflow-x-auto transition-opacity duration-300 ease-in-out  ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          ref={slideRef}
        >
          {slides[currentSlide]}
        </div>
      </div>
    </div>
  );
}

export default Carousal;
