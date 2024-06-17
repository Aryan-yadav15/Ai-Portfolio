import React from 'react'
import { HeroScrollDemo } from '../../test'
import Equalizer from '../Equalizer'
import BackgroundAudioPlayer from '../BackgroundAudio'
import "./PreLoader.css"
import { motion } from 'framer-motion'

const Herosections = () => {
  return (
    <>
      <div className=''>
        <div className=" w-full mt-[-100px]  lg:mt-0 xlg:mt-[20px] mb-20 flex flex-col justify-center items-center gap-5 relative h-[90vh]">

          <div className="flex flex-col items-center relative">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 2.5, ease: "easeIn" }}
              className="flex flex-col items-center relative"
            >
              <Equalizer />
            </motion.div>
            <div className="flex flex-col md:gap-28 lg:gap-10 xlg:gap-72">
              <div className='pt-10'>
                <div className="px-4 lg:px-12 text-center">
                  <h1 className="text-4xl md:text-6xl lg:text-6xl lg:p-10 xlg:p-8 md:leading-normal xlg:leading-normal xlg:text-7xl font-regular bg-gradient-custom bg-clip-text text-transparent leading-normal sm:leading-relaxed lg:leading-normal ">
                    <span className="animate-slide bg-gradient-to-r from-purple-500/20 to-purple-500/2 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">
                      Revolutionizing
                    </span>{" "}
                    Your Digital Life{" "}
                    <span className="bg-gradient-to-r animate-slide from-orange-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3">
                      With AI
                    </span>
                  </h1>
                </div>
                <div className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-4 z-10">
                  <p className=' relative z-10'>Generate website copy quickly and easily using AI, all without leaving Figma</p>
                </div>
              </div>
              <div className="pt-8 text-lg font-light flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-center mt-4">
                <button className="bg-white z-10 text-gray-800 font-normal py-2 px-6 sm:px-10 md:py-3 md:px-12 lg:py-4 lg:px-16 rounded-md hover:bg-gray-100 focus:outline-none">
                  Get This
                </button>
                <BackgroundAudioPlayer />
                <button className="border-[1px] z-10 bg-transparent text-white hover:text-gray-700 font-normal py-2 px-6 sm:px-10 md:py-3 md:px-12 lg:py-4 lg:px-16 rounded-md hover:bg-gray-100 focus:outline-none">
                  Try Beta
                </button>
              </div>
            </div>
          </div>
          {/* <HeroScrollDemo /> */}
        </div >

      </div >
    </>
  )
}

export default Herosections