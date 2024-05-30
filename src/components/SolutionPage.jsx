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
                                <div className="pl-5 pr-10 pt-5 pb-10 w-[50%]">
                                    <div className=" flex-1  flex flex-col gap-10">
                                        <div>
                                            <img src="/i1.png" alt="" width={70} height={70} />
                                        </div>
                                        <section className='flex gap-4 flex-col'>
                                            <h2>
                                                <span className='text-7xl bg-gradient-custom bg-clip-text text-transparent'>ZORA</span>
                                            </h2>
                                            <p className='text-3xl'> ZebiOps Real-Time Assistant</p>
                                        </section>
                                        <section>
                                            <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique natus obcaecati eius incidunt maxime iste perspiciatis distinctio? Nam ab et blanditiis eos </p>
                                        </section>
                                    </div>
                                </div>
                                <div className="bg-red-50 flex-1 ">
                                    <img src="/p5.png" alt="" className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] border-gray-700 rounded-lg">
                    <div className="rounded-lg bg-gradient-to-t from-transparent to-white/10">
                        <div className="flex flex-col">
                            <div className=" flex flex-row  ">
                                <div className="pl-5 pr-10 pt-5 pb-10 w-[50%]">
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
                                        <section>
                                            <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique natus obcaecati eius incidunt maxime iste perspiciatis distinctio? Nam ab et blanditiis eos </p>
                                        </section>
                                    </div>
                                </div>
                                <div className="bg-red-50 flex-1 ">
                                    <img src="/p2.png" alt="" className='w-full h-full' />
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