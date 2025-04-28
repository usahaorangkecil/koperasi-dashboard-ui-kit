
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { TableRow, TableCell, TableHead, TableHeader, TableBody, Table } from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, FileText, Download, Printer } from 'lucide-react';
import { financialReportsData } from '@/utils/dummyData';

const KoperasiReports = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleExport = () => {
    toast({
      title: "Ekspor Laporan",
      description: "Laporan akan diunduh sebagai file PDF.",
    });
  };
  
  const incomeData = [
    { account: '4-1000', description: 'Pendapatan Bunga Pinjaman', amount: 'Rp 87.500.000' },
    { account: '4-2000', description: 'Pendapatan Jasa Administrasi', amount: 'Rp 15.700.000' },
    { account: '4-3000', description: 'Pendapatan Denda', amount: 'Rp 2.800.000' },
    { account: '4-4000', description: 'Pendapatan Lain-lain', amount: 'Rp 4.200.000' },
    { account: '', description: 'Total Pendapatan', amount: 'Rp 110.200.000' },
  ];
  
  const expenseData = [
    { account: '5-1000', description: 'Beban Gaji', amount: 'Rp 45.000.000' },
    { account: '5-2000', description: 'Beban Operasional', amount: 'Rp 18.500.000' },
    { account: '5-3000', description: 'Beban Penyusutan', amount: 'Rp 7.800.000' },
    { account: '5-4000', description: 'Beban Lain-lain', amount: 'Rp 3.900.000' },
    { account: '', description: 'Total Beban', amount: 'Rp 75.200.000' },
  ];
  
  const balanceData = [
    { account: '1-1000', description: 'Kas', amount: 'Rp 175.000.000' },
    { account: '1-2000', description: 'Bank', amount: 'Rp 425.000.000' },
    { account: '1-3000', description: 'Piutang Pinjaman', amount: 'Rp 875.400.000' },
    { account: '1-4000', description: 'Perlengkapan', amount: 'Rp 35.000.000' },
    { account: '1-5000', description: 'Inventaris', amount: 'Rp 125.000.000' },
    { account: '', description: 'Total Aset', amount: 'Rp 1.635.400.000' },
    { account: '2-1000', description: 'Simpanan Pokok', amount: 'Rp 350.000.000' },
    { account: '2-2000', description: 'Simpanan Wajib', amount: 'Rp 525.000.000' },
    { account: '2-3000', description: 'Simpanan Sukarela', amount: 'Rp 375.000.000' },
    { account: '3-1000', description: 'Modal', amount: 'Rp 100.000.000' },
    { account: '3-2000', description: 'SHU Tahun Berjalan', amount: 'Rp 285.400.000' },
    { account: '', description: 'Total Kewajiban & Ekuitas', amount: 'Rp 1.635.400.000' },
  ];
  
  return (
    <DashboardLayout role="koperasi">
      <div>
        <h1 className="text-2xl font-bold mb-6">Laporan Koperasi</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Filter Periode Laporan</h2>
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <Label>Tanggal Mulai</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <CalendarIcon className="h-4 w-4" />
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
              <Label>Tanggal Selesai</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <CalendarIcon className="h-4 w-4" />
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
            
            <Button className="self-end">Terapkan Filter</Button>
          </div>
        </div>
        
        <Tabs defaultValue="profit-loss" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="profit-loss">Laba Rugi</TabsTrigger>
            <TabsTrigger value="balance">Neraca</TabsTrigger>
            <TabsTrigger value="cash-flow">Arus Kas</TabsTrigger>
            <TabsTrigger value="shu">SHU</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profit-loss">
            <Card>
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>Laporan Laba Rugi</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={handleExport} className="flex gap-2">
                    <FileText size={16} />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleExport} className="flex gap-2">
                    <Download size={16} />
                    Excel
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleExport} className="flex gap-2">
                    <Printer size={16} />
                    Print
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pendapatan</h3>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Kode</TableHead>
                            <TableHead>Keterangan</TableHead>
                            <TableHead className="text-right">Jumlah</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {incomeData.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.account}</TableCell>
                              <TableCell className={!item.account ? 'font-bold' : ''}>
                                {item.description}
                              </TableCell>
                              <TableCell className={`text-right ${!item.account ? 'font-bold' : ''}`}>
                                {item.amount}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Beban</h3>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Kode</TableHead>
                            <TableHead>Keterangan</TableHead>
                            <TableHead className="text-right">Jumlah</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {expenseData.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.account}</TableCell>
                              <TableCell className={!item.account ? 'font-bold' : ''}>
                                {item.description}
                              </TableCell>
                              <TableCell className={`text-right ${!item.account ? 'font-bold' : ''}`}>
                                {item.amount}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between">
                      <span className="font-bold">SHU Periode Ini</span>
                      <span className="font-bold">Rp 35.000.000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="balance">
            <Card>
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>Laporan Neraca</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={handleExport} className="flex gap-2">
                    <FileText size={16} />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleExport} className="flex gap-2">
                    <Download size={16} />
                    Excel
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleExport} className="flex gap-2">
                    <Printer size={16} />
                    Print
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Kode</TableHead>
                        <TableHead>Keterangan</TableHead>
                        <TableHead className="text-right">Jumlah</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {balanceData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.account}</TableCell>
                          <TableCell className={!item.account ? 'font-bold' : ''}>
                            {item.description}
                          </TableCell>
                          <TableCell className={`text-right ${!item.account ? 'font-bold' : ''}`}>
                            {item.amount}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cash-flow">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Arus Kas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Data arus kas untuk periode terpilih.</p>
                <p className="text-center py-8 text-muted-foreground">
                  [Data Arus Kas Akan Ditampilkan di Sini]
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="shu">
            <Card>
              <CardHeader>
                <CardTitle>Laporan SHU & Pembagian</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Data SHU dan pembagian untuk periode terpilih.</p>
                <p className="text-center py-8 text-muted-foreground">
                  [Data SHU & Pembagian Akan Ditampilkan di Sini]
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default KoperasiReports;
