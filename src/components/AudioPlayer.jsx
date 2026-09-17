import React from 'react';
import { Play, Pause, Volume2, X } from 'lucide-react';

export default function AudioPlayer({ currentTrack, isPlaying, onTogglePlay, onClose }) {
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/95 border-t border-cyan-500/30 p-4 z-50 backdrop-blur-md flex items-center justify-between px-6 shadow-2xl">
      
      {/* INFO DEL TEMA */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/40 rounded flex items-center justify-center animate-pulse">
          <Volume2 size={20} className="text-cyan-400" />
        </div>
        <div>
          <p className="font-bold text-sm text-white">{currentTrack.name}</p>
          <p className="text-xs text-zinc-400">Grotesque Impalement</p>
        </div>
      </div>

      {/* CONTROLES: PLAY/PAUSA Y BOTÓN CERRAR */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onTogglePlay}
          className="p-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-full transition shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          title={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button 
          onClick={onClose}
          className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition"
          title="Cerrar reproductor"
        >
          <X size={20} />
        </button>
      </div>

    </div>
  );
}