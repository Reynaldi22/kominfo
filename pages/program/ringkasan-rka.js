import React, { useState } from 'react';
import AccordionSection from '../../components/AccordionSection';

const RencanaAnggaran = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'Rekap RKA 2022', content:
         <div>
            <div className="mb-4">
                <ul className="list-disc list-inside">
                    <li><a href= "/Rencana_anggaran/DKIPS_RENJA_2021.pdf" target="_blank" rel="noopener noreferrer"> Rekap RKA 2022</a></li>
                </ul>
            </div>
        </div> }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">RINGKASAN RKA</h1>
            <ul className="space-y-4 flex-grow items-start mt-10 px-4">
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

export default RencanaAnggaran;