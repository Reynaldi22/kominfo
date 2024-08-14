import React, { useState } from 'react';
import AccordionSection from '../../components/AccordionSection';

const RencanaStrategis = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'Renstra 2017-2021', content:
         <div>
            <div className="mb-4">
                <ul className="list-disc list-inside">
                    <li><a href= "/Renstra/DKIPS_RENSTRA_2017_2021_PDF.pdf" target="_blank" rel="noopener noreferrer">Renstra 2017-2021</a></li>
                </ul>
            </div>
        </div> },
        { title: 'Renstra 2021-2026', content:
            <div>
               <div className="mb-4">
                   <ul className="list-disc list-inside">
                       <li><a href= "/Renstra/DKIPS_RENSTRA_STRATEGIS_2021-2026.pdf" target="_blank" rel="noopener noreferrer">Renstra 2021-2026</a></li>
                   </ul>
               </div>
           </div> }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">RENCANA STRATEGIS</h1>
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

export default RencanaStrategis;