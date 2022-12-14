import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute z-10 w-full flex justify-between mt-8 px-8">
      <div className="z-10">
        <button className="bg-red-700 text-white font-black p-2 rounded-md hover:bg-red-600">
          <Link to="/">AZUKI</Link>
        </button>
      </div>
      <div className="hidden md:block">
        <button className="bg-gray-400 bg-opacity-20 py-2 px-4 rounded-md text-xs hover:bg-gray-600 hover:bg-opacity-20 mr-2">
          <Link to="/beanz">BEANZ</Link>
        </button>
        <button className="bg-gray-400 bg-opacity-20 py-2 px-4 rounded-md text-xs hover:bg-gray-600 hover:bg-opacity-20">
          <Link to="/world">WORLD</Link>
        </button>
      </div>
      <div className="block md:hidden z-10">
        {/* {nav ? <AiOutlineClose size={32} /> : <HiOutlineMenuAlt4 size={32} />} */}
        <Hamburger toggled={nav} toggle={handleNav} />
      </div>
      <div
        className={
          nav
            ? "opacity-95 ease-in-out duration-500 fixed left-0 top-0 w-full h-full z-1 bg-[#d4d5d6] visible"
            : "opacity-0 ease-in-out duration-500 fixed left-0 top-0 w-full h-full z-1 invisible"
        }
      >
        <ul className="ml-8 mr-14 mt-28">
          <Link to="/beanz">
            <li
              className="text-2xl font-bold py-4 border-b border-gray-400"
              onClick={handleNav}
            >
              BEANZ
            </li>
          </Link>
          <Link to="/world">
            <li className="text-2xl font-bold py-4" onClick={handleNav}>
              WORLD
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
