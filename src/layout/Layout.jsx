import AboutPage from "../components/AboutPage"
import Footer from "../components/Footer"
import Homepage from "../components/Homepage"
import Navbar from "../components/Navbar"
import SolutionPage from "../components/SolutionPage"
import Technology from "../components/Technology"

const Layout = () => {
    return (
      <div className="relative ">
        <Navbar />
        <div className=" px-16 xlg:px-48 py-5 sm:flex sm:flex-col ">
          <Homepage/>
          <AboutPage/>
          <SolutionPage/>
          <Technology/>
        </div>
        <Footer/>
      </div>
    )
  }
export default Layout