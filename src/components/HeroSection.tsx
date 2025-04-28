import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Solusi Koperasi Modern untuk Kesejahteraan Bersama
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Kembangkan potensi finansial Anda dengan bergabung di koperasi kami. Nikmati kemudahan akses layanan simpan pinjam dan berbagai program untuk meningkatkan kesejahteraan anggota.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login">
                <Button size="lg">Mulai Sekarang</Button>
              </Link>
              <Button variant="outline" size="lg">Pelajari Lebih Lanjut</Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zWjTbDW3sQM?autoplay=1&mute=1&loop=1&playlist=zWjTbDW3sQM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
