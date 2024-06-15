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
import { Testimonial } from "../components/Testimonial"
import Preloader from "../components/sections/PreLoader"
import { useEffect, useState } from "react"
import { backInOut, easeOut, motion } from 'framer-motion';



const Layout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading period
        setTimeout(() => {
            setLoading(false);
        }, 5000); // Adjust the timeout as needed
    }, []);

    return (
        <motion.div
            className="relative">
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,

                        }}>
                        <Navbar />
                        <div className="px-10 lg:px-16 xlg:px-48 py-5 sm:flex sm:flex-col">
                            <Homepage />
                            <AboutPage />
                            {/* <Equalizer /> */}
                            <SolutionPage />
                            <Overview />
                            <Technology />
                            <Founders />
                            <Testimonial />
                        </div>
                        <Footer />
                        
                    </motion.div>

                </>
            )}
        </motion.div>
    );
};

export default Layout;