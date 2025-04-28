
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import ChartComponent from '@/components/ChartComponent';
import { ownerStats, memberGrowthData } from '@/utils/dummyData';

const OwnerDashboard = () => {
  return (
    <DashboardLayout role="owner">
      <div>
        <h1 className="text-2xl font-bold mb-6">Selamat Datang, Admin Owner!</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ownerStats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartComponent 
            title="Pertumbuhan Anggota"
            data={memberGrowthData}
            type="bar"
            dataKey="value"
          />
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Aktivitas Terkini</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">10 anggota baru mendaftar</p>
                  <p className="text-xs text-gray-500">2 jam yang lalu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Setoran simpanan pokok Rp 5.000.000</p>
                  <p className="text-xs text-gray-500">5 jam yang lalu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-yellow-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Persetujuan pinjaman Rp 15.000.000</p>
                  <p className="text-xs text-gray-500">8 jam yang lalu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Admin mitra baru ditambahkan</p>
                  <p className="text-xs text-gray-500">1 hari yang lalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OwnerDashboard;
