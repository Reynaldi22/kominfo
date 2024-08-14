import React from 'react';

const KadisDKIPS = () => {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-white w-full mt-10">
      
      {/* Bagian overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 red-overlay2"></div>
      
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 uppercase">KADIS DKIPS</h1>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Bagian gambar */}
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-300">
          <img src="/kadis.png" alt="Kadis DKIPS" className="object-cover w-full h-full" />
        </div>
      
        {/* Bagian teks */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Kepala Dinas Komunikasi, Informatika, Persandian dan Statistik Provinsi Sulawesi Utara
          </h3>
          <p className="text-lg text-gray-600">Evans Steven Liow, S.Sos, MM</p>
        </div>
      </div>
      
    </section>
  );
};

export default KadisDKIPS;
