
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const SystemSettings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Pengaturan disimpan",
      description: "Perubahan pengaturan berhasil disimpan.",
    });
  };
  
  return (
    <DashboardLayout role="owner">
      <div>
        <h1 className="text-2xl font-bold mb-6">Pengaturan Sistem</h1>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="general">Umum</TabsTrigger>
            <TabsTrigger value="appearance">Tampilan</TabsTrigger>
            <TabsTrigger value="security">Keamanan</TabsTrigger>
            <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Umum</CardTitle>
                <CardDescription>
                  Kelola informasi dasar tentang koperasi Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="koperasi-name">Nama Koperasi</Label>
                    <Input id="koperasi-name" defaultValue="Koperasi Sejahtera Bersama" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input id="phone" type="tel" defaultValue="021-87654321" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="info@koperasi.id" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://koperasi.id" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Alamat</Label>
                  <Textarea id="address" defaultValue="Jl. Pahlawan No. 123, Jakarta Pusat, DKI Jakarta 10110" />
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSave}>Simpan Perubahan</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Tampilan</CardTitle>
                <CardDescription>
                  Sesuaikan tampilan aplikasi koperasi.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="logo-upload">Logo Koperasi</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
                        Logo
                      </div>
                      <Button variant="outline" size="sm">Unggah Logo</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="favicon-upload">Favicon</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-md bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                        Fav
                      </div>
                      <Button variant="outline" size="sm">Unggah Favicon</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="theme-color">Warna Tema</Label>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-green-500 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-purple-500 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-yellow-500 cursor-pointer"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="theme-mode">Mode Tema</Label>
                    <Select defaultValue="light">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih mode tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSave}>Simpan Perubahan</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Keamanan</CardTitle>
                <CardDescription>
                  Atur kebijakan keamanan untuk aplikasi koperasi.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="password-policy">Kebijakan Password</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kebijakan password" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Rendah (minimal 6 karakter)</SelectItem>
                        <SelectItem value="medium">Sedang (minimal 8 karakter dengan angka)</SelectItem>
                        <SelectItem value="high">Tinggi (minimal 10 karakter dengan kombinasi)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Timeout Sesi (menit)</Label>
                    <Input id="session-timeout" type="number" defaultValue="30" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-attempts">Batas Percobaan Login</Label>
                    <Input id="login-attempts" type="number" defaultValue="5" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="2fa">Autentikasi Dua Faktor</Label>
                    <Select defaultValue="optional">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kebijakan 2FA" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="disabled">Dinonaktifkan</SelectItem>
                        <SelectItem value="optional">Opsional</SelectItem>
                        <SelectItem value="required">Diwajibkan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSave}>Simpan Perubahan</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Notifikasi</CardTitle>
                <CardDescription>
                  Atur notifikasi sistem untuk admin dan anggota.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email-notifications">Notifikasi Email</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih notifikasi email" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua notifikasi</SelectItem>
                        <SelectItem value="important">Hanya penting</SelectItem>
                        <SelectItem value="none">Tidak ada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="push-notifications">Notifikasi Push</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih notifikasi push" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua notifikasi</SelectItem>
                        <SelectItem value="important">Hanya penting</SelectItem>
                        <SelectItem value="none">Tidak ada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sms-notifications">Notifikasi SMS</Label>
                    <Select defaultValue="important">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih notifikasi SMS" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua notifikasi</SelectItem>
                        <SelectItem value="important">Hanya penting</SelectItem>
                        <SelectItem value="none">Tidak ada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSave}>Simpan Perubahan</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SystemSettings;
