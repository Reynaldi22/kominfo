import Image from 'next/image';

const InfographicPage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center p-8">
      <div className="red-overlay2"></div>
      <div className="red-overlay3"></div>
      
      <h1 className="text-center text-3xl font-bold mb-20 text-black z-20">
        INFOGRAFIS
      </h1>
      
      <div className="flex justify-center gap-10 z-20">
        <div className="max-w-xs">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/logo.png"
              alt="Rapat Paripurna APBD Prov. SULUT"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          <div className="bg-gray-400 p-2 rounded-full mt-4 text-center">
            <h2 className="text-white text-sm font-semibold whitespace-nowrap">
              Rapat Paripurna APBD Prov. SULUT
            </h2>
          </div>
        </div>

        <div className="max-w-xs">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/logo.png"
              alt="Dirgahayu Kota Manado ke-401 Tahun"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          <div className="bg-gray-400 p-2 rounded-full mt-4 text-center">
            <h2 className="text-white text-sm font-semibold whitespace-nowrap">
              Dirgahayu Kota Manado ke-401 Tahun
            </h2>
          </div>
        </div>

        <div className="max-w-xs">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/logo.png"
              alt="Pendampingan CC Prov. SULUT"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          <div className="bg-gray-400 p-2 rounded-full mt-4 text-center">
            <h2 className="text-white text-sm font-semibold whitespace-nowrap">
              Pendampingan CC Prov. SULUT
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicPage;
