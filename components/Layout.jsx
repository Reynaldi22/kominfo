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
        switch (router.pathname) {
            case '/tentang':
                setBackgroundImage("url('/kantor2.jpg')");
                setIsBlur(true);
                setIsRedOverlay(true);
                break;
            case '/perjanjiankerja':
                setBackgroundImage("url('/kantor2.jpg')");
                setIsBlur(true);
                setIsRedOverlay(true);
                break;
            case '/laporan':
                setBackgroundImage("url('/kantor2.jpg')");
                setIsBlur(true);
                setIsRedOverlay(true);
                break;
                case '/laporan/laporan-keuangan':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/laporan/ringkasan-dpa':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/laporan/ringkasan-lra':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/laporan/ren-keu':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
            case '/layanan':
                setBackgroundImage("url('/kantor2.jpg')");
                setIsBlur(true);
                setIsRedOverlay(true);
                break;
                case '/layanan/maklumat-pelayanan':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/layanan/jenis-layanan':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/layanan/layanan-dkips':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/layanan/whistleblowing-system':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/layanan/pengaduan':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
            case '/program':
                setBackgroundImage("url('/kantor2.jpg')");
                setIsBlur(true);
                setIsRedOverlay(true);
                break;
                case '/program/rencana-strategis':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/program/iku':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/program/rencana-anggaran':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
                case '/program/ringkasan-rka':
                    setBackgroundImage("url('/kantor2.jpg')");
                    setIsBlur(true);
                    setIsRedOverlay(true);
                    break;
            case '/ppid':
                setBackgroundImage("url('/kantor2.jpg')");
                setIsBlur(true);
                setIsRedOverlay(true);
                break;
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
    }, [router.pathname]);

    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 bg-cover bg-center ${isBlur ? 'filter-blur' : ''}`}
                    style={{ backgroundImage: backgroundImage, zIndex: -1 }}
                ></div>
            </div>


            {/* Red Overlay */}
            {isRedOverlay && (
                <div className="absolute inset-0 z-10 red-overlay pointer-events-none"></div>
            )}

            <Header />
            <main className="flex-grow flex flex-col items-center justify-center  relative z-20">
                <Wrapper className="w-full">{children}</Wrapper>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
