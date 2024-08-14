import React, { useState } from 'react';
import AccordionSection from '../../components/AccordionSection';

const LaporanKeuangan = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'Laporan Keuangan 2021', content:
         <div>
            <div className="mb-4">
                <li><a href= "/DKIPS_PERJANJIAN_KINERJA_2021.pdf" target="_blank" rel="noopener noreferrer">Laporan Keuangan 2021</a></li>
            </div>
        </div> },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">LAPORAN KEUANGAN</h1>
            
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

export default LaporanKeuangan;