import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./navbar.css";

const Navbar = ({ aboutRef, contactRef, projectsRef }) => {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollingUp) {
      controls.start({ y: 0 });
    } else {
      controls.start({ y: '-100%' });
    }
  }, [scrollingUp, controls]);


  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-20"
      initial={{ y: 0 }}
      animate={controls}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between lg:justify-center items-center px-10 py-8">
        <div className='lg:hidden backdrop-blur-md backdrop-filter flex justify-between items-center px-5 rounded-lg border-[1px] border-gray-500'>
          <div className="lg:hidden text-2xl font-bold sm:w-[50%]  md:w-[50%]">
            <img src="/logo-horizontal-light.png" alt="Logo" />
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              ☰
            </button>
          </div>
        </div>
        <ul className={`lg:flex lg:items-center lg:justify-center rounded-lg gap-10 text-lg px-10 transition duration-300 ease-in-out hover:bg-white hover:text-black backdrop-blur-md backdrop-filter border-[1px] border-gray-500 ${isOpen ? 'flex flex-col absolute top-16 left-1/2 transform -translate-x-1/2 backdrop-blur-md backdrop-filter border-[1px] border-gray-500 rounded-lg shadow-lg p-5' : 'hidden'}`}>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#" onClick={() => handleScroll(aboutRef)}>About</a>
          </li>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#" onClick={() => handleScroll(contactRef)}>Contact</a>
          </li>
          <li className="p-2 hover:bg-transparent hover:text-gray-500 hover:font-semibold hover:text-xl transition duration-100">
            <a href="#" onClick={() => handleScroll(projectsRef)}>Solution</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
