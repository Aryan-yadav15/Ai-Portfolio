import React from 'react';
import "./navbar.css";

const Navbar = ({ aboutRef, contactRef, projectsRef }) => {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center px-10 py-1">
        <ul className="flex flex-row rounded-lg gap-10 text-lg px-10 transition duration-300 ease-in-out hover:bg-white  hover:text-black backdrop-blur-md backdrop-filter border-[1px] border-gray-500">
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#" onClick={() => handleScroll(aboutRef)}>About</a>
          </li>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold  hover:text-xl transition duration-100">
            <a href="#" onClick={() => handleScroll(contactRef)}>Contact</a>
          </li>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#" onClick={() => handleScroll(projectsRef)}>Solution</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
