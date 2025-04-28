
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { journalData, coaData } from '@/utils/dummyData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

const GeneralJournal = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleAddJournal = () => {
    toast({
      title: "Jurnal baru ditambahkan",
      description: "Entri jurnal baru telah ditambahkan ke daftar.",
    });
  };
  
  const columns = [
    {
      key: 'date',
      header: 'Tanggal',
    },
    {
      key: 'description',
      header: 'Keterangan',
    },
    {
      key: 'debit',
      header: 'Debit',
    },
    {
      key: 'credit',
      header: 'Kredit',
    },
    {
      key: 'amount',
      header: 'Jumlah',
    },
    {
      key: 'actions',
      header: 'Aksi',
      cell: () => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Edit</Button>
          <Button variant="outline" size="sm">Detail</Button>
        </div>
      ),
    },
  ];
  
  return (
    <DashboardLayout role="koperasi">
      <div>
        <h1 className="text-2xl font-bold mb-6">Jurnal Umum</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Tambah Jurnal Baru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Tanggal</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : 'Pilih tanggal'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 pointer-events-auto">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Jumlah</Label>
                <Input id="amount" placeholder="Contoh: 1000000" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="debit-account">Akun Debit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih akun debit" />
                  </SelectTrigger>
                  <SelectContent>
                    {coaData.map(account => (
                      <SelectItem key={account.id} value={account.code}>{account.code} - {account.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="credit-account">Akun Kredit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih akun kredit" />
                  </SelectTrigger>
                  <SelectContent>
                    {coaData.map(account => (
                      <SelectItem key={account.id} value={account.code}>{account.code} - {account.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 col-span-2">
                <Label htmlFor="description">Keterangan</Label>
                <Textarea id="description" placeholder="Masukkan keterangan transaksi" />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button onClick={handleAddJournal}>Tambah Jurnal</Button>
            </div>
          </CardContent>
        </Card>
        
        <DataTable
          title="Daftar Jurnal"
          description="Kelola entri jurnal untuk pencatatan transaksi keuangan."
          data={journalData}
          columns={columns}
          actionButton={{
            label: "Tambah Jurnal Baru",
            onClick: handleAddJournal,
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default GeneralJournal;
