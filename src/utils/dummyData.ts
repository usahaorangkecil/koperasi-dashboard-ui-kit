
// Common data types
export type ChartData = {
  name: string;
  value: number;
};

export type TableData = {
  id: number;
  [key: string]: any;
};

// Owner Dashboard Data
export const ownerStats = [
  { title: "Total Anggota", value: "2,543", change: "+12.5%", icon: "users" },
  { title: "Total Mitra", value: "38", change: "+7.2%", icon: "building" },
  { title: "Total Simpanan", value: "Rp 1.25M", change: "+18.2%", icon: "wallet" },
  { title: "Total Pinjaman", value: "Rp 875.4JT", change: "+5.4%", icon: "credit-card" },
];

export const memberGrowthData: ChartData[] = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1400 },
  { name: "Mar", value: 1600 },
  { name: "Apr", value: 1800 },
  { name: "Mei", value: 2100 },
  { name: "Jun", value: 2300 },
  { name: "Jul", value: 2500 },
];

export const adminKoperasiData: TableData[] = [
  { id: 1, name: "Ahmad Suryana", email: "ahmad@koperasi.id", phone: "081234567890", region: "Jakarta", status: "active" },
  { id: 2, name: "Siti Rahayu", email: "siti@koperasi.id", phone: "081234567891", region: "Bandung", status: "active" },
  { id: 3, name: "Budi Santoso", email: "budi@koperasi.id", phone: "081234567892", region: "Surabaya", status: "active" },
  { id: 4, name: "Dewi Anggraini", email: "dewi@koperasi.id", phone: "081234567893", region: "Medan", status: "inactive" },
  { id: 5, name: "Eko Prasetyo", email: "eko@koperasi.id", phone: "081234567894", region: "Makassar", status: "active" },
];

export const adminMitraData: TableData[] = [
  { id: 1, name: "PT Sejahtera Bersama", email: "admin@sejahtera.co.id", phone: "021-7654321", category: "Retail", status: "active" },
  { id: 2, name: "CV Maju Jaya", email: "admin@majujaya.co.id", phone: "021-7654322", category: "Manufaktur", status: "active" },
  { id: 3, name: "PT Karya Mandiri", email: "admin@karyamandiri.co.id", phone: "021-7654323", category: "Jasa", status: "active" },
  { id: 4, name: "PT Abadi Makmur", email: "admin@abadimakmur.co.id", phone: "021-7654324", category: "Retail", status: "inactive" },
  { id: 5, name: "CV Tani Sejahtera", email: "admin@tanisejahtera.co.id", phone: "021-7654325", category: "Agribisnis", status: "active" },
];

export const usersData: TableData[] = [
  { id: 1, name: "Joko Widodo", email: "joko@mail.com", phone: "081234567001", joined: "12 Jan 2023", status: "active" },
  { id: 2, name: "Anita Dewi", email: "anita@mail.com", phone: "081234567002", joined: "15 Jan 2023", status: "active" },
  { id: 3, name: "Bambang Kusuma", email: "bambang@mail.com", phone: "081234567003", joined: "18 Jan 2023", status: "active" },
  { id: 4, name: "Citra Lestari", email: "citra@mail.com", phone: "081234567004", joined: "20 Jan 2023", status: "active" },
  { id: 5, name: "Denny Sumargo", email: "denny@mail.com", phone: "081234567005", joined: "23 Jan 2023", status: "inactive" },
  { id: 6, name: "Eka Putri", email: "eka@mail.com", phone: "081234567006", joined: "25 Jan 2023", status: "active" },
  { id: 7, name: "Farhan Ahmad", email: "farhan@mail.com", phone: "081234567007", joined: "28 Jan 2023", status: "active" },
  { id: 8, name: "Gita Nirmala", email: "gita@mail.com", phone: "081234567008", joined: "30 Jan 2023", status: "inactive" },
];

export const financialReportsData: TableData[] = [
  { id: 1, period: "Jan 2023", income: "Rp 125.000.000", expense: "Rp 87.500.000", profit: "Rp 37.500.000", status: "Verified" },
  { id: 2, period: "Feb 2023", income: "Rp 140.000.000", expense: "Rp 92.400.000", profit: "Rp 47.600.000", status: "Verified" },
  { id: 3, period: "Mar 2023", income: "Rp 135.800.000", expense: "Rp 90.300.000", profit: "Rp 45.500.000", status: "Verified" },
  { id: 4, period: "Apr 2023", income: "Rp 150.200.000", expense: "Rp 95.800.000", profit: "Rp 54.400.000", status: "Verified" },
  { id: 5, period: "Mei 2023", income: "Rp 162.500.000", expense: "Rp 98.700.000", profit: "Rp 63.800.000", status: "In Review" },
];

