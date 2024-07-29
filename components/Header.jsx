import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import Weather from "./Weather";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    return (
        <header className="w-full h-[100px] md:h-[200px] flex items-center justify-center z-20 bg-transparent">
            <Wrapper className="flex items-center justify-between">
                <div className="flex items-center justify-between text-center">
                    <Link href="/">
                        <img
                            src="/logo.svg"
                            className="w-[40px] sm:w-[60px] md:w-[60px] lg:w-[100px] max-w-[100px] h-auto"
                            alt="Logo"
                        />
                    </Link>
                </div>
                    
                <div className="flex flex-col items-left ml-1 md:ml-3 md:mt-5 w-full md:items-center md:w-auto">
                    <div className="p-3 mb-5">
                        <h1 className="text-white text-xs md:text-xs lg:text-base font-bold leading-tight text-center">
                            Dinas Komunikasi, Informatika<br /> Persandian dan Statistik
                        </h1>
                        <p className="text-white text-xs md:text-xs lg:text-base text-center">Provinsi Sulawesi Utara</p>
                    </div>
                </div>
                <div className="hidden md:flex ml-5">
                    <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
                </div>

                <div className="md:hidden flex items-center relative">
                    <button onClick={() => setMobileMenu(!mobileMenu)} className="relative z-20">
                        <img
                            src={mobileMenu ? "/x.svg" : "/menu.svg"}
                            alt={mobileMenu ? "Close Menu" : "Menu Icon"}
                            className="w-6 h-6 text-white"
                        />
                    </button>
                    {mobileMenu && (
                        <div className="fixed top-0 right-0 mt-16 mr-4 bg-red-600 bg-opacity-70 z-10 p-4 rounded-lg shadow-lg">
                            <Menu />
                        </div>
                    )}
                </div>
            </Wrapper>
            
        </header>
    );
};

export default Header;