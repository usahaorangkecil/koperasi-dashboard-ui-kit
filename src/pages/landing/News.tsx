
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: 'Program Pembiayaan UMKM 2024',
      date: '15 April 2024',
      excerpt: 'Koperasi membuka program pembiayaan khusus untuk UMKM dengan bunga rendah...',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad'
    },
    {
      title: 'Pembukaan Cabang Baru',
      date: '10 April 2024',
      excerpt: 'Koperasi membuka cabang baru di pusat kota untuk memudahkan akses layanan...',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
    },
    {
      title: 'Workshop Kewirausahaan',
      date: '5 April 2024',
      excerpt: 'Workshop gratis untuk anggota koperasi tentang strategi pengembangan usaha...',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Berita & Artikel</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Baca Selengkapnya
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
