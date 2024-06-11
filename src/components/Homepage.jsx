import React from 'react'
import Herosections from './sections/Herosections'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards.jsx'

const Homepage = () => {

  return (
    <div className=''>
      
      <section id="upper" className='h-full'>
        <div className="w-full p-1 flex flex-row justify-between">
          <div>
            <h1 className='text-4xl font-Montserrat font-bold  '>ZOORA</h1>
            <div className='h-[5px] bg-emerald-600'></div>
          </div>
          <button className='bg-gray-50 text-gray-900 px-2 rounded-lg font-semibold flex flex-row gap-2 justify-center items-center'>
            <div>
              <img src="/Message_light.svg" alt="" className='bg-black invert' />
            </div>
            Contact us
          </button>
        </div>
        <section id='hero'>
          <Herosections />
        </section>
      </section>
    </div>
  )
}

export default Homepage