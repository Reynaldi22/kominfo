import React, { useState } from 'react';
import AccordionSection from '../components/AccordionSection';

const PPIDDINAS = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'Landasan Hukum', content: (
            <ul className="list-disc ml-4">
                <li>Undang-undang Nomor 36 Tahun 1999 tentang Telekomunikasi;</li>
                <li>Undang-undang Nomor 32 Tahun 2002 Tentang penyiaran;</li>
                <li>Undang-Undang Nomor 23 Tahun 2004 Tentang Sistem Pembangunan Daerah;</li>
                <li>Undang-Undang Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik;</li>
                <li>Undang-Undang nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik;</li>
                <li>Undang-Undang Nomor 23 Tahun 2014 Tentang Pemerintahan Daerah sebagaimana telah diubah beberapa kali terakhir dengan Undang-Undang Nomor 9 Tahun 2015 tentang Perubahan Kedua Atas Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah;</li>
                <li>Peraturan Pemerintah Nomor 8 Tahun 2008 tentang Tahapan, Tata Cara Penyusunan Pengendalian dan Evaluasi Pelaksanaan Rencana Pembangunan Daerah;</li>
                <li>Peraturan Pemerintah Republik Indonesia Nomor 18 Tahun 2016 tentang Perangkat Daerah</li>
                <li>Peraturan Menteri Kominfo Nomor 41/PERMENKOMINFO/11/2003 tentang Panduan Umum Tata Kelola Teknologi Informasi dan Komunikasi Nasional;</li>
                <li>Peraturan Menteri Dalam Negeri No.54 Tahun 2010 tentang Pelaksanaan Peraturan Pemerintah Nomor 8 Tahun 2008 tentang Tahapan, Tata Cara</li>
                <li>Penyusunan Pengendalian, dan Evaluasi Pelaksanaan Rencana Pembangunan Daerah;</li>
                <li>Peraturan Daerah Nomor 4 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Provinsi Sulawesi Utara;</li>
                <li>Peraturan Gubernur Sulawesi Utara Nomor 66 Tahun 2016 tentang Kedudukan, Susunan Organisasi, Tugas dan Fungsi serta Tata Kerja Dinas Komunikasi, Informatika, Persandian Dan Statistik Daerah Provinsi Sulawesi Utara</li>
                <li>Rencana Pembangunan Jangka Menengah Daerah (RPJMD) Provinsi Sulut Tahun 2016-2021</li>
                <li>Rencana Kerja Pemerintah Daerah (RKPD) Provinsi Sulut Tahun 2008</li>
            </ul>
        ), },
        { title: 'Informasi Terbuka Setiap Saat', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
        { title: 'Informasi Terbuka Berkala', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">RINGKASAN DPA</h1>
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

export default PPIDDINAS;