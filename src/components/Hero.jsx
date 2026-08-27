import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiCode, FiMail, FiCornerDownLeft, FiChevronRight, FiX, FiLock } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { personal, socials } from '../data.js';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [termInput, setTermInput] = useState('');
  const [termLogs, setTermLogs] = useState([
    { type: 'output', text: 'Ubuntu 24.04 LTS · Authorized access only' },
    { type: 'cmd', text: 'contact' },
    { type: 'output', text: 'Opening secure contact channel...' },
  ]);

  const handleHeroTermSubmit = (e) => {
    e.preventDefault();
    const cmd = termInput.trim().toLowerCase();
    if (!cmd) return;

    let res = '';
    if (cmd === 'help') {
      res = 'Commands: help, about, skills, projects, contact, clear';
    } else if (cmd === 'about') {
      res = 'Ujjal Basnet | B.Tech Graduate (Jain University 2022-2026) | Beginner SOC Analyst';
    } else if (cmd === 'skills') {
      res = 'SIEM (Splunk, Elastic), Wireshark, Nmap, Python, Linux Forensics';
    } else if (cmd === 'projects') {
      res = 'Enterprise SOC Lab, Malware Triage, Network IDS, HoneyPot Telemetry';
    } else if (cmd === 'contact') {
      res = `Redirecting to contact... Email: ${personal.email}`;
      window.location.href = '#contact';
    } else if (cmd === 'clear') {
      setTermLogs([]);
      setTermInput('');
      return;
    } else {
      res = `bash: ${cmd}: command not found. Try: help`;
    }

    setTermLogs((prev) => [...prev, { type: 'cmd', text: cmd }, { type: 'output', text: res }]);
    setTermInput('');
  };

  const executeQuickCmd = (cmd) => {
    setTermInput(cmd);
    let res = '';
    if (cmd === 'help') res = 'Commands: help, about, skills, projects, contact, clear';
    else if (cmd === 'about') res = 'Ujjal Basnet | B.Tech Graduate (Jain University 2022-2026) | Beginner SOC Analyst';
    else if (cmd === 'skills') res = 'SIEM (Splunk, Elastic), Wireshark, Nmap, Python, Linux Forensics';
    else if (cmd === 'projects') res = 'Enterprise SOC Lab, Malware Triage, Network IDS, HoneyPot Telemetry';
    else if (cmd === 'contact') {
      res = `Redirecting to contact... Email: ${personal.email}`;
      window.location.href = '#contact';
    }
    setTermLogs((prev) => [...prev, { type: 'cmd', text: cmd }, { type: 'output', text: res }]);
    setTermInput('');
  };

  return (
    <section id="home" className="section-padding relative overflow-hidden pt-28 pb-16 min-h-[90vh] flex flex-col justify-between">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 hero-glow-emerald pointer-events-none" />

      <div className="container container-max mx-auto px-4 grid md:grid-cols-12 gap-10 items-center relative z-10 my-auto">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-6 lg:col-span-7 space-y-5 text-left order-2 md:order-1"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060c08] border border-emerald-500/40 text-[#22c55e] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span>OPEN TO SOC & SECURITY OPPORTUNITIES</span>
          </div>

          {/* Greeting */}
          <p className="text-[#22c55e] font-mono text-sm sm:text-base font-medium">
            Hello, world. I'm
          </p>

          {/* Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none font-heading">
              Ujjal Basnet<span className="text-[#22c55e]">.</span>
            </h1>

            <p className="text-slate-400 font-mono text-lg sm:text-xl md:text-2xl mt-2 font-medium">
              Cybersecurity Enthusiast <span className="text-[#22c55e] font-bold">/</span> SOC Analyst
            </p>
          </div>

          {/* Bio */}
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
            B.Tech graduate focused on defending digital systems through threat monitoring, security analysis, and hands-on lab work. I investigate signals, connect the evidence, and keep learning how attackers think.
          </p>

          {/* Action Buttons - Open Terminal Button hides when terminal is active */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-cyber-primary text-sm px-6 py-3 font-bold">
              View security labs <FiChevronRight size={18} />
            </a>

            {!showTerminal && (
              <button
                onClick={() => setShowTerminal(true)}
                className="btn-cyber-outline text-sm px-5 py-3 font-mono flex items-center gap-2 cursor-pointer"
              >
                <FiTerminal size={16} /> Open terminal
              </button>
            )}
          </div>

          {/* Social Links Row with Real Favicons & Download Resume */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-slate-300 text-xs font-mono">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#08120b] border border-emerald-900/60 hover:border-emerald-500/60 text-slate-300 hover:text-[#22c55e] transition-all group"
              title="GitHub Profile"
            >
              <FaGithub size={16} className="text-slate-200 group-hover:text-[#22c55e] transition-colors" />
              <span className="font-semibold">GitHub</span>
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#08120b] border border-emerald-900/60 hover:border-emerald-500/60 text-slate-300 hover:text-[#0077b5] transition-all group"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={16} className="text-[#0a66c2]" />
              <span className="font-semibold">LinkedIn</span>
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#08120b] border border-emerald-900/60 hover:border-emerald-500/60 text-slate-300 hover:text-[#22c55e] transition-all group"
              title="Compose Email in Gmail"
            >
              <FiMail size={15} className="text-[#22c55e]" />
              <span className="font-semibold">Email</span>
            </a>

            <a
              href={socials.resume || "/resume.pdf"}
              download="Ujjal_Basnet_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#061e11] border border-emerald-500/50 hover:border-emerald-400 text-[#22c55e] hover:bg-[#0a2e1b] transition-all font-semibold shadow-[0_0_15px_rgba(0,255,102,0.15)] group cursor-pointer"
              title="Download Resume PDF"
            >
              <FaFileDownload size={14} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column - Animated Swap (Profile Picture vs Linux Terminal) */}
        <div className="md:col-span-6 lg:col-span-5 flex justify-center items-center min-h-[340px] order-1 md:order-2">
          <AnimatePresence mode="wait">
            {!showTerminal ? (
              /* Profile Picture Card State - Natural Color Photo */
              <motion.div
                key="picture"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group flex flex-col items-center"
              >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                  {/* Glowing Radar Rings */}
                  <div className="absolute inset-0 rounded-full border border-emerald-500/40 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute -inset-3 rounded-full border border-dashed border-emerald-500/20 animate-[spin_35s_linear_infinite_reverse]" />
                  
                  {/* Photo Container - Clean natural color photo */}
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/60 shadow-[0_0_35px_rgba(0,255,102,0.25)] bg-slate-950 relative">
                    <img
                      src={profileImage}
                      alt={personal.name}
                      className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop';
                      }}
                    />
                  </div>

                  {/* Corner Status Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-emerald-500/50 rounded-lg px-3 py-1.5 text-xs font-mono text-[#22c55e] shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <FiLock size={13} /> DEFCON 4 · SOC ONLINE
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Embedded Linux Terminal Card State */
              <motion.div
                key="terminal"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="rounded-xl border border-emerald-500/40 bg-[#040805]/95 shadow-[0_0_35px_rgba(0,255,102,0.15)] overflow-hidden font-mono text-xs flex flex-col justify-between w-full">
                  {/* Terminal Window Header */}
                  <div className="bg-[#08120b] px-4 py-3 border-b border-emerald-900/50 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowTerminal(false)}
                        className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-600 transition-colors cursor-pointer"
                        title="Close Terminal"
                      />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/50 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/50 inline-block" />
                    </div>
                    
                    <span className="text-slate-300 text-[11px] font-bold flex items-center gap-1">
                      &gt;_ ujjal@portfolio:~
                    </span>

                    <button
                      onClick={() => setShowTerminal(false)}
                      className="text-slate-400 hover:text-red-400 hover:bg-red-500/20 rounded p-1 transition-colors cursor-pointer"
                      title="Close Terminal"
                    >
                      <FiX size={18} />
                    </button>
                  </div>

                  {/* Terminal Log Area */}
                  <div className="p-4 space-y-3 bg-[#030604] overflow-y-auto min-h-[220px] max-h-[280px]">
                    {termLogs.map((log, idx) => (
                      <div key={idx}>
                        {log.type === 'cmd' ? (
                          <div className="flex items-center gap-2 text-[#22c55e]">
                            <span className="font-bold text-[#22c55e]">ujjal@sec:~$</span>
                            <span className="text-white">{log.text}</span>
                          </div>
                        ) : (
                          <p className="text-slate-400 leading-relaxed pl-1">{log.text}</p>
                        )}
                      </div>
                    ))}

                    {/* Input Prompt */}
                    <form onSubmit={handleHeroTermSubmit} className="flex items-center gap-2 pt-1">
                      <span className="text-[#22c55e] font-bold shrink-0">ujjal@sec:~$</span>
                      <input
                        type="text"
                        value={termInput}
                        onChange={(e) => setTermInput(e.target.value)}
                        className="bg-transparent border-none outline-none text-white font-mono w-full focus:ring-0 text-xs"
                        placeholder="type help"
                        autoFocus
                      />
                      <FiCornerDownLeft className="text-slate-600 text-xs shrink-0" />
                    </form>
                  </div>

                  {/* Quick Command Toolbar */}
                  <div className="p-3 border-t border-emerald-900/50 bg-[#060e08] flex items-center gap-1.5 flex-wrap shrink-0">
                    {['help', 'about', 'skills', 'projects', 'contact'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => executeQuickCmd(cmd)}
                        className="px-2 py-1 rounded bg-[#09150d] hover:bg-[#122b1b] text-slate-300 hover:text-[#22c55e] border border-emerald-900/60 transition-colors text-[11px] cursor-pointer"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Caption under terminal */}
                <div className="text-left px-1 mt-2 text-slate-500 font-mono text-[11px]">
                  <span>Try: help · about · skills · projects · contact</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Center Indicator */}
      <div className="text-center pt-8 text-slate-600 font-mono text-[11px] uppercase tracking-widest flex items-center justify-center gap-2">
        <span>SCROLL TO DECRYPT</span>
        <span className="text-[#22c55e] font-bold animate-bounce">↓</span>
      </div>
    </section>
  );
}
