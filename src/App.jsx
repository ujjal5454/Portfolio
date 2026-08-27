import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SocDashboard from './components/SocDashboard.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import AsciiSnakeCursor from './components/AsciiSnakeCursor.jsx';
import LinuxTerminal from './components/LinuxTerminal.jsx';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [snakeEnabled, setSnakeEnabled] = useState(false);
  const [snakeStyle, setSnakeStyle] = useState('cyber');

  return (
    <div className="bg-cyber-grid min-h-screen text-slate-100 scanline relative selection:bg-emerald-500 selection:text-slate-950">
      {/* Interactive ASCII Snake Mouse Cursor Overlay */}
      <AsciiSnakeCursor isEnabled={snakeEnabled} styleName={snakeStyle} />

      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        snakeEnabled={snakeEnabled}
        onToggleSnake={setSnakeEnabled}
        snakeStyle={snakeStyle}
        onSetSnakeStyle={setSnakeStyle}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <SocDashboard />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer & Floating Controls */}
      <Footer />
      <ScrollToTop />

      {/* Linux Terminal Modal Emulator */}
      <LinuxTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onSetSnakeStyle={setSnakeStyle}
        onToggleSnake={setSnakeEnabled}
      />
    </div>
  );
}
