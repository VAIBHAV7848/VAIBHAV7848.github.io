"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Play, Pause, Download, Layers } from "lucide-react";

interface PortraitData {
  numPoints: number;
  viewBox: [number, number, number, number];
  exitPoint: [number, number];
  startPoint: [number, number];
  points: [number, number][];
  svgPath: string;
}

export default function ChapterOnePortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [portraitData, setPortraitData] = useState<PortraitData | null>(null);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [useSvgMode, setUseSvgMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPlayingAutoDraw, setIsPlayingAutoDraw] = useState(false);
  const autoDrawAnimRef = useRef<number | null>(null);
  const lastScrollTime = useRef<number>(Date.now());
  const lastProgress = useRef<number>(0);
  const velocityRef = useRef<number>(0);

  // Load points data
  useEffect(() => {
    fetch("/portrait-points.json")
      .then((res) => res.json())
      .then((data: PortraitData) => {
        setPortraitData(data);
      })
      .catch((err) => console.error("Failed to load portrait points:", err));

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Setup GSAP ScrollTrigger for Chapter 1
  useEffect(() => {
    if (!containerRef.current || !portraitData) return;
    gsap.registerPlugin(ScrollTrigger);

    if (reducedMotion) {
      setProgress(1);
      setIsComplete(true);
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.15,
      onUpdate: (self) => {
        if (!isPlayingAutoDraw) {
          const now = Date.now();
          const dt = Math.max(1, now - lastScrollTime.current);
          const dp = Math.abs(self.progress - lastProgress.current);
          velocityRef.current = dp / dt;
          lastScrollTime.current = now;
          lastProgress.current = self.progress;

          setProgress(self.progress);
          setIsComplete(self.progress >= 0.99);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [portraitData, reducedMotion, isPlayingAutoDraw]);

  // Auto-Draw Demo Mode (20s hands-free playback)
  const toggleAutoDraw = useCallback(() => {
    if (isPlayingAutoDraw) {
      if (autoDrawAnimRef.current) cancelAnimationFrame(autoDrawAnimRef.current);
      setIsPlayingAutoDraw(false);
    } else {
      setIsPlayingAutoDraw(true);
      const startP = progress >= 0.98 ? 0 : progress;
      const startTime = performance.now();
      const duration = 20000 * (1 - startP); // ~20s total

      const step = (now: number) => {
        const elapsed = now - startTime;
        const p = Math.min(1.0, startP + elapsed / duration);
        setProgress(p);
        setIsComplete(p >= 0.99);

        // Scroll the window smoothly alongside auto-draw
        if (containerRef.current) {
          const totalScroll = containerRef.current.clientHeight - window.innerHeight;
          window.scrollTo({
            top: p * totalScroll,
            behavior: "auto",
          });
        }

        if (p < 1.0) {
          autoDrawAnimRef.current = requestAnimationFrame(step);
        } else {
          setIsPlayingAutoDraw(false);
        }
      };

      autoDrawAnimRef.current = requestAnimationFrame(step);
    }
  }, [isPlayingAutoDraw, progress]);

  // Redraw Canvas with Ink Physics (Calligraphic velocity & glowing Crimson nib)
  useEffect(() => {
    if (!canvasRef.current || !portraitData || useSvgMode) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, w, h);

    const points = portraitData.points;
    const total = points.length;
    const currentCount = reducedMotion ? total : Math.floor(progress * total);

    if (currentCount <= 1) return;

    // Calligraphic line width modulation based on velocity
    const velocity = velocityRef.current;
    const dynamicWidth = Math.max(0.7, Math.min(1.25, 0.95 - velocity * 15));

    ctx.strokeStyle = "#121212";
    ctx.lineWidth = dynamicWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    const p0 = points[0];
    ctx.moveTo(p0[0] * w, p0[1] * h);

    for (let i = 1; i < currentCount; i++) {
      const pt = points[i];
      ctx.lineTo(pt[0] * w, pt[1] * h);
    }
    ctx.stroke();

    // Active glowing Crimson pen nib tracer
    if (!reducedMotion && currentCount < total) {
      const tip = points[currentCount - 1];
      const tipX = tip[0] * w;
      const tipY = tip[1] * h;

      // Glow halo
      ctx.save();
      ctx.fillStyle = "rgba(200, 50, 26, 0.25)";
      ctx.beginPath();
      ctx.arc(tipX, tipY, 7, 0, Math.PI * 2);
      ctx.fill();

      // Sharp nib point
      ctx.fillStyle = "#C8321A";
      ctx.beginPath();
      ctx.arc(tipX, tipY, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Terminal Neck Exit Indicator
    if (currentCount >= total - 1) {
      const exitPt = points[total - 1];
      const ex = exitPt[0] * w;
      const ey = exitPt[1] * h;

      ctx.save();
      ctx.fillStyle = "#C8321A";
      ctx.beginPath();
      ctx.arc(ex, ey, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#C8321A";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex, h);
      ctx.stroke();
      ctx.restore();
    }
  }, [progress, portraitData, useSvgMode, reducedMotion]);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => setProgress((prev) => prev);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={containerRef} id="portrait" className="relative h-[270vh] bg-paper-100">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Editorial Sub-Header */}
        <div className="absolute top-20 md:top-18 text-center max-w-xl mx-auto z-10 pointer-events-none select-none">
          <div className="flex items-center justify-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-ink-600">
            <span className="text-crimson font-bold">Chapter 01</span>
            <span>·</span>
            <span>The Single Stroke</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-950 mb-1">
            Vaibhav Chavanpatil
          </h1>
          <p className="font-serif italic text-sm sm:text-base text-ink-800">
            {progress === 0 && !reducedMotion ? (
              <span className="text-crimson font-medium not-italic animate-pulse">
                ↓ Scroll downward to draw portrait in one continuous line
              </span>
            ) : progress < 1 ? (
              <span>Weaving 8,000 Voronoi points through square glasses, facial contour, and beard...</span>
            ) : (
              <span className="text-crimson font-medium not-italic">
                Portrait stroke closed. Line exits at neck to form the spine.
              </span>
            )}
          </p>
        </div>

        {/* The Continuous Portrait Canvas Container */}
        <div className="relative mt-12 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] max-w-[90vw] max-h-[66vh] flex items-center justify-center">
          <div className="absolute inset-0 border border-ink-200/40 rounded-sm pointer-events-none" />

          {/* Canvas Mode (Primary: High-DPI 60+ FPS, Zero Safari Jank) */}
          {!useSvgMode && (
            <canvas
              ref={canvasRef}
              className="w-full h-full block cursor-crosshair"
              style={{ width: "100%", height: "100%" }}
            />
          )}

          {/* Vector SVG Mode Fallback */}
          {useSvgMode && portraitData && (
            <svg
              viewBox="0 0 800 800"
              className="w-full h-full block"
              style={{ width: "100%", height: "100%" }}
            >
              <path
                d={portraitData.svgPath}
                fill="none"
                stroke="#121212"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 40000,
                  strokeDashoffset: reducedMotion ? 0 : 40000 * (1 - progress),
                  transition: "stroke-dashoffset 0.1s linear",
                }}
              />
            </svg>
          )}

          {/* Neck Exit Guide Line */}
          {isComplete && (
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none animate-bounce">
              <span className="font-mono text-[10px] text-crimson font-bold uppercase tracking-wider mb-0.5">
                Spine Exit
              </span>
              <ArrowDown className="w-4 h-4 text-crimson" />
            </div>
          )}
        </div>

        {/* Floating Controls & Metrics */}
        <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ink-600 border-t border-ink-200/40 pt-4 z-20">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">TSP STIPPLING: ~8,000 NODES</span>
            <span className="text-ink-400 hidden sm:inline">|</span>
            <span className="text-crimson font-bold">
              {Math.round(progress * 100)}% COMPLETE
            </span>

            {/* Auto-Draw Toggle */}
            <button
              onClick={toggleAutoDraw}
              className="ml-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-ink-950 text-paper-100 hover:bg-crimson transition-colors font-bold uppercase text-[10px]"
            >
              {isPlayingAutoDraw ? (
                <>
                  <Pause className="w-3 h-3" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>Auto-Draw (20s)</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Download AxiDraw Plotter SVG */}
            <a
              href="/portrait-path.svg"
              download="vaibhav-chavanpatil-single-line-portrait-plotter.svg"
              className="inline-flex items-center gap-1.5 hover:text-crimson transition-colors uppercase underline underline-offset-4 decoration-ink-300"
              title="Download vector SVG path ready for AxiDraw and pen plotters"
            >
              <Download className="w-3 h-3" />
              <span className="hidden sm:inline">Plotter SVG</span>
            </a>

            <span className="text-ink-300">/</span>

            <button
              onClick={() => setUseSvgMode(!useSvgMode)}
              className="hover:text-ink-950 transition-colors uppercase underline underline-offset-4 decoration-ink-300 inline-flex items-center gap-1"
            >
              <Layers className="w-3 h-3" />
              <span>{useSvgMode ? "Canvas Mode" : "Vector SVG"}</span>
            </button>

            <span className="text-ink-300">/</span>

            <a
              href="#manifesto"
              className="hover:text-crimson transition-colors uppercase font-medium flex items-center gap-1"
            >
              <span>Skip Intro</span>
              <ArrowDown className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