// Koperasi Dashboard Data
export const koperasiStats = [
  { title: "Total Simpanan", value: "Rp 1.25M", change: "+18.2%", icon: "wallet" },
  { title: "Total Pinjaman", value: "Rp 875.4JT", change: "+5.4%", icon: "credit-card" },
  { title: "Anggota Aktif", value: "2,148", change: "+10.8%", icon: "users" },
  { title: "Jumlah COA", value: "42", change: "+0%", icon: "book" },
];

export const savingsVsLoansData = [
  { name: "Simpanan", value: 65 },
  { name: "Pinjaman", value: 35 },
];

export const savingsData: TableData[] = [
  { id: 1, member: "Joko Widodo", type: "Pokok", amount: "Rp 1.000.000", date: "12 Jan 2023", status: "Approved" },
  { id: 2, member: "Anita Dewi", type: "Wajib", amount: "Rp 500.000", date: "15 Jan 2023", status: "Approved" },
  { id: 3, member: "Bambang Kusuma", type: "Sukarela", amount: "Rp 2.500.000", date: "18 Jan 2023", status: "Approved" },
  { id: 4, member: "Citra Lestari", type: "Pokok", amount: "Rp 1.000.000", date: "20 Jan 2023", status: "Approved" },
  { id: 5, member: "Denny Sumargo", type: "Wajib", amount: "Rp 500.000", date: "23 Jan 2023", status: "Pending" },
  { id: 6, member: "Eka Putri", type: "Sukarela", amount: "Rp 1.500.000", date: "25 Jan 2023", status: "Approved" },
];

export const loansData: TableData[] = [
  { id: 1, member: "Joko Widodo", amount: "Rp 10.000.000", term: "12 bulan", interest: "1%", status: "Aktif" },
  { id: 2, member: "Anita Dewi", amount: "Rp 15.000.000", term: "24 bulan", interest: "1%", status: "Aktif" },
  { id: 3, member: "Bambang Kusuma", amount: "Rp 5.000.000", term: "6 bulan", interest: "1%", status: "Lunas" },
  { id: 4, member: "Citra Lestari", amount: "Rp 20.000.000", term: "36 bulan", interest: "1%", status: "Aktif" },
  { id: 5, member: "Denny Sumargo", amount: "Rp 8.000.000", term: "12 bulan", interest: "1%", status: "Menunggak" },
  { id: 6, member: "Eka Putri", amount: "Rp 12.000.000", term: "18 bulan", interest: "1%", status: "Aktif" },
];

export const coaData: TableData[] = [
  { id: 1, code: "1-1000", name: "Kas", type: "Aset", balance: "Rp 175.000.000" },
  { id: 2, code: "1-2000", name: "Bank", type: "Aset", balance: "Rp 425.000.000" },
  { id: 3, code: "1-3000", name: "Piutang Pinjaman", type: "Aset", balance: "Rp 875.400.000" },
  { id: 4, code: "2-1000", name: "Simpanan Pokok", type: "Kewajiban", balance: "Rp 350.000.000" },
  { id: 5, code: "2-2000", name: "Simpanan Wajib", type: "Kewajiban", balance: "Rp 525.000.000" },
  { id: 6, code: "2-3000", name: "Simpanan Sukarela", type: "Kewajiban", balance: "Rp 375.000.000" },
  { id: 7, code: "3-1000", name: "Modal", type: "Ekuitas", balance: "Rp 100.000.000" },
  { id: 8, code: "4-1000", name: "Pendapatan Bunga", type: "Pendapatan", balance: "Rp 125.000.000" },
  { id: 9, code: "5-1000", name: "Beban Operasional", type: "Beban", balance: "Rp 45.000.000" },
];

export const journalData: TableData[] = [
  { id: 1, date: "01/01/2023", description: "Setoran Simpanan Pokok", debit: "1-1000", credit: "2-1000", amount: "Rp 10.000.000" },
  { id: 2, date: "05/01/2023", description: "Pencairan Pinjaman", debit: "1-3000", credit: "1-1000", amount: "Rp 15.000.000" },
  { id: 3, date: "10/01/2023", description: "Pembayaran Angsuran", debit: "1-1000", credit: "1-3000", amount: "Rp 1.250.000" },
  { id: 4, date: "15/01/2023", description: "Pendapatan Bunga", debit: "1-1000", credit: "4-1000", amount: "Rp 2.500.000" },
  { id: 5, date: "20/01/2023", description: "Beban Operasional", debit: "5-1000", credit: "1-1000", amount: "Rp 1.800.000" },
  { id: 6, date: "25/01/2023", description: "Setoran Simpanan Wajib", debit: "1-1000", credit: "2-2000", amount: "Rp 5.000.000" },
  { id: 7, date: "30/01/2023", description: "Setoran Simpanan Sukarela", debit: "1-1000", credit: "2-3000", amount: "Rp 7.500.000" },
];

// Mitra Dashboard Data
export const mitraStats = [
  { title: "Total Penjualan", value: "Rp 548.2JT", change: "+12.3%", icon: "shopping-cart" },
  { title: "Total Jasa", value: "Rp 215.7JT", change: "+8.7%", icon: "tool" },
  { title: "Transaksi Bulan Ini", value: "256", change: "+15.2%", icon: "activity" },
];

