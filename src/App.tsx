import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

// Pages
import Landing from "./pages/landing/Landing";
import About from "./pages/landing/About";
import Services from "./pages/landing/Services";
import News from "./pages/landing/News";
import Contact from "./pages/landing/Contact";
import PromoPage from "./pages/landing/PromoPage";
import MobilePage from "./pages/landing/MobilePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

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
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing Pages */}
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/landing/about" element={<About />} />
            <Route path="/landing/services" element={<Services />} />
            <Route path="/landing/news" element={<News />} />
            <Route path="/landing/contact" element={<Contact />} />
            <Route path="/landing/promo" element={<PromoPage />} />
            <Route path="/landing/mobile" element={<MobilePage />} />
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
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
