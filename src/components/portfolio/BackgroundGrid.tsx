'use client';

import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div
        className="relative opacity-50 flex size-full items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#030915' }}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{
            fill: 'rgba(156, 163, 175, 0.15)',
            stroke: 'rgba(156, 163, 175, 0.15)',
            maskImage: 'radial-gradient(1200px circle at center, white, transparent)',
            WebkitMaskImage: 'radial-gradient(1200px circle at center, white, transparent)',
          }}
        >
          <defs>
            <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse" x="-1" y="-1">
              <path d="M.5 100V.5H100" fill="none" strokeDasharray="4 2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
          <svg x="-1" y="-1" className="overflow-visible">
            {[
              [1, 1], [401, 101], [201, 501], [301, 801], [501, 301],
              [601, 601], [701, 1001], [1201, 201], [1401, 401], [1501, 101],
              [1601, 601], [1801, 301], [1801, 801], [2001, 501], [2201, 201],
            ]?.map(([x, y], i) => (
              <rect key={i} strokeWidth="0" width="99" height="99" x={x} y={y} />
            ))}
          </svg>
        </svg>
      </div>
    </div>
  );
}
