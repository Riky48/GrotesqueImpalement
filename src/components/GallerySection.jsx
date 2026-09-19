import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

export default function GallerySection({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 border-b border-zinc-800/80 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl font-black uppercase tracking-wider text-cyan-400 mb-12 flex items-center gap-3">
          <Camera /> Galería en Vivo
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((photo, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(photo)}
              className="aspect-square w-full bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 hover:border-cyan-500/60 transition duration-300 relative group cursor-pointer shadow-lg"
            >
              <img 
                src={photo} 
                alt={`Grotesque Impalement Galeria ${idx + 1}`}
                className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="bg-zinc-950/90 text-cyan-400 font-mono text-xs px-3 py-1.5 rounded border border-cyan-500/50 shadow-lg uppercase">
                  Agrandar
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-zinc-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-zinc-400 hover:text-cyan-400 transition p-2"
            >
              <X size={28} />
            </button>
            <img 
              src={selectedImage} 
              alt="Grotesque Impalement Foto Ampliada" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            />
          </div>
        </div>
      )}
    </section>
  );
}