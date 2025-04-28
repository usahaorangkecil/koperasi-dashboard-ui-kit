
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Tentang Koperasi Kami</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Sejarah Kami</h2>
              <p className="text-muted-foreground mb-4">
                Didirikan pada tahun 2010, koperasi kami telah menjadi pionir dalam memberikan layanan keuangan yang inklusif bagi masyarakat. Dengan komitmen untuk membangun ekonomi kerakyatan, kami terus berkembang dan berinovasi untuk memberikan pelayanan terbaik bagi anggota kami.
              </p>
              <p className="text-muted-foreground">
                Saat ini, kami telah melayani lebih dari 10.000 anggota dan memiliki jaringan kerjasama dengan berbagai institusi keuangan dan UMKM di seluruh Indonesia.
              </p>
            </Card>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              alt="Kantor Koperasi" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
