
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
        <div className="mb-10 flex flex-col  ">
            <div className="px-4 lg:px-12 text-center flex justify-center">
                <div className='w-[80%]'>
                    <h1 className="text-5xl font-normal bg-gradient-custom bg-clip-text text-transparent lg:leading-relaxed">
                        Get to
                        <span className="bg-gradient-to-r from-red-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-red-700 rounded-none focus:outline-none ml-3">Know </span>
                        us for who
                        <span className="bg-gradient-to-r from-green-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-green-700 rounded-none focus:outline-none ml-3">We are </span>
                    </h1>
                    <p className="pt-4 text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nihil .</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <section>
                    <div className="  p-5">
                        <div className="flex flex-row bg-gray-200 rounded-lg xlg:pl-40 xlg:items-center ">
                            <div className="flex-1 p-10">
                                <div className="aspect-square relative">
                                    <div className=" xlg:h-[80%] lg:h-[90%]">
                                        <img src="./p5.png" alt="" className="object-cover w-full h-[110%] rounded-lg shadow-lg shadow-gray-600 " />
                                    </div>
                                </div>
                            </div>

                            <div className="text-gray-800 flex-2 flex flex-col px-10 py-5 xlg:flex-1">
                                <section>
                                    <div className='w-28 xlg:w-48'>
                                        <h1 className='text-4xl font-Montserrat font-bold xlg:text-7xl  '>ZOORA</h1>
                                        <div className='h-[5px]  bg-emerald-600'></div>
                                    </div>
                                </section>
                                <section className='py-6 flex gap-3 flex-col w-[600px]'>
                                    <h1 className='text-3xl font-medium capitalize'>A passionate agency who thrives on building buisness </h1>
                                    <p>Lorem ipsum dolor ds sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus</p>
                                </section>
                                <section className='flex flex-row gap-20 items-start'>
                                    <div className="mt-2">
                                        <button className='bg-gray-800 text-white text-xl px-8 py-2 rounded-lg flex-1'>Meet us</button>
                                    </div>
                                    <div>
                                        <div className="flex flex-row items-center justify-center mb-10 w-full relative flex-2">
                                            <AnimatedTooltip items={people} />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="xlg:px-5">
                    <div className="bg-gradient-to-t from-transparent to-white/10">
                        <div className="flex flex-row">
                            <div className="flex-1">
                                <div className="w-[100%] px-5 xlg:px-1">
                                    <div className=" p-5 xlg:px-20">
                                        <div className="border-[1px] border-gray-700 rounded-lg">
                                            <div className="rounded-lg bg-gradient-to-t from-transparent to-white/10">
                                                <div className="flex flex-col">
                                                    <div className=" flex flex-row  ">
                                                        <div className="pl-5 pr-10 pt-5 pb-10 xlg:px-28">
                                                            <div className="  flex flex-col gap-10 items-center text-center">
                                                                <div>
                                                                    <img src="/i2.png" alt="" width={70} height={70} />
                                                                </div>
                                                                <section className='flex gap-4 flex-col'>
                                                                    <h2>
                                                                        <span className='text-5xl bg-gradient-custom bg-clip-text text-transparent '>Mission and Vision </span>
                                                                    </h2>
                                                                    <p className='text-xl'> ZebiOps SmartHome Solution</p>
                                                                </section>
                                                                <section>
                                                                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique natus obcaecati eius incidunt maxime iste perspiciatis distinctio? Nam ab et blanditiis eos </p>
                                                                </section>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="w-[100%] px-5 xlg:px-1">
                                    <div className=" p-5 xlg:px-20">
                                        <div className="border-[1px] border-gray-700 rounded-lg">
                                            <div className="rounded-lg bg-gradient-to-t from-transparent to-white/10">
                                                <div className="flex flex-col">
                                                    <div className=" flex flex-row  ">
                                                        <div className="pl-5 pr-10 pt-5 pb-10  xlg:px-28">
                                                            <div className="  flex flex-col gap-10 items-center text-center">
                                                                <div>
                                                                    <img src="/i2.png" alt="" width={70} height={70} />
                                                                </div>
                                                                <section className='flex gap-4 flex-col'>
                                                                    <h2>
                                                                        <span className='text-5xl bg-gradient-custom bg-clip-text text-transparent '>Mission and Vision </span>
                                                                    </h2>
                                                                    <p className='text-xl'> ZebiOps SmartHome Solution</p>
                                                                </section>
                                                                <section>
                                                                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique natus obcaecati eius incidunt maxime iste perspiciatis distinctio? Nam ab et blanditiis eos </p>
                                                                </section>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <InfiniteMovingCards
                className="mb-10 mt-20 "
                items={clients}
                direction='right'
                speed='slow'
            />
        </div>
    )
}

export default AboutPage