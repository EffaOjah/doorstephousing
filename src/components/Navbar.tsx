import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-2 left-0 right-0 z-50 text-white">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src="images/doorstep-logo.png" alt="DoorStep Logo" className="h-18 md:h-24 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[#FDE047] transition-colors">Apartments</a>
          <a href="#" className="hover:text-[#FDE047] transition-colors">Roommates</a>
          <a href="#" className="hover:text-[#FDE047] transition-colors">Hostels</a>
          <a href="#" className="hover:text-[#FDE047] transition-colors">Blog</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#waitlist" className="hidden md:block bg-[#FDE047] text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#FBE124] transition-colors shadow-lg">
            Join waitlist
          </a>
          <button className="md:hidden p-2 -mr-2 text-white hover:text-[#FDE047] transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-[#16292C] border border-white/10 p-6 flex flex-col gap-6 shadow-2xl rounded-2xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-[#FDE047] transition-colors font-medium text-lg">Apartments</a>
            <a href="#" className="hover:text-[#FDE047] transition-colors font-medium text-lg">Roommates</a>
            <a href="#" className="hover:text-[#FDE047] transition-colors font-medium text-lg">Hostels</a>
            <a href="#" className="hover:text-[#FDE047] transition-colors font-medium text-lg">Blog</a>
          </div>
          <hr className="border-white/10" />
          <div className="flex flex-col gap-4">
            <a href="#waitlist" className="bg-[#FDE047] text-slate-900 px-6 py-4 rounded-xl font-bold text-center mt-2 text-lg shadow-lg">
              Join waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
