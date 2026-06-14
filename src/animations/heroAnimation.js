/**
 * Plexura Hero Animation Controller
 * 
 * This file manages the Web Worker + OffscreenCanvas setup for the hero section.
 * It handles canvas initialization, worker communication, and graceful fallbacks.
 * 
 * Usage:
 *   import { initHeroAnimation, destroyHeroAnimation } from './animations/heroAnimation';
 *   
 *   // In your component's useEffect:
 *   useEffect(() => {
 *     const cleanup = initHeroAnimation('hero-canvas');
 *     return () => cleanup();
 *   }, []);
 */

// Store references for cleanup
let worker = null;
let animationFrameId = null;
let resizeObserver = null;
let fallbackCtx = null;
let isDestroyed = false;

// Configuration
const CONFIG = {
  workerPath: '/animationWorker.js', // Adjust based on your build setup
  colors: {
    primary: '#007BFF',
    secondary: '#00C2CB',
    accent: '#3EE4A8',
    background: '#0A1A2F',
    glow: 'rgba(0, 194, 203, 0.3)',
  },
  cube: {
    size: 160,
    rotationSpeed: 0.008,
    tiltX: -35,
    tiltZ: 45,
  },
  particles: {
    count: 8,
    radius: 4,
    orbitRadius: 180,
  },
};

/**
 * Check if OffscreenCanvas is supported
 */
function supportsOffscreenCanvas() {
  try {
    const canvas = document.createElement('canvas');
    const offscreen = canvas.transferControlToOffscreen();
    // Check if we can get a 2D context (iOS Safari 16.4+ supports this)
    const testCanvas = new OffscreenCanvas(1, 1);
    const ctx = testCanvas.getContext('2d');
    return !!ctx;
  } catch (e) {
    return false;
  }
}

/**
 * Check if Web Workers are supported
 */
function supportsWebWorkers() {
  return typeof Worker !== 'undefined';
}

/**
 * Get device pixel ratio (capped for performance on high-DPI mobile)
 */
function getPixelRatio() {
  const dpr = window.devicePixelRatio || 1;
  // Cap at 2 for mobile performance
  return Math.min(dpr, 2);
}

/**
 * Initialize the hero animation with Web Worker + OffscreenCanvas
 */
export function initHeroAnimation(canvasId, options = {}) {
  isDestroyed = false;
  
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error(`[HeroAnimation] Canvas element with id "${canvasId}" not found`);
    return () => {};
  }

  const config = { ...CONFIG, ...options };
  
  // Check for feature support
  const useOffscreen = supportsOffscreenCanvas() && supportsWebWorkers();
  
  if (useOffscreen) {
    console.log('[HeroAnimation] Using Web Worker + OffscreenCanvas (optimal)');
    return initWithWorker(canvas, config);
  } else {
    console.log('[HeroAnimation] Falling back to main thread rendering');
    return initFallback(canvas, config);
  }
}

/**
 * Initialize with Web Worker + OffscreenCanvas (optimal path)
 */
function initWithWorker(canvas, config) {
  try {
    // Get initial dimensions
    const rect = canvas.getBoundingClientRect();
    const pixelRatio = getPixelRatio();
    const width = rect.width * pixelRatio;
    const height = rect.height * pixelRatio;
    
    // Set canvas display size
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    
    // Transfer control to OffscreenCanvas
    const offscreen = canvas.transferControlToOffscreen();
    offscreen.width = width;
    offscreen.height = height;
    
    // Create the worker
    worker = new Worker(config.workerPath);
    
    // Handle worker errors
    worker.onerror = (error) => {
      console.error('[HeroAnimation] Worker error:', error);
      // Could implement fallback here if needed
    };
    
    // Handle messages from worker (for debugging/status)
    worker.onmessage = (e) => {
      if (e.data.type === 'ready') {
        console.log('[HeroAnimation] Worker ready, animation started');
      } else if (e.data.type === 'fps') {
        // Optional: Monitor FPS in development
        // console.log(`[HeroAnimation] FPS: ${e.data.fps}`);
      }
    };
    
    // Send the OffscreenCanvas to the worker
    worker.postMessage({
      type: 'init',
      canvas: offscreen,
      width,
      height,
      pixelRatio,
      config: {
        colors: config.colors,
        cube: config.cube,
        particles: config.particles,
      },
    }, [offscreen]); // Transfer ownership
    
    // Set up resize handling with debounce
    let resizeTimeout = null;
    const handleResize = () => {
      if (isDestroyed) return;
      
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newRect = canvas.getBoundingClientRect();
        const newPixelRatio = getPixelRatio();
        const newWidth = newRect.width * newPixelRatio;
        const newHeight = newRect.height * newPixelRatio;
        
        canvas.style.width = `${newRect.width}px`;
        canvas.style.height = `${newRect.height}px`;
        
        worker?.postMessage({
          type: 'resize',
          width: newWidth,
          height: newHeight,
          pixelRatio: newPixelRatio,
        });
      }, 100);
    };
    
    // Use ResizeObserver for better performance
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(canvas);
    } else {
      window.addEventListener('resize', handleResize);
    }
    
    // Handle visibility changes (pause when tab is hidden)
    const handleVisibilityChange = () => {
      worker?.postMessage({
        type: document.hidden ? 'pause' : 'resume',
      });
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Return cleanup function
    return () => {
      isDestroyed = true;
      
      clearTimeout(resizeTimeout);
      
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      } else {
        window.removeEventListener('resize', handleResize);
      }
      
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (worker) {
        worker.postMessage({ type: 'destroy' });
        worker.terminate();
        worker = null;
      }
    };
    
  } catch (error) {
    console.error('[HeroAnimation] Failed to initialize with worker:', error);
    // Fall back to main thread
    return initFallback(canvas, config);
  }
}

