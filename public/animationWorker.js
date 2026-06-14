/**
 * animationWorker.js - HD Atomic Swirls + Lavender Purple Color Transitions
 * 
 * Place this file in: /public/animationWorker.js
 * 
 * FEATURES:
 * ═══════════════════════════════════════════════════════════════
 * ✦ HD RENDERING
 *   - Full device pixel ratio support (up to 3x)
 *   - Sharp rendering on Retina/HiDPI displays
 *   - Anti-aliased edges and smooth gradients
 * 
 * ✦ ATOMIC SWIRLS
 *   - Multiple electrons orbiting the cube like an atom
 *   - 3 orbital planes tilted at different 3D angles
 *   - Glowing trails that fade behind each electron
 *   - Pulsing electron cores with outer glow halos
 *   - Visible dashed orbital path rings
 * 
 * ✦ LAVENDER PURPLE COLOR CYCLE
 *   - Smooth transition: Blue/Cyan → Lavender Purple → Blue/Cyan
 *   - ~7 second full cycle using sine wave interpolation
 *   - All elements transition together (cube, swirls, glows, particles)
 * 
 * ✦ 3D CUBE
 *   - 6-face cube with gradient fills
 *   - Diamond orientation (rotated 45°)
 *   - Continuous Y-axis rotation (15s per revolution)
 *   - Glowing borders with shadow effects
 *   - Logo on each face
 *   - Grid pattern overlay (desktop only)
 * 
 * ✦ VISUAL EFFECTS
 *   - Ambient background glow
 *   - Pulsing core glow at center
 *   - Outer orbital ring
 *   - Floating ambient particles
 * 
 * ✦ MOBILE OPTIMIZATION
 *   - Reduced electron count (4 vs 9)
 *   - Shorter trails (20 vs 35 points)
 *   - Smaller electron size
 *   - Grid pattern disabled
 *   - Fewer ambient particles
 * ═══════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════
// GLOBAL STATE
// ═══════════════════════════════════════════════════════════════

let canvas = null;
let ctx = null;
let logo = null;
let logoLoaded = false;
let animationId = null;
let isRunning = false;
let lastFrameTime = 0;
let isMobile = false;
let hdMode = true;

// Animation state
const state = {
  rotation: 0,           // Cube Y rotation
  pulse: 0,              // For pulsing effects
  time: 0,               // Total elapsed time
  colorPhase: 0,         // For color transitions
  width: 0,              // Canvas logical width
  height: 0,             // Canvas logical height
  dpr: 1,                // Device pixel ratio
};

// ═══════════════════════════════════════════════════════════════
// COLOR SYSTEM - BLUE/CYAN ↔ LAVENDER PURPLE
// ═══════════════════════════════════════════════════════════════

// Original blue/cyan theme colors
const COLORS_ORIGINAL = {
  primary:   { r: 0,   g: 123, b: 255 },  // #007BFF - Blue
  secondary: { r: 0,   g: 194, b: 203 },  // #00C2CB - Cyan
  accent:    { r: 62,  g: 228, b: 168 },  // #3EE4A8 - Teal/Green
};

// Lavender purple theme colors
const COLORS_LAVENDER = {
  primary:   { r: 167, g: 139, b: 250 },  // #A78BFA - Purple
  secondary: { r: 192, g: 168, b: 255 },  // #C0A8FF - Lavender
  accent:    { r: 216, g: 200, b: 255 },  // #D8C8FF - Light Lavender
};

// Current interpolated colors (updated each frame)
const colors = {
  primary:   { r: 0, g: 123, b: 255 },
  secondary: { r: 0, g: 194, b: 203 },
  accent:    { r: 62, g: 228, b: 168 },
};

// Linear interpolation
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Interpolate between two colors
function lerpColor(c1, c2, t) {
  return {
    r: lerp(c1.r, c2.r, t),
    g: lerp(c1.g, c2.g, t),
    b: lerp(c1.b, c2.b, t),
  };
}

// Smooth step function for smoother transitions
function smoothStep(t) {
  return t * t * (3 - 2 * t);
}

// Update all colors based on current phase
function updateColors() {
  // Sine wave creates smooth 0→1→0 oscillation
  const rawT = (Math.sin(state.colorPhase) + 1) / 2;
  // Apply smoothstep for even smoother transition
  const t = smoothStep(rawT);
  
  colors.primary = lerpColor(COLORS_ORIGINAL.primary, COLORS_LAVENDER.primary, t);
  colors.secondary = lerpColor(COLORS_ORIGINAL.secondary, COLORS_LAVENDER.secondary, t);
  colors.accent = lerpColor(COLORS_ORIGINAL.accent, COLORS_LAVENDER.accent, t);
}

// Convert color object to rgba string
function rgba(color, alpha) {
  return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${alpha})`;
}

// Convert color object to rgb string
function rgb(color) {
  return `rgb(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)})`;
}

// ═══════════════════════════════════════════════════════════════
// CUBE CONFIGURATION
// ═══════════════════════════════════════════════════════════════

const CUBE = {
  size: 160,                              // Cube size in pixels
  half: 80,                               // Half size for vertex calculations
  rotationSpeed: (2 * Math.PI) / 15000,   // 15 seconds per full rotation
  tiltX: -35 * (Math.PI / 180),           // X tilt in radians (-35°)
  tiltZ: 45 * (Math.PI / 180),            // Z tilt in radians (45°)
  perspective: 1000,                       // Perspective distance
  logoSize: 80,                           // Logo size on each face
  logoOpacity: 0.88,                      // Logo opacity
  borderWidth: 2,                         // Face border width
  glowBlur: 25,                           // Border glow blur amount
  gridSize: 16,                           // Grid pattern cell size
  gridOpacity: 0.08,                      // Grid pattern opacity
};

// ═══════════════════════════════════════════════════════════════
// ATOMIC SWIRL (ELECTRON) CONFIGURATION
// ═══════════════════════════════════════════════════════════════

// Orbital configurations - each defines a tilted orbital plane
const ORBITAL_CONFIGS = [
  {
    radius: 120,
    tiltX: Math.PI * 0.42,
    tiltY: 0,
    tiltZ: Math.PI * 0.05,
    speed: 0.0028,
    direction: 1,
    color: 'accent',
  },
  {
    radius: 145,
    tiltX: Math.PI * 0.15,
    tiltY: Math.PI * 0.32,
    tiltZ: Math.PI * 0.22,
    speed: 0.0022,
    direction: -1,
    color: 'secondary',
  },
  {
    radius: 170,
    tiltX: -Math.PI * 0.2,
    tiltY: -Math.PI * 0.28,
    tiltZ: Math.PI * 0.38,
    speed: 0.0017,
    direction: 1,
    color: 'primary',
  },
];

const ELECTRON_CONFIG = {
  sizeDesktop: 7,
  sizeMobile: 5,
  trailLengthDesktop: 35,
  trailLengthMobile: 20,
  electronsPerOrbitDesktop: 3,
  electronsPerOrbitMobile: 2,
  glowMultiplier: 5,
  trailWidthMultiplier: 2.5,
  pulseSpeed: 0.004,
};

// Electron storage
const electrons = [];

// ═══════════════════════════════════════════════════════════════
// AMBIENT PARTICLE CONFIGURATION
// ═══════════════════════════════════════════════════════════════

const PARTICLE_CONFIG = {
  countDesktop: 12,
  countMobile: 6,
  minRadius: 200,
  maxRadius: 260,
  minSpeed: 0.00012,
  maxSpeed: 0.00025,
  minSize: 1.5,
  maxSize: 3.5,
  glowSize: 5,
  verticalMotion: 25,
};

// Particle storage
const particles = [];

// ═══════════════════════════════════════════════════════════════
// CUBE FACE STORAGE
// ═══════════════════════════════════════════════════════════════

const faces = [];
const sortedFaces = [];

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Initialize cube faces with vertices and color assignments
 */
