
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TableRow, TableCell, TableHead, TableHeader, TableBody, Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { userLoansData, installmentData } from '@/utils/dummyData';
import { Progress } from '@/components/ui/progress';
import { FileText, Download, Printer } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UserLoans = () => {
  const { toast } = useToast();
  
  const handleExport = () => {
    toast({
      title: "Ekspor Riwayat Pinjaman",
      description: "Riwayat pinjaman Anda akan diunduh sebagai file PDF.",
    });
  };
  
  const handleApplyLoan = () => {
    toast({
      title: "Pengajuan Pinjaman",
      description: "Form pengajuan pinjaman baru akan ditampilkan.",
    });
  };
  
  // Get loan data
  const loan = userLoansData.length > 0 ? userLoansData[0] : null;
  
  // Calculate progress percentage
  const paidAmount = loan ? parseInt(loan.paid.replace(/\D/g, '')) : 0;
  const remainingAmount = loan ? parseInt(loan.remaining.replace(/\D/g, '')) : 0;
  const totalAmount = paidAmount + remainingAmount;
  const progressPercentage = Math.round((paidAmount / totalAmount) * 100);
  
  return (
    <DashboardLayout role="user">
      <div>
        <h1 className="text-2xl font-bold mb-6">Pinjaman Saya</h1>
        
        {loan ? (
          <>
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Detail Pinjaman Aktif</CardTitle>
                    <CardDescription>
                      Pinjaman diajukan pada {loan.date}
                    </CardDescription>
                  </div>
                  <Badge>Aktif</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Jumlah Pinjaman</p>
                    <p className="text-xl font-bold">{loan.amount}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Jangka Waktu</p>
                    <p className="text-xl font-bold">{loan.term}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Bunga</p>
                    <p className="text-xl font-bold">{loan.interest}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Angsuran per Bulan</p>
                    <p className="text-xl font-bold">Rp 1.000.000</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Progress Pembayaran</span>
                      <span>{progressPercentage}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>{loan.paid} terbayar</span>
                    <span>{loan.remaining} tersisa</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row justify-between items-center">
                <div>
                  <CardTitle>Riwayat Angsuran</CardTitle>
                  <CardDescription>Daftar pembayaran angsuran pinjaman Anda</CardDescription>
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
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tanggal Jatuh Tempo</TableHead>
                        <TableHead>Jumlah</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {installmentData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.amount}</TableCell>
                          <TableCell>
                            <Badge variant={item.status === 'Dibayar' ? 'outline' : 'secondary'} className={item.status === 'Dibayar' ? 'border-green-500 text-green-500' : ''}>
                              {item.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <h3 className="text-xl font-semibold mb-2">Anda belum memiliki pinjaman aktif</h3>
              <p className="text-muted-foreground mb-6">Ajukan pinjaman untuk kebutuhan Anda dengan bunga rendah dan proses cepat</p>
              <Button onClick={handleApplyLoan}>Ajukan Pinjaman</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UserLoans;
