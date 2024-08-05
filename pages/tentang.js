import React, { useState } from 'react';
import AccordionSection from './AccordionSection';

const Tentang = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'Latar Belakang', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer untuk mengatur dan menganalisis data yang berukuran besar, baik data maupun informasi pada mesin berbasis komputasi. Informatika juga mencakup studi, perancangan, dan pembuatan sistem komputasi dasar yang dapat memproses dan menyajikan informasi secara efektif dan efisien. Informatika merupakan cabang ilmu yang sangat luas dan multidisiplin, yang mencakup berbagai bidang seperti ilmu komputer, ilmu informasi, sistem informasi, teknik komputer, dan aplikasi informasi dalam sistem informasi manajemen. Informatika juga berkaitan dengan aspek kognitif dan sosial dari penggunaan informasi dalam berbagai konteks, seperti bioinformatika, informatika medis, dan informatika perpustakaan. Informatika memiliki beberapa fungsi dan manfaat, antara lain: Meningkatkan kemampuan berpikir kritis dan kreatif dalam menemukan solusi terkait komputer dan sistem komputasi. Meningkatkan keterampilan dalam memanfaatkan teknologi informasi untuk mengumpulkan, menyimpan, mengolah, dan menyebarkan informasi. Meningkatkan pengetahuan tentang struktur, sifat, dan interaksi dari sistem informasi dan pengguna serta antarmuka antara keduanya. Meningkatkan pemahaman tentang dampak sosial dan etis dari penggunaan teknologi informasi dalam masyarakat. Meningkatkan kesempatan karir dalam bidang informatika yang memiliki prospek cerah di masa depan.' },
        { title: 'Struktur Organisasi', content: 'Isi Struktur Organisasi' },
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