function initFaces() {
  const h = CUBE.half;
  faces.length = 0;
  
  // Define 6 faces with their 4 corner vertices and color type
  faces.push(
    // Front face
    {
      vertices: [[-h, -h, h], [h, -h, h], [h, h, h], [-h, h, h]],
      colorType: 'primary',
      id: 0,
    },
    // Back face
    {
      vertices: [[h, -h, -h], [-h, -h, -h], [-h, h, -h], [h, h, -h]],
      colorType: 'primary',
      id: 1,
    },
    // Right face
    {
      vertices: [[h, -h, h], [h, -h, -h], [h, h, -h], [h, h, h]],
      colorType: 'secondary',
      id: 2,
    },
    // Left face
    {
      vertices: [[-h, -h, -h], [-h, -h, h], [-h, h, h], [-h, h, -h]],
      colorType: 'secondary',
      id: 3,
    },
    // Bottom face
    {
      vertices: [[-h, -h, -h], [h, -h, -h], [h, -h, h], [-h, -h, h]],
      colorType: 'accent',
      id: 4,
    },
    // Top face
    {
      vertices: [[-h, h, h], [h, h, h], [h, h, -h], [-h, h, -h]],
      colorType: 'accent',
      id: 5,
    }
  );
}

/**
 * Initialize electrons for atomic swirl effect
 */
