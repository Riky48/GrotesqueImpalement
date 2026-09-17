import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function MerchSection({ merchItems }) {
  return (
    <section id="merch" className="py-20 border-b border-zinc-800/80 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase tracking-wider text-cyan-400 mb-10 flex items-center gap-3">
          <ShoppingBag /> Merchandising
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {merchItems.map((item) => (
            <div key={item.id} className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-cyan-500/50 transition">
              <div className="overflow-hidden h-64 bg-zinc-900 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 right-3 bg-zinc-950/90 text-cyan-400 font-mono text-xs px-2.5 py-1 rounded border border-cyan-500/40">
                  {item.price}
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-bold text-lg text-white uppercase mb-1">{item.name}</h3>
                  <p className="text-xs text-zinc-500 mb-4">Talles / Formato: {item.sizes.join(", ")}</p>
                </div>
                <a 
                  href={`https://wa.me/5491112345678?text=Hola,%20quisiera%20comprar:%20${encodeURIComponent(item.name)}`}
                  target="_blank" rel="noreferrer"
                  className="w-full bg-zinc-900 hover:bg-cyan-500 text-zinc-300 hover:text-zinc-950 font-bold py-2 rounded text-xs uppercase tracking-wider text-center transition border border-zinc-700 hover:border-cyan-400 block"
                >
                  Encargar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}