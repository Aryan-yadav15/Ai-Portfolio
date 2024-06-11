import React from 'react'

const SolutionPage = () => {
    return (
        <div className='flex flex-col gap-14'>
            <div className="px-4 lg:px-12 text-center flex justify-center">
                <div className='w-[80%]'>
                    <h1 className="text-5xl font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-relaxed">
                        The
                        <span className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">A.I. Advantage: </span>
                        Discover Tools to
                        <span className="bg-gradient-to-r from-orange-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3">Enhance </span>
                        Your Results
                    </h1>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className="border-[1px] border-gray-700 rounded-lg">
                    <div className="rounded-lg bg-gradient-to-t from-transparent to-white/10">
                        <div className="flex flex-col">
                            <div className=" flex flex-row  ">
                                <div className="pl-5 pr-10 pt-5 pb-10 w-[50%] xlg:p-20">
                                    <div className=" flex-1  flex flex-col gap-10">
                                        <div className=''>
                                            <img src="/i1.png" alt="" width={70} height={70} />
                                        </div>
                                        <section className='flex gap-4 flex-col'>
                                            <h2>
                                                <span className='text-7xl bg-gradient-custom bg-clip-text text-transparent'>ZORA</span>
                                            </h2>
                                            <p className='text-3xl'> ZebiOps Real-Time Assistant</p>
                                        </section>
                                        <section className='flex flex-col gap-5 justify-center items-center'>
                                            <div>
                                                <span className="bg-gray-200 font-semibold text-gray-950 px-2 rounded-sm text-xl mr-2 ">Productivity</span>
                                            </div>
                                            <p className='text-gray-300 '>

                                                ZORA uses Generative AI and is trained to have human-like conversations. It also has the capability to provide real-time data similar to existing search engines. By combining AI with various mobile apps, ZORA creates a comprehensive solution to address all the digital needs of customers. ZORA listens, learns, and adapts to user preferences, offering a truly personalized experience.
                                            </p>
                                            <div>
                                                <span className="bg-gray-200 font-semibold text-gray-950 px-2 rounded-sm text-xl   ">Efficiency</span>

                                            </div>
                                            <p className='text-gray-300 pt-3'>

                                                ZORA (ZebiOps Real-time Assistant) is an advanced AI personal assistant designed to manage various aspects of your digital life efficiently. By integrating AI with search engines, social media, and mobile apps, ZORA aims to transform personal productivity and interaction with technology. The initial launch will focus on two main features: Email Management and Call Management.
                                            </p>
                                        </section>
                                    </div>
                                </div>
                                <div className="flex-1 p-10 bg-gray-600">
                                    <div class="bg-red-50 h-[100%] rounded-lg overflow-hidden">
                                        <img src="/p5.png" alt="" class="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] border-gray-700 rounded-lg">
                    <div className="rounded-lg bg-gradient-to-t from-transparent to-white/10">
                        <div className="flex flex-col">
                            <div className=" flex flex-row  ">
                                <div className="pl-5 pr-10 pt-5 pb-10 w-[50%] xlg:p-20">
                                    <div className=" flex-1  flex flex-col gap-10">
                                        <div>
                                            <img src="/i2.png" alt="" width={70} height={70} />
                                        </div>
                                        <section className='flex gap-4 flex-col'>
                                            <h2>
                                                <span className='text-7xl bg-gradient-custom bg-clip-text text-transparent'>ZOSS </span>
                                            </h2>
                                            <p className='text-3xl'> ZebiOps SmartHome Solution</p>
                                        </section>
                                        <section className='flex flex-col gap-5 justify-center items-center'>
                                            <div>
                                                <span className="bg-gray-200 font-semibold text-gray-950 px-2 rounded-sm text-xl mr-2 ">Productivity</span>
                                            </div>
                                            <p className='text-gray-300 '>
                                                ZOSS (ZebiOps SmartHome Solution) aims to create intelligent living spaces that converge IoT, AI/ML, and Deep Tech to anticipate and respond intelligently, targeting the premium segment.
                                            </p>
                                            <div>
                                                <span className="bg-gray-200 font-semibold text-gray-950 px-2 rounded-sm text-xl   ">Efficiency</span>

                                            </div>
                                            <p className='text-gray-300 pt-3'>
                                                Equipped with state-of-the-art sensors and detectors, including an advanced IR sensor and gas sensors, ZOSS prioritizes your safety and well-being at all times. The  ZORA voice assistant for human-like conversations and real-time updates on stocks, weather, sports, news, and more. Additionally, the ZORA mobile app enables remote monitoring and control of home automation, ensuring a seamless and integrated smart home experience.

                                            </p>
                                        </section>
                                    </div>
                                </div>
                                <div className="flex-1 p-10 bg-gray-600">
                                    <div class="bg-red-50 h-[100%] rounded-lg overflow-hidden">
                                        <img src="/p2.png" alt="" class="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SolutionPage