import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="w-full h-[100px] md:mb-[150px] md:mt-[50px] flex items-center justify-center z-20 bg-transparent">
            <Wrapper className="flex items-center justify-around">
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/logo.svg"
                            className="w-[40px] sm:w-[60px] md:w-[60px] lg:w-[100px] max-w-[100px] h-auto"
                            alt="Logo"
                        />
                    </Link>
                </div>
                    
                <div className="flex flex-col items-center">
                    <div className="p-3 text-center text-xs md:text-xs lg:text-base">
                        <h1 className="text-white font-bold leading-tight">
                            Dinas Komunikasi, Informatika<br /> Persandian dan Statistik
                        </h1>
                        <p className="text-white">Provinsi Sulawesi Utara</p>
                    </div>
                </div>
                <div className="hidden md:flex ml-5">
                    <Menu />
                </div>

                <div className="md:hidden flex items-center relative z-30">
                    <button onClick={() => setMobileMenu(!mobileMenu)} className="relative z-40">
                        <img
                            src={mobileMenu ? "/x.svg" : "/menu.svg"}
                            alt={mobileMenu ? "Close Menu" : "Menu Icon"}
                            className="w-6 h-6 text-white"
                        />
                    </button>
                    {mobileMenu && (
                        <div className="fixed top-0 right-0 mt-16 mr-4 bg-red-600 bg-opacity-70 z-50 p-4 rounded-lg shadow-lg">
                            <Menu />
                        </div>
                    )}
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