function initElectrons() {
  electrons.length = 0;
  
  const numOrbits = isMobile ? 2 : 3;
  const electronsPerOrbit = isMobile 
    ? ELECTRON_CONFIG.electronsPerOrbitMobile 
    : ELECTRON_CONFIG.electronsPerOrbitDesktop;
  const electronSize = isMobile 
    ? ELECTRON_CONFIG.sizeMobile 
    : ELECTRON_CONFIG.sizeDesktop;
  const trailLength = isMobile 
    ? ELECTRON_CONFIG.trailLengthMobile 
    : ELECTRON_CONFIG.trailLengthDesktop;
  
  for (let orbitIndex = 0; orbitIndex < numOrbits; orbitIndex++) {
    const orbital = ORBITAL_CONFIGS[orbitIndex];
    
    for (let electronIndex = 0; electronIndex < electronsPerOrbit; electronIndex++) {
      // Evenly space electrons around the orbit
      const startAngle = (electronIndex / electronsPerOrbit) * Math.PI * 2;
      
      electrons.push({
        // Position
        angle: startAngle,
        radius: orbital.radius,
        
        // Orbital plane orientation
        tiltX: orbital.tiltX,
        tiltY: orbital.tiltY,
        tiltZ: orbital.tiltZ,
        
        // Movement
        speed: orbital.speed * orbital.direction,
        
        // Appearance
        size: electronSize + Math.random() * 2,
        colorType: orbital.color,
        
        // Trail
        trail: [],
        trailMax: trailLength,
        
        // Metadata
        orbitIndex: orbitIndex,
        electronIndex: electronIndex,
        
        // Pulse phase offset for variation
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
  }
}

/**
 * Initialize ambient floating particles
 */
function initParticles() {
  particles.length = 0;
  
  const count = isMobile 
    ? PARTICLE_CONFIG.countMobile 
    : PARTICLE_CONFIG.countDesktop;
  
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    
    particles.push({
      angle: angle,
      radius: PARTICLE_CONFIG.minRadius + 
              Math.random() * (PARTICLE_CONFIG.maxRadius - PARTICLE_CONFIG.minRadius),
      speed: PARTICLE_CONFIG.minSpeed + 
             Math.random() * (PARTICLE_CONFIG.maxSpeed - PARTICLE_CONFIG.minSpeed),
      size: PARTICLE_CONFIG.minSize + 
            Math.random() * (PARTICLE_CONFIG.maxSize - PARTICLE_CONFIG.minSize),
      phaseOffset: Math.random() * Math.PI * 2,
      yOffset: 0,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 3D TRANSFORMATION FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Rotate point around X axis
 */
function rotateX(x, y, z, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: x,
    y: y * cos - z * sin,
    z: y * sin + z * cos,
  };
}

/**
 * Rotate point around Y axis
 */
function rotateY(x, y, z, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: x * cos - z * sin,
    y: y,
    z: x * sin + z * cos,
  };
}

/**
 * Rotate point around Z axis
 */
function rotateZ(x, y, z, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: x * cos - y * sin,
    y: x * sin + y * cos,
    z: z,
  };
}

/**
 * Project cube vertex to 2D screen coordinates
 * Applies: Y rotation → X tilt → Z tilt → perspective projection
 */
function projectCubeVertex(x, y, z, centerX, centerY) {
  // Apply cube's Y-axis rotation
  let p = rotateY(x, y, z, state.rotation);
  
  // Apply diamond orientation tilts
  p = rotateX(p.x, p.y, p.z, CUBE.tiltX);
  p = rotateZ(p.x, p.y, p.z, CUBE.tiltZ);
  
  // Perspective projection
  const scale = CUBE.perspective / (CUBE.perspective + p.z);
  
  return {
    x: centerX + p.x * scale,
    y: centerY + p.y * scale,
    z: p.z,
    scale: scale,
  };
}

/**
 * Project electron position to 2D screen coordinates
 * Applies: Orbital tilts → Scene tilt → perspective projection
 */
function projectElectronPosition(x, y, z, centerX, centerY, electron) {
  // Apply orbital plane tilts
  let p = rotateX(x, y, z, electron.tiltX);
  p = rotateY(p.x, p.y, p.z, electron.tiltY);
  p = rotateZ(p.x, p.y, p.z, electron.tiltZ);
  
  // Apply lighter scene tilt (electrons don't follow cube rotation)
  p = rotateX(p.x, p.y, p.z, CUBE.tiltX * 0.5);
  p = rotateZ(p.x, p.y, p.z, CUBE.tiltZ * 0.5);
  
  // Perspective projection
  const scale = CUBE.perspective / (CUBE.perspective + p.z);
  
  return {
    x: centerX + p.x * scale,
    y: centerY + p.y * scale,
    z: p.z,
    scale: scale,
  };
}

// ═══════════════════════════════════════════════════════════════
// DRAWING FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Draw ambient background glow
 */
function drawAmbientGlow(cx, cy) {
  const pulseScale = 1 + Math.sin(state.pulse * 0.4) * 0.2;
  const breathScale = 1 + Math.sin(state.pulse * 0.15) * 0.08;
  const size = 180 * pulseScale * breathScale;
  
  // Multi-layer gradient glow
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, size);
  gradient.addColorStop(0, rgba(colors.secondary, 0.5));
  gradient.addColorStop(0.3, rgba(colors.primary, 0.3));
  gradient.addColorStop(0.6, rgba(colors.accent, 0.15));
  gradient.addColorStop(0.85, rgba(colors.secondary, 0.05));
  gradient.addColorStop(1, 'transparent');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(cx, cy, size, 0, Math.PI * 2);
  ctx.fill();
  
  // Inner bright core glow
  const innerSize = 80 * pulseScale;
  const innerGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerSize);
  innerGradient.addColorStop(0, rgba(colors.accent, 0.35));
  innerGradient.addColorStop(0.5, rgba(colors.secondary, 0.15));
  innerGradient.addColorStop(1, 'transparent');
  
  ctx.fillStyle = innerGradient;
  ctx.beginPath();
  ctx.arc(cx, cy, innerSize, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draw outer decorative ring
 */
function drawOuterRing(cx, cy) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(state.time * 0.00006);
  
  // Outer ring
  ctx.strokeStyle = rgba(colors.secondary, 0.2);
  ctx.lineWidth = 1;
  ctx.setLineDash([8, 20]);
  ctx.lineDashOffset = -state.time * 0.008;
  
  ctx.beginPath();
  ctx.arc(0, 0, 200, 0, Math.PI * 2);
  ctx.stroke();
  
  // Second ring
  ctx.strokeStyle = rgba(colors.accent, 0.12);
  ctx.setLineDash([4, 16]);
  ctx.lineDashOffset = state.time * 0.006;
  
  ctx.beginPath();
  ctx.arc(0, 0, 215, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.setLineDash([]);
  ctx.restore();
}

/**
 * Draw orbital paths for electrons
 */
function drawOrbitalPaths(cx, cy) {
  const drawnOrbits = new Set();
  
  electrons.forEach(electron => {
    if (drawnOrbits.has(electron.orbitIndex)) return;
    drawnOrbits.add(electron.orbitIndex);
    
    const segments = 80;
    ctx.beginPath();
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * electron.radius;
      const y = Math.sin(angle) * electron.radius;
      const z = 0;
      
      const projected = projectElectronPosition(x, y, z, cx, cy, electron);
      
      if (i === 0) {
        ctx.moveTo(projected.x, projected.y);
      } else {
        ctx.lineTo(projected.x, projected.y);
      }
    }
    
    ctx.closePath();
    ctx.strokeStyle = rgba(colors.accent, 0.18);
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 14]);
    ctx.lineDashOffset = -state.time * 0.015;
    ctx.stroke();
    ctx.setLineDash([]);
  });
}

