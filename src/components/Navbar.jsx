import React from 'react'

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
    <nav className="fixed top-5 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-center items-center px-10 py-1">
        <ul className="flex flex-row rounded-lg gap-10 text-lg px-10 bg-transparent backdrop-blur-md backdrop-filter border-[1px] border-gray-500">
          <li className="text-white p-2 hover:bg-gray-700">
            <a href="#" onClick={handleAboutClick}>About</a>
          </li>
          <li className="text-white p-2 hover:bg-gray-700">
            <a href="#" onClick={handleContactClick}>Contact</a>
          </li>
          <li className="text-white p-2 hover:bg-gray-700">
            <a href="#" onClick={handleProjectsClick}>Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar