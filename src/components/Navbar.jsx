import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skill" },
    { id: 4, text: "Project" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="fixed w-full bg-black z-20 flex justify-between items-center h-24 mx-auto px-12 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-purple-400">FRN.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-purple-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <a className="text-white hover:text-black" href={`#${item.text}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed z-10 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-purple-400 m-4">FRN.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-purple-400 duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <a className="text-white hover:text-black" href={`#${item.text}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
