
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { usersData } from '@/utils/dummyData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Users = () => {
  const { toast } = useToast();
  
  const handleAddUser = () => {
    toast({
      title: "Form tambah anggota ditampilkan",
      description: "Ini adalah simulasi untuk menambahkan anggota baru.",
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
      key: 'joined',
      header: 'Bergabung Pada',
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
          <Button variant="outline" size="sm">Detail</Button>
          <Button variant="outline" size="sm">Edit</Button>
          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">Hapus</Button>
        </div>
      ),
    },
  ];
  
  return (
    <DashboardLayout role="owner">
      <div>
        <h1 className="text-2xl font-bold mb-6">Manajemen User</h1>
        
        <DataTable
          title="Daftar Anggota Koperasi"
          description="Kelola data anggota koperasi."
          data={usersData}
          columns={columns}
          actionButton={{
            label: "Tambah Anggota",
            onClick: handleAddUser,
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default Users;
