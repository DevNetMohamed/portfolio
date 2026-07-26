'use client';

import React from 'react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Backend Engineering',
    description: 'Started with backend development, mastering NestJS and Node.js to build scalable RESTful APIs, microservices architectures, and robust server-side logic with TypeScript.',
  },
  {
    phase: 'Phase 2',
    title: 'DevOps & Cloud',
    description: 'Expanded into DevOps and cloud engineering — automating infrastructure with Terraform, containerizing with Docker and Kubernetes, and deploying on AWS with CI/CD pipelines.',
  },
  {
    phase: 'Phase 3',
    title: 'Full-Stack Engineer',
    description: 'Became a complete Full-Stack Engineer, combining React frontends with distributed backend systems, event-driven architectures, and cloud-native deployments.',
  },
];

const softSkills = [
  { label: 'Communication', icon: '💬' },
  { label: 'Teamwork', icon: '🤝' },
  { label: 'Problem Solving', icon: '🧩' },
  { label: 'Critical Thinking', icon: '🧠' },
  { label: 'Agile Collaboration', icon: '⚡' },
  { label: 'Continuous Learning', icon: '📚' },
];

export default function AboutSection() {
  return (
    <div
      id="about"
      className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      style={{ scrollMarginTop: '160px' }}
    >
      {/* Section header */}
      <div className="flex flex-col gap-2 mb-5 items-center text-center">
        <span
          className="inline-flex items-center justify-center border text-xs font-medium px-4 py-2 rounded-full"
          style={{ color: '#c492ff', borderColor: '#c492ff' }}
        >
          About
        </span>
        <div className="text-2xl md:text-3xl flex flex-wrap gap-2 font-bold leading-relaxed max-w-xl justify-center">
          <p>About</p>
          <p style={{ color: '#c492ff' }}>Me</p>
        </div>
      </div>
      {/* Phase cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mt-6">
        {phases?.map((phase, i) => (
          <div
            key={i}
            className="relative border rounded-3xl w-full p-4"
            style={{
              backgroundColor: '#091123',
              borderColor: '#111a2d',
              minHeight: '320px',
            }}
          >
            {/* Corner plus decorations */}
            {['-top-3 -left-3', '-top-3 -right-3', '-bottom-3 -right-3', '-bottom-3 -left-3']?.map((pos, j) => (
              <div
                key={j}
                className={`absolute ${pos} w-6 h-6 flex items-center justify-center`}
                style={{ color: '#c492ff', fontSize: '18px', fontWeight: 'bold' }}
              >
                +
              </div>
            ))}
            <div className="flex flex-col justify-center items-center text-center gap-4 h-full px-4 py-8">
              <p
                className="border px-8 py-2 rounded-xl text-sm"
                style={{ borderColor: '#c492ff', color: '#c492ff', backgroundColor: '#091123' }}
              >
                {phase?.phase}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">{phase?.title}</p>
              <p className="text-xs sm:text-sm md:text-base" style={{ color: '#a1a1a1' }}>
                {phase?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Personal info card */}
      <div
        className="mt-7 rounded-3xl border grid md:grid-cols-2 gap-6 p-6 sm:p-8"
        style={{ backgroundColor: '#091123', borderColor: '#111a2d' }}
      >
        <div className="space-y-4">
          <p className="uppercase tracking-widest text-sm" style={{ color: '#a1a1a1' }}>Personal Background</p>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">Mohamed Adel Abd-Elaal</h2>
          <p className="text-sm sm:text-base leading-6" style={{ color: '#a1a1a1' }}>
            Software Engineer based in Giza, Egypt. Specializing in Full-Stack Development, Distributed Systems, and Cloud-Native Applications. Experienced in building scalable and maintainable solutions using NestJS, Node.js, TypeScript, React, MongoDB, and PostgreSQL.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-lg">📍</span>
              <span className="text-sm" style={{ color: '#a1a1a1' }}>Giza, Egypt</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">🌐</span>
              <span className="text-sm" style={{ color: '#a1a1a1' }}>Arabic (Native) · English (Very Good)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">🎓</span>
              <span className="text-sm" style={{ color: '#a1a1a1' }}>B.Sc. Social Work, Asyut University (2019–2023)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📧</span>
              <a
                href="mailto:mohamedadelhareidy@gmail.com"
                className="text-sm transition-colors hover:underline"
                style={{ color: '#c492ff' }}
              >
                mohamedadelhareidy@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <a
                href="tel:+201116957941"
                className="text-sm transition-colors hover:underline"
                style={{ color: '#c492ff' }}
              >
                +201116957941
              </a>
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div className="space-y-4">
          <p className="uppercase tracking-widest text-sm" style={{ color: '#a1a1a1' }}>Soft Skills</p>
          <div className="grid grid-cols-2 gap-3">
            {softSkills?.map((skill) => (
              <div
                key={skill?.label}
                className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 hover:border-purple-500/50"
                style={{ backgroundColor: '#0a1633', borderColor: '#111a2d' }}
              >
                <span className="text-xl">{skill?.icon}</span>
                <span className="text-sm font-medium">{skill?.label}</span>
              </div>
            ))}
          </div>

          {/* Leadership note */}
          <div
            className="mt-4 p-4 rounded-xl border"
            style={{ backgroundColor: 'rgba(196,146,255,0.05)', borderColor: 'rgba(196,146,255,0.2)' }}
          >
            <p className="text-xs font-semibold mb-1" style={{ color: '#c492ff' }}>🏆 Leadership</p>
            <p className="text-xs leading-5" style={{ color: '#a1a1a1' }}>
              Elected Chairman of the Social Committee of the College Faculty, organizing initiatives for over 200 members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
