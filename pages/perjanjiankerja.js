import React from 'react';

const PerjanjianKerja = () => {
  const agreements = [
    { id: 1, title: "PERJANJIAN KINERJA 2021", fileUrl: "/DKIPS_PERJANJIAN_KINERJA_2021.pdf" },
    { id: 2, title: "PERJANJIAN KINERJA 2022", fileUrl: "/DKIPS_PERJANJIAN_KINERJA_2022.pdf" },
    { id: 3, title: "PERJANJIAN KINERJA 2021 dan PENGUKURAN KINERJA 2022", fileUrl: "/DKIPS_PERJANJIAN_KINERJA_TAHUN_2021_DAN_PENGUKURAN_KINERJA_2020.pdf" },
  ];

  return (
    <div className="relative z-10 flex flex-col items-start justify-center bg-transparent text-white py-4 px-6 w-full">
        <ul className="space-y-20 mt-20 px-4 max-w-screen-md w-full ml-10">
          {agreements.map((agreement) => (
            <li key={agreement.id} className="flex items-center">
              <div className="w-12 h-12 bg-red-900 rounded-full flex-shrink-0 flex items-center justify-center relative"></div>
              
              <a 
                href={agreement.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-black p-4 rounded-full shadow-md flex-grow ml-0"
              >
                {agreement.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default PerjanjianKerja;