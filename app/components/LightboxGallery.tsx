"use client";

import { useState } from 'react';

export default function LightboxGallery({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
  };
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
  };

  return (
    <>
      {/* Grille de photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="cursor-pointer aspect-square rounded-xl overflow-hidden shadow-sm group relative"
            onClick={() => openLightbox(idx)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
              <span className="text-white opacity-0 group-hover:opacity-100 font-bold transition-opacity shadow-sm drop-shadow-md text-lg bg-black/40 px-4 py-2 rounded-full">
                🔍 Agrandir
              </span>
            </div>
            <img 
              src={img} 
              alt={`${title} - Photo ${idx + 1}`} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        ))}
      </div>

      {/* Pop-up (Lightbox) plein écran */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={closeLightbox}
        >
          {/* Bouton Fermer */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-5xl hover:text-[#F3C300] z-[110] transition-colors" 
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            &times;
          </button>
          
          {/* Bouton Précédent */}
          {currentIndex > 0 && (
            <button 
              className="absolute left-2 md:left-8 text-white text-5xl md:text-6xl hover:text-[#F3C300] z-[110] p-4 transition-transform hover:-translate-x-1" 
              onClick={showPrev}
            >
              &#10094;
            </button>
          )}
          
          {/* Image affichée */}
          <img 
            src={images[currentIndex]} 
            alt={`${title} agrandie`} 
            className="max-h-[85vh] max-w-[95vw] object-contain select-none shadow-2xl rounded-sm" 
          />
          
          {/* Bouton Suivant */}
          {currentIndex < images.length - 1 && (
            <button 
              className="absolute right-2 md:right-8 text-white text-5xl md:text-6xl hover:text-[#F3C300] z-[110] p-4 transition-transform hover:translate-x-1" 
              onClick={showNext}
            >
              &#10095;
            </button>
          )}
          
          {/* Compteur d'images */}
          <div className="absolute bottom-6 text-gray-400 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}