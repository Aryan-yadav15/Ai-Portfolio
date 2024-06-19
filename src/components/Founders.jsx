import React from 'react';

const Founders = () => {
    return (
        <div className="p-5">
            <div className="px-4 lg:px-12 text-center flex flex-col justify-center">
                <div className='pb-10 lg:pb-20'>

                    <h1 className="text-3xl lg:text-5xl leading-relaxed font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-relaxed">
                        Behind
                        <span className="bg-gradient-to-r from-sky-400/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-sky-700 rounded-none focus:outline-none ml-3">Innovation: </span>
                        Meet Our
                        <span className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">Founder</span>
                    </h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row bg-gray-200 rounded-t-lg items-center">
                    <div className="lg:w-1/2 p-10 flex justify-center items-center">
                        <div className="aspect-w-3 aspect-h-4 relative">
                            <img src="./ceo.jpg" alt="" className="object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 text-gray-800 flex flex-col p-5 lg:p-10 lg:py-5">
                        <div className='mb-8 lg:mb-10'>
                            <img src="/logo-horizontal-dark.png" alt="" />
                            <div className='h-[5px]  bg-emerald-600'></div>
                        </div>
                        <section className='py-6 lg:px-6'>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-semibold capitalize bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-300 mb-2">Prashant S B</h1>
                                <p className='text-lg lg:text-xl font-light mb-4'>Founder & CEO</p>
                                <p className='text-base lg:text-lg leading-relaxed'>
                                    Prashant S B, the visionary founder of ZebiOps Technology Private Limited, brings over 21 years of corporate experience to the table. With an impressive educational background, holding an MBA in General Management and a BTech in Computer Science and Engineering, Prashant has honed his expertise across diverse industries.
                                </p>
                                <p className='text-base lg:text-lg leading-relaxed mt-4'>
                                    He has held pivotal roles in renowned companies such as Amazon, EMC Data Storage Systems, Honeywell, McAfee, BAeHAL, and Spirent Communications. His extensive domain experience spans Embedded Systems, Aerospace, Storage, Antivirus, Networking, and Ecommerce, making him a dynamic and seasoned leader in the tech industry.
                                </p>
                                <p className='text-base lg:text-lg leading-relaxed mt-4'>
                                    Under Prashant's guidance, ZebiOps Technology is poised to revolutionize personal productivity and home automation with its cutting-edge AI solutions, ZORA and ZOSS. His unwavering commitment to innovation and excellence drives the company's mission to create intelligent, user-centric technologies that transform everyday interactions.
                                </p>
                            </div>
                        </section>
                        {/* <section className='flex flex-row gap-20 items-start'>
            <div className="mt-2">
              <button className='bg-gray-800 text-white text-xl px-8 py-2 rounded-lg'>Meet us</button>
            </div>
          </section> */}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row bg-gray-200  items-center">
                    <div className="lg:w-1/2 text-gray-800 flex flex-col p-5 lg:p-10 lg:py-5">
                        <div className='mb-8 lg:mb-10'>
                            <img src="/logo-horizontal-dark.png" alt="" />
                            <div className='h-[5px]  bg-emerald-600'></div>
                        </div>
                        <section className='py-6 lg:px-6'>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-semibold capitalize bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-300 mb-2">Prashant S B</h1>
                                <p className='text-lg lg:text-xl font-light mb-4'>Founder & CEO</p>
                                <p className='text-base lg:text-lg leading-relaxed'>
                                    Meet Vishruth, a seasoned data science and artificial intelligence professional. With a Master's degree in Data Science, Vishruth excels at turning complex datasets into clear, actionable insights. His skills extend beyond data analysis to a deep passion for machine learning and deep learning algorithm.
                                </p>
                                <p className='text-base lg:text-lg leading-relaxed mt-4'>
                                Vishruth is part of a forward-thinking ZebiOps team at the forefront of AI innovation. He specializes in tackling challenging problems and developing intelligent, scalable AI solutions that significantly enhance model refinement. Always staying updated with the latest technological trends, He is ready to take on new challenges in the ever-evolving landscape of data science, making the journey through data both insightful and enjoyable.</p>
                            </div>
                        </section>
                    </div>
                    <div className="lg:w-1/2 p-10">
                        <div className="aspect-w-3 aspect-h-4 relative">
                            <img src="./founder.jpg" alt="" className="object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col lg:flex-row bg-gray-200 rounded-b-lg items-center">

                    <div className="lg:w-1/2 p-10 flex justify-center items-center">
                        <div className="aspect-w-3 aspect-h-4 relative">
                            <img src="./dev.jpg" alt="" className="object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 text-gray-800 flex flex-col p-5 lg:p-10 lg:py-5">
                        <div className='mb-8 lg:mb-10'>
                            <img src="/logo-horizontal-dark.png" alt="" />
                            <div className='h-[5px]  bg-emerald-600'></div>
                        </div>
                        <section className='py-6 lg:px-6'>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-semibold capitalize bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-300 mb-2"> Kishor Kumar Naik P</h1>
                                <p className='text-lg lg:text-xl font-light mb-4'>Co-founder</p>
                                <p className='text-base lg:text-lg leading-relaxed'>
                                    Introducing Kishor Kumar Naik P, a distinguished professional in the field of data science and artificial intelligence. With a Master's degree in Data Science, Kishor possesses a remarkable ability to convert complex datasets into actionable insights. His expertise extends beyond data analysis, with a strong enthusiasm for machine learning and deep learning algorithms and a penchant for crafting the perfect cup of coffee. Together, let's leverage data to drive innovative solutions.                                </p>
                                <p className='text-base lg:text-lg leading-relaxed mt-4'>
                                    At ZebiOps Technology, I'm honored to be part of a pioneering team that is cutting edge on AI innovation. He excels in addressing challenging problems and developing intelligent, scalable AI solutions that have a tangible impact on refining models and staying abreast of the latest technological trends, consistently ready to embrace new adventures in the ever-evolving landscape of data science                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Founders;
