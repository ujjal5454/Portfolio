import React, { useEffect, useRef, useState } from 'react';

const SNAKE_STYLES = {
  cyber: {
    head: '@',
    body: ['=', '=', '=', '=', '=', '-', '-'],
    tail: '~',
    color: '#00ff66',
    glow: 'rgba(0, 255, 102, 0.8)',
  },
  binary: {
    head: '1',
    body: ['0', '1', '1', '0', '1', '0', '0', '1'],
    tail: '0',
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.8)',
  },
  hex: {
    head: '0x',
    body: ['90', 'CC', 'FF', '41', '42', 'EB', 'FE'],
    tail: '00',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.8)',
  },
  matrix: {
    head: '$',
    body: ['#', '%', '&', '*', '!', '?', '>', '<'],
    tail: '.',
    color: '#10b981',
    glow: 'rgba(16, 185, 129, 0.8)',
  }
};

export default function AsciiSnakeCursor({ isEnabled = false, styleName = 'cyber' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const segmentsRef = useRef([]);
  const animFrameRef = useRef(null);

  // Set up segments
  const currentStyle = SNAKE_STYLES[styleName] || SNAKE_STYLES.cyber;
  const numSegments = 16;
  const segmentDistance = 14;

  useEffect(() => {
    // Initialize segments array
    const initialSegments = [];
    for (let i = 0; i < numSegments; i++) {
      initialSegments.push({ x: -100, y: -100 });
    }
    segmentsRef.current = initialSegments;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const segments = segmentsRef.current;
      const target = mouseRef.current;

      if (target.x !== -100 && target.y !== -100) {
        // Update head
        const head = segments[0];
        head.x += (target.x - head.x) * 0.35;
        head.y += (target.y - head.y) * 0.35;

        // Update trailing segments (Inverse Kinematics / rope dynamics)
        for (let i = 1; i < segments.length; i++) {
          const prev = segments[i - 1];
          const curr = segments[i];

          const dx = prev.x - curr.x;
          const dy = prev.y - curr.y;
          const dist = Math.hypot(dx, dy);

          if (dist > segmentDistance) {
            const angle = Math.atan2(dy, dx);
            curr.x = prev.x - Math.cos(angle) * segmentDistance;
            curr.y = prev.y - Math.sin(angle) * segmentDistance;
          }
        }

        // Draw snake ASCII characters
        ctx.font = 'bold 15px "Fira Code", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const style = SNAKE_STYLES[styleName] || SNAKE_STYLES.cyber;

        for (let i = segments.length - 1; i >= 0; i--) {
          const seg = segments[i];
          if (seg.x < 0 || seg.y < 0) continue;

          let char = style.body[i % style.body.length];
          if (i === 0) char = style.head;
          else if (i === segments.length - 1) char = style.tail;

          const alpha = Math.max(0.15, 1 - (i / segments.length) * 0.85);

          ctx.save();
          ctx.globalAlpha = alpha;
          
          if (i === 0) {
            ctx.shadowColor = style.glow;
            ctx.shadowBlur = 12;
            ctx.fillStyle = '#ffffff';
          } else {
            ctx.shadowColor = style.glow;
            ctx.shadowBlur = 6;
            ctx.fillStyle = style.color;
          }

          ctx.fillText(char, seg.x, seg.y);
          ctx.restore();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [isEnabled, styleName]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
