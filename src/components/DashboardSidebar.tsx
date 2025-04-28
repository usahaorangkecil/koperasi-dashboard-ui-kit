
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings,
  CreditCard,
  BookOpen,
  PieChart,
  BarChart,
  LineChart,
  ShoppingCart,
  Package,
  User,
  Home
} from 'lucide-react';

type SidebarItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  role: 'owner' | 'koperasi' | 'mitra' | 'user';
};

const DashboardSidebar = ({ role }: SidebarProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const ownerItems: SidebarItem[] = [
    { title: 'Dashboard', path: '/owner/dashboard', icon: <LayoutDashboard size={20} /> },
    { title: 'Manajemen Admin Koperasi', path: '/owner/admin-koperasi', icon: <Users size={20} /> },
    { title: 'Manajemen Admin Mitra', path: '/owner/admin-mitra', icon: <Users size={20} /> },
    { title: 'Manajemen User', path: '/owner/users', icon: <Users size={20} /> },
    { title: 'Laporan Keuangan', path: '/owner/laporan', icon: <FileText size={20} /> },
    { title: 'Pengaturan Sistem', path: '/owner/settings', icon: <Settings size={20} /> },
  ];

  const koperasiItems: SidebarItem[] = [
    { title: 'Dashboard', path: '/koperasi/dashboard', icon: <LayoutDashboard size={20} /> },
    { title: 'Daftar Simpanan Anggota', path: '/koperasi/simpanan', icon: <CreditCard size={20} /> },
    { title: 'Daftar Pinjaman Anggota', path: '/koperasi/pinjaman', icon: <CreditCard size={20} /> },
    { title: 'COA (Chart of Account)', path: '/koperasi/coa', icon: <BookOpen size={20} /> },
    { title: 'Jurnal Umum', path: '/koperasi/jurnal', icon: <FileText size={20} /> },
    { title: 'Laporan Koperasi', path: '/koperasi/laporan', icon: <FileText size={20} /> },
  ];

  const mitraItems: SidebarItem[] = [
    { title: 'Dashboard', path: '/mitra/dashboard', icon: <LayoutDashboard size={20} /> },
    { title: 'Daftar Penjualan / Jasa', path: '/mitra/penjualan', icon: <ShoppingCart size={20} /> },
    { title: 'Input Transaksi Mitra', path: '/mitra/transaksi', icon: <Package size={20} /> },
    { title: 'Laporan Penjualan', path: '/mitra/laporan', icon: <FileText size={20} /> },
  ];

  const userItems: SidebarItem[] = [
    { title: 'Dashboard', path: '/user/dashboard', icon: <LayoutDashboard size={20} /> },
    { title: 'Simpanan Saya', path: '/user/simpanan', icon: <CreditCard size={20} /> },
    { title: 'Pinjaman Saya', path: '/user/pinjaman', icon: <CreditCard size={20} /> },
    { title: 'Pembayaran Angsuran', path: '/user/pembayaran', icon: <CreditCard size={20} /> },
    { title: 'Profil Saya', path: '/user/profile', icon: <User size={20} /> },
  ];

  const items = 
    role === 'owner' ? ownerItems :
    role === 'koperasi' ? koperasiItems :
    role === 'mitra' ? mitraItems : userItems;

  const roleTitle = 
    role === 'owner' ? 'Admin Owner' :
    role === 'koperasi' ? 'Admin Koperasi' :
    role === 'mitra' ? 'Admin Mitra' : 'Anggota';

  return (
    <div 
      className={cn(
        "bg-sidebar h-screen border-r border-gray-200 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <Link to="/" className="flex items-center">
            <Home className="h-6 w-6 text-koperasi-600" />
            <span className="ml-2 font-bold text-lg">{roleTitle}</span>
          </Link>
        )}
        {collapsed && <Home className="h-6 w-6 text-koperasi-600 mx-auto" />}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
        >
          {collapsed ? 
            <ChevronRight size={18} /> :
            <ChevronLeft size={18} />
          }
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-2 py-3 rounded-md text-sm transition-colors",
                  collapsed ? "justify-center" : "",
                  isActive 
                    ? "bg-koperasi-100 text-koperasi-600 font-medium" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-koperasi-600"
                )}
              >
                <div className="flex items-center">
                  {item.icon}
                  {!collapsed && <span className="ml-3">{item.title}</span>}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Link 
          to="/login" 
          className={cn(
            "flex items-center text-red-600 hover:bg-red-50 rounded-md px-2 py-2 transition-colors",
            collapsed ? "justify-center" : ""
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-5-5H3zm3 6a1 1 0 112 0v6a1 1 0 11-2 0V9zm4-1a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {!collapsed && <span className="ml-3">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
