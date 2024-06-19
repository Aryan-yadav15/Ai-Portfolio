import React from 'react';
import modalContent from '../sections/Terms'; // Importing modal content

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white text-customDarkGray p-5 rounded-lg w-3/5 max-h-4/5 overflow-y-auto h-3/4"> {/* Added max-h-4/5 for max height */}
                <button
                    className="sticky top-0 right-0 p-2 text-2xl font-bold"
                    onClick={onClose}
                >
                    <div className="rounded-full w-[30px] bg-red-300">
                        &times;
                    </div>
                </button>
                <div className="flex justify-center mb-4">
                    <img src="/logo-horizontal-dark.png" alt="Logo" className="h-48" />
                </div>
                <div className="mt-4">
                    <h1 className="text-2xl font-bold mb-4">{modalContent.title}</h1>
                    {modalContent.sections.map((section, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="text-lg font-semibold">{section.title}</h2>
                            <p className="mt-2">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
