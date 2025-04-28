
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserProfile = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Profil Disimpan",
      description: "Perubahan pada profil Anda telah berhasil disimpan.",
    });
  };
  
  const handlePasswordChange = () => {
    toast({
      title: "Password Diubah",
      description: "Password Anda berhasil diubah.",
    });
  };
  
  return (
    <DashboardLayout role="user">
      <div>
        <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>
        
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="personal">Data Diri</TabsTrigger>
            <TabsTrigger value="security">Keamanan</TabsTrigger>
            <TabsTrigger value="notification">Notifikasi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Informasi Pribadi</CardTitle>
                  <CardDescription>
                    Ubah informasi pribadi Anda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Nama Lengkap</Label>
                      <Input id="full-name" defaultValue="John Doe" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="id-number">Nomor KTP</Label>
                      <Input id="id-number" defaultValue="3201012345678901" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="birth-place">Tempat Lahir</Label>
                      <Input id="birth-place" defaultValue="Jakarta" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="birth-date">Tanggal Lahir</Label>
                      <Input id="birth-date" type="date" defaultValue="1990-01-01" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="gender">Jenis Kelamin</Label>
                      <Select defaultValue="male">
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Laki-laki</SelectItem>
                          <SelectItem value="female">Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="marital-status">Status Pernikahan</Label>
                      <Select defaultValue="married">
                        <SelectTrigger id="marital-status">
                          <SelectValue placeholder="Pilih status pernikahan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Belum Menikah</SelectItem>
                          <SelectItem value="married">Menikah</SelectItem>
                          <SelectItem value="divorced">Cerai</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Pekerjaan</Label>
                      <Input id="occupation" defaultValue="Karyawan Swasta" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="member-id">Nomor Anggota</Label>
                      <Input id="member-id" defaultValue="KSB-0012345" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Alamat</Label>
                    <Textarea 
                      id="address" 
                      rows={3}
                      defaultValue="Jl. Pahlawan No. 123, RT 001/RW 002, Kel. Sukamaju, Kec. Setiabudi, Jakarta Selatan, DKI Jakarta 12345"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSave}>Simpan Perubahan</Button>
                </CardFooter>
              </Card>
              
              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Foto Profil</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="w-32 h-32 mb-6">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-2 w-full">
                      <Button variant="outline">Ganti Foto</Button>
                      <Button variant="ghost" className="text-gray-500">Hapus Foto</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Kontak</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">No. HP</Label>
                      <Input id="phone" defaultValue="081234567890" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave} className="w-full">Simpan Kontak</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Keamanan Akun</CardTitle>
                <CardDescription>
                  Ubah password dan atur keamanan akun Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Password Saat Ini</Label>
                  <Input id="current-password" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password">Password Baru</Label>
                  <Input id="new-password" type="password" />
                  <p className="text-xs text-gray-500">
                    Password harus terdiri dari 8 karakter dengan kombinasi huruf besar, huruf kecil, angka, dan simbol
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                
                <div>
                  <Button onClick={handlePasswordChange}>Ubah Password</Button>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Verifikasi Dua Langkah</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Tambahkan lapisan keamanan ekstra untuk akun Anda dengan verifikasi dua langkah
                  </p>
                  <Button variant="outline">Aktifkan Verifikasi Dua Langkah</Button>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Sesi Aktif</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Jakarta, Indonesia</p>
                        <p className="text-sm text-gray-500">Perangkat ini, 10 menit yang lalu</p>
                      </div>
                      <Button variant="ghost" className="text-gray-500">Perangkat Ini</Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Bandung, Indonesia</p>
                        <p className="text-sm text-gray-500">Chrome di Windows, 2 hari yang lalu</p>
                      </div>
                      <Button variant="outline" className="text-red-500">Akhiri Sesi</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notification">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Notifikasi</CardTitle>
                <CardDescription>
                  Atur preferensi notifikasi Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-gray-500 py-8">
                  Pengaturan notifikasi akan hadir segera.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;
