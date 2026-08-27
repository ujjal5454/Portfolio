import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiActivity, FiCheckCircle, FiAlertTriangle, FiClock, FiCpu } from 'react-icons/fi';
import { socTelemetry } from '../data.js';

export default function SocDashboard() {
  return (
    <section className="py-8 bg-slate-950/60 border-y border-slate-800/80">
      <div className="container container-max mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1: SOC Threat Level */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="cyber-card p-4 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
              <FiShield size={24} />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Threat Level</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-lg font-bold text-white font-heading">{socTelemetry.threatLevel}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: SIEM Ingestion Uptime */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="cyber-card p-4 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
              <FiActivity size={24} />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">SIEM Uptime</p>
              <p className="text-lg font-bold text-white font-heading mt-0.5">{socTelemetry.siemUptime}</p>
            </div>
          </motion.div>

          {/* Card 3: Incidents Triaged */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="cyber-card p-4 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30 shrink-0">
              <FiCheckCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Incidents Analyzed</p>
              <p className="text-lg font-bold text-white font-heading mt-0.5">{socTelemetry.incidentsAnalyzed}+</p>
            </div>
          </motion.div>

          {/* Card 4: Active Monitors */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="cyber-card p-4 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 shrink-0">
              <FiCpu size={24} />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Active Sensors</p>
              <p className="text-lg font-bold text-white font-heading mt-0.5">{socTelemetry.activeMonitors} Nodes</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
