"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/data/projects";

export default function PageSpine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<SVGPathElement>(null);
  const nibRef = useRef<SVGGElement>(null);
  const pathLenRef = useRef<number>(0);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const prevPathRef = useRef<string>("");

  const [pathD, setPathD] = useState<string>("");
  const [bounds, setBounds] = useState<{ top: number; height: number }>({
    top: 0,
    height: 6000,
  });

  // Calculate coordinates with strict Read/Compute/Write separation (FastDOM)
  const updatePath = useCallback(() => {
    if (typeof window === "undefined") return;

    // Phase 1: FastDOM Synchronous Geometry Read
    const manifestoEl = document.getElementById("manifesto");
    const contactEl = document.getElementById("contact");
    const emailEl = document.getElementById("terminal-email-target");
    const achEl = document.getElementById("achievements");
    const sysEl = document.getElementById("systems");

    if (!manifestoEl) return;

    // Anchor container dynamically to Chapter 2 top
    const manifestoTop = manifestoEl.offsetTop;
    const contactBottom = contactEl
      ? contactEl.offsetTop + contactEl.clientHeight
      : manifestoTop + 6000;
    const calculatedHeight = Math.max(2000, contactBottom - manifestoTop);

    setBounds({
      top: manifestoTop,
      height: calculatedHeight,
    });

    const w = window.innerWidth;
    const cx = w / 2;
    const containerTop = manifestoTop;

    // Canonical project elements in exact order
    const projectNodes: { id: string; targetY: number; el: HTMLElement }[] = [];
    PROJECTS.forEach((p) => {
      const el = document.getElementById(`project-node-${p.id}`);
      if (el) {
        const elRect = el.getBoundingClientRect();
        const targetY = elRect.top + window.scrollY - containerTop + elRect.height / 2;
        projectNodes.push({ id: p.id, targetY, el });
      }
    });

    // Sort project nodes by Y to guarantee 100% monotonic progression
    projectNodes.sort((a, b) => a.targetY - b.targetY);

    // Achievements & Systems coordinates
    let achTopY = 0;
    let achMidY = 0;
    let achBottomY = 0;
    if (achEl) {
      const achRect = achEl.getBoundingClientRect();
      achTopY = achRect.top + window.scrollY - containerTop;
      achMidY = achTopY + achRect.height * 0.45;
      achBottomY = achTopY + achRect.height;
    }

    let sysTopY = 0;
    let sysMidY = 0;
    let sysBottomY = 0;
    if (sysEl) {
      const sysRect = sysEl.getBoundingClientRect();
      sysTopY = sysRect.top + window.scrollY - containerTop;
      sysMidY = sysTopY + sysRect.height * 0.5;
      sysBottomY = sysTopY + sysRect.height;
    }

    // Terminal email coordinates
    let emailLeft = cx - 120;
    let emailRight = cx + 120;
    let emailY = calculatedHeight - 120;
    let hasEmail = false;

    if (emailEl) {
      const emailRect = emailEl.getBoundingClientRect();
      emailLeft = emailRect.left;
      emailRight = emailRect.right;
      emailY = emailRect.top + window.scrollY - containerTop + emailRect.height + 3;
      hasEmail = true;
    }

    // Phase 2: Pure In-Memory Mathematical Bezier String Generation
    // The spine starts at (cx, 0) matching Chapter 1's neck exit line
    let d = `M ${cx} 0`;

    // Chapter 2: The Philosophy & Ethos Gentle Harmonic Wave
    // Leads from boundary down to the manifesto quote
    const ch2WaveStart = Math.min(180, calculatedHeight * 0.04);
    const ch2WaveMid = Math.min(420, calculatedHeight * 0.08);
    const ch2WaveEnd = Math.min(680, calculatedHeight * 0.12);

    d += ` L ${cx} ${ch2WaveStart}`;
    // C1 smooth S-curve through manifesto thesis
    d += ` C ${cx + 36} ${ch2WaveStart + 80}, ${cx - 36} ${ch2WaveMid - 80}, ${cx} ${ch2WaveMid}`;
    d += ` C ${cx + 28} ${ch2WaveMid + 80}, ${cx} ${ch2WaveEnd - 60}, ${cx} ${ch2WaveEnd}`;

    // Chapter 3: Smooth C1 Crescent Loops Around Project Nodes
    const loopRadius = Math.max(36, Math.min(80, w * 0.12));
    const H = 65; // vertical half-span
    const kH = 36; // cubic control point offset = round(H * 0.5523)

    projectNodes.forEach((node, index) => {
      const targetY = node.targetY;
      const isEven = index % 2 === 0;
      const loopDir = isEven ? -1 : 1;
      const r = loopRadius;

      const yIn = targetY - H;
      const yApex = targetY;
      const yOut = targetY + H;

      // Vertical approach with 0° kink
      d += ` L ${cx} ${yIn}`;

      // Invariant 1: First half of crescent loop
      // P0 = (cx, yIn), P1 = (cx, yIn + kH) strictly vertical tangent!
      // P2 = (cx + loopDir * r, yApex - kH), P3 = (cx + loopDir * r, yApex)
      d += ` C ${cx} ${yIn + kH}, ${cx + loopDir * r} ${yApex - kH}, ${cx + loopDir * r} ${yApex}`;

      // Invariant 2: Second half of crescent loop returning to centerline
      // Q0 = (cx + loopDir * r, yApex), Q1 = (cx + loopDir * r, yApex + kH)
      // Q2 = (cx, yOut - kH), Q3 = (cx, yOut) strictly vertical tangent!
      d += ` C ${cx + loopDir * r} ${yApex + kH}, ${cx} ${yOut - kH}, ${cx} ${yOut}`;
    });

    // Chapter 4A: Credentials & Accolades Central Conduit
    if (achEl && achTopY > 0) {
      d += ` L ${cx} ${achTopY + 30}`;
      // Subtle harmonic curve bisecting Academic Foundation and Accolades
      d += ` C ${cx} ${achTopY + 120}, ${cx + 32} ${achMidY - 60}, ${cx + 32} ${achMidY}`;
      d += ` C ${cx + 32} ${achMidY + 60}, ${cx} ${achBottomY - 40}, ${cx} ${achBottomY}`;
    }

    // Chapter 4B: Systems Matrix Data Bus
    if (sysEl && sysTopY > 0) {
      d += ` L ${cx} ${sysTopY + 24}`;
      // Gentle harmonic sway through the systems matrix
      d += ` C ${cx} ${sysTopY + 90}, ${cx - 28} ${sysMidY - 50}, ${cx - 28} ${sysMidY}`;
      d += ` C ${cx - 28} ${sysMidY + 50}, ${cx} ${sysBottomY - 30}, ${cx} ${sysBottomY}`;
    }

    // Chapter 5: Terminal Underline & Pen Lift
    if (hasEmail) {
      const approachY = emailY - 55;
      // Lead vertically down to approach email
      d += ` L ${cx} ${approachY}`;

      // Smooth C1 transition from vertical centerline into horizontal underline
      // Enters vertically at (cx, approachY), arrives horizontally at (emailLeft, emailY)
      d += ` C ${cx} ${approachY + 32}, ${emailLeft - 36} ${emailY}, ${emailLeft} ${emailY}`;

      // Horizontal underline sweep under email
      d += ` L ${emailRight} ${emailY}`;

      // 45° calligraphic upward flick (pen lift)
      d += ` C ${emailRight + 6} ${emailY}, ${emailRight + 10} ${emailY - 3}, ${emailRight + 12} ${emailY - 6}`;
    } else {
      d += ` L ${cx} ${calculatedHeight}`;
    }

    // Phase 3: FastDOM Batched Update
    if (d !== prevPathRef.current) {
      prevPathRef.current = d;
      setPathD(d);
    }
  }, []);

  // Recalculate on mount, web font ready, and DOM resizes
  useEffect(() => {
    // Initial run after hydration
    const timer = setTimeout(updatePath, 80);

    // Wait for Google Fonts to eliminate layout shift jumps
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        updatePath();
        ScrollTrigger.refresh();
      });
    }

    // Debounced Resize Listener
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updatePath();
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    // ResizeObserver on body to detect accordion or image expansions
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        handleResize();
      });
      ro.observe(document.body);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      if (ro) ro.disconnect();
    };
  }, [updatePath]);

  // GSAP ScrollTrigger Integration with Hardware-Accelerated Nib Tracer
  useEffect(() => {
    if (!spineRef.current || !pathD || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const path = spineRef.current;
    const len = path.getTotalLength();
    pathLenRef.current = len;

    // Accessibility: Reduced Motion handling
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "0";
      if (nibRef.current) nibRef.current.style.opacity = "0";
      return;
    }

    path.style.strokeDasharray = `${len} ${len}`;
    path.style.strokeDashoffset = `${len}`;

    // Clean up previous trigger
    if (triggerRef.current) {
      triggerRef.current.kill();
    }

    // Continuous ScrollTrigger Scrub
    triggerRef.current = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 70%",
      scrub: 0.15,
      onUpdate: (self) => {
        const progress = self.progress;
        const offset = len * (1 - progress);
        path.style.strokeDashoffset = `${offset}`;

        // High-performance DOM transformation for Crimson Nib Tracer
        // Bypasses React reconciliation for 120 FPS buttery-smooth motion
        if (nibRef.current && len > 0) {
          const currentDist = len * progress;
          const pt = path.getPointAtLength(Math.min(len, Math.max(0, currentDist)));
          nibRef.current.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);

          // Subtle opacity control: active during stroke, hides at boundaries
          if (progress > 0.005 && progress < 0.998) {
            nibRef.current.style.opacity = "1";
          } else {
            nibRef.current.style.opacity = "0";
          }
        }
      },
    });

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, [pathD]);

  return (
    <div
      ref={containerRef}
      className="absolute left-0 w-full pointer-events-none z-20 overflow-visible print:hidden"
      style={{
        top: bounds.top,
        height: bounds.height,
      }}
    >
      <svg
        className="w-full h-full block overflow-visible pointer-events-none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Ambient Glow for Crimson Nib */}
          <filter id="crimson-nib-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Scored Archival Paper Shadow Indentation */}
        <path
          id="page-spine-shadow"
          d={pathD}
          fill="none"
          stroke="#121212"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.08"
          vectorEffect="non-scaling-stroke"
        />

        {/* The Active Continuous Ink Spine */}
        <path
          id="page-spine-active"
          ref={spineRef}
          d={pathD}
          fill="none"
          stroke="#121212"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ willChange: "stroke-dashoffset" }}
        />

        {/* The Glowing Crimson Nib Tracer (matches Chapter 1's fountain pen nib) */}
        <g
          id="page-spine-nib"
          ref={nibRef}
          style={{ opacity: 0 }}
          className="pointer-events-none transition-opacity duration-200"
        >
          {/* Layer 1: Ambient Crimson Glow Halo */}
          <circle
            cx="0"
            cy="0"
            r="8"
            fill="#C8321A"
            fillOpacity="0.25"
            filter="url(#crimson-nib-glow)"
          />
          {/* Layer 2: Precision Nib Core */}
          <circle cx="0" cy="0" r="3.2" fill="#C8321A" />
          {/* Layer 3: Specular Ink Reflection */}
          <circle cx="0" cy="0" r="1" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
