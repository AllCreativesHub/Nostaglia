import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, MessageSquare, Heart, Send } from 'lucide-react';


interface LocationFooterProps {
  onOpenReservation: () => void;
}

export const LocationFooter: React.FC<LocationFooterProps> = ({ onOpenReservation }) => {
  const [fastName, setFastName] = useState('');
  const [fastPhone, setFastPhone] = useState('');
  const [fastDate, setFastDate] = useState(new Date().toISOString().split('T')[0]);
  const [fastGuests, setFastGuests] = useState('2');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      onOpenReservation();
      setFormSubmitted(false);
    }, 1200);
  };

  return (
    <footer id="location" className="bg-[#070709] border-t border-[#D4AF37]/20 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Split: Map & Details vs Fast Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Left Column: Location Map & Contact Specs */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-eyebrow text-xs text-[#D4AF37] tracking-[0.25em] font-semibold uppercase block mb-2">
                Find Your Way Above Lekki
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-title font-semibold text-[#F5EFE6]">
                Location & <span className="gold-gradient-text italic font-normal">Hours</span>
              </h2>
            </div>

            {/* Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 h-64 sm:h-72 bg-[#131118] group">
              <iframe
                title="Nostalgia Lagos Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.726207865181!2d3.4735!3d6.4421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4530f2c4b8b%3A0x7d6f5f9e8a8b1234!2sHakeem%20Dickson%20Link%20Rd%2C%20Lekki%20Phase%20I%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                className="w-full h-full border-0 filter grayscale invert opacity-75 group-hover:opacity-95 transition-opacity"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl border border-[#D4AF37]/30 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="font-syne font-semibold text-xs text-[#F5EFE6]">
                      88 Hakeem Dickson Link Rd
                    </p>
                    <p className="text-[11px] text-[#A39A90]">Lekki Phase I, Lagos, Nigeria</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=88+Hakeem+Dickson+Link+Rd,+Lekki+Phase+I,+Lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#D4AF37] text-[#0A090B] font-syne font-bold text-[10px] uppercase tracking-wider hover:bg-[#F3D068] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Hours Card */}
              <div className="glass-card p-5 rounded-2xl border border-[#D4AF37]/20">
                <div className="flex items-center gap-2.5 text-[#D4AF37] mb-3">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-syne font-bold text-sm text-[#F5EFE6]">
                    Operating Hours
                  </h4>
                </div>
                <ul className="text-xs text-[#A39A90] space-y-1.5">
                  <li className="flex justify-between border-b border-white/5 pb-1">
                    <span>Monday:</span>
                    <span className="text-red-400 font-semibold">Closed for Rest</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-1">
                    <span>Tuesday – Thursday:</span>
                    <span className="text-[#F5EFE6]">12:00 PM – 1:00 AM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-1">
                    <span>Friday – Sunday:</span>
                    <span className="text-[#D4AF37] font-semibold">12:00 PM – 3:00 AM</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info Card */}
              <div className="glass-card p-5 rounded-2xl border border-[#D4AF37]/20">
                <div className="flex items-center gap-2.5 text-[#D4AF37] mb-3">
                  <Phone className="w-5 h-5" />
                  <h4 className="font-syne font-bold text-sm text-[#F5EFE6]">
                    Direct Concierge
                  </h4>
                </div>
                <ul className="text-xs text-[#A39A90] space-y-2">
                  <li className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <a href="https://wa.me/2348000000000" className="text-[#F5EFE6] hover:text-[#D4AF37]">
                      WhatsApp: +234 800 NOSTALGIA
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <a href="tel:+2348000000000" className="text-[#F5EFE6] hover:text-[#D4AF37]">
                      Call: +234 800 667 8254
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <a href="mailto:reservations@nostalgialagos.com" className="text-[#F5EFE6] hover:text-[#D4AF37]">
                      reservations@nostalgialagos.com
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Right Column: Embedded Fast-Booking Form */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-[#D4AF37]/30 shadow-2xl relative">
              <div className="mb-6 text-center sm:text-left">
                <span className="text-[10px] font-eyebrow text-[#D4AF37] uppercase tracking-widest px-2.5 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 inline-block mb-2">
                  Fast Rooftop Booking
                </span>
                <h3 className="text-2xl font-serif-title font-bold text-[#F5EFE6]">
                  Reserve Your Spot Now
                </h3>
                <p className="text-xs text-[#A39A90] mt-1">
                  Instant availability confirmation for Lekki rooftop dining.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <Send className="w-6 h-6" />
                  </div>
                  <p className="font-syne text-sm text-[#F5EFE6]">Opening Full Booking Console...</p>
                </div>
              ) : (
                <form onSubmit={handleFastSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-eyebrow text-[#A39A90] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chisom Okafor"
                      value={fastName}
                      onChange={(e) => setFastName(e.target.value)}
                      className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-xl px-3.5 py-2.5 text-xs text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-eyebrow text-[#A39A90] mb-1">
                      WhatsApp Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 812 345 6789"
                      value={fastPhone}
                      onChange={(e) => setFastPhone(e.target.value)}
                      className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-xl px-3.5 py-2.5 text-xs text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-eyebrow text-[#A39A90] mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={fastDate}
                        onChange={(e) => setFastDate(e.target.value)}
                        className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-xl px-3 py-2.5 text-xs text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-eyebrow text-[#A39A90] mb-1">
                        Party Size
                      </label>
                      <select
                        value={fastGuests}
                        onChange={(e) => setFastGuests(e.target.value)}
                        className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-xl px-3 py-2.5 text-xs text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                          <option key={num} value={num}>
                            {num} Guests
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3D068] to-[#D4AF37] text-[#0A090B] font-syne font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-[#D4AF37]/20 transition-all mt-2"
                  >
                    Check Table Availability
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Oversized Brand Tagline Statement Footer Band */}
        <div className="py-12 border-t border-b border-white/5 text-center my-12">
          <h2 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest text-white/10 uppercase select-none">
            Nostalgia Lagos
          </h2>
          <p className="font-eyebrow text-xs text-[#D4AF37] tracking-[0.3em] uppercase mt-2">
            African Soul • Mediterranean Elegance • Lekki Rooftop
          </p>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39A90]">
          <p>© 2026 Nostalgia Lagos Ltd. All Rights Reserved. 88 Hakeem Dickson Link Rd, Lekki Phase I.</p>

          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors">
              Instagram @nostalgialagos
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors">
              TikTok
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors">
              X (Twitter)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