/**
 * Fallback: Main thread rendering for browsers without OffscreenCanvas support
 */
function initFallback(canvas, config) {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('[HeroAnimation] Could not get 2D context');
    return () => {};
  }
  
  fallbackCtx = ctx;
  
  // Animation state
  let rotation = 0;
  let lastTime = performance.now();
  let width, height, pixelRatio;
  
  // Resize handler
  const updateSize = () => {
    if (isDestroyed) return;
    
    const rect = canvas.getBoundingClientRect();
    pixelRatio = getPixelRatio();
    width = rect.width * pixelRatio;
    height = rect.height * pixelRatio;
    
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    
    ctx.scale(pixelRatio, pixelRatio);
  };
  
  updateSize();
  
  // Simplified animation loop for fallback
  const animate = (currentTime) => {
    if (isDestroyed) return;
    
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Update rotation
    rotation += config.cube.rotationSpeed * (deltaTime / 16.67);
    
    // Center point
    const centerX = (width / pixelRatio) / 2;
    const centerY = (height / pixelRatio) / 2;
    
    // Draw glow effect
    const gradient = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, 150
    );
    gradient.addColorStop(0, 'rgba(0, 194, 203, 0.3)');
    gradient.addColorStop(0.5, 'rgba(0, 123, 255, 0.15)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width / pixelRatio, height / pixelRatio);
    
    // Draw simplified rotating cube representation
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);
    
    // Draw diamond shape
    const size = 80;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size, 0);
    ctx.lineTo(0, size);
    ctx.lineTo(-size, 0);
    ctx.closePath();
    
    // Fill with gradient
    const cubeGradient = ctx.createLinearGradient(-size, -size, size, size);
    cubeGradient.addColorStop(0, 'rgba(0, 123, 255, 0.3)');
    cubeGradient.addColorStop(1, 'rgba(0, 194, 203, 0.3)');
    ctx.fillStyle = cubeGradient;
    ctx.fill();
    
    // Stroke
    ctx.strokeStyle = 'rgba(0, 194, 203, 0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Inner diamond
    ctx.scale(0.6, 0.6);
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size, 0);
    ctx.lineTo(0, size);
    ctx.lineTo(-size, 0);
    ctx.closePath();
    ctx.strokeStyle = 'rgba(0, 123, 255, 0.4)';
    ctx.stroke();
    
    ctx.restore();
    
    // Draw floating particles
    for (let i = 0; i < config.particles.count; i++) {
      const angle = (i / config.particles.count) * Math.PI * 2 + rotation * 0.5;
      const orbitRadius = config.particles.orbitRadius * (0.8 + 0.2 * Math.sin(rotation * 2 + i));
      const x = centerX + Math.cos(angle) * orbitRadius;
      const y = centerY + Math.sin(angle) * orbitRadius * 0.6;
      
      const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
      particleGradient.addColorStop(0, 'rgba(0, 194, 203, 0.8)');
      particleGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = particleGradient;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
    }
    
    animationFrameId = requestAnimationFrame(animate);
  };
  
  animationFrameId = requestAnimationFrame(animate);
  
  // Resize observer
  let resizeTimeout = null;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateSize, 100);
  };
  
  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);
  } else {
    window.addEventListener('resize', handleResize);
  }
  
  // Return cleanup function
  return () => {
    isDestroyed = true;
    
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    
    clearTimeout(resizeTimeout);
    
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    } else {
      window.removeEventListener('resize', handleResize);
    }
    
    fallbackCtx = null;
  };
}

/**
 * Destroy the hero animation and clean up resources
 */
export function destroyHeroAnimation() {
  isDestroyed = true;
  
  if (worker) {
    worker.postMessage({ type: 'destroy' });
    worker.terminate();
    worker = null;
  }
  
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
  
  fallbackCtx = null;
}

/**
 * Pause the animation (useful for performance when not visible)
 */
export function pauseHeroAnimation() {
  worker?.postMessage({ type: 'pause' });
}

/**
 * Resume the animation
 */
export function resumeHeroAnimation() {
  worker?.postMessage({ type: 'resume' });
}

/**
 * Update animation configuration dynamically
 */
export function updateHeroAnimationConfig(newConfig) {
  worker?.postMessage({
    type: 'updateConfig',
    config: newConfig,
  });
}

export default {
  init: initHeroAnimation,
  destroy: destroyHeroAnimation,
  pause: pauseHeroAnimation,
  resume: resumeHeroAnimation,
  updateConfig: updateHeroAnimationConfig,
};