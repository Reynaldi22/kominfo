import React from 'react';

const KadisDKIPS = () => {
  return (
    <section className="flex flex-col items-center min-h-screen bg-white w-full mt-60 py-8"> {/* Kurangi mt-40 ke mt-20 dan py-12 ke py-8 */}
      <div className="text-center mb-12"> {/* Kurangi mb-20 ke mb-12 */}
        <h1 className="text-3xl font-bold text-gray-800 uppercase">KADIS DKIPS</h1>
      </div>
      
      <div className="flex flex-row items-center space-x-8"> {/* Kurangi space-x-12 ke space-x-8 */}
        {/* Bagian gambar */}
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-300"> {/* Kurangi w-96 h-96 ke w-80 h-80 */}
          <img src="/kadis.png" alt="Kadis DKIPS" className="object-cover w-full h-full" />
        </div>
        
        {/* Bagian teks */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Kepala Dinas Komunikasi, Informatika, Persandian dan Statistik Provinsi Sulawesi Utara</h3>
          <p className="text-lg text-gray-600">Evans Steven Liow, S.Sos, MM</p>
        </div>
      </div>
    </section>
  );
};

export default KadisDKIPS;
