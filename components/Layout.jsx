import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Wrapper from './Wrapper';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter();
    const [backgroundImage, setBackgroundImage] = useState("url('/kantor.jpg')");
    const [isBlur, setIsBlur] = useState(false);
    const [isRedOverlay, setIsRedOverlay] = useState(false);

    useEffect(() => {
        if (router.pathname === '/') {
            setBackgroundImage("url('/kantor.jpg')");
            setIsBlur(false);
            setIsRedOverlay(false);
        } else {
            switch (router.pathname) {
                case '/tentang':
                case '/perjanjiankerja':
                case '/laporan':
                case '/laporan/laporan-keuangan':
                case '/laporan/ringkasan-dpa':
                case '/laporan/ringkasan-lra':
                case '/laporan/ren-keu':
                case '/layanan':
                case '/layanan/maklumat-pelayanan':
                case '/layanan/jenis-layanan':
                case '/layanan/layanan-dkips':
                case '/layanan/whistleblowing-system':
                case '/layanan/pengaduan':
                case '/program':
                case '/program/rencana-strategis':
                case '/program/iku':
                case '/program/rencana-anggaran':
                case '/program/ringkasan-rka':
                case '/ppid':
                case '/kontak':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                default:
                    setBackgroundImage("url('/kantor.jpg')");
                    setIsBlur(false);
                    setIsRedOverlay(false);
                    break;
            }
        }
    }, [router.pathname]);

    const isHomePage = router.pathname === '/';

    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            {/* Background Image */}
            {isHomePage ? (
                <div className="absolute inset-0 w-full h-screen">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: backgroundImage, zIndex: -2 }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: -1 }}></div>
                </div>
            ) : (
                <div className="fixed inset-0 w-full min-h-screen">
                    <div
                        className={`absolute inset-0 bg-cover bg-center ${isBlur ? 'filter-blur' : ''}`}
                        style={{ backgroundImage: backgroundImage, zIndex: -2 }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: -1 }}></div>
                </div>
            )}

            {/* Red Overlay */}
            {isRedOverlay && !isHomePage && (
                <div className="absolute inset-0 z-10 red-overlay pointer-events-none"></div>
            )}

            <Header />
            <main className="flex-grow flex flex-col items-center justify-center relative z-20">
                <Wrapper className="w-full">{children}</Wrapper>
            </main>
        </div>
    );
};

export default Layout;
