
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";




const AboutPage = () => {

    const clients = [...new Array(10)].map((client, index) => ({
        href: `/${index + 1}.png`
    }))

    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image:
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        },
    ];
    return (
        <div className="mb-10 flex flex-col">
            <div className="px-4 lg:px-12 text-center flex justify-center">
                <div className="w-full max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl font-normal bg-gradient-custom bg-clip-text text-transparent leading-relaxed lg:leading-relaxed">
                        Get to
                        <span className="bg-gradient-to-r from-red-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-red-700 rounded-none focus:outline-none ml-3">
                            Know
                        </span>
                        us for who
                        <span className="bg-gradient-to-r from-green-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-green-700 rounded-none focus:outline-none ml-3">
                            We are
                        </span>
                    </h1>
                    <p className="pt-4 text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nihil.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <section>
                    <div className="p-5">
                        <div className="flex flex-col lg:flex-row bg-gray-200 rounded-lg items-center lg:pl-20">
                            <div className="flex-1 p-5 lg:p-10">
                                <div className="aspect-square relative">
                                    <div className="h-80 lg:h-96">
                                        <img
                                            src="./p5.png"
                                            alt="image"
                                            className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-600"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-800 flex-2 flex flex-col px-5 py-5 lg:px-10 lg:py-5">
                                <section>
                                    <div className="w-28 lg:w-48">
                                        <h1 className="text-4xl font-Montserrat font-bold lg:text-5xl xl:text-7xl">ZOORA</h1>
                                        <div className="h-1 bg-emerald-600 mt-1"></div>
                                    </div>
                                </section>
                                <section className="py-6 flex flex-col gap-3 lg:w-[600px]">
                                    <h1 className="text-2xl lg:text-3xl font-medium capitalize">
                                        A passionate agency who thrives on building business
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus.
                                    </p>
                                </section>
                                <section className="flex flex-col lg:flex-row gap-5 items-start">
                                    <div className="mt-2">
                                        <button className="bg-gray-800 text-white text-xl px-8 py-2 rounded-lg flex-1 hover:bg-gray-700">
                                            Meet us
                                        </button>
                                    </div>
                                    <div className="w-full lg:w-auto">
                                        <div className="flex flex-row items-center justify-center mb-10 w-full relative">
                                            <AnimatedTooltip items={people} />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-5">
                    <div className="bg-gradient-to-t from-transparent to-white/10 p-5 lg:p-10">
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="flex-1">
                                <div className="border border-gray-700 rounded-lg  lg:p-10">
                                    <div className="bg-gradient-to-t from-transparent to-white/10 rounded-lg p-2  lg:p-5">
                                        <div className="flex flex-col items-center text-center gap-5">
                                            <img src="/i2.png" alt="icon" width={70} height={70} />
                                            <section className="flex flex-col gap-2">
                                                <h2 className="text-4xl bg-gradient-custom bg-clip-text text-transparent">Mission and Vision</h2>
                                                <p className="text-xl">ZebiOps SmartHome Solution</p>
                                            </section>
                                            <section>
                                                <p className="text-gray-300 text-justify">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique natus obcaecati eius incidunt maxime iste perspiciatis distinctio? Nam ab et blanditiis eos.
                                                </p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="border border-gray-700 rounded-lg  lg:p-10">
                                    <div className="bg-gradient-to-t from-transparent to-white/10 rounded-lg p-2  lg:p-5">
                                        <div className="flex flex-col items-center text-center gap-5">
                                            <img src="/i2.png" alt="icon" width={70} height={70} />
                                            <section className="flex flex-col gap-2">
                                                <h2 className="text-4xl bg-gradient-custom bg-clip-text text-transparent">Mission and Vision</h2>
                                                <p className="text-xl">ZebiOps SmartHome Solution</p>
                                            </section>
                                            <section>
                                                <p className="text-gray-300 text-justify">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique natus obcaecati eius incidunt maxime iste perspiciatis distinctio? Nam ab et blanditiis eos.
                                                </p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <InfiniteMovingCards
                className="mb-10 mt-20"
                items={clients}
                direction="right"
                speed="slow"
            />
        </div>
    )
}

export default AboutPage