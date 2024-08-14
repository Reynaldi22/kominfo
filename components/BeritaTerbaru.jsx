import Image from 'next/image';

const LatestNews = () => {
  const newsItems = [
    {
      date: '16 Juni 2023',
      title: 'Mei 2023, Neraca Perdagangan Sulut Surplus 35,15 Juta Dollar AS',
      description: '"Manado-Badan Pusat Statistik (BPS) Provinsi Sulawesi Utara melaksankan...',
      imageUrl: '/logo.png',
    },
    {
        date: '16 Juni 2023',
        title: 'Mei 2023, Neraca Perdagangan Sulut Surplus 35,15 Juta Dollar AS',
        description: '"Manado-Badan Pusat Statistik (BPS) Provinsi Sulawesi Utara melaksankan...',
        imageUrl: '/logo.png', // Replace with the correct path
    },
    {
        date: '16 Juni 2023',
        title: 'Mei 2023, Neraca Perdagangan Sulut Surplus 35,15 Juta Dollar AS',
        description: '"Manado-Badan Pusat Statistik (BPS) Provinsi Sulawesi Utara melaksankan...',
        imageUrl: '/logo.png', // Replace with the correct path
    },
    {
        date: '16 Juni 2023',
        title: 'Mei 2023, Neraca Perdagangan Sulut Surplus 35,15 Juta Dollar AS',
        description: '"Manado-Badan Pusat Statistik (BPS) Provinsi Sulawesi Utara melaksankan...',
        imageUrl: '/logo.png', // Replace with the correct path
    },
    {
        date: '16 Juni 2023',
        title: 'Mei 2023, Neraca Perdagangan Sulut Surplus 35,15 Juta Dollar AS',
        description: '"Manado-Badan Pusat Statistik (BPS) Provinsi Sulawesi Utara melaksankan...',
        imageUrl: '/logo.png', // Replace with the correct path
    },
    {
        date: '16 Juni 2023',
        title: 'Mei 2023, Neraca Perdagangan Sulut Surplus 35,15 Juta Dollar AS',
        description: '"Manado-Badan Pusat Statistik (BPS) Provinsi Sulawesi Utara melaksankan...',
        imageUrl: '/logo.png', // Replace with the correct path
    },
    
  ];

  return (
    <div className="py-10 min-h-screen w-full" style={{ backgroundColor: 'rgb(94, 7, 7)' }}>
      <h2 className="text-center text-white text-3xl font-bold mb-10">BERITA TERBARU</h2>
      
      {/* Top row with 3 news items */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mb-6">
        {newsItems.slice(0, 3).map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover"
              width={500}
              height={300}
            />
            <div className="p-4">
              <span className="block text-gray-500 text-sm mb-2">{item.date}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row with 2 centered news items */}
      <div className="max-w-screen-md mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {newsItems.slice(3, 5).map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover"
              width={500}
              height={300}
            />
            <div className="p-4">
              <span className="block text-gray-500 text-sm mb-2">{item.date}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;