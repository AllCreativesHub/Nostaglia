import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { MenuSection } from './components/MenuSection';
import { NightlifeSection } from './components/NightlifeSection';
import { SocialProof } from './components/SocialProof';
import { LocationFooter } from './components/LocationFooter';
import { ReservationModal } from './components/ReservationModal';
import { StickyMobileBar } from './components/StickyMobileBar';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A090B] text-[#E8DFD1] relative">
      {/* Navigation Header */}
      <Header onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Experience Section */}
      <Experience />

      {/* Menu Section */}
      <MenuSection onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Nightlife Section */}
      <NightlifeSection onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Social Proof & Instagram Section */}
      <SocialProof />

      {/* Location & Footer Section */}
      <LocationFooter onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Floating Sticky Mobile Reservation Bar */}
      <StickyMobileBar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Interactive Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

export default App;
