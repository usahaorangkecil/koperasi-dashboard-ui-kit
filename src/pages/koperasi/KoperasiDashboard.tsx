
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import ChartComponent from '@/components/ChartComponent';
import { koperasiStats, savingsVsLoansData } from '@/utils/dummyData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TableRow, TableCell, TableHead, TableHeader, TableBody, Table } from '@/components/ui/table';

const KoperasiDashboard = () => {
  const recentTransactions = [
    { id: 1, member: "Joko Widodo", type: "Simpanan Wajib", amount: "Rp 250.000", date: "Hari ini" },
    { id: 2, member: "Anita Dewi", type: "Angsuran Pinjaman", amount: "Rp 1.500.000", date: "Kemarin" },
    { id: 3, member: "Bambang Kusuma", type: "Simpanan Sukarela", amount: "Rp 1.000.000", date: "2 hari lalu" },
    { id: 4, member: "Citra Lestari", type: "Penarikan", amount: "Rp 500.000", date: "3 hari lalu" },
  ];

  return (
    <DashboardLayout role="koperasi">
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard Admin Koperasi</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {koperasiStats.map((stat, index) => (
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
          <ChartComponent 
            title="Rasio Simpanan vs Pinjaman"
            data={savingsVsLoansData}
            type="pie"
            dataKey="value"
            colors={['#0ea5e9', '#8b5cf6']}
          />
          
          <Card>
            <CardHeader>
              <CardTitle>Transaksi Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Anggota</TableHead>
                    <TableHead>Tipe</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Waktu</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.member}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Ringkasan Keuangan Bulanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-sm font-medium text-green-800 mb-1">Total Simpanan Bulan Ini</p>
                <p className="text-xl font-bold text-green-900">Rp 45.750.000</p>
                <p className="text-xs text-green-700 mt-1">Naik 12% dari bulan lalu</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-sm font-medium text-purple-800 mb-1">Total Pinjaman Bulan Ini</p>
                <p className="text-xl font-bold text-purple-900">Rp 78.500.000</p>
                <p className="text-xs text-purple-700 mt-1">Naik 8% dari bulan lalu</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm font-medium text-blue-800 mb-1">Pendapatan Bunga</p>
                <p className="text-xl font-bold text-blue-900">Rp 3.925.000</p>
                <p className="text-xs text-blue-700 mt-1">Naik 5% dari bulan lalu</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default KoperasiDashboard;
