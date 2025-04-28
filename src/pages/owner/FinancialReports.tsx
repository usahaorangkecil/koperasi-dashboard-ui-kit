
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/DataTable';
import { financialReportsData } from '@/utils/dummyData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent 
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

const FinancialReports = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleExport = () => {
    toast({
      title: "Ekspor Laporan",
      description: "Laporan keuangan sedang disiapkan untuk diunduh.",
    });
  };
  
  const columns = [
    {
      key: 'period',
      header: 'Periode',
    },
    {
      key: 'income',
      header: 'Pendapatan',
    },
    {
      key: 'expense',
      header: 'Pengeluaran',
    },
    {
      key: 'profit',
      header: 'Laba',
    },
    {
      key: 'status',
      header: 'Status',
      cell: (row: any) => (
        <Badge variant={row.status === 'Verified' ? 'default' : 'secondary'}>
          {row.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Aksi',
      cell: () => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Detail</Button>
          <Button variant="outline" size="sm" onClick={handleExport}>Ekspor</Button>
        </div>
      ),
    },
  ];
  
  return (
    <DashboardLayout role="owner">
      <div>
        <h1 className="text-2xl font-bold mb-6">Laporan Keuangan</h1>
        
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
        
        <DataTable
          title="Laporan Keuangan"
          description="Laporan keuangan koperasi berdasarkan periode."
          data={financialReportsData}
          columns={columns}
        />
      </div>
    </DashboardLayout>
  );
};

export default FinancialReports;
