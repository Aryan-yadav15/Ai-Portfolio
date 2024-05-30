import React from 'react'
import Herosections from './sections/Herosections'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards.jsx'

const Homepage = () => {

  const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`
  }))

  return (
    <div className=''>
      <section id="upper">
        <div className="w-full p-1 flex flex-row justify-between">
          <div>
            <h1 className='text-4xl font-Montserrat font-bold  '>Hwllo</h1>
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
      <InfiniteMovingCards
        className="mb-20 "
        items={clients}
        direction='right'
        speed='slow'
      />
    </div>
  )
}

export default Homepage