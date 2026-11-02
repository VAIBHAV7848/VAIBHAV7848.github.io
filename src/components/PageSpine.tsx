"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PageSpine() {
  const spineRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathD, setPathD] = useState<string>("");
  const [pathLength, setPathLength] = useState<number>(10000);

  // Recalculate spine coordinates on mount and resize
  useEffect(() => {
    const updatePath = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const w = window.innerWidth;
      const h = container.clientHeight;
      const cx = w / 2;

      // Project anchor nodes by id
      const projectIds = [
        "project-node-gigaflow",
        "project-node-diana",
        "project-node-tcs-retail-sentiment",
        "project-node-wids-wildfire",
        "project-node-expenseiq",
        "project-node-hackathon-agent-toolkit",
      ];

      let d = `M ${cx} 0 L ${cx} 150`;

      // Chapter 2 curve
      d += ` C ${cx + 40} 300, ${cx - 40} 500, ${cx} 700`;

      // Project loops
      projectIds.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const elRect = el.getBoundingClientRect();
          const targetY = window.scrollY + elRect.top - containerTop + elRect.height / 2;
          const isEven = index % 2 === 0;
          const loopDir = isEven ? -1 : 1;
          const loopRadius = Math.min(80, w * 0.12);

          // Lead into node
          d += ` L ${cx} ${targetY - 50}`;
          // Smooth loop around project node
          d += ` C ${cx + loopDir * 30} ${targetY - 30}, ${cx + loopDir * loopRadius} ${targetY - 20}, ${cx + loopDir * loopRadius} ${targetY}`;
          d += ` C ${cx + loopDir * loopRadius} ${targetY + 20}, ${cx} ${targetY + 40}, ${cx} ${targetY + 60}`;
        }
      });

      // Terminal email element
      const emailEl = document.getElementById("terminal-email-target");
      if (emailEl) {
        const emailRect = emailEl.getBoundingClientRect();
        const emailY = window.scrollY + emailRect.top - containerTop + emailRect.height + 4;
        const emailLeft = emailRect.left;
        const emailRight = emailRect.right;

        // Curve down to email start
        d += ` L ${cx} ${emailY - 60}`;
        d += ` C ${cx} ${emailY - 20}, ${emailLeft} ${emailY - 20}, ${emailLeft} ${emailY}`;
        // The Underline under email!
        d += ` L ${emailRight} ${emailY}`;
        // Elegant terminal tick downwards
        d += ` L ${emailRight + 12} ${emailY + 6}`;
      } else {
        d += ` L ${cx} ${h}`;
      }

      setPathD(d);
    };

    // Delay slightly to ensure all DOM elements are rendered
    const timeout = setTimeout(updatePath, 200);
    window.addEventListener("resize", updatePath);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updatePath);
    };
  }, []);

  // GSAP ScrollTrigger animation for the continuous spine
  useEffect(() => {
    if (!spineRef.current || !pathD) return;
    gsap.registerPlugin(ScrollTrigger);

    const path = spineRef.current;
    const len = path.getTotalLength();
    setPathLength(len);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = "0";
      return;
    }

    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom bottom",
      scrub: 0.25,
      onUpdate: (self) => {
        const offset = len * (1 - self.progress);
        path.style.strokeDashoffset = `${offset}`;
      },
    });

    return () => {
      trigger.kill();
    };
  }, [pathD]);

  return (
    <div
      ref={containerRef}
      className="absolute top-[260vh] left-0 w-full pointer-events-none z-20"
      style={{ height: "calc(100% - 260vh)" }}
    >
      <svg className="w-full h-full block overflow-visible">
        {/* Shadow ink trace */}
        <path
          d={pathD}
          fill="none"
          stroke="#121212"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.08"
        />
        {/* The Active Continuous Line */}
        <path
          ref={spineRef}
          d={pathD}
          fill="none"
          stroke="#121212"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-opacity duration-300"
        />
      </svg>
    </div>
  );
}
