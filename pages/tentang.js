import React, { useState } from 'react';
import AccordionSection from '../components/AccordionSection';

const Tentang = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'Latar Belakang', content: 'Dinas komunikasi informatika persandian dan statistik daerah (KIPS) sebagai Satuan Kerja Perangkat Daerah (SKPD) yang membidangi penyebarluasan informasi, pengembangan dan pendayagunaan Teknologi Informasi Komunikasi (TIK) serta statistik dan persandian dituntut mampu memberikan pelayanan kepada masyarakat secara transparan dan akuntabel di bidang komunikasi dan informatika. Dengan pelayanan tersebut upaya pemerataan informasi dan pemenuhan hak publik akan informasi dapat dilakukan. Dalam hal ini, diharapkan masyarakat lebih berdaya dalam memperoleh dan memanfaatkan infomrasi, yang dapat meningkatkan kesejahteraannya, sedangkan bagi jajaran pemerintah teruwjudnya implementasi e-government secara utuh menjadi tujuan yang diharapkan. Memperhatikan hal tersebut, kiranya berbagai media informasi perlu lebih diberdayakan dan didayagunakan dalam upaya penyebarluasan dan pemerataan informasi kepada masyarakat, disamping dengan tetap mendorong peran strategis potensi lembaga komuniksi masyarakat untuk dapat menjadi penyebar infomrasi sekaligus menjadi public relation di daerahnya. Pemerintah Daerah dalam menetapkan kebijakan dan melaksanakan pemerintahan dan pembangunan tentu memerlukan informasi yang tepat, mudah, dan cepat diakses, serta akurat. Untuk mengantisipasi kebutuhan tersebut, perlu dikembangan sinergi antara manajemen pemerintahan dan pemanfaatan teknologi informasi yang didukung keterhubungan jaraingan informasi yang mencakup seluruh institusi pemerintah.' },
        { title: 'Struktur Organisasi', content: <img src="/struktur.png" alt="Struktur Organisasi" className="w-[75%] mx-auto" /> },
        { title: 'Program dan Kegiatan', content: 'Isi Program dan Kegiatan' },
        { title: 'Tugas Pokok dan Fungsi DKIPS', content: 'Isi Tugas Pokok dan Fungsi DKIPS' },
        { title: 'Visi dan Misi', content: 'Isi Visi dan Misi' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">TENTANG KAMI</h1>
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

export default Tentang;