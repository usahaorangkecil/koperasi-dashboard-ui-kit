
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Wrench, Users, BarChart2, CreditCard, FileText, User } from 'lucide-react';

const PromoPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sistem Koperasi Digital Merah Putih
            </h1>
            <p className="text-xl mb-8">
              Solusi digitalisasi koperasi Indonesia berbasis teknologi modern dan terpercaya.
            </p>
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Tonton Video
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Kenali Sistem Kami Lebih Dekat</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zWjTbDW3sQM"
              title="Video Promosi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-red-600" />
                <CardTitle>Aman & Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sistem berbasis cloud dengan keamanan enkripsi standar industri.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Smartphone className="w-12 h-12 mx-auto text-red-600" />
                <CardTitle>Mudah Digunakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tampilan user-friendly untuk semua kalangan usia.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Wrench className="w-12 h-12 mx-auto text-red-600" />
                <CardTitle>Bisa Disesuaikan</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fitur fleksibel, dapat disesuaikan dengan kebutuhan koperasi Anda.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Manajemen Anggota Otomatis" },
              { icon: BarChart2, title: "Dashboard Real-Time" },
              { icon: CreditCard, title: "Pengajuan Pinjaman Online" },
              { icon: FileText, title: "Integrasi Laporan Keuangan" },
              { icon: User, title: "Absensi Pegawai" },
              { icon: FileText, title: "Export PDF/Excel" },
              { icon: User, title: "Role-based Akses" },
              { icon: Smartphone, title: "Mobile Friendly" },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="w-8 h-8 mx-auto text-red-600" />
                  <CardTitle className="text-sm">{feature.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimoni</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Sistem ini sangat membantu pengelolaan keuangan kami jadi lebih rapi.",
                author: "Koperasi Makmur Jaya"
              },
              {
                quote: "Fitur pinjaman otomatisnya keren banget, anggota puas!",
                author: "Koperasi Usaha Mandiri"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Saatnya Koperasi Anda Go Digital!</h2>
          <p className="mb-8">
            Gabung bersama ratusan koperasi yang telah menikmati kemudahan dari Sistem Merah Putih.
          </p>
          <Link to="/login">
            <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
              Coba Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PromoPage;
