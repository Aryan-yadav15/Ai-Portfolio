import Homepage from "../components/Homepage"
import Navbar from "../components/Navbar"
import SolutionPage from "../components/SolutionPage"

const Layout = () => {
    return (
      <div className="relative">
        <Navbar />
        <div className="">
          <Homepage/>
          <SolutionPage/>
        </div>
      </div>
    )
  }
export default Layout