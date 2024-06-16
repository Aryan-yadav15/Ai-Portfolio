import React from 'react'
import { HeroScrollDemo } from '../../test'
import Equalizer from '../Equalizer'

const Herosections = () => {
    return (
        <>
            <div className=''>
                <div className=" w-full mt-20 lg:mt-[-80px] mb-20 flex flex-col justify-center items-center gap-5 relative">

                    {/* 
                    <Equalizer />
                    <div className="px-4 lg:px-12 text-center">
                  <h1 className="text-4xl  md:text-6xl lg:text-6xl xl:text-7xl font-medium bg-gradient-custom bg-clip-text text-transparent leading-normal sm:leading-relaxed lg:leading-normal xl:leading-none">
                    The
                    <span className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">
                      Fastest
                    </span>
                    way to write copy for your
                    <span className="bg-gradient-to-r from-orange-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3">
                      Website
                    </span>
                  </h1>
                </div>
                <div className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-4">
                  Generate website copy quickly and easily using AI, all without leaving Figma
                </div>
                <div className="pt-8 text-lg font-light flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-center mt-4">
                  <button className="bg-white text-gray-800 font-normal py-2 px-6 sm:px-10 rounded-md hover:bg-gray-100 focus:outline-none">
                    Get This
                  </button>
                  <button className="border-[1px] bg-transparent text-white font-normal py-2 px-6 sm:px-10 rounded-md hover:bg-gray-100 focus:outline-none">
                    Try Beta
                  </button>
                </div>
              </>
            }
          >
            <img
              src="/p5.png"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div> */}
                    <HeroScrollDemo />
                </div>

            </div>
        </>
    )
}

export default Herosections