"use client";

import React from "react";

export default function QuickLanding() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-white/20">
      {/* 
        Self-contained styles for the grid animation.
        We inject this directly to ensure no external CSS dependencies are required.
      */}


      {/* Grid Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Base Grid */}
        <div
          className="grid-animate absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #333 1px, transparent 1px),
              linear-gradient(to bottom, #333 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Radial Fade Mask - gives it that premium "spotlight" feel and hides edges */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, black 85%)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1
          className="text-glow text-6xl font-bold tracking-[0.2em] text-[#FFB100] sm:text-8xl md:text-9xl lg:text-[12rem]"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }} // Fallback font stack just in case
        >
          RUVORO
        </h1>

        {/* Optional subtle subtitle or status, kept minimal as requested */}
        <div className="mt-8 h-1 w-24 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"
            style={{ transform: 'translateX(-100%)', animation: 'shimmer 2s infinite' }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes grid-scroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        .grid-animate {
          animation: grid-scroll 3s linear infinite;
        }
        .text-glow {
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}
