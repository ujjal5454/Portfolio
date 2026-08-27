import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiShield, FiCrosshair, FiBookOpen, FiBriefcase } from 'react-icons/fi';
import { personal } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container container-max mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
              <FiUser /> Candidate Overview
            </div>
            <h2 className="section-title mb-0">About Me</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-4xl"
        >
          <div className="cyber-card p-6 border-l-4 border-l-emerald-500">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
              I am <span className="text-emerald-400 font-semibold font-mono">Ujjal Basnet</span>, a 
              <span className="text-cyan-400 font-semibold font-mono"> B.Tech Graduate from Jain University (2022–2026)</span> and 
              an aspiring SOC Analyst & Cybersecurity Enthusiast. 
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Equipped with a solid foundation in computer science and network security, I am actively building my skillset across SIEM threat monitoring, packet analysis using Wireshark, incident triage, and hands-on lab deployments. I am passionate about defending systems, learning modern threat landscapes, and actively seeking entry-level SOC / Cybersecurity opportunities!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="cyber-card p-4 flex items-center gap-3">
              <FiBookOpen className="text-emerald-400 shrink-0" size={22} />
              <div>
                <div className="text-white font-bold">Degree & College</div>
                <div className="text-slate-400">B.Tech, Jain University (2022-2026)</div>
              </div>
            </div>
            <div className="cyber-card p-4 flex items-center gap-3">
              <FiShield className="text-cyan-400 shrink-0" size={22} />
              <div>
                <div className="text-white font-bold">Focus Area</div>
                <div className="text-slate-400">SOC Monitoring & Network Defense</div>
              </div>
            </div>
            <div className="cyber-card p-4 flex items-center gap-3">
              <FiBriefcase className="text-amber-400 shrink-0" size={22} />
              <div>
                <div className="text-white font-bold">Career Status</div>
                <div className="text-emerald-400 font-bold">Open to Work / Entry-Level SOC</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
