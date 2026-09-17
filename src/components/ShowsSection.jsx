import React from 'react';
import { Calendar, Ticket } from 'lucide-react';

export default function ShowsSection({ shows }) {
  return (
    <section id="shows" className="py-20 border-b border-zinc-800/60 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase tracking-wider text-lime-600 mb-8 flex items-center gap-3">
          <Calendar /> Tour & Entradas
        </h2>

        <div className="space-y-4">
          {shows.map((show) => (
            <div key={show.id} className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-zinc-700 transition">
              <div className="flex items-center gap-6">
                <div className="bg-zinc-950 border border-zinc-800 p-3 rounded text-center min-w-[100px]">
                  <span className="text-xs font-bold text-lime-600 font-mono block">{show.date}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase text-white">{show.venue}</h3>
                  <p className="text-sm text-zinc-400">{show.city}</p>
                </div>
              </div>

              <a 
                href={show.ticketUrl} 
                target="_blank" 
                rel="noreferrer"
                className="bg-lime-600 hover:bg-lime-800 text-white px-6 py-2.5 rounded font-bold uppercase text-xs tracking-wider transition flex items-center gap-2 self-stretch sm:self-auto justify-center"
              >
                <Ticket size={16} /> Comprar Entradas
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}