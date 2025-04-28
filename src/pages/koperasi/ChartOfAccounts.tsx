
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { coaData } from '@/utils/dummyData';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ChartOfAccounts = () => {
  const { toast } = useToast();
  
  const handleAddAccount = () => {
    toast({
      title: "Akun baru ditambahkan",
      description: "Akun keuangan baru telah ditambahkan ke daftar.",
    });
  };
  
  const handleDeleteAccount = () => {
    toast({
      variant: "destructive",
      title: "Konfirmasi hapus akun",
      description: "Apakah Anda yakin ingin menghapus akun ini?",
    });
  };
  
  const columns = [
    {
      key: 'code',
      header: 'Kode Akun',
    },
    {
      key: 'name',
      header: 'Nama Akun',
    },
    {
      key: 'type',
      header: 'Tipe Akun',
    },
    {
      key: 'balance',
      header: 'Saldo',
    },
    {
      key: 'actions',
      header: 'Aksi',
      cell: () => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Edit</Button>
          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700" onClick={handleDeleteAccount}>Hapus</Button>
        </div>
      ),
    },
  ];
  
  const accountTypes = [
    { value: 'asset', label: 'Aset' },
    { value: 'liability', label: 'Kewajiban' },
    { value: 'equity', label: 'Ekuitas' },
    { value: 'income', label: 'Pendapatan' },
    { value: 'expense', label: 'Beban' },
  ];
  
  return (
    <DashboardLayout role="koperasi">
      <div>
        <h1 className="text-2xl font-bold mb-6">COA (Chart of Account)</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Tambah Akun Baru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="account-code">Kode Akun</Label>
                <Input id="account-code" placeholder="Contoh: 1-1000" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="account-name">Nama Akun</Label>
                <Input id="account-name" placeholder="Contoh: Kas" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="account-type">Tipe Akun</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih tipe akun" />
                  </SelectTrigger>
                  <SelectContent>
                    {accountTypes.map(type => (
                      <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button onClick={handleAddAccount}>Tambah Akun</Button>
            </div>
          </CardContent>
        </Card>
        
        <DataTable
          title="Daftar Akun (Chart of Account)"
          description="Kelola daftar akun untuk pembukuan koperasi."
          data={coaData}
          columns={columns}
        />
      </div>
    </DashboardLayout>
  );
};

export default ChartOfAccounts;
