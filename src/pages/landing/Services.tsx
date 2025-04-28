
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Wallet, GraduationCap, Building2, PiggyBank } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Simpanan Berjangka',
      description: 'Investasikan dana Anda dengan imbal hasil yang kompetitif',
      icon: <PiggyBank className="w-12 h-12 text-primary" />,
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e'
    },
    {
      title: 'Simpanan Sukarela',
      description: 'Flexibilitas dalam menyimpan dan menarik dana',
      icon: <Wallet className="w-12 h-12 text-primary" />,
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d'
    },
    {
      title: 'Pinjaman Usaha',
      description: 'Modal usaha dengan bunga kompetitif',
      icon: <Building2 className="w-12 h-12 text-primary" />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
    },
    {
      title: 'Pinjaman Pendidikan',
      description: 'Wujudkan pendidikan berkualitas',
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Produk & Layanan</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
