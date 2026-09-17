import React, { useState } from 'react';
import { Image, X } from 'lucide-react';

export default function GallerySection({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 border-b border-zinc-800/60 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase tracking-wider text-lime-600 mb-10 flex items-center gap-3">
          <Image /> Galería
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImage(img)}
              className="h-48 bg-zinc-900 rounded cursor-pointer overflow-hidden border border-zinc-800 hover:border-lime-600 transition"
            >
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <img src={selectedImage} alt="Enlarged" className="w-full max-h-[85vh] object-contain rounded" />
            <button className="absolute top-4 right-4 text-white bg-zinc-900 p-2 rounded-full">
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}