import React from 'react';
import Link from "next/link";

const data = [
    { id: 1, name: "Beranda", url: "/" },
    { id: 2, name: "Tentang Kami", url: "/tentang" },
    { id: 3, name: "Perjanjian Kerja", url: "/perjanjiankerja" },
    { id: 4, name: "Laporan", url: "/laporan" },
    { id: 5, name: "Layanan", url: "/layanan" },
    { id: 6, name: "Program", url: "/program" },
    { id: 7, name: "PPID Dinas", url: "/ppid" },
    { id: 8, name: "Kontak", url: "/kontak" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories, isOpen }) => {
    return (
        <ul className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 font-medium text-white whitespace-nowrap ${isOpen ? 'text-xs' : 'text-sm'}`} >
            {data.map((item) => (
                <li key={item.id} className="cursor-pointer">
                    <Link href={item.url} legacyBehavior>
                        <a className="hover:underline">{item.name.toUpperCase()}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
