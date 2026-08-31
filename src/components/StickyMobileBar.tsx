import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenReservation: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenReservation }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0A090B]/95 backdrop-blur-lg border-t border-[#D4AF37]/30 shadow-2xl flex items-center gap-3">
      <a
        href="https://wa.me/2348000000000?text=Hello%20Nostalgia%20Lagos%20Concierge,%20I'd%20like%20to%20reserve%20a%20table."
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-black flex items-center justify-center shrink-0 shadow-lg"
        title="WhatsApp Concierge"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>

      <button
        onClick={onOpenReservation}
        className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3D068] text-[#0A090B] font-syne font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        <span>Reserve A Table</span>
      </button>
    </div>
  );
};
