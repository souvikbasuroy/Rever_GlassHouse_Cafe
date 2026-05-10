import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 4 + Math.random() * 6,
  duration: 6 + Math.random() * 10,
  delay: Math.random() * 4,
  opacity: 0.08 + Math.random() * 0.18,
}));

const CoffeeCup = ({ progress }) => (
  <svg width="120" height="130" viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Steam wisps */}
    {[0, 1, 2].map((i) => (
      <motion.path
        key={i}
        d={`M ${38 + i * 16} 18 Q ${34 + i * 16} 10 ${38 + i * 16} 2 Q ${42 + i * 16} -6 ${38 + i * 16} -14`}
        stroke="#C8976A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0, y: 0 }}
        animate={{
          pathLength: [0, 1, 1],
          opacity: [0, 0.7, 0],
          y: [-4, -14, -22],
        }}
        transition={{
          duration: 2.2,
          delay: i * 0.45,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}

    {/* Cup body */}
    <path
      d="M18 38 L26 108 Q26 116 34 116 L86 116 Q94 116 94 108 L102 38 Z"
      fill="#2A1810"
      stroke="#C8976A"
      strokeWidth="1.5"
    />

    {/* Coffee fill */}
    <motion.path
      d="M22 48 L28 108 Q28 112 34 112 L86 112 Q92 112 92 108 L98 48 Z"
      fill="#6B3A2A"
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
      transition={{ duration: 0.15, ease: 'linear' }}
    />

    {/* Coffee surface shine */}
    {progress > 10 && (
      <motion.ellipse
        cx="60"
        cy="52"
        rx={Math.min(34, 34 * (progress / 60))}
        ry="5"
        fill="#8B5540"
        opacity="0.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
      />
    )}

    {/* Cup rim */}
    <ellipse cx="60" cy="38" rx="42" ry="8" fill="#352018" stroke="#C8976A" strokeWidth="1.5" />

    {/* Handle */}
    <path
      d="M102 54 Q126 54 126 74 Q126 94 102 94"
      stroke="#C8976A"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M102 62 Q116 62 116 74 Q116 86 102 86"
      stroke="#2A1810"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Saucer */}
    <ellipse cx="60" cy="122" rx="56" ry="8" fill="#2A1810" stroke="#C8976A" strokeWidth="1.2" />
    <ellipse cx="60" cy="122" rx="40" ry="5" fill="#352018" />
  </svg>
);

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading | revealing | done

  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const raw = currentStep / steps;
      // Ease-in-out progress curve for visual interest
      const eased = raw < 0.5
        ? 2 * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 2) / 2;
      const newProgress = Math.min(Math.round(eased * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setPhase('revealing');
        setTimeout(() => {
          setPhase('done');
          setTimeout(onComplete, 900);
        }, 1200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0E0705',
            overflow: 'hidden',
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          }}
        >
          {/* Google Font */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@100;200;300&display=swap');
          `}</style>

          {/* Ambient radial glow */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(120, 55, 20, 0.22) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Vignette */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Floating particles */}
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              style={{
                position: 'absolute',
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size * 1.4,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                background: '#C8976A',
                opacity: p.opacity,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: [-20, -80, -20],
                x: [0, (Math.random() - 0.5) * 30, 0],
                opacity: [p.opacity, p.opacity * 0.3, p.opacity],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Horizontal rule top */}
          <motion.div
            style={{
              position: 'absolute',
              top: 40,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(200,151,106,0.3), transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Main content */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

            

            {/* Coffee Cup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ marginBottom: 32 }}
            >
              <CoffeeCup progress={progress} />
            </motion.div>

            {/* Progress counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(72px, 12vw, 110px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#F5EDE3',
                lineHeight: 1,
                marginBottom: 12,
                letterSpacing: '-0.02em',
              }}
            >
              {progress}
              <span style={{ fontSize: '40%', color: 'rgba(200,151,106,0.7)', fontStyle: 'normal', marginLeft: 4 }}>%</span>
            </motion.div>

            {/* Divider ornament */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, width: 260 }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(200,151,106,0.25)' }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(200,151,106,0.5)' }} />
              <div style={{ flex: 1, height: '1px', background: 'rgba(200,151,106,0.25)' }} />
            </div>

            {/* Brand name — slides in at 100% */}
            <div style={{ overflow: 'hidden', height: 56, marginBottom: 8 }}>
              <motion.h1
                initial={{ y: '110%', opacity: 0 }}
                animate={phase === 'revealing' || progress >= 98 ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(22px, 4vw, 32px)',
                  fontWeight: 300,
                  letterSpacing: '0.35em',
                  color: '#C8976A',
                  textTransform: 'uppercase',
                  margin: 0,
                  paddingLeft: '0.35em',
                  whiteSpace: 'nowrap',
                }}
              >
                Rever GlassHouse
              </motion.h1>
            </div>

            <div style={{ overflow: 'hidden', height: 28 }}>
              <motion.p
                initial={{ y: '110%', opacity: 0 }}
                animate={phase === 'revealing' || progress >= 98 ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 100,
                  letterSpacing: '0.55em',
                  color: 'rgba(245,237,227,0.45)',
                  textTransform: 'uppercase',
                  margin: 0,
                  paddingLeft: '0.55em',
                }}
              >
                Café
              </motion.p>
            </div>

            {/* Progress bar */}
            <div style={{ position: 'relative', marginTop: 40, width: 'min(340px, 60vw)' }}>
              {/* Track */}
              <div style={{
                width: '100%',
                height: '1px',
                background: 'rgba(200,151,106,0.15)',
                position: 'relative',
              }}>
                {/* Fill */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    background: 'linear-gradient(90deg, rgba(200,151,106,0.4), #C8976A)',
                    width: `${progress}%`,
                    transformOrigin: 'left',
                  }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                />
                {/* Glowing dot */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: -3,
                    left: `${progress}%`,
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#C8976A',
                    boxShadow: '0 0 8px rgba(200,151,106,0.9)',
                    transform: 'translateX(-50%)',
                  }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                />
              </div>
            </div>

            {/* Loading label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'revealing' ? 0 : 0.4 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: 10,
                fontWeight: 200,
                letterSpacing: '0.5em',
                color: '#C8976A',
                textTransform: 'uppercase',
                marginTop: 16,
                paddingLeft: '0.5em',
              }}
            >
              Brewing your experience
            </motion.p>
          </div>

          {/* Bottom rule */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(200,151,106,0.3), transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          />

          {/* Corner marks */}
          {[
            { top: 24, left: 24 },
            { top: 24, right: 24 },
            { bottom: 24, left: 24 },
            { bottom: 24, right: 24 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                ...pos,
                width: 16,
                height: 16,
                borderTop: pos.top !== undefined ? '1px solid rgba(200,151,106,0.35)' : 'none',
                borderBottom: pos.bottom !== undefined ? '1px solid rgba(200,151,106,0.35)' : 'none',
                borderLeft: pos.left !== undefined ? '1px solid rgba(200,151,106,0.35)' : 'none',
                borderRight: pos.right !== undefined ? '1px solid rgba(200,151,106,0.35)' : 'none',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;