/**
 * Draw atomic swirl electrons with trails
 */
function drawElectrons(cx, cy, deltaTime) {
  electrons.forEach(electron => {
    // Update electron position
    electron.angle += electron.speed * deltaTime;
    
    // Calculate 3D position on orbital circle
    const x = Math.cos(electron.angle) * electron.radius;
    const y = Math.sin(electron.angle) * electron.radius;
    const z = 0;
    
    // Project to 2D
    const projected = projectElectronPosition(x, y, z, cx, cy, electron);
    
    // Store position in trail
    electron.trail.unshift({
      x: projected.x,
      y: projected.y,
      z: projected.z,
      scale: projected.scale,
    });
    
    // Trim trail to max length
    if (electron.trail.length > electron.trailMax) {
      electron.trail.pop();
    }
    
    // Get electron color
    const electronColor = colors[electron.colorType] || colors.accent;
    
    // ─────────────────────────────────────────────
    // Draw swirl trail
    // ─────────────────────────────────────────────
    if (electron.trail.length > 2) {
      for (let i = 0; i < electron.trail.length - 1; i++) {
        const point1 = electron.trail[i];
        const point2 = electron.trail[i + 1];
        
        // Calculate trail properties based on position
        const progress = 1 - (i / electron.trail.length);
        const alpha = progress * progress * 0.85;
        const width = electron.size * ELECTRON_CONFIG.trailWidthMultiplier * progress * point1.scale;
        
        // Interpolate color along trail
        const trailT = i / electron.trail.length;
        const trailColor = lerpColor(electronColor, colors.secondary, trailT);
        
        // Draw trail segment
        ctx.beginPath();
        ctx.moveTo(point1.x, point1.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.strokeStyle = rgba(trailColor, alpha);
        ctx.lineWidth = Math.max(width, 0.5);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
    }
    
    // ─────────────────────────────────────────────
    // Draw electron outer glow
    // ─────────────────────────────────────────────
    const glowSize = electron.size * ELECTRON_CONFIG.glowMultiplier * projected.scale;
    const glowGradient = ctx.createRadialGradient(
      projected.x, projected.y, 0,
      projected.x, projected.y, glowSize
    );
    glowGradient.addColorStop(0, rgba(electronColor, 0.95));
    glowGradient.addColorStop(0.2, rgba(colors.secondary, 0.65));
    glowGradient.addColorStop(0.45, rgba(colors.primary, 0.35));
    glowGradient.addColorStop(0.7, rgba(electronColor, 0.15));
    glowGradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, glowSize, 0, Math.PI * 2);
    ctx.fill();
    
    // ─────────────────────────────────────────────
    // Draw electron core (white hot center)
    // ─────────────────────────────────────────────
    const corePulse = 1 + Math.sin(state.pulse * 3 + electron.pulseOffset) * 0.2;
    const coreSize = electron.size * projected.scale * corePulse;
    
    // White outer core with glow
    ctx.shadowColor = rgba(electronColor, 1);
    ctx.shadowBlur = 20;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, coreSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    
    // Colored inner core
    ctx.fillStyle = rgba(electronColor, 0.9);
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, coreSize * 0.55, 0, Math.PI * 2);
    ctx.fill();
    
    // Bright center dot
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, coreSize * 0.25, 0, Math.PI * 2);
    ctx.fill();
  });
}

