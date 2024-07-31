import React, { useState } from 'react';

const RencanaAnggaran = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'Rencana Anggaran 2021', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
        
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">RENCANA ANGGARAN</h1>
            <ul className="space-y-4 flex-grow items-start mt-10 px-4">
                {sections.map((section, index) => (
                    <li key={index} className="w-full">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            <img
                                src="/arrow.svg"
                                alt="arrow"
                                className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-90' : 'rotate-0'}`}
                                style={{ width: '24px', height: '24px' }}
                            />
                            <span className="ml-2 text-lg font-medium">{section.title}</span>
                        </div>
                        {openIndex === index && (
                            <div className="mt-2 p-2 pl-8 text-justify">
                                {section.content}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RencanaAnggaran;