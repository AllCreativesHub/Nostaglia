import React, { useState } from 'react';
import { TESTIMONIALS, INSTAGRAM_POSTS } from '../data/copyData';
import { Star, Quote, Camera, Heart, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';


export const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="gallery" className="py-24 bg-[#0E0C10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-eyebrow text-xs text-[#D4AF37] tracking-[0.25em] font-semibold uppercase block mb-2">
            Loved By Lagos & Beyond
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-semibold text-[#F5EFE6]">
            Guest Experiences & <span className="gold-gradient-text italic font-normal">Moments</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A39A90] mt-3">
            Read what our diners say and glimpse live rooftop moments captured by our guests.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 relative shadow-2xl">
            <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-6 right-8 pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <div className="relative shrink-0">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
                />
                <span className="absolute bottom-0 right-0 bg-[#D4AF37] text-[#0A090B] p-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="flex items-center justify-center sm:justify-start text-[#D4AF37] gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-eyebrow text-[#D4AF37] ml-2 px-2 py-0.5 bg-[#D4AF37]/15 rounded border border-[#D4AF37]/30">
                    {currentTestimonial.highlight}
                  </span>
                </div>

                <p className="text-base sm:text-lg font-serif-title text-[#F5EFE6] italic leading-relaxed">
                  "{currentTestimonial.comment}"
                </p>

                <div>
                  <h4 className="font-syne font-bold text-sm text-[#F5EFE6]">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs text-[#A39A90]">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              <span className="text-xs font-eyebrow text-[#A39A90]">
                0{currentIndex + 1} / 0{TESTIMONIALS.length} Verified Reviews
              </span>

              <div className="flex items-center space-x-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-white/5 flex items-center justify-center text-[#F5EFE6] hover:bg-[#D4AF37] hover:text-[#0A090B] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-white/5 flex items-center justify-center text-[#F5EFE6] hover:bg-[#D4AF37] hover:text-[#0A090B] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Instagram Feed Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Camera className="w-6 h-6 text-[#D4AF37]" />
              <div>
                <h3 className="font-syne text-lg font-bold text-[#F5EFE6]">
                  @nostalgialagos
                </h3>
                <p className="text-xs text-[#A39A90]">
                  Tag us in your Lagos rooftop stories
                </p>
              </div>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex px-5 py-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-eyebrow hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              Follow on Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                className="relative rounded-xl overflow-hidden aspect-square border border-white/10 group cursor-pointer"
              >
                <img
                  src={post.url}
                  alt="Nostalgia Lagos Guest Capture"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 p-4">
                  <Heart className="w-6 h-6 text-[#D4AF37] fill-current" />
                  <span className="font-syne font-bold text-sm">{post.likes}</span>
                  <span className="text-[11px] font-eyebrow text-[#D4AF37]">{post.handle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
