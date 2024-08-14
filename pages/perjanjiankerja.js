import React from 'react';

const PerjanjianKerja = () => {
  const agreements = [
    { id: 1, title: "Perjanjian Kinerja 2021", fileUrl: "/DKIPS_PERJANJIAN_KINERJA_2021.pdf" },
    { id: 2, title: "Perjanjian Kinerja 2022", fileUrl: "/DKIPS_PERJANJIAN_KINERJA_2022.pdf" },
    { id: 3, title: "Perjanjian Kinerja 2021 dan Pengukuran Kinerja 2022", fileUrl: "/DKIPS_PERJANJIAN_KINERJA_TAHUN_2021_DAN_PENGUKURAN_KINERJA_2020.pdf" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cover text-white">
          <ul className="space-y-8 mt-20 px-4 max-w-screen-md w-full ml-10">
        {agreements.map((agreement, index) => (
          <li key={agreement.id} className="flex items-center relative">
            {/* Dotted line connecting circles */}
            {index !== 0 && (
              <div className="absolute left-6 top-0 h-full flex items-center justify-center">
                <div className="w-1 h-full border-l-2 border-dotted border-gray-300"></div>
              </div>
            )}
            {/* White circle with partially overlapped red circle */}
            <div className="relative flex items-center">
              <div className="w-14 h-14 bg-red-900 rounded-full absolute left-0 top-1/2 transform -translate-x-1/3 -translate-y-1/2 z-10"></div>
              <div 
                className="bg-white p-4 pl-10 rounded-full shadow-md flex-grow flex items-center relative" 
                style={{ width: '500px' }}  // Set a fixed width for all items
              >
                <a 
                  href={agreement.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black w-full"
                >
                  {agreement.title}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerjanjianKerja;