
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { userLoansData } from '@/utils/dummyData';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

const InstallmentPayment = () => {
  const { toast } = useToast();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [image, setImage] = useState<File | null>(null);
  
  // Get loan data
  const loan = userLoansData.length > 0 ? userLoansData[0] : null;
  
  // Calculate progress percentage
  const paidAmount = loan ? parseInt(loan.paid.replace(/\D/g, '')) : 0;
  const remainingAmount = loan ? parseInt(loan.remaining.replace(/\D/g, '')) : 0;
  const totalAmount = paidAmount + remainingAmount;
  const progressPercentage = Math.round((paidAmount / totalAmount) * 100);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pembayaran Berhasil Diproses",
      description: "Bukti pembayaran Anda sedang diverifikasi.",
    });
  };
  
  return (
    <DashboardLayout role="user">
      <div>
        <h1 className="text-2xl font-bold mb-6">Pembayaran Angsuran</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Form Pembayaran Angsuran</CardTitle>
                <CardDescription>
                  Silakan isi form berikut untuk melakukan pembayaran angsuran pinjaman Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="loan">Pilih Pinjaman</Label>
                    <Select defaultValue="loan-1">
                      <SelectTrigger id="loan">
                        <SelectValue placeholder="Pilih pinjaman" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loan-1">Pinjaman - {loan?.date} - {loan?.amount}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="amount">Jumlah Pembayaran</Label>
                    <Input 
                      id="amount" 
                      type="text" 
                      placeholder="Contoh: 1000000" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      Jumlah angsuran per bulan: Rp 1.000.000
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Metode Pembayaran</Label>
                    <Select onValueChange={setSelectedPaymentMethod}>
                      <SelectTrigger id="payment-method">
                        <SelectValue placeholder="Pilih metode pembayaran" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank-transfer">Transfer Bank</SelectItem>
                        <SelectItem value="e-wallet">E-Wallet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {selectedPaymentMethod && (
                    <div className="space-y-2">
                      <Label htmlFor="receipt">Upload Bukti Pembayaran</Label>
                      <div className="border border-gray-200 rounded-md p-4">
                        <Input 
                          id="receipt" 
                          type="file" 
                          accept="image/*" 
                          onChange={handleImageChange}
                          required
                        />
                        {image && (
                          <div className="mt-2 flex items-center">
                            <span className="text-sm text-gray-500">
                              File terpilih: {image.name}
                            </span>
                          </div>
                        )}
                        <p className="text-sm text-gray-500 mt-2">
                          Format yang didukung: JPG, PNG, PDF. Ukuran maksimal: 2MB
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <Label htmlFor="notes">Catatan (Opsional)</Label>
                    <Input id="notes" placeholder="Tambahkan catatan jika diperlukan" />
                  </div>
                  
                  <Button type="submit" className="w-full">Kirim Pembayaran</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Informasi Pinjaman</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Progress Pembayaran</p>
                  <Progress value={progressPercentage} className="h-2 mb-2" />
                  <div className="flex justify-between text-sm">
                    <span>{loan?.paid} terbayar</span>
                    <span>{loan?.remaining} tersisa</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-sm text-gray-500 mb-1">Detail Pinjaman</p>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Jumlah Pinjaman</span>
                      <span className="text-sm font-medium">{loan?.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Jangka Waktu</span>
                      <span className="text-sm font-medium">{loan?.term}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Bunga</span>
                      <span className="text-sm font-medium">{loan?.interest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Status</span>
                      <span className="text-sm font-medium">{loan?.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-sm text-gray-500 mb-1">Pembayaran Terakhir</p>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Tanggal</span>
                      <span className="text-sm font-medium">15 Oct 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Jumlah</span>
                      <span className="text-sm font-medium">Rp 1.000.000</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-sm text-gray-500 mb-1">Pembayaran Berikutnya</p>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Jatuh Tempo</span>
                      <span className="text-sm font-medium">15 Nov 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Jumlah</span>
                      <span className="text-sm font-medium">Rp 1.000.000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstallmentPayment;
