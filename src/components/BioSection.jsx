import React from 'react';
import { Download } from 'lucide-react';

export default function BioSection() {
  return (
    <section id="bio" className="py-20 border-b border-zinc-800/60 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-wider text-lime-600">Biografía</h2>
            <p className="text-zinc-300 leading-relaxed">
              Formados en agosto de 2010 en Olavarría, Buenos Aires, **Grotesque Impalement** se ha consolidado como uno de los referentes del Death Metal extremo de la región.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Con múltiples lanzamientos independientes, giras nacionales y la autogestión del *Grotesque Fest*, la banda continúa expandiendo su sonido crudo, veloz e implacable.
            </p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg text-center flex flex-col items-center justify-center space-y-4 shadow-xl">
            <Download size={36} className="text-lime-600" />
            <div>
              <h3 className="font-bold text-lg uppercase text-white">Press Kit Oficial (EPK)</h3>
              <p className="text-xs text-zinc-400 mt-1">Fotos HD, bio en PDF, logos vectoriales y rider técnico.</p>
            </div>
            <a 
              href="/epk-grotesque-impalement.pdf" 
              download 
              className="w-full bg-zinc-800 hover:bg-lime-900 text-white font-bold py-2.5 px-4 rounded text-xs uppercase tracking-wider transition border border-zinc-700 flex items-center justify-center gap-2"
            >
              Descargar EPK (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}