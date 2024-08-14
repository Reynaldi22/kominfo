import React, { useState } from 'react';
import AccordionSection from '../../components/AccordionSection';

const IndikatorKerjaUtama = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { 
            title: 'Indikator Kinerja Utama 2021', 
            content: (
                <div className="mb-4">
                    <ul className="list-disc list-inside">
                        <li><a href="/IKU/DKIPS_SK_IKU_2021.pdf" target="_blank" rel="noopener noreferrer">SK IKU 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Januari.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Januari 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Februari.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Februari 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Maret.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Maret 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_April.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target April 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Mei.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Mei 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Juni.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Juni 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Juli.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Juli 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Agustus.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Agustus 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_September.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target September 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Oktober.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Oktober 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_November.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target November 2021</a></li>
                        <li><a href="/IKU/e-IKU___Cetak_Bukti_Target_Desember.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Desember 2021</a></li>
                    </ul>
                </div>
            ),
        },
    ];
    

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">INDIKATOR KINERJA UTAMA</h1>
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

export default IndikatorKerjaUtama;