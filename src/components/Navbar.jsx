import React, { useEffect, useState } from 'react';
import { FiMenu, FiX, FiTerminal, FiEye, FiShield } from 'react-icons/fi';
import { useActiveSection } from '../hooks/useActiveSection.js';

const links = [
  { href: '#home', label: 'Dashboard' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'SOC Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ onOpenTerminal, snakeEnabled, onToggleSnake, snakeStyle, onSetSnakeStyle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(['home', 'about', 'skills', 'projects', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/90 transition-all ${scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.5)]' : ''}`}>
      <nav className="container container-max mx-auto flex items-center justify-between py-3.5 px-4">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 text-white font-mono text-sm sm:text-base font-bold tracking-tight">
          <span className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <FiShield size={18} />
          </span>
          <span className="text-emerald-400 font-bold">&gt;</span> UJJAL_BASNET
        </a>

        {/* Desktop Links & Controls */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono">
          <ul className="flex items-center gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`transition-colors link-underline ${
                    active === l.href.slice(1)
                      ? 'text-emerald-400 font-semibold'
                      : 'text-slate-300 hover:text-emerald-400'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-slate-800" />

          {/* Snake Trail Control */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-md p-1">
            <button
              onClick={() => onToggleSnake(!snakeEnabled)}
              className={`px-2 py-1 rounded text-[11px] font-mono transition-colors flex items-center gap-1 ${
                snakeEnabled ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'text-slate-500 hover:text-slate-300'
              }`}
              title="Toggle ASCII Snake Mouse Trail"
            >
              <FiEye size={12} /> ASCII Snake {snakeEnabled ? 'ON' : 'OFF'}
            </button>

            {snakeEnabled && (
              <select
                value={snakeStyle}
                onChange={(e) => onSetSnakeStyle(e.target.value)}
                className="bg-slate-950 text-emerald-400 text-[11px] font-mono border border-slate-800 rounded px-1.5 py-0.5 outline-none cursor-pointer"
              >
                <option value="cyber">Cyber (@==&gt;)</option>
                <option value="binary">Binary (1010)</option>
                <option value="hex">Hex (0x90)</option>
                <option value="matrix">Matrix ($#%&amp;)</option>
              </select>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 font-mono text-sm space-y-3">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-slate-300 hover:text-emerald-400 border-b border-slate-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onToggleSnake(!snakeEnabled);
              }}
              className="w-full py-2 rounded bg-slate-900 border border-slate-800 text-emerald-400 text-xs flex items-center justify-center gap-2"
            >
              <FiEye /> Toggle ASCII Snake Cursor: {snakeEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
