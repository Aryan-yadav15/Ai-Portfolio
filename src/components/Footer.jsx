import React, { useRef, useState } from 'react'
import Modal from './sections/Modal';
import emailjs from '@emailjs/browser';

const Footer = ({ aboutRef, contactRef, projectsRef }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleViewMoreClick = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_uid66jz', 'template_431qapa', form.current, 'uXWBgZT1nRdMB3EwV')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send email.');
                }
            );
    };

    return (
        <>
            <footer>
                <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="flex flex-col justify-center items-center flex-2 bg-gray-200 rounded-t-3xl ">
                        <section className='flex flex-col'>
                            <div className="pb-10 ">
                                <div className='flex flex-col gap-7 justify-center items-center pt-20 p-10 text-gray-900 text-center'>
                                    <h1 className=' text-6xl lg:text-8xl font-Montserrat font-semibold'>Contact us?</h1>
                                    <div className="flex  ">
                                        <p className='text-2xl lg:text-3xl'> We'd love to hear from you!</p>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <section className="container mx-auto px-4 lg:px-10 py-8 lg:py-16 bg-gray-100 rounded-lg shadow-md">
                            <h2 className="text-3xl text-center text-gray-800 font-medium mb-8">What We Offer</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-lg p-4 hover:shadow-lg">
                                    <i className="fas fa-info-circle text-4xl text-blue-500"></i>
                                    <h3 className="text-xl text-gray-800 font-medium mt-2">Our Info</h3>
                                    <div className="text-gray-600 text-base w-full">
                                        <div className="flex flex-col gap-4">
                                            <p className="text-lg lg:text-xl font-medium">
                                                <a href="#" onClick={() => handleScroll(aboutRef)}>About</a>
                                            </p>
                                            <p className="text-lg lg:text-xl font-medium">
                                                <a href="#" onClick={() => handleScroll(contactRef)}>Contact</a>
                                            </p>
                                            <p className="text-lg lg:text-xl font-medium">
                                                <a href="#" onClick={() => handleScroll(projectsRef)}>Solution</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-lg p-4 hover:shadow-lg">
                                    <i className="fas fa-book-open text-4xl text-green-500"></i>
                                    <h3 className="text-xl text-gray-800 font-medium mt-2">Our Page</h3>
                                    <div className="text-gray-600 text-base">
                                        <div className="flex flex-col gap-4">
                                            <p className="text-lg lg:text-xl font-medium">abcde@gmail.com</p>
                                            <p className="text-lg lg:text-xl font-medium">+1999929993</p>
                                            <p className="text-lg lg:text-xl font-medium">1234 Street Name, City Name, United States</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-lg p-4 hover:shadow-lg">
                                    <i className="fas fa-book-open text-4xl text-green-500"></i>
                                    <h3 className="text-xl text-gray-800 font-medium mt-2">Our Page</h3>
                                    <p className="text-gray-600 text-base">Learn more about us and our mission.</p>

                                    <div className="w-full flex items-center justify-center mt-4">
                                        <form ref={form} onSubmit={sendEmail} className="w-full max-w-md flex flex-col gap-4">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="rounded-lg p-3 border text-customDarkGray border-gray-300 focus:border-gray-500 focus:outline-none"
                                            />
                                            <input
                                                type="tel"
                                                name="number"
                                                placeholder="Enter your number"
                                                value={formData.number}
                                                onChange={handleChange}
                                                className="rounded-lg p-3 border text-customDarkGray border-gray-300 focus:border-gray-500 focus:outline-none"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="rounded-lg p-3 border text-customDarkGray border-gray-300 focus:border-gray-500 focus:outline-none"
                                            />
                                            <input
                                                type="submit"
                                                value="Submit"
                                                className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 cursor-pointer"
                                            />
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    <div>
                        <div className="h-full flex-1  w-full flex flex-col bg-gray-200 lg:rounded-tl-3xl">
                            <div className=" rounded-t-2xl">
                                <div className="flex flex-col gap-10 justify-center items-center pt-20 p-10 text-gray-900 text-center">
                                    <div className=''>
                                        <h1 className='text-6xl font-Montserrat font-bold xlg:text-7xl  '>ZOORA</h1>
                                        <div className='h-[5px]  bg-emerald-600'></div>
                                    </div>
                                </div>
                            </div>
                            <section className='flex flex-col '>
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
                                                        <img src="/linkedin.png" alt="" width={30} height={30} />
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
                                <div className="pt-10">
                                    <div className="flex flex-col gap-2 justify-center items-center">
                                        <h1 className='text-2xl text-gray-500 font-light text-center'>Our Office</h1>
                                        <div>
                                            <p className="text-black font-semibold text-center w-[200px]" >  1234 Street Name, City Name, United States
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </section>
                            <section>
                                <div className="w-full flex flex-col justify-center items-center xlg:mt-20">
                                    <p className='text-xl text-gray-600'>
                                        Terms and Conditions

                                    </p>
                                    <a href="#" onClick={handleViewMoreClick} className='text-sm underline text-gray-400'>View More</a>
                                </div>

                                {/* Modal */}
                                <Modal
                                    isOpen={isModalOpen}
                                    onClose={handleCloseModal}
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer