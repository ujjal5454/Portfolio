import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiShield, FiActivity, FiTerminal, FiSearch, FiGlobe, FiEye, FiMail, FiGrid, FiAlertOctagon } from 'react-icons/fi';
import { skillCategories, skills } from '../data.js';

const categoryIcons = {
  0: FiShield,
  1: FiActivity,
  2: FiAlertOctagon,
  3: FiTerminal,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-padding relative">
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
              <FiCpu /> Technical Stack & SOC Competencies
            </div>
            <h2 className="section-title mb-0">Defense Matrix & Toolset</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-mono">
            Hands-on expertise across SIEM monitoring, threat intelligence, packet analysis, and digital forensics.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || FiShield;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono transition-all ${
                  activeTab === idx
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] font-semibold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent'
                }`}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {skillCategories[activeTab].skills.map((s) => (
            <div key={s.name} className="cyber-card p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white font-heading">{s.name}</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">{s.level}%</span>
              </div>
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${s.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quick Badges Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <p className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider">All Core Tool Badges</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
