import React, { useState } from 'react';

const RingkasanDPA = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: 'DPA 2021', content: (
            <ul className="list-decimal list-inside ml-4">
                <li>Halaman Persetujuan</li>
                <li>Halaman depan DPA</li>
                <li>DPA Rekapitulasi SKPD</li>
                <li>DPA Belanja</li>
                <li>DPA Rincian Belanja Penerimaan, Penganggaran, dan Evaluasi Kinerja</li>
                <li>DPA Rincian Belanja Administrasi Keuangan Perangkat Daerah</li>
                <li>DPA Rincian Belanja administratif Kepegawaian perangkat daerah</li>
                <li>DPA Rincian Belanja hibah untuk perangkat daerah</li>
                <li>DPA Rincian Belanja penyusunan program dan kegiatan urusan pemerintahan daerah</li>
                <li>DPA Rincian Belanja dana perimbangan dari pemerintah pusat kepada pemerintah daerah</li>
                <li>DPA Rincian Belanja penerimaan yang berasal dari pinjaman yang dijamin pemerintah daerah</li>
                <li>DPA Rincian Belanja penerimaan pinjaman dari luar negeri</li>
                <li>DPA Rincian Belanja penerimaan hasil pengelolaan kekayaan daerah yang dipisahkan</li>
                <li>DPA Rincian Belanja penerimaan hasil pengelolaan barang milik daerah yang dikuasai</li>
                <li>DPA Rincian Belanja penerimaan pengembangan dan pengelolaan komunikasi dan informatika</li>
                <li>DPA Rincian Belanja penerimaan bantuan keuangan dari pemerintah daerah lainnya</li>
            </ul>
        ), },
        { title: 'DPA Perubahan 2021', content: 'Informatika adalah ilmu yang mempelajari tentang penggunaan komputer ' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">RINGKASAN DPA</h1>
            <h2 className="text-xl font-semibold">Dokumen Pelaksanaan Anggaran</h2>
            <ul className="space-y-4 flex-grow items-start mt-5 px-4">
                {sections.map((section, index) => (
                    <li key={index} className="w-full">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            <img
                                src="/arrow.svg"
                                alt="arrow"
                                className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-90' : 'rotate-0'}`}
                                style={{ width: '24px', height: '24px' }}
                            />
                            <span className="ml-2 text-lg font-medium">{section.title}</span>
                        </div>
                        {openIndex === index && (
                            <div className="mt-2 p-2 pl-8 text-justify">
                                {section.content}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RingkasanDPA;