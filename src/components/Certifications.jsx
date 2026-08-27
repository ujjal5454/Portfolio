import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckSquare, FiShield } from 'react-icons/fi';
import { certifications } from '../data.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container container-max mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
              <FiAward /> Verified Credentials
            </div>
            <h2 className="section-title mb-0">Certifications & Accreditations</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-mono">
            Industry validated credentials in security operations, threat analysis, and digital forensics.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="cyber-card p-5 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                    <FiShield size={22} />
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
                    {c.date}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors mb-1 font-heading">
                  {c.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-3">{c.issuer}</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{c.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>ID: {c.id}</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <FiCheckSquare size={12} /> VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
