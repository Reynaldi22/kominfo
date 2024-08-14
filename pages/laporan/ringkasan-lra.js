import React, { useState } from 'react';
import AccordionSection from '../../components/AccordionSection';

const RingkasanLRA = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'LRA 2021', content:
         <div>
            <div className="mb-4">
                <ul className="list-disc list-inside">
                    <li><a href= "/DKIPS_LRA_SAMPAI_DENGAM_31_DESEMBER_2021.pdf" target="_blank" rel="noopener noreferrer">LRA 2021</a></li>
                </ul>
            </div>
        </div> },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">RINGKASAN LRA</h1>
            
            <h2 className="text-xl font-semibold ml-5">Laporan Realisasi Anggaran</h2>
            <ul className="space-y-4 flex-grow items-start mt-5 px-4">
            {sections.map((section, index) => (
                   <AccordionSection
                   key={index}
                   title={section.title}
                   content={section.content}
                   isOpen={openIndex === index}
                   onToggle={() => handleToggle(index)}
               /> 
                ))}
            </ul>
        </div>
    );
};

export default RingkasanLRA;