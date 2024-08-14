import React from 'react';

const DaftarAplikasi = () => {
  const applications = [
    {
      id: 1,
      title: "Portal Satu Data SULUT",
      description: "Aplikasi integrasi data hasil kerja sama DISKOMINFO Sulawesi Utara dan BPS Sulawesi Utara",
      imageUrl: "/DaftarAplikasi/logo-1data.png", // Replace with your image path
      link: "https://satudata.sulutprov.go.id",
    },
    {
      id: 2,
      title: "Dashboard START",
      description: "Aplikasi integrasi data seluruh perangkat daerah tingkat Provinsi dalam bentuk Dashboard",
      imageUrl: "/DaftarAplikasi/logo-start.png", // Replace with your image path
      link: "https://start.sulutprov.go.id/",
    },
    {
      id: 3,
      title: "Modul e-Sign",
      description: "Modul tanda tangan elektronik milik pemerintah Provinsi Sulawesi Utara",
      imageUrl: "/DaftarAplikasi/logo-esign.png", // Replace with your image path
      link: "/modul-e-sign",
    },
    {
      id: 4,
      title: "Aplikasi Survei Kepuasan Masyarakat",
      description: "Aplikasi survei kepuasan masyarakat Provinsi Sulawesi Utara berbasis web",
      imageUrl: "/DaftarAplikasi/logo-cc.png", // Replace with your image path
      link: "https://surveikm.sulutprov.go.id/",
    },
    {
      id: 5,
      title: "Aplikasi SHALOM",
      description: "Aplikasi buku tamu berbasis web.",
      imageUrl: "/DaftarAplikasi/logo-shalom.png", // Replace with your image path
      link: "https://shalom.sulutprov.go.id/",
    },
    {
      id: 6,
      title: "Aplikasi Whistleblowing System",
      description: "Aplikasi pelaporan terhadap tindakan fraud dan pelanggaran Provinsi Sulawesi Utara berbasis web.",
      imageUrl: "/DaftarAplikasi/logo-cc.png", // Replace with your image path
      link: "https://wbs.sulutprov.go.id/",
    },
  ];

  return (
    <div className="relative w-full items-center justify-center bg-white py-10 px-4">
      <div className="red-overlay4"></div>
      <div className="text-center mb-10">
        <img src="/DaftarAplikasi/logo-cc.png" alt="Command Center Logo" className="mx-auto w-[15%] mt-40 mb-10" />
        <h1 className="text-3xl font-bold text-red-900 mb-20">DAFTAR APLIKASI</h1>
      </div>

      <div className="space-y-16 max-w-screen-lg mx-auto text-center items-center">
        {applications.map((app, index) => (
          <div 
            key={app.id} 
            className={`flex items-center space-x-6 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
          >
            <img src={app.imageUrl} alt={app.title} className="w-48 h-48 object-contain" />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">{app.title}</h2>
              <p className="text-gray-600 mb-4">{app.description}</p>
              <a 
                href={app.link} 
                className="inline-block px-6 py-2 bg-red-900 text-white font-semibold rounded-lg hover:bg-red-700"
              >
                Selengkapnya →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarAplikasi;
