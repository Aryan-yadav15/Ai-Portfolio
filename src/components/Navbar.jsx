import React from 'react'
import "./navbar.css"

const Navbar = () => {
  const handleAboutClick = () => {
    // Access the aboutRef from Homepage using context or props (explained later)
    const aboutSection = /* Get the DOM element reference */
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  const handleContactClick = () => {
    // Access the aboutRef from Homepage using context or props (explained later)
    const contactSection = /* Get the DOM element reference */
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  const handleProjectsClick = () => {
    // Access the aboutRef from Homepage using context or props (explained later)
    const projectSection = /* Get the DOM element reference */
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav class="fixed top-6 left-0 w-full z-50 ">
      <div class="container mx-auto flex justify-center items-center px-10 py-1">
        <ul class="flex flex-row rounded-lg gap-10 text-lg px-10 transition duration-300 ease-in-out hover:bg-white hover:text-black backdrop-blur-md backdrop-filter border-[1px] border-gray-500">
          <li class="p-2 hover:bg-transparent hover:text-gray-500 hover:text-xl transition duration-100">
            <a href="#" onClick={handleAboutClick}>About</a>
          </li>
          <li class="p-2 hover:bg-transparent hover:text-gray-500 hover:text-xl transition duration-100">
            <a href="#" onClick={handleContactClick}>Contact</a>
          </li>
          <li class="p-2 hover:bg-transparent hover:text-gray-500 hover:text-xl transition duration-100">
            <a href="#" onClick={handleProjectsClick}>Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar