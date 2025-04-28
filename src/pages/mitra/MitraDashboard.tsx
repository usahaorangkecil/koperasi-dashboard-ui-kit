
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import ChartComponent from '@/components/ChartComponent';
import { mitraStats, salesData } from '@/utils/dummyData';

const MitraDashboard = () => {
  return (
    <DashboardLayout role="mitra">
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard Admin Mitra</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {mitraStats.map((stat, index) => (
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
            title="Grafik Penjualan 6 Bulan Terakhir"
            data={salesData}
            type="line"
            dataKey="value"
          />
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Penjualan Berdasarkan Kategori</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Elektronik</span>
                </div>
                <span className="font-medium">65%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500 w-[65%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Jasa</span>
                </div>
                <span className="font-medium">25%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-green-500 w-[25%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                  <span>Alat Kantor</span>
                </div>
                <span className="font-medium">10%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-purple-500 w-[10%]"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-3">Transaksi Terbaru</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <p className="font-medium">Laptop Asus ProArt</p>
                  <p className="text-sm text-gray-500">2 unit</p>
                </div>
                <span className="font-medium">Rp 30.000.000</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <p className="font-medium">Service AC</p>
                  <p className="text-sm text-gray-500">10 unit</p>
                </div>
                <span className="font-medium">Rp 3.500.000</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Smartphone Samsung S21</p>
                  <p className="text-sm text-gray-500">3 unit</p>
                </div>
                <span className="font-medium">Rp 36.000.000</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-3">Penjualan per Bulan</h3>
            <div className="mt-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Jan</span>
                <span className="text-sm font-medium">Rp 45JT</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500 w-[75%]"></div>
              </div>
              
              <div className="flex items-center justify-between mb-1 mt-2">
                <span className="text-sm">Feb</span>
                <span className="text-sm font-medium">Rp 42JT</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500 w-[70%]"></div>
              </div>
              
              <div className="flex items-center justify-between mb-1 mt-2">
                <span className="text-sm">Mar</span>
                <span className="text-sm font-medium">Rp 48JT</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500 w-[80%]"></div>
              </div>
              
              <div className="flex items-center justify-between mb-1 mt-2">
                <span className="text-sm">Apr</span>
                <span className="text-sm font-medium">Rp 50JT</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500 w-[85%]"></div>
              </div>
              
              <div className="flex items-center justify-between mb-1 mt-2">
                <span className="text-sm">Mei</span>
                <span className="text-sm font-medium">Rp 54JT</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500 w-[90%]"></div>
              </div>
              
              <div className="flex items-center justify-between mb-1 mt-2">
                <span className="text-sm">Jun</span>
                <span className="text-sm font-medium">Rp 58JT</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500 w-[95%]"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-3">Status Pesanan</h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Sedang Diproses</p>
                  <span className="text-sm font-medium">24</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 mt-1">
                  <div className="h-2 rounded-full bg-yellow-500 w-[40%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Dikirim</p>
                  <span className="text-sm font-medium">18</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 mt-1">
                  <div className="h-2 rounded-full bg-blue-500 w-[30%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Selesai</p>
                  <span className="text-sm font-medium">144</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 mt-1">
                  <div className="h-2 rounded-full bg-green-500 w-[85%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Dibatalkan</p>
                  <span className="text-sm font-medium">6</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 mt-1">
                  <div className="h-2 rounded-full bg-red-500 w-[10%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MitraDashboard;
