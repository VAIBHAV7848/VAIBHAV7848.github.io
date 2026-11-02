import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import ChapterOnePortrait from "@/components/ChapterOnePortrait";
import ChapterTwoManifesto from "@/components/ChapterTwoManifesto";
import ChapterThreeProjects from "@/components/ChapterThreeProjects";
import ChapterFourAchievements from "@/components/ChapterFourAchievements";
import ChapterFourSystems from "@/components/ChapterFourSystems";
import ChapterFiveContact from "@/components/ChapterFiveContact";
import PageSpine from "@/components/PageSpine";
import ScrubberMiniMap from "@/components/ScrubberMiniMap";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-paper-100 text-ink-950 font-serif selection:bg-crimson selection:text-paper-100">
        {/* Navigation & Header */}
        <Navigation />

        {/* Right-Side Vertical Thread Scrubber */}
        <ScrubberMiniMap />

        <main className="relative">
          {/* Chapter 1: The Portrait Line (Scrubbed on scroll, blank canvas initially) */}
          <ChapterOnePortrait />

          {/* The Continuous Page Spine */}
          <PageSpine />

          {/* Chapter 2: The Philosophy & Spine Descent */}
          <ChapterTwoManifesto />

          {/* Chapter 3: Project Nodes & Architectures */}
          <ChapterThreeProjects />

          {/* Chapter 4A: Verified Credentials & Hackathon Accolades */}
          <ChapterFourAchievements />

          {/* Chapter 4B: Systems & Technical Matrix */}
          <ChapterFourSystems />

          {/* Chapter 5: Terminal Underline & Direct Contact */}
          <ChapterFiveContact />
        </main>
      </div>
    </SmoothScroll>
  );
}