/**
 * Draw a single cube face
 */
function drawCubeFace(projectedVertices, face, averageZ) {
  const [p0, p1, p2, p3] = projectedVertices;
  
  // Calculate brightness based on face depth
  const maxZ = CUBE.size;
  const brightness = Math.max(0.3, Math.min(0.95, (averageZ + maxZ) / (maxZ * 2)));
  
  // Get face color
  const faceColor = colors[face.colorType] || colors.primary;
  const secondaryFaceColor = colors.secondary;
  
  // ─────────────────────────────────────────────
  // Draw face background
  // ─────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.lineTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();
  
  // Gradient fill
  const fillGradient = ctx.createLinearGradient(p0.x, p0.y, p2.x, p2.y);
  fillGradient.addColorStop(0, rgba(faceColor, brightness * 0.4));
  fillGradient.addColorStop(0.5, rgba(secondaryFaceColor, brightness * 0.25));
  fillGradient.addColorStop(1, rgba(faceColor, brightness * 0.18));
  ctx.fillStyle = fillGradient;
  ctx.fill();
  
  // ─────────────────────────────────────────────
  // Draw grid pattern (desktop only, HD mode)
  // ─────────────────────────────────────────────
  if (!isMobile && hdMode) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.clip();
    
    ctx.strokeStyle = rgba(colors.accent, brightness * CUBE.gridOpacity);
    ctx.lineWidth = 0.5;
    
    const minX = Math.min(p0.x, p1.x, p2.x, p3.x) - CUBE.gridSize;
    const maxX = Math.max(p0.x, p1.x, p2.x, p3.x) + CUBE.gridSize;
    const minY = Math.min(p0.y, p1.y, p2.y, p3.y) - CUBE.gridSize;
    const maxY = Math.max(p0.y, p1.y, p2.y, p3.y) + CUBE.gridSize;
    
    // Vertical grid lines
    for (let gx = minX; gx <= maxX; gx += CUBE.gridSize) {
      ctx.beginPath();
      ctx.moveTo(gx, minY);
      ctx.lineTo(gx, maxY);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let gy = minY; gy <= maxY; gy += CUBE.gridSize) {
      ctx.beginPath();
      ctx.moveTo(minX, gy);
      ctx.lineTo(maxX, gy);
      ctx.stroke();
    }
    
    ctx.restore();
  }
  
  // ─────────────────────────────────────────────
  // Draw glowing border
  // ─────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.lineTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();
  
  ctx.shadowColor = rgba(faceColor, 0.7);
  ctx.shadowBlur = CUBE.glowBlur;
  ctx.strokeStyle = rgba(faceColor, brightness);
  ctx.lineWidth = CUBE.borderWidth;
  ctx.stroke();
  ctx.shadowBlur = 0;
  
  // ─────────────────────────────────────────────
  // Draw logo
  // ─────────────────────────────────────────────
  if (logoLoaded && logo) {
    ctx.save();
    
    // Clip to face
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.clip();
    
    // Calculate face center and average scale
    const faceCenterX = (p0.x + p1.x + p2.x + p3.x) / 4;
    const faceCenterY = (p0.y + p1.y + p2.y + p3.y) / 4;
    const averageScale = (p0.scale + p1.scale + p2.scale + p3.scale) / 4;
    const logoDisplaySize = CUBE.logoSize * averageScale;
    
    // Draw logo with glow
    ctx.shadowColor = rgba(colors.secondary, 0.5);
    ctx.shadowBlur = 12;
    ctx.globalAlpha = CUBE.logoOpacity * brightness;
    ctx.drawImage(
      logo,
      faceCenterX - logoDisplaySize / 2,
      faceCenterY - logoDisplaySize / 2,
      logoDisplaySize,
      logoDisplaySize
    );
    
    ctx.restore();
  }
  
  // ─────────────────────────────────────────────
  // Draw inner glow
  // ─────────────────────────────────────────────
  const innerCenterX = (p0.x + p2.x) / 2;
  const innerCenterY = (p0.y + p2.y) / 2;
  const innerGlowRadius = CUBE.size * 0.5;
  
  const innerGlowGradient = ctx.createRadialGradient(
    innerCenterX, innerCenterY, 0,
    innerCenterX, innerCenterY, innerGlowRadius
  );
  innerGlowGradient.addColorStop(0, rgba(colors.accent, brightness * 0.28));
  innerGlowGradient.addColorStop(0.4, rgba(faceColor, brightness * 0.12));
  innerGlowGradient.addColorStop(1, 'transparent');
  
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.lineTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();
  ctx.fillStyle = innerGlowGradient;
  ctx.fill();
  
  // ─────────────────────────────────────────────
  // Draw corner accents
  // ─────────────────────────────────────────────
  const corners = [p0, p1, p2, p3];
  const cornerPulse = 0.5 + Math.sin(state.pulse + face.id * 0.5) * 0.35;
  
  corners.forEach((corner, index) => {
    const cornerSize = 4 * corner.scale;
    
    // Outer glow
    const cornerGlow = ctx.createRadialGradient(
      corner.x, corner.y, 0,
      corner.x, corner.y, cornerSize * 3
    );
    cornerGlow.addColorStop(0, rgba(colors.accent, cornerPulse * brightness * 0.6));
    cornerGlow.addColorStop(1, 'transparent');
    
    ctx.fillStyle = cornerGlow;
    ctx.beginPath();
    ctx.arc(corner.x, corner.y, cornerSize * 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Core dot
    ctx.fillStyle = rgba(colors.accent, cornerPulse * brightness * 0.9);
    ctx.beginPath();
    ctx.arc(corner.x, corner.y, cornerSize, 0, Math.PI * 2);
    ctx.fill();
  });
}

