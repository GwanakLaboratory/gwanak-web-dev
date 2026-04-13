import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type HeroSectionProps = {
  onContact: () => void;
};

const CYCLE_PAUSE = 700;
const PARTICLE_COUNT = 50;
const BASE_FRAME_MS = 1000 / 60;
const ZONE1_SPEED = 94;
const ZONE2_SPEED = 76;
const ZONE3_SPEED = 98;
const STEP_TIMING_FACTOR = 0.68;
const STRUCTURE_LINK_DISTANCE = 40;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
  decision: number; // 0=rise 1=hold 2=fall
  trail: number[];
  r: number;
  g: number;
  b: number;
};

function initParticles(w: number, h: number): Particle[] {
  const arr: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const y = Math.random() * h;
    arr.push({
      x: -4 - Math.random() * Math.min(w * 0.42, 220),
      y,
      vx: ZONE1_SPEED + Math.random() * 15,
      vy: 0,
      size: 2.4 + Math.random() * 2.2,
      phase: Math.random() * Math.PI * 2,
      decision: Math.floor(Math.random() * 3),
      trail: [y, y, y, y],
      r: 80 + Math.random() * 175,
      g: 80 + Math.random() * 175,
      b: 80 + Math.random() * 175,
    });
  }
  return arr;
}

function resetParticle(p: Particle, h: number) {
  const y = Math.random() * h;
  p.x = -4 - Math.random() * 20;
  p.y = y;
  p.vx = ZONE1_SPEED + Math.random() * 15;
  p.vy = 0;
  p.decision = Math.floor(Math.random() * 3);
  p.trail = [y, y, y, y];
  p.r = 80 + Math.random() * 175;
  p.g = 80 + Math.random() * 175;
  p.b = 80 + Math.random() * 175;
}

const COLORS = {
  predict: '#2956e0',
  structure: '#f5852b',
  rise: '#00c9a7',
  hold: '#2956e0',
  fall: '#f5852b',
  zoneLine: 'rgba(41,86,224,0.3)',
  zoneHighlight: 'rgba(41,86,224,0.025)',
  trail: 'rgba(41,86,224,0.18)',
  connection: 'rgba(245,133,43,',
};

