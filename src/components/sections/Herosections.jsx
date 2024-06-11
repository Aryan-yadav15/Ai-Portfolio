import React from 'react'
import { HeroScrollDemo } from '../../test'
import Equalizer from '../Equalizer'

const Herosections = () => {
    return (
        <>
            <div className=''>
                <div className=" w-full mt-[-80px] mb-20 flex flex-col justify-center items-center gap-5 relative">
                    
                    {/* <div className='z-50'>
                        <div className="px-4 lg:px-12 text-center">
                            <h1 className="text-7xl font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-normal">
                                The
                                <span className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">Fastest </span>
                                way to write copy for your
                                <span className="bg-gradient-to-r from-orange-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3">Website </span>
                            </h1>
                        </div>
                        <div className=" text-lg text-gray-300 text-center">
                            Generate website copy quickly and easily using AI, all without leaving Figma
                        </div>
                        <div className="pt-8 text-xl font-light flex gap-10 justify-center">
                            <button className="bg-white text-gray-800 font-normal py-2 px-10 rounded-md hover:bg-gray-100 focus:outline-none">Get This</button>
                            <button className='border-[1px] bg-transparent text-white font-normal py-2 px-10 rounded-md hover:bg-gray-100 focus:outline-none'>Try Beta</button>
                        </div>
                    </div> */}
                    <HeroScrollDemo/>
                </div>

            </div>
        </>
    )
}

export default Herosections