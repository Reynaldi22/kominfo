import React, { useState } from 'react';
import Link from 'next/link';

const data = [
    { id: 1, name: "Beranda", url: "/" },
    { id: 2, name: "Tentang Kami", url: "/tentang" },
    { id: 3, name: "Perjanjian Kinerja", url: "/perjanjiankerja" },
    { id: 4, name: "Laporan", url: "/", submenu: [
        { name: "Laporan Keuangan", url: "/laporan/laporan-keuangan" },
        { name: "Ringkasan DPA", url: "/laporan/ringkasan-dpa" },
        { name: "Ringkasan LRA", url: "/laporan/ringkasan-lra" },
        { name: "REN KEU", url: "/laporan/ren-keu" },
    ]},
    { id: 5, name: "Layanan", url: "/", submenu: [
        { name: "Maklumat Pelayanan", url: "/layanan/maklumat-pelayanan" },
        { name: "Jenis Layanan", url: "/layanan/jenis-layanan" },
        { name: "Layanan DKIPS", url: "/layanan/layanan-dkips" },
        { name: "Whistleblowing System", url: "https://wbs.sulutprov.go.id/" },
        { name: "Pengaduan/Lapor", url: "https://sulut.lapor.go.id/" },
    ]},
    { id: 6, name: "Program", url: "/", submenu: [
        { name: "Rencana Strategis", url: "/program/rencana-strategis" },
        { name: "Indikator Kinerja Utama", url: "/program/iku" },
        { name: "Rencana Anggaran", url: "/program/rencana-anggaran" },
        { name: "Ringkasan RKA", url: "/program/ringkasan-rka" },
    ]},
    { id: 7, name: "PPID Dinas", url: "/ppid" },
    { id: 8, name: "Kontak", url: "/kontak" },
];

const Menu = () => {
    const [visibleSubMenu, setVisibleSubMenu] = useState(null);
    let timeout;

    const showSubMenu = (name) => {
        clearTimeout(timeout);
        setVisibleSubMenu(name);
    };

    const hideSubMenu = () => {
        timeout = setTimeout(() => {
            setVisibleSubMenu(null);
        }, 100);
    };

    const handleMouseEnterSubMenu = () => {
        clearTimeout(timeout);
    };

    return (
        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-medium text-white whitespace-nowrap">
            {data.map((item) => (
                <li
                    key={item.id}
                    className="menu-item relative"
                    data-name={item.name}
                    onMouseEnter={() => item.submenu && showSubMenu(item.name)}
                    onMouseLeave={() => item.submenu && hideSubMenu()}
                >
                    <Link href={item.url} legacyBehavior>
                        <a className="hover:font-bold">{item.name.toUpperCase()}</a>
                    </Link>
                    {item.submenu && visibleSubMenu === item.name && (
                        <ul
                            className="submenu absolute left-0 top-full mt-1 bg-white bg-opacity-50 text-white shadow-lg"
                            onMouseEnter={handleMouseEnterSubMenu}
                            onMouseLeave={hideSubMenu}
                        >
                            {item.submenu.map((subItem, index) => (
                                <li key={index}>
                                    <Link href={subItem.url} legacyBehavior>
                                        <a className="block px-4 py-2 hover:bg-gray-200">{subItem.name}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
