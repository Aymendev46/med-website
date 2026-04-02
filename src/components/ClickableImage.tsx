"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

interface ClickableImageProps {
  src: string;
  alt: string;
  containerClassName?: string;
}

export default function ClickableImage({ src, alt, containerClassName }: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalContent = isOpen ? (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={() => setIsOpen(false)}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        className="absolute top-4 right-4 z-[110] p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      <div className="relative w-[90vw] h-[85vh] sm:w-full sm:h-auto max-w-5xl sm:aspect-video" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div 
        className={`group cursor-pointer ${containerClassName || ""}`} 
        onClick={() => setIsOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
