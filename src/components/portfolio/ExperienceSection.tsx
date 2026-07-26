"use client";

import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  type: "work" | "training";
  icon: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    title: "AI-Powered Software Developer Trainee",
    company: "Digilians, NTI",
    duration: "December 2025 – Present",
    description:
      "Developing backend services and RESTful APIs using NestJS, Node.js, and TypeScript. Building microservices-based applications, implementing asynchronous communication with Kafka and RabbitMQ, and applying AI-assisted development tools. Deploying containerized applications with Docker and implementing CI/CD pipelines with Jenkins and GitHub Actions.",
    type: "training",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c492ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "IT Specialist",
    company: "British International College of Cairo",
    duration: "April 2025 – August 2025",
    description:
      "Managed IT infrastructure and domain services, providing technical support for 150+ users. Troubleshot hardware, software, and networking issues while maintaining system availability and operational reliability.",
    type: "work",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c492ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    color: "#ff9900",
  },
  {
    name: "DevOps Engineer Certification",
    issuer: "Mahara-Tech, ITI",
    color: "#0078d4",
  },
  {
    name: "Professional Front-End Developer",
    issuer: "Meta (Coursera)",
    color: "#1877f2",
  },
  { name: "DevOps Bootcamp", issuer: "KodeKloud", color: "#326ce5" },
  { name: "DevOps Bootcamp", issuer: "Packt (Coursera)", color: "#0056d2" },
  {
    name: "Full Stack PHP Developer",
    issuer: "Black Horse Courses",
    color: "#22c55e",
  },
];

export default function ExperienceSection() {
  return (
    <div
      id="experience"
      className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      style={{ scrollMarginTop: "160px" }}
    >
      {/* Section header */}
      <div className="flex flex-col gap-2 mb-5 items-center text-center">
        <span
          className="inline-flex items-center justify-center border text-xs font-medium px-4 py-2 rounded-full"
          style={{ color: "#c492ff", borderColor: "#c492ff" }}
        >
          Experience
        </span>
        <div className="text-2xl md:text-3xl flex flex-wrap gap-2 font-bold leading-relaxed max-w-xl justify-center">
          <p>My</p>
          <p style={{ color: "#c492ff" }}>Work Experience</p>
        </div>
      </div>

      {/* Experience cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 mt-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="relative overflow-hidden p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-5 border rounded-3xl"
            style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
          >
            <div
              className="absolute -bottom-20 -left-10 w-32 h-32 rounded-full pointer-events-none"
              style={{
                backgroundColor: "#c492ff",
                filter: "blur(60px)",
                opacity: 0.12,
              }}
            />
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border flex items-center justify-center shrink-0 mx-auto sm:mx-0"
              style={{ backgroundColor: "#0a1633", borderColor: "#111a2d" }}
            >
              {exp.icon}
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-lg sm:text-xl">{exp.title}</p>
              <p
                className="text-sm font-medium mt-1"
                style={{ color: "#c492ff" }}
              >
                {exp.company}
              </p>
              <p className="text-xs mt-1 mb-2" style={{ color: "#a1a1a1" }}>
                {exp.duration}
              </p>
              <p className="text-sm leading-6" style={{ color: "#a1a1a1" }}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-10">
        <div className="flex flex-col gap-2 mb-5 items-center text-center">
          <span
            className="inline-flex items-center justify-center border text-xs font-medium px-4 py-2 rounded-full"
            style={{ color: "#c492ff", borderColor: "#c492ff" }}
          >
            Certifications
          </span>
          <div className="text-2xl md:text-3xl flex flex-wrap gap-2 font-bold leading-relaxed max-w-xl justify-center">
            <p>My</p>
            <p style={{ color: "#c492ff" }}>Certifications</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="relative overflow-hidden p-5 border rounded-2xl flex items-start gap-4 transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${cert.color}20`,
                  border: `1px solid ${cert.color}40`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={cert.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm leading-5">{cert.name}</p>
                <p className="text-xs mt-1" style={{ color: "#a1a1a1" }}>
                  {cert.issuer}
                </p>
              </div>
              <div
                className="absolute -bottom-10 -right-5 w-20 h-20 rounded-full pointer-events-none"
                style={{
                  backgroundColor: cert.color,
                  filter: "blur(40px)",
                  opacity: 0.08,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
