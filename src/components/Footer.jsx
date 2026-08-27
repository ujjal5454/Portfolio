import React from 'react';
import { FiShield, FiLock } from 'react-icons/fi';
import { personal } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-xs font-mono text-slate-400">
      <div className="container container-max mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <FiShield className="text-emerald-400" />
          <span>© {year} {personal.name}. All systems defended.</span>
        </div>

        <div className="flex items-center gap-4 text-slate-500">
          <span className="flex items-center gap-1 text-emerald-400/80">
            <FiLock size={12} /> SSL 256-BIT ENCRYPTED
          </span>
          <span>//</span>
          <span>SOC WORKSTATION V2.4</span>
        </div>
      </div>
    </footer>
  );
}
