'use client';

import React from 'react';

const techStack = [
  { label: 'NestJS', color: '#e0234e' },
  { label: 'Node.js', color: '#68a063' },
  { label: 'TypeScript', color: '#3178c6' },
  { label: 'React', color: '#61dafb' },
  { label: 'Docker', color: '#2496ed' },
  { label: 'Kubernetes', color: '#326ce5' },
  { label: 'AWS', color: '#ff9900' },
  { label: 'Kafka', color: '#231f20' },
];

export default function HeroSection() {
  return (
    <div
      id="home"
      className="container mx-auto text-center flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10"
      style={{ scrollMarginTop: '160px' }}
    >
      {/* Avatar / Logo placeholder */}
      <div
        className="mt-16 sm:mt-10 w-28 h-28 rounded-full border-2 flex items-center justify-center text-3xl font-bold"
        style={{
          backgroundColor: '#091123',
          borderColor: '#c492ff',
          color: '#c492ff',
          boxShadow: '0 0 40px rgba(196, 146, 255, 0.2)',
        }}
      >
        MA
      </div>

      {/* Subtitle */}
      <p
        className="uppercase tracking-widest mb-6 text-sm sm:text-base md:text-lg mt-4"
        style={{ color: '#a1a1a1' }}
      >
        Software Engineer &amp; Full-Stack Developer
      </p>

      {/* Tech stack icons row */}
      <div className="flex items-center gap-2 md:gap-3 mb-5 flex-wrap justify-center">
        {techStack.map((tech) => (
          <div
            key={tech.label}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs font-bold"
            style={{
              backgroundColor: '#091123',
              borderColor: '#111a2d',
              color: tech.color,
              fontSize: '8px',
            }}
            title={tech.label}
          >
            {tech.label.substring(0, 2).toUpperCase()}
          </div>
        ))}
      </div>

      {/* Main heading */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 text-nowrap">
        Building Scalable &amp; Reliable
      </h1>
      <div className="flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-5 mb-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Distributed</h1>
        <h1 className="text-2xl text-nowrap sm:text-4xl md:text-5xl lg:text-7xl font-bold" style={{ color: '#c492ff' }}>Systems</h1>
      </div>

      {/* Description */}
      <p
        className="text-base sm:text-lg md:text-xl sm:mt-4 max-w-2xl px-10 sm:px-0 leading-6"
        style={{ color: '#a1a1a1' }}
      >
        Hi! I&apos;m Mohamed Adel, a Software Engineer specializing in Full-Stack Development, Microservices, and Cloud-Native Applications.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-5">
        <a href="#contact">
          <button
            className="cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-11 mt-6 md:mt-10 p-4 md:p-6 sm:mb-10 flex items-center gap-2 border"
            style={{
              backgroundColor: '#091123',
              color: '#fafafa',
              borderColor: '#111a2d',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0a1633'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#091123'; }}
          >
            Contact Me
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
          </button>
        </a>
        <a href="#projects">
          <button
            className="cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-11 mt-6 md:mt-10 p-4 md:p-6 sm:mb-10 flex items-center gap-2 text-white"
            style={{ backgroundColor: '#c492ff' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#b07de0'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#c492ff'; }}
          >
            See My Work
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