/**
 * Draw center core glow
 */
function drawCoreGlow(cx, cy) {
  const pulse1 = 1 + Math.sin(state.pulse * 1.2) * 0.4;
  const pulse2 = 1 + Math.sin(state.pulse * 0.8 + 1) * 0.25;
  const size = 35 * pulse1 * pulse2;
  
  // Outer aura layers
  const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 2.5);
  outerGlow.addColorStop(0, rgba(colors.accent, 0.9));
  outerGlow.addColorStop(0.2, rgba(colors.secondary, 0.6));
  outerGlow.addColorStop(0.45, rgba(colors.primary, 0.35));
  outerGlow.addColorStop(0.7, rgba(colors.accent, 0.15));
  outerGlow.addColorStop(1, 'transparent');
  
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 2.5, 0, Math.PI * 2);
  ctx.fill();
  
  // Middle glow
  const middleGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, size);
  middleGlow.addColorStop(0, rgba(colors.secondary, 0.85));
  middleGlow.addColorStop(0.5, rgba(colors.accent, 0.5));
  middleGlow.addColorStop(1, 'transparent');
  
  ctx.fillStyle = middleGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, size, 0, Math.PI * 2);
  ctx.fill();
  
  // Bright center
  const innerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.4);
  innerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
  innerGlow.addColorStop(0.4, rgba(colors.accent, 0.9));
  innerGlow.addColorStop(1, 'transparent');
  
  ctx.fillStyle = innerGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.4, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draw ambient floating particles
 */
