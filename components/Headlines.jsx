import React from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const Headlines = () => {
  // Data contoh untuk headline; bisa diganti dengan data dinamis
  const headlines = [
    {
      image: '/gub.png', // Ensure this path is correct
      date: '5 Agustus 2024',
      title: 'Berita Penting Pertama',
      link: '/berita/berita-pertama'
    },
    {
      image: '/gub.png', // Ensure this path is correct
      date: '4 Agustus 2024',
      title: 'Berita Penting Kedua',
      link: '/berita/berita-kedua'
    },
    {
      image: '/gub.png', // Ensure this path is correct
      date: '4 Agustus 2024',
      title: 'Berita Penting Ketiga',
      link: '/berita/berita-ketiga'
    },
    {
      image: '/gub.png', // Ensure this path is correct
      date: '4 Agustus 2024',
      title: 'Berita Penting Keempat',
      link: '/berita/berita-keempat'
    },
    // Tambahkan lebih banyak berita jika diperlukan
  ];

  return (
    <section className="w-full flex items-center justify-center min-h-screen py-12" style={{ backgroundColor: 'rgb(94, 7, 7)' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-20">HEADLINES</h2>
        <Swiper
          spaceBetween={40} // Jarak antar slide
          slidesPerView={3} // Menampilkan 3 slide sekaligus
          navigation={{ nextEl: null, prevEl: null }}
          pagination={{ clickable: true }}
          effect="coverflow"
          centeredSlides={true}
          loop={true} // Menambahkan properti loop
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {headlines.map((headline, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 mt-20 mb-5">
              <img
                src={headline.image}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-4 bg-transparent text-white mb-10">
                <p className="text-sm  text-center">
                  {headline.date}
                </p>
                <h3 className="text-lg font-bold text-center">
                  {headline.title}
                </h3>
                <div className="text-center">
                  <Link href={headline.link}>
                    <button className="mt-2 px-6 py-2 border-white text-sm font-semibold hover:bg-slate-400 transition-transform transform hover:scale-105">
                      Selengkapnya →
                    </button>
                  </Link>
                </div>
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Headlines;




/*// Headlines.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data berita dari API
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('https://example.com/api/news');
        setHeadlines(response.data); // Asumsikan data ada di response.data
        setLoading(false);
      } catch (err) {
        setError('Gagal mengambil data berita');
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Headlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {headlines.map((headline, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={headline.image} alt={headline.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-2">{headline.date}</p>
                <h3 className="text-lg font-semibold mb-4">{headline.title}</h3>
                <a
                  href={headline.link}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Headlines;
 */