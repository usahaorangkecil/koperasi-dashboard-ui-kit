
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { adminMitraData } from '@/utils/dummyData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const AdminMitra = () => {
  const { toast } = useToast();
  
  const handleAddAdmin = () => {
    toast({
      title: "Form tambah admin mitra ditampilkan",
      description: "Ini adalah simulasi untuk menambahkan admin mitra baru.",
    });
  };
  
  const columns = [
    {
      key: 'name',
      header: 'Nama Mitra',
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
      key: 'category',
      header: 'Kategori',
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
        <h1 className="text-2xl font-bold mb-6">Manajemen Admin Mitra</h1>
        
        <DataTable
          title="Daftar Admin Mitra"
          description="Kelola admin untuk berbagai mitra bisnis koperasi."
          data={adminMitraData}
          columns={columns}
          actionButton={{
            label: "Tambah Admin Mitra",
            onClick: handleAddAdmin,
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default AdminMitra;
