import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  
  return (
    <div className="fixed top-0 left-0 w-full border-b border-gray-500/50 shadow-2xl px-5 py-7 flex justify-center gap-4  md:justify-between  items-center flex-wrap z-100 bg-black">
      {/* LOGO */}
      <div
        className='[font-family:"Lobster_Two",cursive] relative cursor-pointer'
        onClick={() => navigate("/")}
      >
        <span className="font-semibold  text-2xl">Whisper</span>
        <span className="text-white/50 text-2xl italic font-bold">Wood</span>
      </div>

      {/* MIDDLE DIV */}

      {/* <div className="flex items-center justify-between">
        <ul className="flex items-center justify-between gap-3">
          <li className="px-2 bg-transparent font-semibold text-[18px] hover:bg-white rounded-xl transition-all ease-in duration-200 cursor-pointer hover:text-black">
            <a to="#cottage">Home</a>
          </li>
          <li className="px-2 bg-transparent font-semibold text-[18px] hover:bg-white rounded-xl transition-all ease-in duration-200 cursor-pointer hover:text-black">
            <Link>Cottages</Link>
          </li>
          <li className="px-2 bg-transparent font-semibold text-[18px] hover:bg-white rounded-xl transition-all ease-in duration-200 cursor-pointer hover:text-black">
            <Link>Tesimonials</Link>
          </li>
          <li className="px-2 bg-transparent font-semibold text-[18px] hover:bg-white rounded-xl transition-all ease-in duration-200 cursor-pointer hover:text-black">
            <Link>Contact</Link>
          </li>
          <li className="px-2 bg-transparent font-semibold text-[18px] hover:bg-white rounded-xl transition-all ease-in duration-200 cursor-pointer hover:text-black">
            <Link>About us</Link>
          </li>
          
        </ul>
      </div> */}

      {/* RIGHT DIV >>> LOGIN AND SIGN UP BUTTON */}

      {
        <div className="flex items-center justify-between gap-2">
        <button className="text-[18px] px-3 py-1 bg-[#121212] rounded-2xl cursor-pointer" onClick={()=>navigate("/login")}>Login</button>
        <button className="text-[18px] px-3 py-1 bg-white/90 text-black font-bold rounded-2xl cursor-pointer transition-all duration-200 ease-in hover:text-white hover:bg-[#121212]" onClick={()=>navigate("/signUp")}>SignUp</button>
      </div>

    // ACCOUNT PROFILE SECTION 
    // <div className="flex items-center justify-baseline gap-4">
    //     <div className="flex items-center gap-2 justify-between text-[18px]">
    //         <div className="h-10 w-10 bg-[orangeRed] flex items-center justify-center rounded-full text-xl">
    //             J
    //         </div>
    //         <div>John</div>
    //     </div>

    //     <button className="bg-[#121212] px-3 rounded-xl py-1 text-[18px] cursor-pointer">Logout</button>
    // </div>
      
      }
    </div>
  );
}

export default Navbar;
