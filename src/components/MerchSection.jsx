
import { ShoppingBag, Tag, Send } from "lucide-react";


export default function MerchSection({ merch = [] }) {
  return (
    <section
      id="merch"
      className="py-20 border-b border-zinc-800/80 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl font-black uppercase tracking-wider text-cyan-400 flex items-center gap-3">
            <ShoppingBag /> Merchandising Oficial
          </h2>
          <p className="text-xs font-mono text-zinc-400">
            Envíos a todo el país • Entregas en shows en vivo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merch.map((item) => {
            const waMessage = encodeURIComponent(
              `Hola! Quiero consultar stock de "${item.name}" (${item.price}) desde la web oficial.`,
            );

            return (
              <div
                key={item.id}
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="w-full h-72 sm:h-80 bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/80 p-3 flex items-center justify-center relative shadow-inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                    />

                    <span className="absolute top-3 right-3 bg-cyan-500 text-zinc-950 font-black px-3 py-1 rounded text-xs tracking-wider shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                      {item.price}
                    </span>
                  </div>

                  <div className="mt-5 space-y-2">
                    <h3 className="text-xl font-black uppercase text-white group-hover:text-cyan-400 transition">
                      {item.name}
                    </h3>

                    {item.sizes && (
                      <div className="flex items-center gap-2 pt-1">
                        <Tag size={14} className="text-cyan-400" />
                        <span className="text-xs font-mono text-zinc-400">
                          Talles / Edición:
                        </span>
                        <div className="flex gap-1.5 flex-wrap">
                          {item.sizes.map((size, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono bg-zinc-950 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/80">
                  <a
                    href={`https://wa.me/5492284269949?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black py-3 px-4 rounded-md uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
                  >
                    <Send size={16} />
                    <span>Pedir por WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
