import React, { useState } from 'react';
import AccordionSection from '../components/AccordionSection';

const Tentang = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: 'Latar Belakang',
            content: 'Dinas komunikasi informatika persandian dan statistik daerah (KIPS) sebagai Satuan Kerja Perangkat Daerah (SKPD) yang membidangi penyebarluasan informasi, pengembangan dan pendayagunaan Teknologi Informasi Komunikasi (TIK) serta statistik dan persandian dituntut mampu memberikan pelayanan kepada masyarakat secara transparan dan akuntabel di bidang komunikasi dan informatika. Dengan pelayanan tersebut upaya pemerataan informasi dan pemenuhan hak publik akan informasi dapat dilakukan. Dalam hal ini, diharapkan masyarakat lebih berdaya dalam memperoleh dan memanfaatkan infomrasi, yang dapat meningkatkan kesejahteraannya, sedangkan bagi jajaran pemerintah teruwjudnya implementasi e-government secara utuh menjadi tujuan yang diharapkan. Memperhatikan hal tersebut, kiranya berbagai media informasi perlu lebih diberdayakan dan didayagunakan dalam upaya penyebarluasan dan pemerataan informasi kepada masyarakat, disamping dengan tetap mendorong peran strategis potensi lembaga komuniksi masyarakat untuk dapat menjadi penyebar infomrasi sekaligus menjadi public relation di daerahnya. Pemerintah Daerah dalam menetapkan kebijakan dan melaksanakan pemerintahan dan pembangunan tentu memerlukan informasi yang tepat, mudah, dan cepat diakses, serta akurat. Untuk mengantisipasi kebutuhan tersebut, perlu dikembangan sinergi antara manajemen pemerintahan dan pemanfaatan teknologi informasi yang didukung keterhubungan jaringan informasi yang mencakup seluruh institusi pemerintah.'
        },
        {
            title: 'Struktur Organisasi',
            content: <img src="/struktur.png" alt="Struktur Organisasi" className="w-[85%] mx-auto" />
        },
        {
            title: 'Program dan Kegiatan',
            content: (
                <div>
                    <div className="mb-4">
                        <h3 className="font-bold">Rencana Strategis:</h3>
                        <ul className="list-disc ml-20">
                            <li><a href="/path-to-renstra-2017-2021.pdf" target="_blank" rel="noopener noreferrer">RENSTRA 2017-2021</a></li>
                            <li><a href="/path-to-renstra-2021-2026.pdf" target="_blank" rel="noopener noreferrer">RENSTRA 2021-2026</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold">Indikator Kinerja Utama:</h3>
                        <ul className="list-disc ml-5">
                            <li><a href="/path-to-sk-iku-2021.pdf" target="_blank" rel="noopener noreferrer">SK IKU 2021</a></li>
                            <li><a href="/path-to-e-iku-januari-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Januari 2021</a></li>
                            <li><a href="/path-to-e-iku-februari-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Februari 2021</a></li>
                            <li><a href="/path-to-e-iku-maret-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Maret 2021</a></li>
                            <li><a href="/path-to-e-iku-april-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target April 2021</a></li>
                            <li><a href="/path-to-e-iku-mei-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Mei 2021</a></li>
                            <li><a href="/path-to-e-iku-juni-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Juni 2021</a></li>
                            <li><a href="/path-to-e-iku-juli-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Juli 2021</a></li>
                            <li><a href="/path-to-e-iku-agustus-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Agustus 2021</a></li>
                            <li><a href="/path-to-e-iku-september-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target September 2021</a></li>
                            <li><a href="/path-to-e-iku-oktober-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Oktober 2021</a></li>
                            <li><a href="/path-to-e-iku-november-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target November 2021</a></li>
                            <li><a href="/path-to-e-iku-desember-2021.pdf" target="_blank" rel="noopener noreferrer">e-IKU Bukti Target Desember 2021</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold">Perjanjian Kerja:</h3>
                        <ul className="list-disc ml-20">
                            <li><a href="/path-to-perjanjian-kinerja-2021.pdf" target="_blank" rel="noopener noreferrer">Perjanjian Kinerja 2021</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold">Rencana Anggaran:</h3>
                        <ul className="list-disc ml-20">
                            <li><a href="/path-to-perjanjian-kinerja-2021.pdf" target="_blank" rel="noopener noreferrer">Rencana Anggaran 2021</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold">Rencana Kerja dan Anggaran:</h3>
                        <ul className="list-disc ml-5">
                            <li><a href="/path-to-perjanjian-kinerja-2021.pdf" target="_blank" rel="noopener noreferrer">Rekap RKA 2021</a></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: 'Tugas Pokok dan Fungsi DKIPS',
            content: 
            <div>
                <div className="mb-4">
                    <h3 className="font-bold">Visi:</h3>
                    <ul className="list-disc ml-20">
                        <li><a href="/path-to-renstra-2017-2021.pdf" target="_blank" rel="noopener noreferrer">RENSTRA 2017-2021</a></li>
                        <li><a href="/path-to-renstra-2021-2026.pdf" target="_blank" rel="noopener noreferrer">RENSTRA 2021-2026</a></li>
                    </ul>
                </div>
            </div>
        },
        {
            title: 'Visi dan Misi',
            content: 
            <div>
                <div className="mb-4">
                    <h3 className="font-bold">Visi:</h3>
                            <a>Sulawesi Utara Maju Dan Sejahtera<br></br></a>
                            <a>Indonesia Maju.</a>
                    <h3 className="font-bold">Misi:</h3>
                            <a classname= "list-decimal"> 
                                1. Peningkatan Kualitas Manusia Sulawesi Utara;<br></br>
                                2. Penguatan Ekonomi yang Bertumpu pada Industri Pertanian, Perikanan, Pariwisata dan Jasa;<br></br>
                                3. Pembangunan Infrastruktur dan Perluasan Konektivitas;<br></br>
                                4. Pembangunan Daerah yang Berkelanjutan Lingkungan;<br></br>
                                5. Pemerintahan yang Baik dan Bersih Didukung oleh Sinergitas Antar Daerah.<br></br></a>
                </div>
            </div>
        },
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
