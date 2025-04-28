
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import { userStats, loanProgressData } from '@/utils/dummyData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TableRow, TableCell, TableHead, TableHeader, TableBody, Table } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const UserDashboard = () => {
  // Calculate loan progress percentage
  const totalLoan = loanProgressData.reduce((sum, item) => sum + item.value, 0);
  const paidAmount = loanProgressData[0].value;
  const progressPercentage = Math.round((paidAmount / totalLoan) * 100);
  
  const recentTransactions = [
    { id: 1, date: '12/06/2023', type: 'Simpanan Wajib', amount: 'Rp 250.000', status: 'Berhasil' },
    { id: 2, date: '15/05/2023', type: 'Angsuran Pinjaman', amount: 'Rp 1.000.000', status: 'Berhasil' },
    { id: 3, date: '15/04/2023', type: 'Angsuran Pinjaman', amount: 'Rp 1.000.000', status: 'Berhasil' },
    { id: 4, date: '12/04/2023', type: 'Simpanan Wajib', amount: 'Rp 250.000', status: 'Berhasil' },
  ];

  return (
    <DashboardLayout role="user">
      <div>
        <h1 className="text-2xl font-bold mb-6">Halo, John Doe!</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Progress Pembayaran Pinjaman</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Progress</span>
                  <span>{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Total Pinjaman: Rp 12.000.000</span>
                <span>Sisa: Rp 5.000.000</span>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Detail Pinjaman</h4>
                  <Badge>Aktif</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Tanggal Pengajuan</p>
                    <p>15 Maret 2023</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Jangka Waktu</p>
                    <p>12 bulan</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Angsuran per Bulan</p>
                    <p>Rp 1.000.000</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Bunga</p>
                    <p>1% per bulan</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Transaksi Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Tipe</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {transaction.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Pengumuman & Kegiatan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="font-medium text-blue-800 mb-1">Rapat Anggota Tahunan</p>
              <p className="text-sm text-blue-700 mb-2">25 Juli 2023, 09:00 - 12:00 WIB</p>
              <p className="text-sm text-blue-600">Akan diadakan Rapat Anggota Tahunan untuk membahas laporan keuangan dan pembagian SHU. Kehadiran Anda sangat diharapkan.</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="font-medium text-green-800 mb-1">Program Pelatihan Kewirausahaan</p>
              <p className="text-sm text-green-700 mb-2">5 - 6 Agustus 2023</p>
              <p className="text-sm text-green-600">Koperasi akan mengadakan pelatihan kewirausahaan bagi anggota yang ingin mengembangkan usaha. Pendaftaran dibuka sampai 31 Juli 2023.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
