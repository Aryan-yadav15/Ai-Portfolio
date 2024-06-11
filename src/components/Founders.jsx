import React from 'react'

const Founders = () => {
    return (
        <div>
            <div className="  p-5">
                <div className="px-4 lg:px-12 text-center flex flex-col justify-center">
                    <div className='pb-20'>
                        <h1 className="text-5xl font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-relaxed">
                            Behind the  
                            <span className="bg-gradient-to-r from-orange-400/20 to-orange-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3">Innovation: </span>
                            Meet Our 
                            <span className="bg-gradient-to-r from-green-500/20 to-green-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-green-700 rounded-none focus:outline-none ml-3">Founder </span>
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row bg-gray-200 rounded-lg xlg:pl-40 xlg:items-center ">
                    <div className="flex-1 p-10">
                        <div className="aspect-square relative">
                            <div className=" xlg:h-[80%] lg:h-[90%]">
                                <img src="./p5.png" alt="" className="object-cover w-full h-[180%] xlg:h-[110%] rounded-lg shadow-lg shadow-gray-600 " />
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-800 flex-2 flex flex-col px-10 py-5 xlg:flex-1">
                        <section>
                            <div className='w-28 xlg:w-48'>
                                <h1 className='text-4xl font-Montserrat font-bold xlg:text-7xl  '>Hwllo</h1>
                                <div className='h-[5px]  bg-emerald-600'></div>
                            </div>
                        </section>
                        <section className='py-6 flex gap-3 flex-col w-[600px]'>
                            <h1 class="text-6xl font-semibold capitalize bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-300">Prashant S B</h1>
                            <p className='text-xl font-light '>Founder & CEO</p>
                            <p className='flex flex-col gap-4'>
                                <span>
                                    Prashant S B, the visionary founder of ZebiOps Technology Private Limited, brings over 21 years of corporate experience to the table. With an impressive educational background, holding an MBA in General Management and a BTech in Computer Science and Engineering, Prashant has honed his expertise across diverse industries.
                                </span>
                                <span>
                                    He has held pivotal roles in renowned companies such as Amazon, EMC Data Storage Systems, Honeywell, McAfee, BAeHAL, and Spirent Communications. His extensive domain experience spans Embedded Systems, Aerospace, Storage, Antivirus, Networking, and Ecommerce, making him a dynamic and seasoned leader in the tech industry.
                                </span>
                                <span>
                                    Under Prashant's guidance, ZebiOps Technology is poised to revolutionize personal productivity and home automation with its cutting-edge AI solutions, ZORA and ZOSS. His unwavering commitment to innovation and excellence drives the company's mission to create intelligent, user-centric technologies that transform everyday interactions.

                                </span>
                            </p>
                        </section>
                        {/* <section className='flex flex-row gap-20 items-start'>
                        <div className="mt-2">
                            <button className='bg-gray-800 text-white text-xl px-8 py-2 rounded-lg flex-1'>Meet us</button>
                        </div>
                    </section> */}
                    </div>
                </div>
            </div></div>
    )
}

export default Founders