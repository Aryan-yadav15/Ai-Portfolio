import React from 'react';

const ProductCard = ({ imageSrc, title, features }) => (
  <div className="flex flex-col lg:flex-row border-b-2 border-gray-600">
    <div className="flex-1 lg:border-2 border-gray-600 border-y-0">
      <div className="flex justify-center items-center w-full h-full">
        <div className={`rounded-full ${title === 'ZORA' ? 'bg-gradient-to-r from-purple-500 to-gray-50' : 'bg-gradient-to-r from-orange-500 to-gray-50'} w-40 h-40 md:w-60 md:h-60 overflow-hidden flex justify-center items-center`}>
          <div className="rounded-full bg-white w-36 h-36 md:w-56 md:h-56 overflow-hidden">
            <img src={imageSrc} alt={title} className="object-cover object-center w-full h-full" />
          </div>
        </div>
      </div>
    </div>
    <div className="flex-2 flex-col lg:flex-row lg:border-2 border-gray-600 flex border-y-0 border-l-0 py-5 lg:py-10 lg:px-10">
      <div className="lg:w-[15%] p-2 lg:p-0 flex w-[100%] justify-center items-center lg:pr-10">
        <h1 className="text-center lg:transform lg:rotate-[-90deg] text-6xl lg:text-8xl">{title}</h1>
      </div>
      <div className="w-[85%] text-justify">
        <div className="leading-6 flex flex-col gap-2">
          {features.map((feature, index) => (
            <span key={index} className="flex items-start gap-1">
              <span className="text-xl">○</span>
              <div className="flex flex-col">
                <span className="font-semibold">
                  {feature.title}:
                </span>
                <span className="ml-1 text-justify">{feature.description}</span>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Overview = () => {
  const zoraFeatures = [
    { title: 'Email Management', description: 'Notifies you of unread emails, summarizes long emails, composes draft replies, and deletes unwanted emails.' },
    { title: 'Call Management', description: 'Manages incoming and outgoing calls, provides transcripts, and allows AI-assisted call handling.' },
    { title: 'Task Management', description: 'Creates and tracks to-do lists, sets reminders and deadlines, and prioritizes tasks based on importance and urgency.' },
    { title: 'Calendar Management', description: 'Schedules meetings and appointments, sends reminders for upcoming events, and syncs with other calendar apps.' },
    { title: 'Social Media Integration', description: 'Manages social media posts, tracks engagement and interactions, and provides analytics and insights.' },
    { title: 'Personalized Recommendations', description: 'Suggests content based on interests, recommends products and services, and offers personalized travel and dining options.' },
    { title: 'Voice Assistant Capabilities', description: 'Answers questions using real-time data, performs tasks through voice commands, and engages in human-like conversations.' }
  ];

  const zossFeatures = [
    { title: 'Home Automation', description: 'Control lights, security systems, climate, and other home devices from a single interface.' },
    { title: 'Intelligent Presence Detection', description: 'Automated adjustments based on occupancy for personalized comfort.' },
    { title: 'Enhanced Safety', description: 'Integrated LPG and fire detection for proactive hazard prevention.' },
    { title: 'Emergency Assistance', description: 'Offers immediate response and guidance during critical situations, including fire, medical, and police emergencies.' },
    { title: 'Intelligent Automation', description: 'Learns user preferences and adjusts settings for a personalized experience.' },
    { title: 'Data Insights', description: 'Provides valuable analytics on energy usage.' }
  ];

  return (
    <div className="p-5 lg:p-10">
      <div className="pt-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-relaxed">
          A Deep
          <span className="bg-gradient-to-r from-sky-400/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-sky-700 rounded-none focus:outline-none ml-3">Dive</span>
          into our
          <span className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">Products</span>
        </h1>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <ProductCard
          imageSrc="./p2.png"
          title="ZORA"
          features={zoraFeatures}
        />
        <ProductCard
          imageSrc="./p2.png"
          title="ZOSS"
          features={zossFeatures}
        />
      </div>
    </div>
  );
};

export default Overview;
