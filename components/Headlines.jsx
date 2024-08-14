import React from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const Headlines = () => {
  const headlines = [
    {
      image: '/gub.png',
      date: '5 Agustus 2024',
      title: 'Berita Penting Pertama',
      link: '/berita/berita-pertama'
    },
    {
      image: '/gub.png',
      date: '4 Agustus 2024',
      title: 'Berita Penting Kedua',
      link: '/berita/berita-kedua'
    },
    {
      image: '/gub.png',
      date: '4 Agustus 2024',
      title: 'Berita Penting Ketiga',
      link: '/berita/berita-ketiga'
    },
    {
      image: '/gub.png',
      date: '4 Agustus 2024',
      title: 'Berita Penting Keempat',
      link: '/berita/berita-keempat'
    },
  ];

  return (
    <section className="w-full flex items-center justify-center min-h-screen py-12" style={{ backgroundColor: 'rgb(94, 7, 7)' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-20">HEADLINES</h2>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          navigation={{ nextEl: null, prevEl: null }}
          pagination={{ clickable: true }}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000, // 3 detik per slide
            disableOnInteraction: false,
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
                <p className="text-sm text-center">
                  {headline.date}
                </p>
                <h3 className="text-lg font-bold text-center">
                  {headline.title}
                </h3>
                <div className="text-center">
                  <Link href={headline.link}>
                    <button className="mt-2 px-6 py-2 text-sm font-semibold border border-white text-white rounded-lg hover:bg-white hover:text-red-700 transition-transform transform hover:scale-105">
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

export default Headlines;