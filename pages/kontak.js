import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing icons

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 1.4699775877555217,  // Ganti dengan latitude lokasi Anda
  lng: 124.84488842035105, // Ganti dengan longitude lokasi Anda
};

const ContactPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDq5X55O6KM8LcA5djehhEHirRkSmZLlyk", // Ganti dengan API key Anda
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold mb-20 text-white">KONTAK</h1>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl  rounded">
        <div className="w-full lg:w-1/2 h-64 relative mb-6 lg:mb-0">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10 pt-10 lg:pt-0 flex flex-col justify-center">
          <div className="flex items-center mb-10">
            <FaMapMarkerAlt className="text-red-500 mr-4" size={32} />
            <div className="text-white">
              <p>Jl. 17 Agustus No.69, Teling Atas, Kec. Wanea, Kota Manado, Sulawesi Utara</p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <FaPhone className="text-red-500 mr-4" size={32} />
            <div className="text-white">
              <p>(0431) 865559</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-red-500 mr-4" size={32} />
            <div className="text-white">
              <p>DKIPS@SULUTPROV.GO.ID</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;