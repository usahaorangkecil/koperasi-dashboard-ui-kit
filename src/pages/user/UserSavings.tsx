
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TableRow, TableCell, TableHead, TableHeader, TableBody, Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { userSavingsData } from '@/utils/dummyData';
import { FileText, Download, Printer } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UserSavings = () => {
  const { toast } = useToast();
  
  const handleExport = () => {
    toast({
      title: "Ekspor Riwayat Simpanan",
      description: "Riwayat simpanan Anda akan diunduh sebagai file PDF.",
    });
  };
  
  // Get the last entry for current balance
  const currentBalance = userSavingsData.length > 0 
    ? userSavingsData[userSavingsData.length - 1].balance 
    : 'Rp 0';
  
  // Calculate savings by type
  const savingsByType = userSavingsData.reduce((acc, item) => {
    const type = item.type;
    if (!acc[type]) {
      acc[type] = { count: 0, total: 0 };
    }
    
    // Extract numeric value from amount string (e.g. "Rp 1.000.000" -> 1000000)
    const amount = parseInt(item.amount.replace(/\D/g, ''));
    acc[type].count++;
    acc[type].total += amount;
    
    return acc;
  }, {} as Record<string, { count: number, total: number }>);
  
  return (
    <DashboardLayout role="user">
      <div>
        <h1 className="text-2xl font-bold mb-6">Simpanan Saya</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Simpanan</CardDescription>
              <CardTitle className="text-2xl">{currentBalance}</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Simpanan Pokok</CardDescription>
              <CardTitle className="text-2xl">
                {savingsByType['Simpanan Pokok'] 
                  ? `Rp ${savingsByType['Simpanan Pokok'].total.toLocaleString()}` 
                  : 'Rp 0'}
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Simpanan Wajib</CardDescription>
              <CardTitle className="text-2xl">
                {savingsByType['Simpanan Wajib'] 
                  ? `Rp ${savingsByType['Simpanan Wajib'].total.toLocaleString()}` 
                  : 'Rp 0'}
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Simpanan Sukarela</CardDescription>
              <CardTitle className="text-2xl">
                {savingsByType['Simpanan Sukarela'] 
                  ? `Rp ${savingsByType['Simpanan Sukarela'].total.toLocaleString()}` 
                  : 'Rp 0'}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle>Riwayat Simpanan</CardTitle>
              <CardDescription>Daftar riwayat transaksi simpanan Anda</CardDescription>
            </div>
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
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Jenis Simpanan</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Saldo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userSavingsData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.amount}</TableCell>
                      <TableCell>{item.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserSavings;
