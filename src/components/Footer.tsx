import { Palette, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-primary flex items-center justify-center">
                <Palette size={18} className="text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base block leading-none">Global Art</span>
                <span className="text-xs text-gray-500">@ Gamuda Gardens</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Nurturing creativity in every child, from age 3 and above.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm mb-3 uppercase tracking-wide">Contact</h4>
            <div className="space-y-2">
              <a
                href="https://wa.me/60124161357?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20classes%20and%20schedule"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
              >
                <Phone size={14} />
                0124161357
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>
                  E-1-02, Gardens Square, Bandar Gamuda Gardens,
                  48050 Rawang, Selangor
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm mb-3 uppercase tracking-wide">Follow Us</h4>
            <div className="flex gap-3">
              <span
                className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center cursor-not-allowed"
                title="Facebook (coming soon)"
              >
                <Facebook size={16} className="text-gray-500" />
              </span>
              <span
                className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center cursor-not-allowed"
                title="Instagram (coming soon)"
              >
                <Instagram size={16} className="text-gray-500" />
              </span>
            </div>
            <p className="text-xs mt-2 text-gray-600">Social links coming soon</p>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-gray-600">
          &copy; 2025 Global Art @ Gamuda Gardens. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
