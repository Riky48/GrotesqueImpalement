import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 text-zinc-500 border-t border-zinc-900 text-center text-xs font-mono">
      <p>&copy; {new Date().getFullYear()} Grotesque Impalement. All rights reserved.</p>
    </footer>
  );
}