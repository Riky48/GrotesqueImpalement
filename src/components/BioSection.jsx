import React from 'react';
import { Download } from 'lucide-react';

export default function BioSection() {
  return (
    <section id="bio" className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        
        {/* FOTO PRINCIPAL DE LA BANDA ARRIBA */}
        <div className="w-full h-80 md:h-[500px] rounded-xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative">
          <img 
            src="/band-photo1.webp" 
            alt="Grotesque Impalement Band" 
            className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        {/* TEXTO DE BIO Y EPK ABAJO */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              Biografía
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Formados en agosto de 2010 en Olavarría, Buenos Aires, Grotesque Impalement se ha consolidado como uno de los referentes del Death Metal extremo de la región.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Con múltiples lanzamientos independientes, giras nacionales y la autogestión del clásico festival *Grotesque Fest*, la banda continúa expandiendo su sonido crudo, veloz e implacable.
            </p>
          </div>
          
          {/* TARJETA DESCARGA EPK */}
          <div className="bg-zinc-900/90 border border-cyan-500/40 p-6 rounded-lg text-center flex flex-col items-center justify-center space-y-4 shadow-xl">
            <Download size={36} className="text-cyan-400 animate-bounce" />
            <div>
              <h3 className="font-bold text-lg uppercase text-white">Press Kit Oficial (EPK)</h3>
              <p className="text-xs text-zinc-400 mt-1">Fotos HD, bio en PDF, logos vectoriales y rider técnico.</p>
            </div>
            <a 
              href="/epk-grotesque-impalement.pdf" 
              target="_blank" rel="noreferrer"
              download="EPK_Grotesque_Impalement.pdf"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black py-2.5 px-4 rounded text-xs uppercase tracking-wider transition shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
            >
              Descargar EPK (PDF)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}