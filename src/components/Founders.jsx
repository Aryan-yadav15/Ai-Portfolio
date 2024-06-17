import React from 'react';

const Founders = () => {
    return (
        <div className="p-5">
            <div className="px-4 lg:px-12 text-center flex flex-col justify-center">
                <div className='pb-10 lg:pb-20'>
                    <h1 className="text-4xl lg:text-5xl font-normal bg-gradient-to-r bg-clip-text text-transparent lg:leading-relaxed">
                        Behind the
                        <span className="bg-gradient-to-r from-orange-400/20 to-orange-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-2 border-orange-700 rounded-none focus:outline-none ml-3">Innovation: </span>
                        Meet Our
                        <span className="bg-gradient-to-r from-green-500/20 to-green-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-2 border-green-700 rounded-none focus:outline-none ml-3">Founder </span>
                    </h1>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row bg-gray-200 rounded-lg items-center">
                <div className="lg:w-1/2 p-10">
                    <div className="aspect-w-3 aspect-h-4 relative">
                        <img src="./p5.png" alt="" className="object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
                <div className="lg:w-1/2 text-gray-800 flex flex-col p-5 lg:p-10 lg:py-5">
                    <div className='mb-8 lg:mb-10'>
                        <img src="/logo-horizontal-dark.png" alt="" />
                        <div className='h-[5px]  bg-emerald-600'></div>
                    </div>
                    <section className='py-6 lg:px-6'>
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
                    </section>
                    {/* <section className='flex flex-row gap-20 items-start'>
            <div className="mt-2">
              <button className='bg-gray-800 text-white text-xl px-8 py-2 rounded-lg'>Meet us</button>
            </div>
          </section> */}
                </div>
            </div>
        </div>
    );
}

export default Founders;
