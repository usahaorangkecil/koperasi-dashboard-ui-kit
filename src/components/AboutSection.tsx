
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    "Layanan keuangan inklusif untuk semua anggota",
    "Bunga pinjaman yang kompetitif dan bersaing",
    "Pendampingan usaha dan pelatihan kewirausahaan",
    "Sistem manajemen transparan dan akuntabel",
    "Pembagian SHU yang adil dan teratur",
    "Jaringan kemitraan yang luas"
  ];

  return (
    <section className="py-16 bg-gray-50" id="tentang">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3" 
              alt="Tentang Koperasi" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Koperasi Kami</h2>
            <p className="text-lg text-gray-600 mb-6">
              Didirikan pada tahun 2010, koperasi kami bertujuan untuk membangun ekonomi kerakyatan yang kuat melalui prinsip gotong royong dan kebersamaan. Kami percaya bahwa setiap anggota memiliki potensi untuk berkembang dan berkontribusi bagi kemajuan bersama.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Hingga saat ini, kami telah memiliki lebih dari 2.500 anggota dan 38 mitra dari berbagai sektor usaha. Dengan manajemen yang profesional dan transparan, kami berkomitmen untuk terus memberikan layanan terbaik dan manfaat maksimal bagi seluruh anggota.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Keunggulan Kami</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
