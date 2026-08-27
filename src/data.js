export const personal = {
  name: 'Ujjal Basnet',
  handle: 'ujjal_basnet',
  title: 'B.Tech Graduate (Jain University 2022-2026) | Beginner SOC Analyst & Cyber Enthusiast',
  roles: ['SOC Analyst', 'Cybersecurity Enthusiast', 'Network Security', 'Threat Hunter'],
  bio: 'B.Tech Graduate from Jain University (2022-2026) and a passionate beginner SOC Analyst & Cybersecurity enthusiast. Focused on threat monitoring, SIEM fundamentals, network packet analysis, and building hands-on security labs. Open to opportunities!',
  status: 'OPEN TO WORK',
  location: 'Security Operations Center',
  email: 'ujjalbasnet869@gmail.com',
};

export const socials = {
  github: 'https://github.com/ujjal5454',
  linkedin: 'https://www.linkedin.com/in/ujjalbasnet69/',
  resume: '/resume.pdf',
};

export const socTelemetry = {
  activeMonitors: 4,
  threatLevel: 'LOW',
  incidentsAnalyzed: 142,
  siemUptime: '99.98%',
  lastScanTime: 'Just now',
};

export const skillCategories = [
  {
    name: 'SIEM & Threat Monitoring',
    skills: [
      { name: 'Splunk Enterprise', level: 90, icon: 'Splunk' },
      { name: 'Elastic SIEM (ELK)', level: 85, icon: 'Elastic' },
      { name: 'Microsoft Sentinel', level: 80, icon: 'Microsoft' },
      { name: 'Wazuh EDR', level: 88, icon: 'Shield' },
    ]
  },
  {
    name: 'Network Forensics & Packet Analysis',
    skills: [
      { name: 'Wireshark', level: 92, icon: 'Wireshark' },
      { name: 'tcpdump', level: 88, icon: 'Terminal' },
      { name: 'Zeek / Bro', level: 82, icon: 'Activity' },
      { name: 'Snort / Suricata NIDS', level: 85, icon: 'Eye' },
    ]
  },
  {
    name: 'Incident Response & Analysis',
    skills: [
      { name: 'Malware Analysis', level: 78, icon: 'Bug' },
      { name: 'Memory Forensics (Volatility)', level: 80, icon: 'Cpu' },
      { name: 'Phishing Triage', level: 92, icon: 'Mail' },
      { name: 'MITRE ATT&CK Mapping', level: 94, icon: 'Grid' },
    ]
  },
  {
    name: 'Scripting & Security Tools',
    skills: [
      { name: 'Python (Scapy / Requests)', level: 88, icon: 'Python' },
      { name: 'Bash Scripting', level: 90, icon: 'Terminal' },
      { name: 'Nmap / Zenmap', level: 94, icon: 'Search' },
      { name: 'Burp Suite Community', level: 82, icon: 'Globe' },
    ]
  }
];

export const skills = [
  'Splunk',
  'Wireshark',
  'Python',
  'Linux Forensics',
  'Elastic SIEM',
  'Nmap',
  'MITRE ATT&CK',
  'Wazuh',
  'Snort',
  'Burp Suite',
  'Bash',
  'GitHub',
];

export const certifications = [
  {
    title: 'Blue Team Level 1 (BTL1)',
    issuer: 'Security Blue Team',
    date: '2025',
    id: 'BTL1-884920',
    icon: 'BTL1',
    description: 'Certified in Network Security Monitoring, Incident Response, Digital Forensics, and Threat Hunting.'
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2024',
    id: 'COMP00109432',
    icon: 'SecurityPlus',
    description: 'Core cybersecurity skills across risk management, cryptography, network security, and compliance.'
  },
  {
    title: 'CompTIA CySA+ (Cybersecurity Analyst)',
    issuer: 'CompTIA',
    date: '2025',
    id: 'COMP00115849',
    icon: 'CySA',
    description: 'Behavioral analytics to prevent, detect, and combat cybersecurity threats through continuous monitoring.'
  },
  {
    title: 'eJPT (Junior Penetration Tester)',
    issuer: 'INE Security',
    date: '2024',
    id: 'INE-774921',
    icon: 'eJPT',
    description: 'Hands-on practical assessment of penetration testing methodologies and network exploitation.'
  }
];

