
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { adminKoperasiData } from '@/utils/dummyData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const AdminKoperasi = () => {
  const { toast } = useToast();
  
  const handleAddAdmin = () => {
    toast({
      title: "Form tambah admin ditampilkan",
      description: "Ini adalah simulasi untuk menambahkan admin koperasi baru.",
    });
  };
  
  const columns = [
    {
      key: 'name',
      header: 'Nama',
    },
    {
      key: 'email',
      header: 'Email',
    },
    {
      key: 'phone',
      header: 'No. Telepon',
    },
    {
      key: 'region',
      header: 'Region',
    },
    {
      key: 'status',
      header: 'Status',
      cell: (row: any) => (
        <Badge variant={row.status === 'active' ? 'default' : 'secondary'}>
          {row.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
        </Badge>
      ),
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
    <DashboardLayout role="owner">
      <div>
        <h1 className="text-2xl font-bold mb-6">Manajemen Admin Koperasi</h1>
        
        <DataTable
          title="Daftar Admin Koperasi"
          description="Kelola admin koperasi untuk berbagai wilayah."
          data={adminKoperasiData}
          columns={columns}
          actionButton={{
            label: "Tambah Admin",
            onClick: handleAddAdmin,
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default AdminKoperasi;
