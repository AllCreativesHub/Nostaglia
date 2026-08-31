import React, { useState } from 'react';
import { MENU_ITEMS, type MenuItem } from '../data/copyData';
import { Download, Sparkles, UtensilsCrossed, ExternalLink, ChevronRight } from 'lucide-react';


interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'starters' | 'mains' | 'platters' | 'cocktails'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeTab);

  const tabs = [
    { id: 'all', label: 'Full Preview' },
    { id: 'starters', label: 'Small Plates & Starters' },
    { id: 'mains', label: "Chef's Mains" },
    { id: 'platters', label: 'Platters to Share' },
    { id: 'cocktails', label: 'Crafted Cocktails & Sips' },
  ];

  return (
    <section id="menu" className="py-24 bg-[#0E0C10] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-eyebrow text-xs text-[#D4AF37] tracking-[0.25em] font-semibold uppercase block mb-2">
            Culinary Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-semibold text-[#F5EFE6]">
            Signature <span className="gold-gradient-text italic font-normal">Fusion Menu</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A39A90] mt-3 leading-relaxed">
            Every dish is an homage to West African culinary heritage reimagined with Mediterranean technique and premium locally-sourced ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-12 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-syne font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3D068] text-[#0A090B] shadow-md shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#131118] text-[#A39A90] border border-[#D4AF37]/15 hover:text-[#F5EFE6] hover:border-[#D4AF37]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col sm:flex-row gap-5 cursor-pointer relative overflow-hidden group"
            >
              {/* Optional Chef Special Tag */}
              {item.isChefSpecial && (
                <span className="absolute top-3 right-3 bg-[#3A1950] border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-eyebrow px-2.5 py-0.5 rounded-full flex items-center gap-1 z-10">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Chef's Pick
                </span>
              )}

              {/* Dish Image */}
              {item.image && (
                <div className="w-full sm:w-36 h-36 rounded-xl overflow-hidden shrink-0 bg-black/40 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Dish Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="font-serif-title text-xl font-bold text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-syne text-sm font-bold text-[#D4AF37] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#A39A90] leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-eyebrow text-[#E8DFD1]/70 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Callout Banner */}
        <div className="glass-card rounded-2xl p-8 border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left bg-gradient-to-r from-[#131118] via-[#1A1624] to-[#131118]">
          <div>
            <span className="font-eyebrow text-xs text-[#D4AF37] uppercase tracking-wider block mb-1">
              Dietary & Full Beverage Offerings
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-title font-semibold text-[#F5EFE6]">
              Looking for our Complete Wine List, Vegan & Shisha Options?
            </h3>
            <p className="text-xs text-[#A39A90] mt-1">
              Download our full seasonal 2026 menu or request custom tasting menus for group bookings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Nostalgia Lagos Seasonal Menu PDF downloading...");
              }}
              className="px-6 py-3 rounded-full bg-[#131118] border border-[#D4AF37]/40 text-[#F5EFE6] hover:bg-[#D4AF37]/10 font-syne text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" />
              <span>Download Full Menu [PDF]</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3D068] text-[#0A090B] font-syne font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md flex items-center justify-center gap-2"
            >
              <span>Reserve to Taste</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Dish Detail Quick Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#131118] border border-[#D4AF37]/40 rounded-2xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-[#A39A90] hover:text-white"
            >
              ✕
            </button>
            {selectedItem.image && (
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-48 object-cover rounded-xl mb-4 border border-[#D4AF37]/20"
              />
            )}
            <span className="text-[10px] font-eyebrow text-[#D4AF37] uppercase tracking-widest">
              {selectedItem.category}
            </span>
            <div className="flex justify-between items-baseline my-1">
              <h3 className="font-serif-title text-2xl font-bold text-[#F5EFE6]">
                {selectedItem.name}
              </h3>
              <span className="font-syne font-bold text-lg text-[#D4AF37]">
                {selectedItem.price}
              </span>
            </div>
            <p className="text-xs text-[#A39A90] leading-relaxed my-3">
              {selectedItem.description}
            </p>
            <button
              onClick={() => {
                setSelectedItem(null);
                onOpenReservation();
              }}
              className="w-full py-3 rounded-full bg-[#D4AF37] text-[#0A090B] font-syne font-bold text-xs uppercase tracking-wider mt-2"
            >
              Reserve Table For This Dish
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
