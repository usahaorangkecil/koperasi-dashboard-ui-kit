
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { savingsData } from '@/utils/dummyData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Savings = () => {
  const { toast } = useToast();
  
  const handleAddSaving = () => {
    toast({
      title: "Form tambah simpanan ditampilkan",
      description: "Ini adalah simulasi untuk menambahkan data simpanan baru.",
    });
  };
  
  const columns = [
    {
      key: 'member',
      header: 'Anggota',
    },
    {
      key: 'type',
      header: 'Jenis Simpanan',
    },
    {
      key: 'amount',
      header: 'Jumlah',
    },
    {
      key: 'date',
      header: 'Tanggal',
    },
    {
      key: 'status',
      header: 'Status',
      cell: (row: any) => (
        <Badge variant={row.status === 'Approved' ? 'default' : 'secondary'}>
          {row.status === 'Approved' ? 'Disetujui' : 'Menunggu'}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Aksi',
      cell: () => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Detail</Button>
          <Button variant="outline" size="sm">Edit</Button>
        </div>
      ),
    },
  ];
  
  return (
    <DashboardLayout role="koperasi">
      <div>
        <h1 className="text-2xl font-bold mb-6">Daftar Simpanan Anggota</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm font-medium text-blue-800 mb-1">Total Simpanan Pokok</p>
              <p className="text-xl font-bold text-blue-900">Rp 350.000.000</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm font-medium text-green-800 mb-1">Total Simpanan Wajib</p>
              <p className="text-xl font-bold text-green-900">Rp 525.000.000</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-sm font-medium text-purple-800 mb-1">Total Simpanan Sukarela</p>
              <p className="text-xl font-bold text-purple-900">Rp 375.000.000</p>
            </div>
          </div>
        </div>
        
        <DataTable
          title="Daftar Simpanan"
          description="Kelola data simpanan anggota koperasi."
          data={savingsData}
          columns={columns}
          actionButton={{
            label: "Tambah Simpanan Baru",
            onClick: handleAddSaving,
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default Savings;
