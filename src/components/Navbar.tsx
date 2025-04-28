
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-koperasi-600">Koperasi</h1>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-700 hover:text-koperasi-600 px-3 py-2 rounded-md text-sm font-medium">
                  Beranda
                </Link>
                <Link to="/#layanan" className="text-gray-700 hover:text-koperasi-600 px-3 py-2 rounded-md text-sm font-medium">
                  Layanan
                </Link>
                <Link to="/#tentang" className="text-gray-700 hover:text-koperasi-600 px-3 py-2 rounded-md text-sm font-medium">
                  Tentang Kami
                </Link>
                <Link to="/#berita" className="text-gray-700 hover:text-koperasi-600 px-3 py-2 rounded-md text-sm font-medium">
                  Berita
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/login">
                <Button variant="outline" className="mr-2">Masuk</Button>
              </Link>
              <Button>Daftar</Button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-koperasi-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/#layanan"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              to="/#tentang"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              to="/#berita"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Berita
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-between px-4">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full mb-2">Masuk</Button>
              </Link>
            </div>
            <div className="flex items-center justify-between px-4">
              <Button className="w-full">Daftar</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
