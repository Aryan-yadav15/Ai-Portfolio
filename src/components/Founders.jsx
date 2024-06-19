import React, { useState, useEffect } from 'react';

const Founders = () => {
  const [currentFounder, setCurrentFounder] = useState(0);
  const foundersData = [
    { name: 'Prashant S B', description: '...', image: './ceo.jpg' },
    { name: 'Vishruth', description: '...', image: './founder.jpg' },
    { name: 'Kishor Kumar Naik P', description: '...', image: './dev.jpg' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFounder((prevIndex) => (prevIndex + 1) % foundersData.length);
    }, 5000); // Change interval here to adjust autoplay speed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [foundersData.length]);

  const handlePrev = () => {
    setCurrentFounder((prevIndex) => (prevIndex - 1 + foundersData.length) % foundersData.length);
  };

  const handleNext = () => {
    setCurrentFounder((prevIndex) => (prevIndex + 1) % foundersData.length);
  };

  return (
    <div className="p-5">
      <div className="px-4 lg:px-12 text-center flex flex-col justify-center">
        <div className="pb-10 lg:pb-20">
          <h1 className="text-3xl lg:text-5xl leading-relaxed font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-relaxed">
            Behind
            <span className="bg-gradient-to-r from-sky-400/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-sky-700 rounded-none focus:outline-none ml-3">Innovation: </span>
            Meet Our
            <span className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">Founders</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col relative">
        <div className="flex overflow-hidden transition duration-1000 ease-in-out">
          {foundersData.map((founder, index) => (
            <div
              key={founder.name}
              className={`lg:w-full p-10 flex justify-center items-center opacity-0 transition duration-1000 ease-in-out absolute top-0 left-0 ${
                currentFounder === index ? 'opacity-100 z-10' : ''
              }`}
            >
              <div className="aspect-w-3 aspect-h-4 relative">
                <img src={founder.image} alt="" className="object-cover rounded-lg shadow-lg" />
              </div>
              <div className="lg:w-1/2 text-gray-800 flex flex-col p-5 lg:p-10 lg:py-5">
                <div className="mb-8 lg:mb-10">
                  <img src="/logo-horizontal-dark.png" alt="" />
                  <div className="h-[5px] bg-emerald-600"></div>
                </div>
                <section className="py-6 lg:px-6">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-semibold capitalize bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-300 mb-2">
                      {founder.name}
                    </h1>
                    <p className="text-lg lg:text-xl font-light mb-4">{founder.description}</p>
                    {/* Rest of founder details */}
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button 
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Founders;