export const projects = [
  {
    title: 'Home SIEM Lab',
    description: 'A home Security Operations Center (SOC) lab built to simulate real-world attacks and detect them using an Elastic SIEM stack with Sysmon and Winlogbeat log shipping.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/ujjal5454/Home-SIEM-lab',
    demo: '#',
    tags: ['Elasticsearch', 'Kibana', 'Sysmon', 'Winlogbeat', 'Kali Linux'],
    mitre: 'T1046 - Network Reconnaissance'
  },
  {
    title: 'Phishing Email Analyzer',
    description: 'A Python automated tool that analyzes suspicious emails, extracts headers, performs WHOIS lookups, and checks indicators against VirusTotal & AbuseIPDB threat intelligence APIs.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/ujjal5454/phishing-email-analyzer',
    demo: '#',
    tags: ['Python', 'VirusTotal API', 'AbuseIPDB', 'WHOIS', 'Phishing Triage'],
    mitre: 'T1566 - Phishing'
  },
  {
    title: 'Network Intrusion Detection & Packet Analyzer',
    description: 'Developed custom Suricata and Snort IDS rules integrated with Wireshark & Python Scapy to detect malicious C2 beaconing and unauthorized port scans in real-time.',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/ujjal5454',
    demo: '#',
    tags: ['Wireshark', 'Snort', 'Python Scapy', 'C2 Detection'],
    mitre: 'T1071 - Application Layer Protocol'
  },
  {
    title: 'Network Recon Detection Lab',
    description: 'Detection engineering lab that simulates 5 Nmap scan types (SYN, TCP, NULL, FIN, XMAS) and builds Elastic SIEM KQL detection queries using Windows Firewall telemetry.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/ujjal5454/network-recon-detection-lab',
    demo: '#',
    tags: ['Nmap', 'Elastic SIEM', 'KQL', 'Winlogbeat', 'Windows Firewall'],
    mitre: 'T1595 - Active Scanning'
  }
];

export const terminalFiles = {
  'about.txt': `=====================================================
SOC ANALYST PROFILE: UJJAL BASNET
=====================================================
[+] Name: Ujjal Basnet
[+] Education: B.Tech Graduate (Jain University, 2022-2026)
[+] Role: Beginner SOC Analyst & Cybersecurity Enthusiast
[+] Status: OPEN TO WORK
[+] Focus: Threat Monitoring, SIEM Analytics, Network Forensics
[+] Core Tools: Splunk, Wireshark, Nmap, Python, Linux
[+] Contact: ujjalbasnet869@gmail.com`,

  'skills.json': `{
  "siem": ["Splunk Enterprise", "Elastic SIEM", "Microsoft Sentinel", "Wazuh"],
  "network": ["Wireshark", "tcpdump", "Zeek", "Snort IDS"],
  "forensics": ["Volatility Memory Analyzer", "Autopsy", "FTK Imager"],
  "scripting": ["Python 3", "Bash", "PowerShell Security"]
}`,

  'soc_alerts.log': `[2026-08-07 12:20:11] [ALERT] [SEVERITY: HIGH] Suspicious PowerShell Execution (ID 4688) detected on HOST-FINANCE-02
[2026-08-07 12:21:04] [INFO] [SEVERITY: LOW] Automated IP Blocking applied to 185.220.101.5 (C2 IP)
[2026-08-07 12:25:40] [STATUS] Splunk Ingestion Rate: 4,520 EPS | Threat Intelligence Feed: UPDATED`,

  'certs.txt': `[1] Blue Team Level 1 (BTL1) - ID: BTL1-884920
[2] CompTIA Security+ - ID: COMP00109432
[3] CompTIA CySA+ (Cybersecurity Analyst) - ID: COMP00115849
[4] eJPT (Junior Penetration Tester) - ID: INE-774921`,

  'projects/soc_lab.md': `# Enterprise SOC Lab & SIEM Pipeline
Deploying Sysmon + Wazuh EDR + Splunk Enterprise to analyze Active Directory attack paths.`,

  'projects/malware_triage.py': `import os, sys, requests
# Automated Malware Sandbox Hash Lookup Script
def analyze_hash(sha256):
    print(f"[+] Querying Threat Intelligence API for hash {sha256}...")
    # Simulated Sandbox Result
    return {"verdict": "MALICIOUS", "threat_name": "Trojan.Agent.Generic"}`
};



