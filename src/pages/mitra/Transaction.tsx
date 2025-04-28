
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Plus, Trash } from 'lucide-react';

const Transaction = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [items, setItems] = useState([{ name: '', category: '', price: '', quantity: '', total: '' }]);
  
  const handleAddItem = () => {
    setItems([...items, { name: '', category: '', price: '', quantity: '', total: '' }]);
  };
  
  const handleRemoveItem = (index: number) => {
    if (items.length > 1) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    } else {
      toast({
        variant: "destructive",
        title: "Tidak bisa menghapus",
        description: "Minimal harus ada 1 item transaksi.",
      });
    }
  };
  
  const handleSaveTransaction = () => {
    toast({
      title: "Transaksi disimpan",
      description: "Data transaksi berhasil disimpan.",
    });
  };
  
  return (
    <DashboardLayout role="mitra">
      <div>
        <h1 className="text-2xl font-bold mb-6">Input Transaksi Mitra</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Form Input Transaksi</CardTitle>
            <CardDescription>
              Masukkan detail transaksi penjualan atau jasa yang Anda lakukan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Tanggal Transaksi</Label>
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
                  <Label htmlFor="customer-name">Nama Pelanggan</Label>
                  <Input id="customer-name" placeholder="Masukkan nama pelanggan" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="invoice-number">Nomor Invoice</Label>
                  <Input id="invoice-number" placeholder="Masukkan nomor invoice" />
                </div>
              </div>
              
              <div className="space-y-4 border-t border-b py-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Detail Item</h3>
                  <Button variant="outline" size="sm" onClick={handleAddItem} className="flex items-center gap-1">
                    <Plus className="h-4 w-4" /> Tambah Item
                  </Button>
                </div>
                
                {items.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <div className="space-y-2">
                      <Label>Nama Barang / Jasa</Label>
                      <Input placeholder="Contoh: Laptop Asus" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Kategori</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elektronik">Elektronik</SelectItem>
                          <SelectItem value="jasa">Jasa</SelectItem>
                          <SelectItem value="alat-kantor">Alat Kantor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Harga</Label>
                      <Input placeholder="Contoh: 1000000" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Kuantitas</Label>
                      <Input type="number" placeholder="Contoh: 1" min="1" />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="notes">Catatan</Label>
                  <Input id="notes" placeholder="Catatan tambahan untuk transaksi ini" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="payment-method">Metode Pembayaran</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih metode pembayaran" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Tunai</SelectItem>
                      <SelectItem value="transfer">Transfer Bank</SelectItem>
                      <SelectItem value="credit-card">Kartu Kredit</SelectItem>
                      <SelectItem value="e-wallet">E-Wallet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-sm text-gray-500">Total Transaksi</p>
                  <p className="text-xl font-bold">Rp 0</p>
                </div>
                
                <Button onClick={handleSaveTransaction}>Simpan Transaksi</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Transaction;