function drawParticles(cx, cy, deltaTime) {
  const timeSeconds = state.time / 1000;
  
  particles.forEach(particle => {
    // Update position
    particle.angle += particle.speed * deltaTime;
    particle.yOffset = Math.sin(timeSeconds * 1.5 + particle.phaseOffset) * PARTICLE_CONFIG.verticalMotion;
    
    // Calculate 2D position
    const x = cx + Math.cos(particle.angle) * particle.radius;
    const y = cy + Math.sin(particle.angle) * particle.radius * 0.15 + particle.yOffset;
    
    // Calculate pulse
    const pulse = 0.5 + Math.sin(timeSeconds * 2 + particle.phaseOffset) * 0.5;
    
    // Draw particle glow
    const glowRadius = particle.size * PARTICLE_CONFIG.glowSize;
    const particleGlow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    particleGlow.addColorStop(0, rgba(colors.accent, 0.7 * pulse));
    particleGlow.addColorStop(0.4, rgba(colors.secondary, 0.3 * pulse));
    particleGlow.addColorStop(1, 'transparent');
    
    ctx.fillStyle = particleGlow;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw particle core
    ctx.fillStyle = rgba(colors.accent, 0.9 * pulse);
    ctx.beginPath();
    ctx.arc(x, y, particle.size * pulse, 0, Math.PI * 2);
    ctx.fill();
  });
}

// ═══════════════════════════════════════════════════════════════
// MAIN RENDER LOOP
// ═══════════════════════════════════════════════════════════════

/**
 * Main animation render function
 * Called every frame via requestAnimationFrame
 */
function render(timestamp) {
  // Check if we should continue running
  if (!isRunning || !canvas || !ctx) {
    return;
  }
  
  // Calculate delta time for consistent animation speed
  const deltaTime = lastFrameTime ? timestamp - lastFrameTime : 16.67;
  lastFrameTime = timestamp;
  
  // ─────────────────────────────────────────────
  // Update animation state
  // ─────────────────────────────────────────────
  
  // Cube rotation (15 seconds per full rotation)
  state.rotation += CUBE.rotationSpeed * deltaTime;
  
  // Pulse effects
  state.pulse += 0.003 * deltaTime;
  
  // Total elapsed time
  state.time += deltaTime;
  
  // Color phase for lavender transitions (~7 second cycle)
  state.colorPhase += 0.0009 * deltaTime;
  
  // Update interpolated colors
  updateColors();
  
  // ─────────────────────────────────────────────
  // Calculate center point
  // ─────────────────────────────────────────────
  const centerX = state.width / 2;
  const centerY = state.height / 2;
  
  // ─────────────────────────────────────────────
  // Clear canvas
  // ─────────────────────────────────────────────
  ctx.clearRect(0, 0, state.width, state.height);
  
  // ─────────────────────────────────────────────
  // Draw background layers (back to front)
  // ─────────────────────────────────────────────
  
  // Ambient glow
  drawAmbientGlow(centerX, centerY);
  
  // Outer decorative ring
  drawOuterRing(centerX, centerY);
  
  // Electron orbital paths
  drawOrbitalPaths(centerX, centerY);
  
  // ─────────────────────────────────────────────
  // Draw cube
  // ─────────────────────────────────────────────
  
  // Transform all face vertices and calculate average Z for sorting
  sortedFaces.length = 0;
  
  faces.forEach(face => {
    // Project all vertices
    const projectedVertices = face.vertices.map(([x, y, z]) => {
      return projectCubeVertex(x, y, z, centerX, centerY);
    });
    
    // Calculate average Z depth
    const averageZ = (
      projectedVertices[0].z +
      projectedVertices[1].z +
      projectedVertices[2].z +
      projectedVertices[3].z
    ) / 4;
    
    sortedFaces.push({
      projectedVertices,
      face,
      averageZ,
    });
  });
  
  // Sort faces by Z depth (painter's algorithm - draw back to front)
  sortedFaces.sort((a, b) => b.averageZ - a.averageZ);
  
  // Draw sorted faces
  sortedFaces.forEach(({ projectedVertices, face, averageZ }) => {
    drawCubeFace(projectedVertices, face, averageZ);
  });
  
  // ─────────────────────────────────────────────
  // Draw foreground elements
  // ─────────────────────────────────────────────
  
  // Center core glow
  drawCoreGlow(centerX, centerY);
  
  // Atomic swirl electrons
  drawElectrons(centerX, centerY, deltaTime);
  
  // Ambient floating particles
  drawParticles(centerX, centerY, deltaTime);
  
  // ─────────────────────────────────────────────
  // Request next frame
  // ─────────────────────────────────────────────
  animationId = requestAnimationFrame(render);
}

