import React, { useState, useEffect, useId } from 'react';

// Keyframes are injected once into <head> (id-guarded so multiple instances
// don't duplicate them). They drive both mobile and desktop now.
const KEYFRAMES = `
@keyframes hc-rotateCube { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
@keyframes hc-pulseGlow { 0%,100% { transform: scale(1); opacity: .4; } 50% { transform: scale(1.4); opacity: .8; } }
@keyframes hc-floatParticle { 0%,100% { transform: scale(.5) translateY(0); opacity: .3; } 50% { transform: scale(1) translateY(-16px); opacity: .8; } }
@keyframes hc-rotateCircle { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
/* The app globally disables animations under 1024px for performance.
   These class rules out-rank that universal selector so the textured cube
   keeps animating on mobile. */
@media (max-width: 1023px) {
  .hc-anim { animation: var(--hc-anim, none) !important; }
}
`;

function useIsMobile(breakpoint = 1024) {
  const read = () => typeof window !== 'undefined' && window.innerWidth < breakpoint;
  const [isMobile, setIsMobile] = useState(read);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, [breakpoint]);
  return isMobile;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    onChange();
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }
    mq.addListener(onChange); // older Safari fallback
    return () => mq.removeListener(onChange);
  }, []);
  return reduced;
}

// Face order for the `textures` prop:
//   [0] front  [1] back  [2] right  [3] left  [4] top  [5] bottom
const FACES = [
  { key: 'front',  transform: (h) => `translateZ(${h}px)`,                  accent: '#BAE6FD' },
  { key: 'back',   transform: (h) => `translateZ(-${h}px) rotateY(180deg)`, accent: '#BAE6FD' },
  { key: 'right',  transform: (h) => `rotateY(90deg) translateZ(${h}px)`,   accent: '#38BDF8' },
  { key: 'left',   transform: (h) => `rotateY(-90deg) translateZ(${h}px)`,  accent: '#38BDF8' },
  { key: 'top',    transform: (h) => `rotateX(90deg) translateZ(${h}px)`,   accent: '#FFFFFF' },
  { key: 'bottom', transform: (h) => `rotateX(-90deg) translateZ(${h}px)`,  accent: '#FFFFFF' },
];

/**
 * HeroCanvas — a rotating 3D cube ready for textures.
 *
 * Usage with your own textures (any of these forms):
 *   <HeroCanvas texture="/textures/all-faces.png" />            // same image on every face
 *   <HeroCanvas textures={[front, back, right, left, top, bottom]} />  // per-face
 *   <HeroCanvas textures={[front]} />                            // only some faces; rest stay blank
 *
 * Props:
 *   textures       array of up to 6 image URLs (face order above)
 *   texture        single image URL applied to all faces (fallback)
 *   size           cube edge length in px (defaults: 130 mobile / 160 desktop)
 *   speed          seconds for one full rotation (default 15)
 *   showParticles  floating dots (default true)
 *   showOrbit      orbiting ring (default true)
 *   showGlow       inner glow (default true)
 */
export default function HeroCanvas({
  className = '',
  textures = null,
  texture = '/texture2.png',
  size,
  speed = 15,
  showParticles = true,
  showOrbit = true,
  showGlow = true,
}) {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const gradientId = useId();

  useEffect(() => {
    const id = 'hero-canvas-keyframes';
    if (!document.getElementById(id)) {
      const el = document.createElement('style');
      el.id = id;
      el.textContent = KEYFRAMES;
      document.head.appendChild(el);
    }
  }, []);

  const cubeSize = size ?? (isMobile ? 130 : 160);
  const half = cubeSize / 2;

  // Rotate on mobile + desktop. Only hold still if the user asked for reduced motion.
  const animate = !reducedMotion;

  // Lighter on phones: fewer particles, smaller blur.
  const particleCount = isMobile ? 4 : 8;
  const glowBlur = isMobile ? 12 : 20;

  const faceTexture = (i) => (textures && textures[i]) || texture || null;

  return (
    <div
      role="img"
      aria-label="Rotating Plexura cube"
      className={`relative w-full h-full min-h-[16rem] flex items-center justify-center ${className}`}
    >
      <div
        className="relative w-72 h-72 flex items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        <div style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-35deg) rotateZ(45deg)' }}>
          <div
            className="relative hc-anim"
            style={{
              width: `${cubeSize}px`,
              height: `${cubeSize}px`,
              transformStyle: 'preserve-3d',
              animation: animate ? `hc-rotateCube ${speed}s linear infinite` : 'none',
              '--hc-anim': animate ? `hc-rotateCube ${speed}s linear infinite` : 'none',
              willChange: 'transform',
            }}
          >
            {FACES.map((face, i) => {
              const tex = faceTexture(i);
              return (
                <div
                  key={face.key}
                  className="absolute inset-0 overflow-hidden flex items-center justify-center"
                  style={{
                    transform: face.transform(half),
                    border: '1px solid rgba(255,255,255,0.25)',
                    boxShadow: `0 0 20px ${face.accent}33`,
                    // Solid backing behind textures (handles transparent PNGs);
                    // a tinted gradient when the face is still blank so the cube reads as 3D.
                    background: tex
                      ? '#0A1022'
                      : `linear-gradient(135deg, ${face.accent}40, ${face.accent}1a)`,
                  }}
                >
                  {tex ? (
                    <img
                      src={tex}
                      alt=""
                      className="w-full h-full object-cover"
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 select-none">
                      {face.key}
                    </span>
                  )}
                </div>
              );
            })}

            {showGlow && (
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="w-12 h-12 rounded-full hc-anim"
                  style={{
                    background: 'linear-gradient(135deg, #38BDF8, #FFFFFF)',
                    opacity: 0.6,
                    filter: `blur(${glowBlur}px)`,
                    animation: animate ? 'hc-pulseGlow 3s ease-in-out infinite' : 'none',
                    '--hc-anim': animate ? 'hc-pulseGlow 3s ease-in-out infinite' : 'none',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {showParticles &&
        [...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full hc-anim"
            style={{
              background: i % 3 === 2 ? '#38BDF8' : '#FFFFFF',
              top: `${30 + 40 * Math.sin((i * Math.PI * 2) / particleCount)}%`,
              left: `${30 + 40 * Math.cos((i * Math.PI * 2) / particleCount)}%`,
              opacity: animate ? undefined : 0.5,
              animation: animate
                ? `hc-floatParticle ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`
                : 'none',
              '--hc-anim': animate
                ? `hc-floatParticle ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`
                : 'none',
            }}
          />
        ))}

      {showOrbit && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            className="hc-anim"
            stroke={`url(#${gradientId})`}
            strokeWidth="1"
            strokeDasharray="10 20"
            style={{
              transformOrigin: 'center',
              animation: animate ? 'hc-rotateCircle 30s linear infinite' : 'none',
              '--hc-anim': animate ? 'hc-rotateCircle 30s linear infinite' : 'none',
              willChange: 'transform',
            }}
          />
        </svg>
      )}
    </div>
  );
}