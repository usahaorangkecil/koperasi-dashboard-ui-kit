
import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type DashboardLayoutProps = {
  children: React.ReactNode;
  role: 'owner' | 'koperasi' | 'mitra' | 'user';
};

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role={role} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {role === 'owner' && 'Admin Owner Dashboard'}
              {role === 'koperasi' && 'Admin Koperasi Dashboard'}
              {role === 'mitra' && 'Admin Mitra Dashboard'}
              {role === 'user' && 'Anggota Dashboard'}
            </h2>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
              
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <div className="ml-3 hidden md:block">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-500">
                    {role === 'owner' && 'Admin Owner'}
                    {role === 'koperasi' && 'Admin Koperasi'}
                    {role === 'mitra' && 'Admin Mitra'}
                    {role === 'user' && 'Anggota'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
