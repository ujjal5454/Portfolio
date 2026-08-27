import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data.js';
import { FiExternalLink, FiGithub, FiShield, FiFolder, FiTag } from 'react-icons/fi';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
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
              <FiFolder /> Security Incident & Threat Engineering
            </div>
            <h2 className="section-title mb-0">SOC Projects & Threat Labs</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-mono">
            Practical defensive setups, SIEM pipelines, malware automation scripts, and honeypot deployments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="cyber-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Banner Image */}
                {p.image && (
                  <div className="relative h-44 overflow-hidden bg-slate-950 border-b border-slate-800">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    
                    {/* MITRE Badge */}
                    {p.mitre && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/90 border border-emerald-500/40 text-emerald-400 font-mono text-xs flex items-center gap-1.5 shadow-md">
                        <FiShield size={12} /> {p.mitre}
                      </div>
                    )}
                  </div>
                )}

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-heading">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {p.description}
                  </p>

                  {/* Tags */}
                  {Array.isArray(p.tags) && p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800 flex items-center gap-1"
                        >
                          <FiTag size={10} className="text-cyan-400" /> {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="p-5 pt-0 flex items-center gap-3 border-t border-slate-800/60 mt-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cyber-outline text-xs py-2 px-4"
                  >
                    <FiGithub /> GitHub Repo
                  </a>
                )}
                {p.demo && p.demo !== '#' && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cyber-primary text-xs py-2 px-4"
                  >
                    <FiExternalLink /> Live Architecture
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
