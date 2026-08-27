import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiX, FiMinus, FiCopy, FiCheck } from 'react-icons/fi';
import { personal, terminalFiles, socTelemetry } from '../data.js';

export default function LinuxTerminal({ isOpen, onClose, onSetSnakeStyle, onToggleSnake }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Linux soc-workstation 6.5.0-kali3-amd64 #1 SMP PREEMPT_DYNAMIC x86_64\nWelcome to SOC Workstation OS (v2.4 LTS). Type "help" to view available security commands.'
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  const availableCmds = ['help', 'ls', 'cat', 'whoami', 'nmap', 'tcpdump', 'splunk', 'sysmon', 'clear', 'date', 'uptime', 'sudo', 'matrix', 'snake'];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    if (!rawCmd) return;

    // Add to history
    const newCmdHistory = [...cmdHistory, rawCmd];
    setCmdHistory(newCmdHistory);
    setHistoryIndex(newCmdHistory.length);

    const parts = rawCmd.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts[1] ? parts[1] : '';

    let outputText = '';
    let outputType = 'output';

    switch (cmd) {
      case 'help':
      case 'man':
        outputText = `Available Linux & SOC Commands:
  ls           - List files in current directory
  cat <file>   - Display contents of a file (e.g. cat about.txt, cat skills.json)
  whoami       - Display current analyst credentials and security clearance
  nmap [ip]    - Perform network port scan simulation
  tcpdump      - Stream real-time simulated network packet capture
  splunk       - Display live SIEM threat telemetry log stream
  sysmon       - Query endpoint process execution logs
  snake [mode] - Toggle or set ASCII snake style (cyber | binary | hex | matrix | off)
  matrix       - Stream matrix code animation
  date / uptime- Display system clock & active workstation uptime
  sudo su      - Request elevated root privileges
  clear        - Clear terminal screen`;
        break;

      case 'ls':
        outputText = `total 24K
-rw-r--r-- 1 analyst soc 520 Aug 7 12:00 about.txt
-rw-r--r-- 1 analyst soc 340 Aug 7 12:00 skills.json
-rw-r--r-- 1 analyst soc 412 Aug 7 12:00 soc_alerts.log
-rw-r--r-- 1 analyst soc 290 Aug 7 12:00 certs.txt
drwxr-xr-x 2 analyst soc 4096 Aug 7 12:00 projects/`;
        break;

      case 'cat':
        if (!arg) {
          outputText = 'cat: missing filename. Usage: cat <filename> (e.g. cat about.txt)';
          outputType = 'error';
        } else if (terminalFiles[arg]) {
          outputText = terminalFiles[arg];
        } else if (arg === 'projects' || arg === 'projects/') {
          outputText = 'cat: projects: Is a directory. Use "cat projects/soc_lab.md" or "cat projects/malware_triage.py"';
          outputType = 'error';
        } else {
          outputText = `cat: ${arg}: No such file or directory. Try: ls`;
          outputType = 'error';
        }
        break;

      case 'whoami':
        outputText = `[+] User: ${personal.name} (${personal.handle})
[+] Role: ${personal.title}
[+] Status: ${personal.status}
[+] Security Clearance: LEVEL 4 (SOC ANALYST)
[+] Primary Terminal: /dev/pts/0 (SOC-WORKSTATION-MAIN)`;
        break;

      case 'nmap':
        const targetIp = arg || '10.0.0.1';
        outputText = `Starting Nmap 7.94 ( https://nmap.org ) at 2026-08-07 12:30 UTC
Nmap scan report for target (${targetIp})
Host is up (0.0012s latency).
Not shown: 995 closed tcp ports
PORT     STATE SERVICE       VERSION
22/tcp   OPEN  ssh           OpenSSH 9.3p1 (Protocol 2.0)
80/tcp   OPEN  http          nginx 1.24.0
443/tcp  OPEN  ssl/https     nginx 1.24.0 (TLS v1.3)
8000/tcp OPEN  splunkd       Splunkd httpd 9.1.2
8080/tcp OPEN  http-proxy    Zeek Telemetry Collector

Nmap done: 1 IP address (1 host up) scanned in 1.48 seconds.`;
        break;

      case 'tcpdump':
      case 'wireshark':
        outputText = `12:30:01.002144 IP 192.168.1.105.54102 > 10.0.0.1.443: Flags [S], seq 39201948, win 64240
12:30:01.002591 IP 10.0.0.1.443 > 192.168.1.105.54102: Flags [S.], seq 8849201, ack 39201949
12:30:01.003110 IP 192.168.1.105.54102 > 10.0.0.1.443: Flags [.], ack 1, win 502
12:30:01.014902 IP 192.168.1.105.54102 > 10.0.0.1.443: TLSv1.3 Client Hello (SNI: soc.internal.domain)
[+] Captured 4 packets on interface eth0. 0 drops.`;
        break;

      case 'splunk':
      case 'sysmon':
        outputText = `[+] SIEM Telemetry Active Monitors: ${socTelemetry.activeMonitors}
[+] Current Threat Level: ${socTelemetry.threatLevel}
[+] Incidents Analyzed: ${socTelemetry.incidentsAnalyzed}
[+] Splunk Uptime: ${socTelemetry.siemUptime}
--- Recent Log Stream ---
[ALERT] Sysmon Event ID 1: Process Create - cmd.exe launching powershell -ExecutionPolicy Bypass
[ALERT] Sysmon Event ID 3: Network Connection - powershell.exe connected to 185.220.101.5:443
[INFO] Threat Intel Lookup: IP 185.220.101.5 flagged as Known C2 Node (Score: 92/100)`;
        break;

      case 'snake':
        if (arg === 'off') {
          onToggleSnake(false);
          outputText = '[+] ASCII Snake cursor trail DISABLED.';
        } else if (['cyber', 'binary', 'hex', 'matrix'].includes(arg)) {
          onToggleSnake(true);
          onSetSnakeStyle(arg);
          outputText = `[+] ASCII Snake cursor trail set to mode: [${arg.toUpperCase()}].`;
        } else {
          onToggleSnake(true);
          onSetSnakeStyle('cyber');
          outputText = `[+] ASCII Snake cursor trail ENABLED. Available modes: snake cyber | snake binary | snake hex | snake matrix | snake off`;
        }
        break;

      case 'matrix':
        outputText = `01000011 01011001 01000010 01000101 01010010 01010011 01000101 01000011 01010101 01010010 01001001 01010100 01011001
[+] Matrix Digital Stream Active. Defending Network Core...`;
        break;

      case 'date':
        outputText = new Date().toString();
        break;

      case 'uptime':
        outputText = ' 12:30:15 up 42 days, 14:02, 1 user, load average: 0.12, 0.08, 0.04';
        break;

      case 'sudo':
        if (arg === 'su' || arg === '-i') {
          outputText = `[sudo] password for analyst: 
[+] ACCESS GRANTED: Root Privileges Activated. Welcome, Master Administrator.`;
        } else {
          outputText = 'usage: sudo su (request root elevated privileges)';
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputText = `bash: ${cmd}: command not found. Type "help" for a list of predefined commands.`;
        outputType = 'error';
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: rawCmd },
      { type: outputType, text: outputText }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = Math.min(cmdHistory.length - 1, historyIndex + 1);
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx] || '');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim();
      if (current) {
        const match = availableCmds.find((c) => c.startsWith(current));
        if (match) setInputVal(match);
      }
    }
  };

  const copyTerminalOutput = () => {
    const textToCopy = history.map((h) => h.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="cyber-card flex flex-col overflow-hidden w-full max-w-4xl h-[550px] border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
        >
          {/* Terminal Window Header */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block cursor-pointer" onClick={onClose} title="Close Terminal" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/50 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-2">
                <FiTerminal className="text-emerald-400" /> analyst@soc-workstation: ~
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={copyTerminalOutput}
                className="text-slate-400 hover:text-emerald-400 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                title="Copy Terminal Output"
              >
                {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-red-400 hover:bg-red-500/20 rounded p-1 transition-colors cursor-pointer"
                title="Close Terminal"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* Terminal Output Body */}
          <div
            className="grow bg-[#060a12] p-4 sm:p-5 overflow-y-auto font-mono text-xs sm:text-sm space-y-3 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => {
              if (item.type === 'command') {
                return (
                  <div key={idx} className="flex items-center gap-2 text-emerald-400">
                    <span className="text-emerald-500 font-bold">analyst@soc-workstation:~$</span>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                );
              }
              return (
                <pre
                  key={idx}
                  className={`whitespace-pre-wrap leading-relaxed ${
                    item.type === 'error'
                      ? 'text-red-400'
                      : item.type === 'system'
                      ? 'text-cyan-400'
                      : 'text-slate-300'
                  }`}
                >
                  {item.text}
                </pre>
              );
            })}

            {/* Input Prompt */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-emerald-500 font-bold shrink-0">analyst@soc-workstation:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-white font-mono w-full focus:ring-0"
                placeholder="type 'help'..."
                autoFocus
              />
            </form>
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Toolbar */}
          <div className="bg-slate-950 px-4 py-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
            <span className="text-slate-500">Quick Commands:</span>
            {['help', 'ls', 'whoami', 'nmap', 'splunk', 'snake', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInputVal(cmd);
                  setTimeout(() => inputRef.current?.focus(), 50);
                }}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 hover:border-emerald-500/50 transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
