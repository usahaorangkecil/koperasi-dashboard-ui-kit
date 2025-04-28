
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";

// Owner Pages
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import AdminKoperasi from "./pages/owner/AdminKoperasi";
import AdminMitra from "./pages/owner/AdminMitra";
import Users from "./pages/owner/Users";
import FinancialReports from "./pages/owner/FinancialReports";
import SystemSettings from "./pages/owner/SystemSettings";

// Koperasi Pages
import KoperasiDashboard from "./pages/koperasi/KoperasiDashboard";
import Savings from "./pages/koperasi/Savings";
import Loans from "./pages/koperasi/Loans";
import ChartOfAccounts from "./pages/koperasi/ChartOfAccounts";
import GeneralJournal from "./pages/koperasi/GeneralJournal";
import KoperasiReports from "./pages/koperasi/KoperasiReports";

// Mitra Pages
import MitraDashboard from "./pages/mitra/MitraDashboard";
import Sales from "./pages/mitra/Sales";
import Transaction from "./pages/mitra/Transaction";
import SalesReports from "./pages/mitra/SalesReports";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import UserSavings from "./pages/user/UserSavings";
import UserLoans from "./pages/user/UserLoans";
import InstallmentPayment from "./pages/user/InstallmentPayment";
import UserProfile from "./pages/user/UserProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Owner Routes */}
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          <Route path="/owner/admin-koperasi" element={<AdminKoperasi />} />
          <Route path="/owner/admin-mitra" element={<AdminMitra />} />
          <Route path="/owner/users" element={<Users />} />
          <Route path="/owner/laporan" element={<FinancialReports />} />
          <Route path="/owner/settings" element={<SystemSettings />} />
          
          {/* Koperasi Routes */}
          <Route path="/koperasi/dashboard" element={<KoperasiDashboard />} />
          <Route path="/koperasi/simpanan" element={<Savings />} />
          <Route path="/koperasi/pinjaman" element={<Loans />} />
          <Route path="/koperasi/coa" element={<ChartOfAccounts />} />
          <Route path="/koperasi/jurnal" element={<GeneralJournal />} />
          <Route path="/koperasi/laporan" element={<KoperasiReports />} />
          
          {/* Mitra Routes */}
          <Route path="/mitra/dashboard" element={<MitraDashboard />} />
          <Route path="/mitra/penjualan" element={<Sales />} />
          <Route path="/mitra/transaksi" element={<Transaction />} />
          <Route path="/mitra/laporan" element={<SalesReports />} />
          
          {/* User Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/simpanan" element={<UserSavings />} />
          <Route path="/user/pinjaman" element={<UserLoans />} />
          <Route path="/user/pembayaran" element={<InstallmentPayment />} />
          <Route path="/user/profile" element={<UserProfile />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
