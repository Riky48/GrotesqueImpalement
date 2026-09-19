
import { Mail, Send } from "lucide-react";

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-.84-.36-.18-.6.36-1.2.96-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-center border-b border-zinc-900 pb-12">
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-xl font-black uppercase text-white tracking-wider flex items-center justify-center md:justify-start gap-2">
            <span className="text-cyan-400">GROTESQUE</span> IMPALEMENT
          </h3>
          <p className="text-xs font-mono text-zinc-500">
            Death Metal Groovero & Técnico • Olavarría, Bs. As., Argentina.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4">
          <a
            href="https://instagram.com/grotesqueimpalement.arg"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-zinc-900 hover:bg-cyan-950 hover:text-cyan-400 border border-zinc-800 rounded-full transition shadow-md"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCm4FCF0u0GDNMtpW-h3rmnw"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-zinc-900 hover:bg-cyan-950 hover:text-cyan-400 border border-zinc-800 rounded-full transition shadow-md"
            title="YouTube"
          >
            <YoutubeIcon />
          </a>
          <a
            href="https://open.spotify.com/intl-es/artist/3aIjUNpR85bCObYjoDD4HX"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-zinc-900 hover:bg-cyan-950 hover:text-cyan-400 border border-zinc-800 rounded-full transition shadow-md"
            title="Spotify"
          >
            <SpotifyIcon />
          </a>
          <a
            href="https://facebook.com/empalamientogrotesco"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-zinc-900 hover:bg-cyan-950 hover:text-cyan-400 border border-zinc-800 rounded-full transition shadow-md"
            title="Facebook"
          >
            <FacebookIcon />
          </a>
        </div>

        <div className="text-center md:text-right space-y-2">
          <p className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-widest">
            Booking & Prensa
          </p>
          <a
            href="mailto:grotesqueimpalementdeath@gmail.com"
            className="text-sm text-zinc-200 hover:text-cyan-400 font-mono transition flex items-center justify-center md:justify-end gap-2"
          >
            <Mail size={16} /> grotesqueimpalementdeath@gmail.com
          </a>
          <a
            href="https://wa.me/5492284269949"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-zinc-400 hover:text-cyan-400 font-mono transition flex items-center justify-center md:justify-end gap-1.5 pt-1"
          >
            <Send size={14} /> Contacto directo por WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-zinc-600 gap-2">
        <p>© 2026 Grotesque Impalement. Todos los derechos reservados.</p>
        <p className="text-zinc-500">Autogestión & Death Metal Regional</p>
      </div>
    </footer>
  );
}
