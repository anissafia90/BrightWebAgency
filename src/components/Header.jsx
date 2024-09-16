import { useState } from "react";
import Logo from "../assets/B.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="header"
      className="flex items-center justify-between p-4 bg-white shadow-md"
    >
      {/* Logo Section */}
      <div className="text-[24px] ml-[20px] font-bold underline">
        <img src={Logo} alt="Logo" width={100} height={100} />
      </div>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div className="md:hidden mr-4">
        <button
          onClick={toggleMenu}
          className="text-orange-800 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-6 md:gap-8 absolute md:static top-[70px] left-0 w-full bg-white md:bg-transparent md:w-auto p-6 md:p-0 shadow-lg md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 cursor-pointer">
          <li className="p-2 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline">
            <a href="#aboutUS">About Us</a>
          </li>
          <li className="p-2 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline">
            <a href="#services">Services</a>
          </li>
          <li className="p-2 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline">
            <a href="#team">Our Team</a>
          </li>
          <li className="p-2 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline">
            <a href="#project">Our Projects</a>
          </li>
          <li className="p-2 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="p-2 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75 hover:underline">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <div className="mt-4 md:mt-0">
          <button className="border-green-800 text-2xl text-green-800 border-4 p-[6px] rounded-md hover:bg-green-800 hover:text-white hover:transition-all delay-75">
            <a href="#contact">Let&apos;s Talk</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