export const salesData: ChartData[] = [
  { name: "Jan", value: 45000000 },
  { name: "Feb", value: 42000000 },
  { name: "Mar", value: 48000000 },
  { name: "Apr", value: 50000000 },
  { name: "Mei", value: 54000000 },
  { name: "Jun", value: 58000000 },
];

export const salesListData: TableData[] = [
  { id: 1, date: "01/01/2023", name: "Laptop Asus ProArt", category: "Elektronik", price: "Rp 15.000.000", quantity: 2, total: "Rp 30.000.000" },
  { id: 2, date: "05/01/2023", name: "Service AC", category: "Jasa", price: "Rp 350.000", quantity: 10, total: "Rp 3.500.000" },
  { id: 3, date: "10/01/2023", name: "Smartphone Samsung S21", category: "Elektronik", price: "Rp 12.000.000", quantity: 3, total: "Rp 36.000.000" },
  { id: 4, date: "15/01/2023", name: "Konsultasi IT", category: "Jasa", price: "Rp 2.500.000", quantity: 1, total: "Rp 2.500.000" },
  { id: 5, date: "20/01/2023", name: "Monitor Dell Ultrasharp", category: "Elektronik", price: "Rp 4.800.000", quantity: 5, total: "Rp 24.000.000" },
  { id: 6, date: "25/01/2023", name: "Website Development", category: "Jasa", price: "Rp 15.000.000", quantity: 1, total: "Rp 15.000.000" },
  { id: 7, date: "30/01/2023", name: "Printer Epson L3110", category: "Elektronik", price: "Rp 2.300.000", quantity: 4, total: "Rp 9.200.000" },
];

// User Dashboard Data
export const userStats = [
  { title: "Total Simpanan", value: "Rp 5.750.000", change: "+7.5%", icon: "wallet" },
  { title: "Total Pinjaman", value: "Rp 12.000.000", change: "-5.2%", icon: "credit-card" },
];

export const loanProgressData: any[] = [
  { name: "Dibayar", value: 7000000 },
  { name: "Sisa", value: 5000000 },
];

export const userSavingsData: TableData[] = [
  { id: 1, date: "12/01/2023", type: "Simpanan Pokok", amount: "Rp 1.000.000", balance: "Rp 1.000.000" },
  { id: 2, date: "12/02/2023", type: "Simpanan Wajib", amount: "Rp 250.000", balance: "Rp 1.250.000" },
  { id: 3, date: "12/03/2023", type: "Simpanan Wajib", amount: "Rp 250.000", balance: "Rp 1.500.000" },
  { id: 4, date: "15/03/2023", type: "Simpanan Sukarela", amount: "Rp 2.000.000", balance: "Rp 3.500.000" },
  { id: 5, date: "12/04/2023", type: "Simpanan Wajib", amount: "Rp 250.000", balance: "Rp 3.750.000" },
  { id: 6, date: "12/05/2023", type: "Simpanan Wajib", amount: "Rp 250.000", balance: "Rp 4.000.000" },
  { id: 7, date: "20/05/2023", type: "Simpanan Sukarela", amount: "Rp 1.500.000", balance: "Rp 5.500.000" },
  { id: 8, date: "12/06/2023", type: "Simpanan Wajib", amount: "Rp 250.000", balance: "Rp 5.750.000" },
];

export const userLoansData: TableData[] = [
  { id: 1, date: "15/03/2023", amount: "Rp 12.000.000", term: "12 bulan", interest: "1%", status: "Aktif", paid: "Rp 7.000.000", remaining: "Rp 5.000.000" }
];

export const installmentData: TableData[] = [
  { id: 1, date: "15/04/2023", amount: "Rp 1.000.000", status: "Dibayar" },
  { id: 2, date: "15/05/2023", amount: "Rp 1.000.000", status: "Dibayar" },
  { id: 3, date: "15/06/2023", amount: "Rp 1.000.000", status: "Dibayar" },
  { id: 4, date: "15/07/2023", amount: "Rp 1.000.000", status: "Dibayar" },
  { id: 5, date: "15/08/2023", amount: "Rp 1.000.000", status: "Dibayar" },
  { id: 6, date: "15/09/2023", amount: "Rp 1.000.000", status: "Dibayar" },
  { id: 7, date: "15/10/2023", amount: "Rp 1.000.000", status: "Dibayar" },
  { id: 8, date: "15/11/2023", amount: "Rp 1.000.000", status: "Belum Dibayar" },
  { id: 9, date: "15/12/2023", amount: "Rp 1.000.000", status: "Belum Dibayar" },
  { id: 10, date: "15/01/2024", amount: "Rp 1.000.000", status: "Belum Dibayar" },
  { id: 11, date: "15/02/2024", amount: "Rp 1.000.000", status: "Belum Dibayar" },
  { id: 12, date: "15/03/2024", amount: "Rp 1.000.000", status: "Belum Dibayar" },
];
