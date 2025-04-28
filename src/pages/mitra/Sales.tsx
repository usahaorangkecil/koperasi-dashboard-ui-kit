
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { salesListData } from '@/utils/dummyData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Sales = () => {
  const { toast } = useToast();
  
  const handleAddSale = () => {
    toast({
      title: "Form tambah data ditampilkan",
      description: "Ini adalah simulasi untuk menambahkan data penjualan baru.",
    });
  };
  
  const columns = [
    {
      key: 'date',
      header: 'Tanggal',
    },
    {
      key: 'name',
      header: 'Nama Barang/Jasa',
    },
    {
      key: 'category',
      header: 'Kategori',
      cell: (row: any) => (
        <Badge variant={row.category === 'Elektronik' ? 'default' : 'outline'}>
          {row.category}
        </Badge>
      ),
    },
    {
      key: 'price',
      header: 'Harga',
    },
    {
      key: 'quantity',
      header: 'Kuantitas',
    },
    {
      key: 'total',
      header: 'Total',
    },
    {
      key: 'actions',
      header: 'Aksi',
      cell: () => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Edit</Button>
          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">Hapus</Button>
        </div>
      ),
    },
  ];
  
  return (
    <DashboardLayout role="mitra">
      <div>
        <h1 className="text-2xl font-bold mb-6">Daftar Penjualan / Jasa</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm font-medium text-blue-800 mb-1">Total Transaksi</p>
              <p className="text-xl font-bold text-blue-900">256</p>
              <p className="text-xs text-blue-700 mt-1">Bulan Ini</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm font-medium text-green-800 mb-1">Total Penjualan</p>
              <p className="text-xl font-bold text-green-900">Rp 548.200.000</p>
              <p className="text-xs text-green-700 mt-1">Tahun Berjalan</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-sm font-medium text-purple-800 mb-1">Rata-rata Transaksi</p>
              <p className="text-xl font-bold text-purple-900">Rp 12.850.000</p>
              <p className="text-xs text-purple-700 mt-1">Bulan Ini</p>
            </div>
          </div>
        </div>
        
        <DataTable
          title="Daftar Penjualan dan Jasa"
          description="Kelola data transaksi penjualan barang dan jasa."
          data={salesListData}
          columns={columns}
          actionButton={{
            label: "+ Tambah Data",
            onClick: handleAddSale,
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default Sales;