// ═══════════════════════════════════════════════════════════════
// WORKER MESSAGE HANDLER
// ═══════════════════════════════════════════════════════════════

/**
 * Handle messages from main thread
 */
self.onmessage = function(event) {
  const { type, ...data } = event.data;
  
  switch (type) {
    // ─────────────────────────────────────────────
    // INIT: Initialize the animation
    // ─────────────────────────────────────────────
    case 'init': {
      // Store canvas reference
      canvas = data.canvas;
      ctx = canvas.getContext('2d', {
        alpha: true,
        desynchronized: true, // Better performance
      });
      
      // Store dimensions
      state.width = data.width;
      state.height = data.height;
      state.dpr = data.dpr || 1;
      
      // Store flags
      isMobile = data.isMobile || false;
      hdMode = data.config?.hdMode !== false;
      
      // Apply HD scaling
      canvas.width = state.width * state.dpr;
      canvas.height = state.height * state.dpr;
      ctx.scale(state.dpr, state.dpr);
      
      // Initialize all elements
      initFaces();
      initElectrons();
      initParticles();
      
      // Start animation
      isRunning = true;
      lastFrameTime = 0;
      animationId = requestAnimationFrame(render);
      
      // Notify main thread that we're ready
      self.postMessage({ type: 'ready' });
      break;
    }
    
    // ─────────────────────────────────────────────
    // RESIZE: Handle canvas resize
    // ─────────────────────────────────────────────
    case 'resize': {
      state.width = data.width;
      state.height = data.height;
      state.dpr = data.dpr || state.dpr;
      
      if (canvas && ctx) {
        // Resize canvas
        canvas.width = state.width * state.dpr;
        canvas.height = state.height * state.dpr;
        
        // Reset transform and apply new scale
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(state.dpr, state.dpr);
      }
      break;
    }
    
    // ─────────────────────────────────────────────
    // LOGO: Receive logo image
    // ─────────────────────────────────────────────
    case 'logo': {
      if (data.logoData) {
        logo = data.logoData;
        logoLoaded = true;
      }
      break;
    }
    
    // ─────────────────────────────────────────────
    // PAUSE: Pause animation
    // ─────────────────────────────────────────────
    case 'pause':
    case 'stop': {
      isRunning = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      break;
    }
    
    // ─────────────────────────────────────────────
    // RESUME: Resume animation
    // ─────────────────────────────────────────────
    case 'resume':
    case 'start': {
      if (!isRunning && canvas && ctx) {
        isRunning = true;
        lastFrameTime = 0; // Reset to prevent large delta
        animationId = requestAnimationFrame(render);
      }
      break;
    }
    
    // ─────────────────────────────────────────────
    // DESTROY: Clean up everything
    // ─────────────────────────────────────────────
    case 'destroy': {
      // Stop animation
      isRunning = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      
      // Clear references
      canvas = null;
      ctx = null;
      logo = null;
      logoLoaded = false;
      
      // Clear arrays
      electrons.length = 0;
      particles.length = 0;
      faces.length = 0;
      sortedFaces.length = 0;
      
      // Reset state
      state.rotation = 0;
      state.pulse = 0;
      state.time = 0;
      state.colorPhase = 0;
      break;
    }
    
    // ─────────────────────────────────────────────
    // CONFIG: Update configuration
    // ─────────────────────────────────────────────
    case 'config': {
      if (data.hdMode !== undefined) {
        hdMode = data.hdMode;
      }
      if (data.isMobile !== undefined) {
        isMobile = data.isMobile;
        // Reinitialize with new mobile setting
        initElectrons();
        initParticles();
      }
      break;
    }
    
    default: {
      console.warn('Unknown message type:', type);
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// ERROR HANDLING
// ═══════════════════════════════════════════════════════════════

self.onerror = function(error) {
  console.error('Worker error:', error);
  self.postMessage({ 
    type: 'error', 
    error: error.message || 'Unknown worker error' 
  });
};