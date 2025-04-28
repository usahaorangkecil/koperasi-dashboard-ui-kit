
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Landmark, Users, BarChart4 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <CreditCard className="h-10 w-10 text-koperasi-600" />,
      title: "Simpanan",
      description: "Berbagai produk simpanan dengan imbal hasil kompetitif dan proses yang mudah untuk membantu Anda memenuhi tujuan keuangan."
    },
    {
      icon: <Landmark className="h-10 w-10 text-koperasi-600" />,
      title: "Pinjaman",
      description: "Solusi pinjaman dengan bunga rendah dan proses cepat untuk berbagai kebutuhan, baik personal maupun pengembangan usaha."
    },
    {
      icon: <Users className="h-10 w-10 text-koperasi-600" />,
      title: "Kemitraan",
      description: "Program kemitraan untuk pengusaha dan UMKM dengan akses pasar dan dukungan pengembangan bisnis yang komprehensif."
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-koperasi-600" />,
      title: "Pelatihan",
      description: "Berbagai program pelatihan untuk meningkatkan kapasitas dan keterampilan anggota dalam mengelola keuangan dan usaha."
    }
  ];

  return (
    <section className="py-16 bg-white" id="layanan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Unggulan Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan keuangan dan bisnis untuk mendukung pertumbuhan ekonomi dan kesejahteraan anggota.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
