
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { loansData } from '@/utils/dummyData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Loans = () => {
  const { toast } = useToast();
  
  const handleAddLoan = () => {
    toast({
      title: "Form tambah pinjaman ditampilkan",
      description: "Ini adalah simulasi untuk menambahkan data pinjaman baru.",
    });
  };
  
  const getStatusBadge = (status: string) => {
    if (status === 'Aktif') {
      return <Badge>Aktif</Badge>;
    } else if (status === 'Lunas') {
      return <Badge variant="outline" className="border-green-500 text-green-500">Lunas</Badge>;
    } else {
      return <Badge variant="destructive">Menunggak</Badge>;
    }
  };
  
  const columns = [
    {
      key: 'member',
      header: 'Anggota',
    },
    {
      key: 'amount',
      header: 'Jumlah Pinjaman',
    },
    {
      key: 'term',
      header: 'Jangka Waktu',
    },
    {
      key: 'interest',
      header: 'Bunga',
    },
    {
      key: 'status',
      header: 'Status',
      cell: (row: any) => getStatusBadge(row.status),
    },
    {
      key: 'actions',
      header: 'Aksi',
      cell: () => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Detail</Button>
          <Button variant="outline" size="sm">Angsuran</Button>
        </div>
      ),
    },
  ];
  
  return (
    <DashboardLayout role="koperasi">
      <div>
        <h1 className="text-2xl font-bold mb-6">Daftar Pinjaman Anggota</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm font-medium text-blue-800 mb-1">Total Pinjaman Aktif</p>
              <p className="text-xl font-bold text-blue-900">Rp 785.000.000</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm font-medium text-green-800 mb-1">Pinjaman Lunas Bulan Ini</p>
              <p className="text-xl font-bold text-green-900">Rp 45.000.000</p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-sm font-medium text-red-800 mb-1">Pinjaman Menunggak</p>
              <p className="text-xl font-bold text-red-900">Rp 35.000.000</p>
            </div>
          </div>
        </div>
        
        <DataTable
          title="Daftar Pinjaman"
          description="Kelola data pinjaman anggota koperasi."
          data={loansData}
          columns={columns}
          actionButton={{
            label: "Tambah Pinjaman Baru",
            onClick: handleAddLoan,
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default Loans;
