import AboutPage from "../components/AboutPage"
import Footer from "../components/Footer"
import Homepage from "../components/Homepage"
import Navbar from "../components/Navbar"
import SolutionPage from "../components/SolutionPage"
import Technology from "../components/Technology"
import Equalizer from "../components/Equalizer"
import "./layout.css"
import Overview from "../components/Overview"
import Founders from "../components/Founders"
import {Testimonial}  from "../components/Testimonial"

const Layout = () => {
    return (
      <div className="relative ">
        <Navbar />
        <div className=" px-16 xlg:px-48 py-5 sm:flex sm:flex-col ">
          <Homepage/>
          {/* <Equalizer/> */}
          <AboutPage/>
          <SolutionPage/>
          <Overview/>
          <Technology/>
          <Founders/>
          <Testimonial/>
        </div>
        <Footer/>
      </div>
    )
  }
export default Layout