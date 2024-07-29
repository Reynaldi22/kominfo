import React from 'react';
import Weather from '../components/Weather';

export default function Home() {
    return  <main className="flex flex-col items-center justify-start min-h-screen p-4 bg-cover bg-center">
    <Weather />
    <div className="text-center mt-4">
        <h1 className="text-white text-1xl md:text-2xl font-bold leading-tight">
            Dinas Komunikasi, Informatika Persandian dan Statistik<br /> Provinsi Sulawesi Utara
        </h1>
    </div>
</main>;
}
