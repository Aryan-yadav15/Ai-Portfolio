import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col flex-2">
                        <section className='flex flex-col'>
                            <div className="bg-gray-200 rounded-t-3xl pb-10">
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
                        <section></section>
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
                                                <img src="/linkedin.png" alt="" width={30} height={30}/>
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
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer