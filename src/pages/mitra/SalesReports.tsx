
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ChartComponent from '@/components/ChartComponent';
import { salesData } from '@/utils/dummyData';
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

const SalesReports = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleExport = () => {
    toast({
      title: "Ekspor Laporan",
      description: "Laporan akan diunduh sebagai file PDF.",
    });
  };
  
  const salesByProductData = [
    { product: 'Laptop Asus ProArt', quantity: 8, revenue: 'Rp 120.000.000', percentage: '22%' },
    { product: 'Smartphone Samsung S21', quantity: 12, revenue: 'Rp 144.000.000', percentage: '26%' },
    { product: 'Monitor Dell Ultrasharp', quantity: 20, revenue: 'Rp 96.000.000', percentage: '18%' },
    { product: 'Printer Epson L3110', quantity: 16, revenue: 'Rp 36.800.000', percentage: '7%' },
    { product: 'Service AC', quantity: 40, revenue: 'Rp 14.000.000', percentage: '3%' },
    { product: 'Website Development', quantity: 5, revenue: 'Rp 75.000.000', percentage: '14%' },
    { product: 'Konsultasi IT', quantity: 10, revenue: 'Rp 25.000.000', percentage: '5%' },
    { product: 'Lainnya', quantity: 35, revenue: 'Rp 28.000.000', percentage: '5%' },
  ];
  
  const monthlyData = [
    { name: 'Jan', value: 45000000 },
    { name: 'Feb', value: 42000000 },
    { name: 'Mar', value: 48000000 },
    { name: 'Apr', value: 50000000 },
    { name: 'Mei', value: 54000000 },
    { name: 'Jun', value: 58000000 },
    { name: 'Jul', value: 62000000 },
    { name: 'Ags', value: 57000000 },
    { name: 'Sep', value: 64000000 },
    { name: 'Okt', value: 60000000 },
    { name: 'Nov', value: 62000000 },
    { name: 'Des', value: 68000000 },
  ];
  
  return (
    <DashboardLayout role="mitra">
      <div>
        <h1 className="text-2xl font-bold mb-6">Laporan Penjualan</h1>
        
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
        
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="summary">Ringkasan</TabsTrigger>
            <TabsTrigger value="product">Berdasarkan Produk</TabsTrigger>
            <TabsTrigger value="category">Berdasarkan Kategori</TabsTrigger>
            <TabsTrigger value="monthly">Bulanan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Total Pendapatan</h3>
                <p className="text-3xl font-bold text-blue-600">Rp 548.200.000</p>
                <p className="text-sm text-gray-500 mt-1">Tahun 2023</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Jumlah Transaksi</h3>
                <p className="text-3xl font-bold text-green-600">1,284</p>
                <p className="text-sm text-gray-500 mt-1">Tahun 2023</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Rata-rata Transaksi</h3>
                <p className="text-3xl font-bold text-purple-600">Rp 426.946</p>
                <p className="text-sm text-gray-500 mt-1">Tahun 2023</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle>Tren Penjualan</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handleExport} className="flex gap-2">
                      <Download size={16} />
                      Ekspor
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ChartComponent 
                    title=""
                    data={monthlyData}
                    type="line"
                    dataKey="value"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle>Produk Terlaris</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handleExport} className="flex gap-2">
                      <Download size={16} />
                      Ekspor
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Produk</TableHead>
                          <TableHead className="text-right">Jumlah</TableHead>
                          <TableHead className="text-right">Pendapatan</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {salesByProductData.slice(0, 5).map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.product}</TableCell>
                            <TableCell className="text-right">{item.quantity}</TableCell>
                            <TableCell className="text-right">{item.revenue}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="product">
            <Card>
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>Laporan Penjualan Berdasarkan Produk</CardTitle>
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
                        <TableHead>Produk</TableHead>
                        <TableHead className="text-right">Jumlah Terjual</TableHead>
                        <TableHead className="text-right">Pendapatan</TableHead>
                        <TableHead className="text-right">Persentase</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {salesByProductData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.product}</TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell className="text-right">{item.revenue}</TableCell>
                          <TableCell className="text-right">{item.percentage}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="font-bold">Total</TableCell>
                        <TableCell className="text-right font-bold">146</TableCell>
                        <TableCell className="text-right font-bold">Rp 548.200.000</TableCell>
                        <TableCell className="text-right font-bold">100%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="category">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Penjualan Berdasarkan Kategori</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Data penjualan dikelompokkan berdasarkan kategori produk.</p>
                <p className="text-center py-8 text-muted-foreground">
                  [Laporan Penjualan Berdasarkan Kategori Akan Ditampilkan di Sini]
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="monthly">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Penjualan Bulanan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Data penjualan dikelompokkan berdasarkan bulan.</p>
                <p className="text-center py-8 text-muted-foreground">
                  [Laporan Penjualan Bulanan Akan Ditampilkan di Sini]
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SalesReports;
