import React, { useState } from 'react';
import AccordionSection from '../../components/AccordionSection';

const RENKEU = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'Tahun 2021', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
        { title: 'DPA 2021', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
        { title: 'DPA Perubahan 2021', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
        { title: 'Pengelolaan Data', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
        { title: 'Tahun 2020', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">REN KEU</h1>
        
            <h2 className="text-xl font-semibold ml-5">Perencanaan Keuangan</h2>
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

export default RENKEU;