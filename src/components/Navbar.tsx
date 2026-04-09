import { useState, useEffect } from 'react';
import { MessageCircle, Palette, Menu, X } from 'lucide-react';

const WA_LINK = 'https://wa.me/60124161357?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20classes%20and%20schedule';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/logo.avif"
              alt="Global Art @ Gamuda Gardens"
              className="h-9 w-auto group-hover:scale-105 transition-transform"
            />
            <div className="leading-tight">
              <span className="font-display font-bold text-primary text-base block leading-none">Global Art</span>
              <span className="text-xs text-gray-500 font-body font-600">@ Gamuda Gardens</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-softblue transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 pt-1 border-t border-gray-100 space-y-2">
            <MobileNavLink href="#programs" onClick={() => setMenuOpen(false)}>Programs</MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setMenuOpen(false)}>FAQ</MobileNavLink>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-4 py-2.5 rounded-full mt-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-primary font-semibold text-sm transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-gray-700 hover:text-primary font-semibold text-sm px-2 py-2 rounded-xl hover:bg-softblue transition-colors"
    >
      {children}
    </a>
  );
}
