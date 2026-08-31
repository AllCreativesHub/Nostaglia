import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [seatingArea, setSeatingArea] = useState<string>('Rooftop Deck');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>('19:00');
  const [partySize, setPartySize] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('Dinner & Drinks');
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const seatingOptions = [
    {
      id: 'Rooftop Deck',
      title: 'Rooftop Deck',
      desc: 'Panoramic Lekki views, open air sunset breeze & festoon lights',
      tag: 'Most Popular',
      minGuests: 2,
    },
    {
      id: 'VIP Velvet Lounge',
      title: 'VIP Velvet Lounge',
      desc: 'Plush purple velvet armchairs, vintage turntable audio & intimate mood lighting',
      tag: 'Exclusive',
      minGuests: 2,
    },
    {
      id: 'Main Dining Hall',
      title: 'Main Dining Hall',
      desc: 'Full Afro-Mediterranean dining experience with views of the open kitchen bar',
      tag: 'Culinary Focus',
      minGuests: 1,
    },
    {
      id: 'Sunset Cocktail Bar',
      title: 'Sunset Cocktail Bar',
      desc: 'High-top bar stools, front-row seat to mixology wizardry',
      tag: 'Casual & Vibe',
      minGuests: 1,
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'NOS-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomId);
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Nostalgia Concierge! I just placed reservation ${bookingRef} for ${name} on ${date} at ${time} (${partySize} guests - ${seatingArea}). Please confirm my table!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#131118] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 border-b border-[#D4AF37]/15 bg-[#0A090B]">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
            <h3 className="text-xl font-serif-title tracking-wide text-[#F5EFE6]">
              Reserve Your Table at Nostalgia
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-[#A39A90] hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        {step < 3 && (
          <div className="flex items-center px-6 pt-4 text-xs font-eyebrow text-[#A39A90] space-x-4 border-b border-[#D4AF37]/10 pb-3">
            <span className={`flex items-center space-x-1.5 ${step === 1 ? 'text-[#D4AF37] font-semibold' : 'text-[#A39A90]'}`}>
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-xs">1</span>
              <span>Select Seating & Time</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#A39A90]" />
            <span className={`flex items-center space-x-1.5 ${step === 2 ? 'text-[#D4AF37] font-semibold' : 'text-[#A39A90]'}`}>
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-xs">2</span>
              <span>Guest Information</span>
            </span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              {/* Seating Area Selection */}
              <div>
                <label className="block text-xs font-eyebrow text-[#D4AF37] mb-3">
                  Choose Preferred Experience Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seatingOptions.map((option) => {
                    const isSelected = seatingArea === option.id;
                    return (
                      <div
                        key={option.id}
                        onClick={() => setSeatingArea(option.id)}
                        className={`cursor-pointer p-4 rounded-xl border transition-all ${
                          isSelected
                            ? 'border-[#D4AF37] bg-[#3A1950]/40 shadow-lg shadow-[#642B8F]/20'
                            : 'border-[#D4AF37]/15 bg-white/[0.02] hover:border-[#D4AF37]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-syne text-sm font-semibold text-[#F5EFE6]">
                            {option.title}
                          </span>
                          <span className="text-[10px] font-eyebrow px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                            {option.tag}
                          </span>
                        </div>
                        <p className="text-xs text-[#A39A90] leading-relaxed">
                          {option.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date, Time, Party size */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-eyebrow text-[#A39A90] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-lg px-3 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-eyebrow text-[#A39A90] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-lg px-3 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="14:00">02:00 PM (Sunset Prep)</option>
                    <option value="17:00">05:00 PM (Golden Hour Sunset)</option>
                    <option value="19:00">07:00 PM (Dinner Prime)</option>
                    <option value="21:00">09:00 PM (Late Dining)</option>
                    <option value="23:00">11:00 PM (Nightlife Lounge)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-eyebrow text-[#A39A90] mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Guests
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-lg px-3 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3D068] text-[#0A090B] font-syne font-bold text-sm tracking-wider uppercase hover:opacity-95 shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue to Guest Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="bg-[#3A1950]/20 border border-[#D4AF37]/20 rounded-xl p-4 mb-4 flex items-center justify-between text-xs">
                <div>
                  <p className="font-syne text-[#F5EFE6] font-semibold">{seatingArea}</p>
                  <p className="text-[#A39A90]">{date} at {time} • {partySize} Guests</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[#D4AF37] underline hover:text-[#F3D068]"
                >
                  Edit Selection
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-eyebrow text-[#A39A90] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tunde Balogun"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-eyebrow text-[#A39A90] mb-1.5">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-eyebrow text-[#A39A90] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tunde@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-eyebrow text-[#A39A90] mb-1.5">
                  Occasion & Special Requests (Optional)
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-[#0A090B] border border-[#D4AF37]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#D4AF37] mb-2"
                >
                  <option value="Casual Dining">Casual Dining / Drinks</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Anniversary / Date Night">Anniversary / Date Night</option>
                  <option value="Business Dinner">Business Dinner</option>
                  <option value="VIP Bottle Lounge">VIP Bottle Lounge Service</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-xs font-eyebrow text-[#A39A90] hover:text-[#F5EFE6]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3D068] text-[#0A090B] font-syne font-bold text-sm tracking-wider uppercase hover:opacity-95 shadow-lg shadow-[#D4AF37]/25 transition-all"
                >
                  Confirm Reservation Request
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto text-[#D4AF37] border border-[#D4AF37]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-eyebrow px-3 py-1 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  Booking Reference: {bookingRef}
                </span>
                <h4 className="text-2xl font-serif-title text-[#F5EFE6] mt-3">
                  Reservation Received, {name.split(' ')[0]}!
                </h4>
                <p className="text-xs text-[#A39A90] max-w-md mx-auto mt-2 leading-relaxed">
                  We have tentatively held your table in the <strong className="text-[#F5EFE6]">{seatingArea}</strong> for <strong className="text-[#F5EFE6]">{date} at {time}</strong>. Our host team will send instant SMS/WhatsApp confirmation shortly.
                </p>
              </div>

              <div className="p-4 bg-[#0A090B] rounded-xl border border-[#D4AF37]/20 text-xs text-[#A39A90] max-w-md mx-auto space-y-1">
                <p><strong className="text-[#D4AF37]">Location:</strong> 88 Hakeem Dickson Link Rd, Lekki Phase I, Lagos</p>
                <p><strong className="text-[#D4AF37]">Dress Code:</strong> Smart Elegant / Retro-Chic Luxury</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/2348000000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-6 py-3 rounded-full border border-[#D4AF37]/40 text-[#F5EFE6] font-syne text-xs uppercase tracking-wider hover:bg-white/5"
                >
                  Close & Explore Site
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
