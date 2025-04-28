
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Home, User, Wallet, ListChecks, Info, BarChart2, Upload, Bell } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { name: 'Jan', simpanan: 400, pinjaman: 240 },
  { name: 'Feb', simpanan: 300, pinjaman: 139 },
  { name: 'Mar', simpanan: 200, pinjaman: 980 },
  { name: 'Apr', simpanan: 278, pinjaman: 390 },
  { name: 'May', simpanan: 189, pinjaman: 480 },
];

const MobilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sistem Koperasi Merah Putih Versi Mobile
          </h1>
          <p className="text-lg mb-6">
            Akses semua layanan koperasi dari genggaman tangan Anda.
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Coba Sekarang
            </Button>
          </Link>
        </div>
      </section>

      {/* Mobile App Simulation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-gray-200">
            {/* Mobile Header */}
            <div className="bg-red-600 text-white p-4">
              <h3 className="text-lg font-semibold">Dashboard Mobile</h3>
            </div>

            {/* Chart */}
            <div className="p-4 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dummyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="simpanan" stroke="#ef4444" />
                  <Line type="monotone" dataKey="pinjaman" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Mobile Content */}
            <div className="p-4">
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="text-sm">Saldo Simpanan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">Rp 5.000.000</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Status Pinjaman</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600 font-semibold">Lunas</p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-between items-center p-4 border-t bg-white">
              {[
                { icon: Home, label: 'Home' },
                { icon: User, label: 'Profil' },
                { icon: Wallet, label: 'Simpanan' },
                { icon: ListChecks, label: 'Transaksi' },
                { icon: Info, label: 'Info' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-6 h-6 mx-auto text-gray-600" />
                  <span className="text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Fitur Mobile Unggulan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: ListChecks, title: "Cek Riwayat" },
              { icon: Upload, title: "Ajukan Pinjaman" },
              { icon: User, title: "Update Profil" },
              { icon: BarChart2, title: "Grafik Keuangan" },
              { icon: Bell, title: "Notifikasi" },
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

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "Apakah bisa digunakan semua koperasi?", a: "Ya ✅" },
              { q: "Bisa diakses tanpa instal aplikasi?", a: "Ya ✅" },
              { q: "Apakah data saya aman?", a: "Ya ✅" },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>{item.a}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Yuk, nikmati semua layanan koperasi dari smartphone Anda.
          </h2>
          <Link to="/login">
            <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
              Login Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MobilePage;
