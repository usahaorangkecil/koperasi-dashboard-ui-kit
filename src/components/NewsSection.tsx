
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Program Pembiayaan UMKM Tahap 2 Dibuka",
      date: "15 April 2023",
      excerpt: "Koperasi membuka pendaftaran untuk program pembiayaan khusus UMKM dengan bunga rendah dan tenor fleksibel.",
      url: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      title: "Peluncuran Aplikasi Mobile Koperasi",
      date: "3 Mei 2023",
      excerpt: "Kini anggota dapat melakukan transaksi dan memantau simpanan/pinjaman melalui aplikasi mobile yang baru diluncurkan.",
      url: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3",
      title: "Pelatihan Manajemen Keuangan Bisnis",
      date: "22 Juni 2023",
      excerpt: "Workshop gratis tentang pengelolaan keuangan bisnis untuk anggota koperasi akan diadakan secara daring.",
      url: "#"
    }
  ];

  return (
    <section className="py-16 bg-white" id="berita">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita & Kegiatan Terbaru</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dan kegiatan koperasi untuk mendapatkan informasi serta manfaat maksimal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-200"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href={item.url}>Baca Selengkapnya</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline">Lihat Semua Berita</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
