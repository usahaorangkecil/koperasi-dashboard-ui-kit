
import React, { useState } from 'react';
import { TableData } from '@/utils/dummyData';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type DataTableProps = {
  title: string;
  description?: string;
  data: TableData[];
  columns: {
    key: string;
    header: string;
    cell?: (row: TableData) => React.ReactNode;
  }[];
  actionButton?: {
    label: string;
    onClick: () => void;
  };
};

const DataTable = ({ 
  title, 
  description, 
  data,
  columns,
  actionButton
}: DataTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredData = data.filter(item => {
    return Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-2.5 top-3 text-gray-500" />
              <Input
                placeholder="Cari..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 w-full"
              />
            </div>
            {actionButton && (
              <Button onClick={actionButton.onClick}>
                {actionButton.label}
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key}>{column.header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <TableRow key={row.id}>
                    {columns.map((column) => (
                      <TableCell key={`${row.id}-${column.key}`}>
                        {column.cell ? column.cell(row) : row[column.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center py-6">
                    {searchQuery ? "Tidak ada data yang ditemukan" : "Tidak ada data"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataTable;
