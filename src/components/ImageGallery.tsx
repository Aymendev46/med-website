"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openGrid = (index: number) => setSelectedIndex(index);
  const closeGrid = () => setSelectedIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null));
  };

  const modalContent = selectedIndex !== null ? (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={closeGrid}
    >
      <button
        onClick={closeGrid}
        className="absolute top-4 right-4 z-[110] p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      <button
        onClick={prevImage}
        className="absolute left-4 z-[110] p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>

      <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-video" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          fill
          className="object-contain"
          priority
        />
      </div>

      <button
        onClick={nextImage}
        className="absolute right-4 z-[110] p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm z-[110]">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="grid-card overflow-hidden cursor-pointer group"
            onClick={() => openGrid(index)}
          >
            <div className="relative aspect-[4/3] transition-transform duration-500 group-hover:scale-105">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
