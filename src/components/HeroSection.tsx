
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
            <img 
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3" 
              alt="Koperasi Hero" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
