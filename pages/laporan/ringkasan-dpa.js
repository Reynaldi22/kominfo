import React, { useState } from 'react';
import AccordionSection from '../../components/AccordionSection';

const RingkasanDPA = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: 'DPA 2021',
            content: (
                <div>
                    <div className="mb-4">
                        <ul className="list-decimal list-inside">
                            <li><a href="/DPA_2021/1-_HALAMAN_PERSETUJUAN_DPA.pdf" target="_blank" rel="noopener noreferrer">Halaman Persetujuan</a></li>
                            <li><a href="/DPA_2021/2-_HALAMAN_DEPAN_DPA.pdf" target="_blank" rel="noopener noreferrer">Halaman Depan DPA</a></li>
                            <li><a href="/DPA_2021/3-_DPA_REKAPITULASI_SKPD.pdf" target="_blank" rel="noopener noreferrer">DPA Rekapitulasi SKPD</a></li>
                            <li><a href="/DPA_2021/4-_DPA-PENDAPATAN.pdf" target="_blank" rel="noopener noreferrer">DPA Belanja</a></li>
                            <li><a href="/DPA_2021/5-_DPA-BELANJA.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Penerimaan, Penganggaran, dan Evaluasi Kinerja</a></li>
                            <li><a href="/DPA_2021/6-_DPA-RINCIAN_BELANJA_-_2-16-01-1-01_Perencanaan_Penganggaran_dan_Evaluasi_Kinerja_Perangkat_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Administrasi Keuangan Perangkat Daerah</a></li>
                            <li><a href="/DPA_2021/7-_DPA-RINCIAN_BELANJA_-_2-16-01-1-02_Administrasi_Keuangan_Perangkat_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Administratif Kepegawaian Perangkat Daerah</a></li>
                            <li><a href="/DPA_2021/8-_DPA-RINCIAN_BELANJA_-_2-16-01-1-05_Administrasi_Kepegawaian_Perangkat_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Hibah untuk Perangkat Daerah</a></li>
                            <li><a href="/DPA_2021/9-_DPA-RINCIAN_BELANJA_-_2-16-01-1-06_Administrasi_Umum_Perangkat_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Penyusunan Program dan Kegiatan Urusan Pemerintahan Daerah</a></li>
                            <li><a href="/DPA_2021/NO_FILE.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Dana Perimbangan dari Pemerintah Pusat kepada Pemerintah Daerah</a></li>
                            <li><a href="/DPA_2021/11-_DPA-RINCIAN_BELANJA_-_2-16-01-1-09_Pemeliharaan_Barang_Milik_Daerah_Penunjang_Urusan_Pemerintahan_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Penerimaan yang Berasal dari Pinjaman yang Dijamin Pemerintah Daerah</a></li>
                            <li><a href="/DPA_2021/NO_FILE.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Penerimaan Pinjaman dari Luar Negeri</a></li>
                            <li><a href="/DPA_2021/14.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Penerimaan Hasil Pengelolaan Kekayaan Daerah yang Dipisahkan</a></li>
                            <li><a href="/DPA_2021/15-_DPA-RINCIAN_BELANJA_-_2-16-03-1-02_Pengelolaan_e-government_di_Lingkup_Pemerintah_Daerah_Provinsi.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Penerimaan Hasil Pengelolaan Barang Milik Daerah yang Dikuasai</a></li>
                            <li><a href="/DPA_2021/16.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Penerimaan Pengembangan dan Pengelolaan Komunikasi dan Informatika</a></li>
                            <li><a href="/DPA_2021/17.pdf" target="_blank" rel="noopener noreferrer">DPA Rincian Belanja Penerimaan Bantuan Keuangan dari Pemerintah Daerah Lainnya</a></li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: 'DPA Perubahan 2021',
            content: (
                <div>
                    <div className="mb-4">
                        <ul className="list-decimal list-inside">
                            <li><a href="/DPA_Perubahan_2021/HALAMAN_DEPAN_DPPA.pdf" target="_blank" rel="noopener noreferrer">Halaman Depan DPPA</a></li>
                            <li><a href="/DPA_Perubahan_2021/HALAMAN_PERSETUJUAN_DPPA.pdf" target="_blank" rel="noopener noreferrer">Halaman Persetujuan DPPA</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-01-1-01_Perencanaan_Penganggaran_dan_Evaluasi_Kinerja_Perangkat_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-01-1-02_Administrasi_Keuangan_Perangkat_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Administrasi Keuangan Perangkat Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-01-1-05_Administrasi_Kepegawaian_Perangkat_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Administrasi Kepegawaian Perangkat Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-01-1-06_Administrasi_Umum_Perangkat_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Administrasi Umum Perangkat Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-01-1-08_Penyediaan_Jasa_Penunjang_Urusan_Pemerintahan_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Penyediaan Jasa Penunjang Urusan Pemerintah Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-01-1-09_Pemeliharaan_Barang_Milik_Daerah_Penunjang_Urusan_Pemerintahan_Daerah.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-02-1-01_Pengelolaan_Informasi_dan_Komunikasi_Publik_Pemerintah_Daerah_Provinsi.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Pengelolaan Informasi dan Komunikasi Publik Pemerintah Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-03-1-01_Pengelolaan_Nama_Domain_yang_Telah_ditetapkan_oleh_Pemerintah_Pusat.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Pengelolaan Nama Domain dan Subdomain di Lingkup Pemerintahan Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-16-03-1-02_Pengelolaan_e-government_di_Lingkup_Pemerintah_Daerah_Provinsi.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Pengelolaan E-Government di Lingkup Pemerintah Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-21-02-1-01_Penyelenggaraan_Persandian_untuk_Pengamanan_Informasi_Pemerintah_Da.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Persandian untuk Pengamanan Informasi Pemerintah Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/DPPA-RINCIAN_BELANJA_-_2-21-02-1-02_Penetapan_Pola_Hubungan_Komunikasi_Sandi_antar_Perangkat_Daerah_Pro.pdf" target="_blank" rel="noopener noreferrer">DPPA Rincian Belanja Penetapan Pola Hubungan Komunikasi Sandi antar Perangkat Daerah</a></li>
                            <li><a href="/DPA_Perubahan_2021/REKAP.pdf" target="_blank" rel="noopener noreferrer">Dokumen Pelaksanaan Perubahan Anggaran SKPD</a></li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];
    

    return (
        <div className="min-h-screen flex flex-col bg-cover text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">RINGKASAN DPA</h1>
           
            <h2 className="text-xl font-semibold ml-5">Dokumen Pelaksanaan Anggaran</h2>
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

export default RingkasanDPA;