import React from 'react';

const PerjanjianKerja = () => {
  const agreements = [
    { id: 1, title: "Perjanjian Kinerja 2021" },
    { id: 2, title: "Perjanjian Kinerja 2022" },
    { id: 3, title: "Perjanjian Kinerja 2021 dan Pengukuran Kinerja 2022" },
  ];

  return (
    <div className="relative bg-cover bg-center h-screen">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-10 text-center">PERJANJIAN KINERJA</h1>
        <ul className="space-y-4">
          {agreements.map((agreement) => (
            <li key={agreement.id} className="flex items-center">
              <div className="w-12 h-12 bg-red-900 rounded-full flex-shrink-0"></div>
              <div className=" bg-white text-black p-4 rounded-full shadow-md flex-grow">
                {agreement.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PerjanjianKerja;