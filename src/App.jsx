import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'
import { BackgroundBeams } from './components/ui/BackgroundBeams'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-customDarkGray text-white font-Poppins inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#1a1919_1px,transparent_1px),linear-gradient(to_bottom,#1a1919_1px,transparent_1px)] bg-[size:6rem_4rem]'>
      {/* <AboutScrollProvider> 
        <Layout />
      </AboutScrollProvider> */}
      <Layout />
      <BackgroundBeams />
    </div>
  );
}

export default App
