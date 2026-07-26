"use client";

import React, { useEffect, useRef } from "react";

const skillsCol1 = [
  "NestJS",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "React",
  "REST APIs",
  "Microservices",
  "Apache Kafka",
  "RabbitMQ",
  "WebSockets",
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
  "Ansible",
  "Jenkins",
];

const skillsCol2 = [
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GitHub Actions",
  "CI/CD",
  "Linux",
  "Bash Scripting",
  "Python",
  "Spring Boot",
  "Express.js",
  "JWT Auth",
  "System Design",
  "EDA",
  "Git",
  "Tailwind CSS",
  "Bootstrap 5",
];

interface SkillColumnProps {
  skills: string[];
  direction: "up" | "down";
}

function SkillColumn({ skills, direction }: SkillColumnProps) {
  const doubled = [...skills, ...skills];
  return (
    <div className="relative shrink-0 grow overflow-hidden h-64">
      <div
        className={
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down"
        }
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="border rounded-lg flex items-center justify-center p-3 skill-tag cursor-default"
            style={{ backgroundColor: "#0a1633", borderColor: "#111a2d" }}
          >
            <span className="text-sm font-semibold whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <div
      id="portfolio"
      className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10"
    >
      <div
        className="h-auto grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {/* Left: Hero card */}
        <div
          className="h-full min-h-64 border relative rounded-3xl w-full overflow-hidden"
          style={{ borderColor: "#111a2d" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #030915 0%, #091123 50%, #0a1633 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,3,25,0.9) 0%, rgba(0,3,25,0.4) 60%, transparent 100%)",
            }}
          />
          {/* Code decoration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <text
                x="10"
                y="40"
                fill="#c492ff"
                fontSize="14"
                fontFamily="monospace"
              >{`const engineer = {`}</text>
              <text
                x="10"
                y="60"
                fill="#c492ff"
                fontSize="14"
                fontFamily="monospace"
              >{`  name: 'Mohamed',`}</text>
              <text
                x="10"
                y="80"
                fill="#c492ff"
                fontSize="14"
                fontFamily="monospace"
              >{`  stack: 'Full-Stack',`}</text>
              <text
                x="10"
                y="100"
                fill="#c492ff"
                fontSize="14"
                fontFamily="monospace"
              >{`  cloud: 'AWS',`}</text>
              <text
                x="10"
                y="120"
                fill="#c492ff"
                fontSize="14"
                fontFamily="monospace"
              >{`  devops: true`}</text>
              <text
                x="10"
                y="140"
                fill="#c492ff"
                fontSize="14"
                fontFamily="monospace"
              >{`}`}</text>
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl max-w-lg font-bold p-4 absolute top-0 left-0 text-white">
            Full-Stack Engineer specializing in NestJS, Microservices &amp;
            Cloud
          </h1>
          {/* Primary glow */}
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
            style={{
              backgroundColor: "#c492ff",
              filter: "blur(60px)",
              opacity: 0.2,
            }}
          />
        </div>

        {/* Right: Two stacked cards */}
        <div className="h-full flex flex-col gap-5">
          {/* Location card */}
          <div
            className="h-60 relative rounded-3xl border w-full bg-no-repeat bg-contain bg-bottom"
            style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
          >
            {/* World map SVG placeholder */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 400" className="w-full h-full" fill="none">
                <ellipse
                  cx="400"
                  cy="200"
                  rx="380"
                  ry="180"
                  stroke="#c492ff"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <ellipse
                  cx="400"
                  cy="200"
                  rx="280"
                  ry="180"
                  stroke="#c492ff"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <ellipse
                  cx="400"
                  cy="200"
                  rx="180"
                  ry="180"
                  stroke="#c492ff"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="20"
                  y1="200"
                  x2="780"
                  y2="200"
                  stroke="#c492ff"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="400"
                  y1="20"
                  x2="400"
                  y2="380"
                  stroke="#c492ff"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold max-w-lg p-7">
              Available for remote &amp; on-site opportunities
            </p>
            <span
              className="absolute left-5 bottom-16 border px-4 py-2 rounded-full text-xs font-medium"
              style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
            >
              📍 Giza, Egypt
            </span>
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-4 border px-4 py-2 rounded-full text-xs font-medium"
              style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
            >
              🌍 Open to Remote
            </span>
            <span
              className="absolute right-5 bottom-16 border px-4 py-2 rounded-full text-xs font-medium"
              style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
            >
              ☁️ Cloud-Native
            </span>
          </div>

          {/* Skills carousel card */}
          <div
            className="overflow-hidden h-60 border px-3 gap-2 flex flex-row relative rounded-3xl w-full"
            style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
          >
            <div className="flex-col justify-center sm:w-48 relative z-20 hidden sm:flex">
              <p className="text-sm sm:text-base mb-2 opacity-80 sm:text-nowrap">
                I constantly try to improve
              </p>
              <p className="text-2xl font-bold sm:text-nowrap">My tech stack</p>
            </div>
            <div className="sm:shrink-0 grow flex flex-row gap-3">
              <SkillColumn skills={skillsCol1} direction="up" />
              <SkillColumn skills={skillsCol2} direction="down" />
            </div>
          </div>
        </div>
      </div>

      {/* Development mindset card */}
      <div
        className="mt-5 rounded-3xl border overflow-hidden grid md:grid-cols-2 gap-6 items-center p-6 relative"
        style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
      >
        <div className="space-y-4">
          <p
            className="uppercase tracking-widest text-sm"
            style={{ color: "#a1a1a1" }}
          >
            Engineering Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            Building Distributed Systems &amp; Cloud-Native Applications
          </h2>
          <p
            className="text-sm sm:text-base leading-6"
            style={{ color: "#a1a1a1" }}
          >
            I focus on designing scalable microservices architectures,
            implementing event-driven communication with Kafka and RabbitMQ, and
            automating infrastructure with Terraform and Ansible. From backend
            APIs to cloud deployments, I deliver reliable, high-performance
            systems.
          </p>
          <div className="flex gap-2 flex-wrap">
            {[
              "#Microservices",
              "#EventDriven",
              "#CloudNative",
              "#DevOps",
              "#IaC",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "#0a1633",
                  borderColor: "#111a2d",
                  color: "#a1a1a1",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Code illustration */}
          <div
            className="rounded-2xl border p-6 font-mono text-xs leading-6 w-full max-w-sm"
            style={{
              backgroundColor: "#030915",
              borderColor: "#111a2d",
              color: "#a1a1a1",
            }}
          >
            <div style={{ color: "#c492ff" }}>// EventFlow Microservice</div>
            <div>
              <span style={{ color: "#68a063" }}>@Controller</span>(
              <span style={{ color: "#ffd700" }}>&apos;events&apos;</span>)
            </div>
            <div>
              <span style={{ color: "#c492ff" }}>export class</span>{" "}
              <span style={{ color: "#61dafb" }}>EventController</span> {"{"}
            </div>
            <div className="pl-4">
              <span style={{ color: "#c492ff" }}>@MessagePattern</span>(
              <span style={{ color: "#ffd700" }}>
                &apos;event.created&apos;
              </span>
              )
            </div>
            <div className="pl-4">
              <span style={{ color: "#68a063" }}>async</span>{" "}
              <span style={{ color: "#61dafb" }}>handleEvent</span>(data:{" "}
              <span style={{ color: "#ffd700" }}>EventDto</span>) {"{"}
            </div>
            <div className="pl-8">
              <span style={{ color: "#c492ff" }}>return</span>{" "}
              <span style={{ color: "#61dafb" }}>this</span>
              .eventService.process(data);
            </div>
            <div className="pl-4">{"}"}</div>
            <div>{"}"}</div>
          </div>
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
            style={{
              backgroundColor: "#c492ff",
              filter: "blur(60px)",
              opacity: 0.15,
            }}
          />
        </div>
      </div>

      {/* Bottom two cards */}
      <div
        className="overflow-hidden mt-5 grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {/* Passion card */}
        <div
          className="h-55 sm:h-45 overflow-hidden relative rounded-3xl border"
          style={{
            backgroundColor: "#091123",
            borderColor: "#111a2d",
            minHeight: "180px",
          }}
        >
          <p className="text-2xl font-bold p-5 sm:p-7">
            Passionate about building reliable, high-performance software
            systems.
          </p>
          <div
            className="h-24 w-44 border rounded-3xl absolute -bottom-5 right-6 p-3"
            style={{ backgroundColor: "#0a1633", borderColor: "#111a2d" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full border"
                style={{
                  backgroundColor: "rgba(196,146,255,0.3)",
                  borderColor: "#c492ff",
                }}
              />
              <div
                className="w-6 h-3 border rounded-2xl"
                style={{
                  backgroundColor: "rgba(196,146,255,0.3)",
                  borderColor: "#111a2d",
                }}
              />
              <div
                className="w-12 h-3 border rounded-2xl"
                style={{
                  backgroundColor: "rgba(196,146,255,0.3)",
                  borderColor: "#111a2d",
                }}
              />
            </div>
            <div
              className="mt-2 mb-2 w-4/5 h-3 border rounded-2xl"
              style={{
                backgroundColor: "rgba(196,146,255,0.3)",
                borderColor: "#111a2d",
              }}
            />
            <div
              className="w-12 h-3 border rounded-2xl"
              style={{
                backgroundColor: "rgba(196,146,255,0.3)",
                borderColor: "#111a2d",
              }}
            />
          </div>
        </div>

        {/* CTA card */}
        <div
          className="h-40 flex flex-col justify-center items-center rounded-3xl border relative overflow-hidden"
          style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
        >
          <p className="text-2xl font-bold p-5 text-center max-w-xs mx-auto">
            Want to build something great together?
          </p>
          <a href="mailto:mohamedadelhareidy@gmail.com">
            <button
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-11 mb-5 p-6 border"
              style={{
                backgroundColor: "#0a1633",
                borderColor: "#111a2d",
                color: "#fafafa",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#111a2d";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#0a1633";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              Copy my email address
            </button>
          </a>
          <div
            className="absolute -bottom-16 -left-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              backgroundColor: "#c492ff",
              filter: "blur(50px)",
              opacity: 0.2,
            }}
          />
        </div>

        {/* Currently learning card */}
        <div
          className="rounded-3xl border grid grid-cols-1 md:grid-cols-2 md:gap-2"
          style={{
            backgroundColor: "#091123",
            borderColor: "#111a2d",
            backgroundImage:
              "radial-gradient(ellipse at top right, rgba(196,146,255,0.05) 0%, transparent 60%)",
          }}
        >
          <div className="flex flex-col justify-center p-7">
            <p
              className="uppercase tracking-widest mb-2 text-xs"
              style={{ color: "#a1a1a1" }}
            >
              Currently Enrolled
            </p>
            <p className="text-2xl font-bold leading-snug">
              AI-Powered Software Development at Digilians, NTI
            </p>
          </div>
          <div className="flex items-center justify-center p-6">
            <div className="font-mono text-xs" style={{ color: "#c492ff" }}>
              <div>{"> AI + Engineering"}</div>
              <div>{"> Distributed Systems"}</div>
              <div>{"> Cloud Architecture"}</div>
              <div className="flex items-center gap-1">
                {"> Learning..."}
                <span
                  className="inline-block w-2 h-4 animate-pulse"
                  style={{ backgroundColor: "#c492ff" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