const HeroSection = ({ onContact }: HeroSectionProps) => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const canvasSizeRef = useRef({ width: 0, height: 0 });
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);
  const cycleStartedAtRef = useRef(0);
  const loopIndexRef = useRef(-1);
  const lastFrameAtRef = useRef(0);

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    // Always render using the actual backing-store size to avoid
    // uncleared edge strips when CSS pixels and canvas pixels diverge.
    const w = canvasSizeRef.current.width || rect.width;
    const h = canvasSizeRef.current.height || rect.height;
    const z1 = w / 3;
    const z2 = (w * 2) / 3;
    const now = performance.now();
    const deltaMs = lastFrameAtRef.current
      ? Math.min(now - lastFrameAtRef.current, BASE_FRAME_MS * 3)
      : BASE_FRAME_MS;
    const frameScale = deltaMs / BASE_FRAME_MS;
    const deltaSeconds = deltaMs / 1000;
    lastFrameAtRef.current = now;
    const spawnRange = Math.min(w * 0.42, 220);
    const zone1Duration = ((z1 + spawnRange * 0.7) / ZONE1_SPEED) * 1000;
    const zone2Duration = ((z2 - z1) / ZONE2_SPEED) * 1000;
    const zone3Duration = ((w - z2 + 24) / ZONE3_SPEED) * 1000;
    const cycleDuration = zone1Duration + zone2Duration + zone3Duration;
    const stepZone1Duration = zone1Duration * STEP_TIMING_FACTOR;
    const stepZone2Duration = zone2Duration * STEP_TIMING_FACTOR;
    const stepCycleDuration = stepZone1Duration + stepZone2Duration;
    const loopDuration = cycleDuration + CYCLE_PAUSE;
    const elapsed = now - cycleStartedAtRef.current;
    const loopElapsed = elapsed % loopDuration;
    const isPaused = loopElapsed >= cycleDuration;
    const loopIndex = Math.floor(elapsed / loopDuration);
    const step = isPaused
      ? 2
      : loopElapsed < stepZone1Duration
        ? 0
        : loopElapsed < stepCycleDuration
          ? 1
          : 2;

    if (loopIndex !== loopIndexRef.current) {
      loopIndexRef.current = loopIndex;
      particlesRef.current = initParticles(w, h);
      lastFrameAtRef.current = now;
    }

    if (step !== activeStepRef.current) {
      activeStepRef.current = step;
      setActiveStep(step);
    }

    ctx.clearRect(0, 0, w, h);

    // active zone highlight
    const zoneX = step === 0 ? 0 : step === 1 ? z1 : z2;
    const zoneW = step === 2 ? w - z2 : z1;
    ctx.fillStyle = COLORS.zoneHighlight;
    ctx.fillRect(zoneX, 0, zoneW, h);

    // vertical divider lines
    ctx.setLineDash([4, 6]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = COLORS.zoneLine;
    ctx.beginPath();
    ctx.moveTo(z1, 0);
    ctx.lineTo(z1, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(z2, 0);
    ctx.lineTo(z2, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // zone labels
    ctx.font = '800 12px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(41,86,224,0.45)';
    ctx.fillText('PREDICT', z1 / 2, 16);
    ctx.fillStyle = 'rgba(245,133,43,0.45)';
    ctx.fillText('STRUCTURE', z1 + (z2 - z1) / 2, 16);
    ctx.fillStyle = 'rgba(0,201,167,0.45)';
    ctx.fillText('DECIDE', z2 + (w - z2) / 2, 16);

    // decide zone lane markers
    const laneY = [h * 0.22, h * 0.5, h * 0.78];
    // U+25B2/U+25B6/U+25BC: 꽉 찬 삼각형(위·오른쪽·아래)
    const laneLabels = ['\u25B2', '\u25B6', '\u25BC'];
    const laneColors = ['#ef4444', '#22c55e', '#3b82f6']; // top red, middle green, bottom blue
    const laneLabelX = w - 14;
    const laneLineEndX = laneLabelX - 14;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.setLineDash([2, 4]);
      ctx.strokeStyle =
        i === 0
          ? 'rgba(239,68,68,0.45)'
          : i === 1
            ? 'rgba(34,197,94,0.45)'
            : 'rgba(59,130,246,0.45)';
      ctx.lineWidth = 1.8;
      ctx.moveTo(z2 + 4, laneY[i]);
      ctx.lineTo(laneLineEndX, laneY[i]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = '800 11px Outfit, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillStyle = laneColors[i];
      ctx.globalAlpha = 0.5;
      ctx.fillText(laneLabels[i], laneLabelX, laneY[i] + 4);
      ctx.globalAlpha = 1;
    }

    const particles = particlesRef.current;

    if (isPaused) {
      rafRef.current = requestAnimationFrame(renderCanvas);
      return;
    }

    // particle update & render
    particles.forEach((p, idx) => {
      // Defensive reset: guard against rare numeric corruption over long runs.
      if (
        !Number.isFinite(p.x) ||
        !Number.isFinite(p.y) ||
        !Number.isFinite(p.r) ||
        !Number.isFinite(p.g) ||
        !Number.isFinite(p.b)
      ) {
        resetParticle(p, h);
        return;
      }

      const inZone1 = p.x < z1;
      const inZone2 = p.x >= z1 && p.x < z2;
      const inZone3 = p.x >= z2;

      // --- ZONE 1: random vertical oscillation with trail ---
      if (inZone1) {
        p.vx = ZONE1_SPEED + Math.random() * 12;
        p.vy = Math.sin(now * 0.003 + p.phase) * 1.4;
        p.y += p.vy * frameScale;
        p.x += p.vx * deltaSeconds;

        // clamp within canvas
        if (p.y < 8) p.y = 8;
        if (p.y > h - 8) p.y = h - 8;

        // update trail
        p.trail.push(p.y);
        if (p.trail.length > 5) p.trail.shift();

        // draw trail (afterimage)
        for (let ti = 0; ti < p.trail.length - 1; ti++) {
          const alpha = (ti / p.trail.length) * 0.3;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${Math.round(p.r)},${Math.round(p.g)},${Math.round(p.b)},${alpha})`;
          const trailSize = p.size * (ti / p.trail.length) * 0.7;
          const trailX = p.x - (p.trail.length - ti) * 3;
          ctx.arc(trailX, p.trail[ti], Math.max(0.5, trailSize), 0, Math.PI * 2);
          ctx.fill();
        }

        // draw particle
        ctx.beginPath();
        ctx.fillStyle = `rgb(${Math.round(p.r)},${Math.round(p.g)},${Math.round(p.b)})`;
        ctx.globalAlpha = 0.75;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // --- ZONE 2: connect nearby particles, form pattern ---
      if (inZone2) {
        p.vx = ZONE2_SPEED + Math.random() * 10;
        p.vy *= 0.92;
        p.y += (p.vy + Math.sin(now * 0.002 + p.phase) * 0.3) * frameScale;
        p.x += p.vx * deltaSeconds;

        if (p.y < 8) p.y = 8;
        if (p.y > h - 8) p.y = h - 8;

        // connections + color averaging among linked particles
        let sumR = p.r;
        let sumG = p.g;
        let sumB = p.b;
        let linkCount = 1;
        for (let j = idx + 1; j < particles.length; j++) {
          const other = particles[j];
          if (other.x < z1 || other.x >= z2) continue;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < STRUCTURE_LINK_DISTANCE) {
            const lineR = (p.r + other.r) * 0.5;
            const lineG = (p.g + other.g) * 0.5;
            const lineB = (p.b + other.b) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${Math.round(lineR)},${Math.round(lineG)},${Math.round(lineB)},${(0.38 * (1 - dist / STRUCTURE_LINK_DISTANCE)).toFixed(3)})`;
            ctx.lineWidth = 3.1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            sumR += other.r;
            sumG += other.g;
            sumB += other.b;
            linkCount += 1;
          }
        }

        // linked cluster color convergence (average)
        const avgR = sumR / linkCount;
        const avgG = sumG / linkCount;
        const avgB = sumB / linkCount;
        p.r = p.r * 0.9 + avgR * 0.1;
        p.g = p.g * 0.9 + avgG * 0.1;
        p.b = p.b * 0.9 + avgB * 0.1;

        // draw particle
        ctx.beginPath();
        ctx.fillStyle = `rgb(${Math.round(p.r)},${Math.round(p.g)},${Math.round(p.b)})`;
        ctx.globalAlpha = 0.7;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // --- ZONE 3: filter into 3 decision lanes ---
      if (inZone3) {
        // R max => rise, G max => hold, B max => fall
        if (p.r >= p.g && p.r >= p.b) p.decision = 0;
        else if (p.g >= p.r && p.g >= p.b) p.decision = 1;
        else p.decision = 2;

        const targetY = laneY[p.decision];
        p.y += (targetY - p.y) * 0.06 * frameScale;
        p.vx = ZONE3_SPEED + Math.random() * 12;
        p.x += p.vx * deltaSeconds;
        const color =
          p.decision === 0
            ? `rgb(${Math.round(p.r)},80,80)`
            : p.decision === 1
              ? `rgb(80,${Math.round(p.g)},80)`
              : `rgb(80,80,${Math.round(p.b)})`;

        // draw particle
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.8;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // A cycle uses a finite batch of particles, so once a particle exits
      // the canvas we let it disappear until the next loop restarts.
      if (p.x > w + 10 || p.x < -60 || p.y < -40 || p.y > h + 40) {
        return;
      }
    });

    rafRef.current = requestAnimationFrame(renderCanvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const deviceWidth = Math.max(1, Math.round(rect.width * ratio));
      const deviceHeight = Math.max(1, Math.round(rect.height * ratio));
      canvas.width = deviceWidth;
      canvas.height = deviceHeight;
      const ctx = canvas.getContext('2d');
      ctx?.setTransform(ratio, 0, 0, ratio, 0, 0);
      const logicalWidth = deviceWidth / ratio;
      const logicalHeight = deviceHeight / ratio;
      canvasSizeRef.current = {
        width: logicalWidth,
        height: logicalHeight,
      };
      particlesRef.current = initParticles(logicalWidth, logicalHeight);
      cycleStartedAtRef.current = performance.now();
      loopIndexRef.current = 0;
      lastFrameAtRef.current = 0;
      activeStepRef.current = 0;
      setActiveStep(0);
    };

    resize();
    rafRef.current = requestAnimationFrame(renderCanvas);
    window.addEventListener('resize', resize);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
    };
  }, [renderCanvas]);

  const stepData = [
    {
      icon: '⚡',
      title: t('landing.newHero.step1Title'),
      desc: t('landing.newHero.step1Desc'),
    },
    {
      icon: '🛡️',
      title: t('landing.newHero.step2Title'),
      desc: t('landing.newHero.step2Desc'),
    },
    {
      icon: '📈',
      title: t('landing.newHero.step3Title'),
      desc: t('landing.newHero.step3Desc'),
    },
  ];

  return (
    <section className="nhero">
      <div className="nhero-orb nhero-orb--1" aria-hidden />
      <div className="nhero-orb nhero-orb--2" aria-hidden />

      <div className="nhero-inner">
        <div className="nhero-left">
          <div className="nhero-tag">
            <span className="nhero-dot" />
            {t('landing.newHero.tag')}
          </div>

          <h1 className="nhero-headline">
            {t('landing.newHero.headlinePre')}
            <br />
            <span className="nhero-accent">
              {t('landing.newHero.headlineAccent')}
            </span>{' '}
            {t('landing.newHero.headlinePost')}
            <br />
            <span className="nhero-rotating-line">
              <span className="nhero-rotating-wrap">
                <span className="nhero-rw nhero-rw--1">
                  {t('landing.newHero.rotatingWord1')}
                </span>
                <span className="nhero-rw nhero-rw--2">
                  {t('landing.newHero.rotatingWord2')}
                </span>
                <span className="nhero-rw nhero-rw--3">
                  {t('landing.newHero.rotatingWord3')}
                </span>
              </span>
            </span>
          </h1>

          <p className="nhero-sub">{t('landing.newHero.sub')}</p>

          <div className="nhero-ctas">
            <button type="button" className="nhero-cta-primary" onClick={onContact}>
              {t('landing.newHero.ctaPrimary')}
              <span aria-hidden>→</span>
            </button>
            <a href="#about" className="nhero-cta-secondary">
              {t('landing.newHero.ctaSecondary')}
            </a>
          </div>

        </div>

        <div className="nhero-right">
          <div className="nhero-visual-shell">
            <div className="nhero-vis-topbar">
              <span className="nhero-vis-label">
                {t('landing.newHero.visualLabel')}
              </span>
              <span className="nhero-vis-dots" aria-hidden>
                <i className={activeStep === 0 ? 'active' : ''} />
                <i className={activeStep === 1 ? 'active' : ''} />
                <i className={activeStep === 2 ? 'active' : ''} />
              </span>
            </div>

            <div className="nhero-canvas-wrap">
              <canvas ref={canvasRef} className="nhero-canvas" />
            </div>

            <div className="nhero-step-panel">
              {stepData.map((s, i) => (
                <div
                  key={i}
                  className={`nhero-step-card${activeStep === i ? ' active' : ''}`}
                >
                  <div className="nhero-step-top">
                    <span className="nhero-step-icon">{s.icon}</span>
                    <div>
                      <div className="nhero-step-idx">Step {String(i + 1).padStart(2, '0')}</div>
                      <div className="nhero-step-title">{s.title}</div>
                    </div>
                  </div>
                  <div className="nhero-step-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
