import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col justify-center items-center flex-2 bg-gray-200 rounded-t-3xl ">
                        <section className='flex flex-col'>
                            <div className="pb-10 ">
                                <div className='flex flex-col gap-7 justify-center items-center pt-20 p-10 text-gray-900 text-center'>
                                    <h1 className=' text-8xl font-Montserrat font-semibold'>Contact us?</h1>
                                    <div className="flex  ">
                                        <p className='text-3xl'> We'd love to hear from you!</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className='w-full flex items-center justify-center'>
                                        <form action="" className=''>
                                            <input type="text" placeholder='Enter your email' className='rounded-l-lg p-3 border-1 border-gray-700' style={{ width: "600px" }} />
                                            <input type="submit" value='Subscribe' className='bg-gray-800 text-white p-3 rounded-r-lg' />
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </section>
                        <section className='flex flex-col gap-4 border-t-2 border-gray-300 w-[150vh]'>
                            <div className="flex flex-row px-10 pt-5">
                                <h1 className=' text-3xl text-gray-500  font-medium flex-1'>Our Info</h1>
                                <h1 className=' text-3xl text-gray-500  font-medium flex-1'>Our Page</h1>
                                <h1 className=' text-3xl text-gray-500  font-medium flex-1'>Security</h1>
                            </div>
                            <div className="">
                                <div className="px-10 flex flex-row justify-center items-center text-gray-500 ">
                                    <div className="flex-1 flex flex-col gap-5">
                                        <p class="text-black font-medium text-start" >  abcde@gmail.com</p>
                                        <p class="text-black font-medium text-start" >  +1999929993</p>
                                        <p class="text-black font-medium text-start" >  1234 Street Name, City Name, United States</p>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-5">
                                        <p class="text-black font-medium text-start" >  About</p>
                                        <p class="text-black font-medium text-start" >  Homepage</p>
                                        <p class="text-black font-medium text-start" >  Services</p>
                                    </div>
                                    <div className=" flex-1 flex flex-col gap-5">
                                        <p class="text-black font-medium text-start" >  abcde@gmail.com</p>
                                        <p class="text-black font-medium text-start" >  +1999929993</p>
                                        <p class="text-black font-medium text-start" >  1234 Street Name, City Name, United States</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <div className="h-full flex-1  w-full flex flex-col bg-gray-200 rounded-tl-3xl">
                            <div className=" rounded-t-2xl">
                                <div className="flex flex-col gap-10 justify-center items-center pt-20 p-10 text-gray-900 text-center">
                                    <div className=''>
                                        <h1 className='text-6xl font-Montserrat font-bold xlg:text-7xl  '>Hwllo</h1>
                                        <div className='h-[5px]  bg-emerald-600'></div>
                                    </div>
                                </div>
                            </div>
                            <section className='flex flex-col '>
                                <div className="p-2">
                                    <div className="border-t-2 border-gray-300">
                                        <div className="flex flex-row justify-center pt-4">
                                            <p className='text-2xl text-gray-500'>Our Socials</p>
                                        </div>
                                        <div>
                                            <ul className="flex flex-row justify-center gap-4 pt-5">
                                                <li className="mr-4">
                                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                                        <img src="/github.png" alt="" width={30} height={30} />
                                                    </a>
                                                </li>
                                                <li className="mr-4">
                                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                                        <img src="/instagram.png" alt="" width={30} height={30} />
                                                    </a>
                                                </li>
                                                <li className="mr-4">
                                                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                                        <img src="/linkedin.png" alt="" width={30} height={30} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                                        <img src="/twitter.png" alt="" width={30} height={30} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-10">
                                    <div className="flex flex-col gap-2 justify-center items-center">
                                        <h1 className='text-2xl text-gray-500 font-light text-center'>Our Office</h1>
                                        <div>
                                            <p class="text-black font-semibold text-center w-[200px]" >  1234 Street Name, City Name, United States
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer