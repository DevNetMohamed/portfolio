"use client";

import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  demo?: string;
  highlight?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EventFlow: Distributed Event-Driven Microservices",
    description:
      "A distributed microservices application built with NestJS and Apache Kafka. Implements asynchronous event communication and message processing between services, containerized with Docker and orchestrated with Kubernetes manifests for scalable deployment.",
    category: "Backend",
    techStack: ["NestJS", "TypeScript", "Kafka", "Docker", "Kubernetes"],
    demo: "https://eventpro-rho.vercel.app",
    highlight: "Microservices",
  },
  {
    id: 2,
    title: "Distributed Real-Time Chat Architecture",
    description:
      "A real-time chat application using the MERN stack with WebSockets for low-latency message delivery. Integrated RabbitMQ for asynchronous background message processing and room-based communication.",
    category: "Full-Stack",
    techStack: ["React", "Node.js", "MongoDB", "RabbitMQ", "WebSockets"],
    demo: "https://bunyan-zeta.vercel.app",
    highlight: "Real-Time",
  },
  {
    id: 3,
    title: "Pro E-Commerce Full-Stack Platform",
    description:
      "A production-ready full-stack e-commerce platform with JWT authentication, role-based authorization, product management, shopping cart, and order processing. Built with Node.js/Express.js REST APIs and a responsive React frontend, deployed with Docker and GitHub Actions CI/CD.",
    category: "Full-Stack",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "GitHub Actions",
    ],
    demo: "https://polytopia-five.vercel.app",
    highlight: "E-Commerce",
  },
  {
    id: 4,
    title: "AWS Infrastructure as Code Deployment",
    description:
      "Automated AWS infrastructure provisioning using Terraform — VPC, EC2, ALB, ElastiCache, and SES. Configured networking, security groups, and load balancers. Automated Node.js app deployment on private EC2 with Ansible and set up Jenkins CI/CD pipelines for branch-based deploys.",
    category: "DevOps",
    techStack: ["Terraform", "AWS", "Ansible", "Jenkins", "EC2", "ALB"],
    highlight: "IaC",
  },
  {
    id: 5,
    title: "Nexus Repository Manager Automation",
    description:
      "A production-ready Ansible role for automated Sonatype Nexus deployment and configuration. Follows Infrastructure as Code best practices with Molecule testing, Docker, and GitHub Actions CI/CD pipeline.",
    category: "DevOps",
    techStack: ["Ansible", "GitHub Actions", "Docker", "Molecule"],
    highlight: "Automation",
  },
  {
    id: 6,
    title: "Database Management System CLI",
    description:
      "A DBMS CLI Menu-based Application built with Bash Scripting that mimics CRUD operations in SQL, enabling fundamental database operations through a command-line interface.",
    category: "Backend",
    techStack: ["Bash", "Linux", "Shell Scripting"],
    highlight: "CLI Tool",
  },
];

const categories = ["All", "Full-Stack", "Backend", "DevOps"];

const categoryColors: Record<string, string> = {
  "Full-Stack": "#22c55e",
  Backend: "#3b82f6",
  DevOps: "#f59e0b",
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div
      id="projects"
      className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      style={{ scrollMarginTop: "160px" }}
    >
      {/* Section header */}
      <div className="flex flex-col gap-2 mb-5 items-center text-center">
        <span
          className="inline-flex items-center justify-center border text-xs font-medium px-4 py-2 rounded-full"
          style={{
            color: "#c492ff",
            borderColor: "#c492ff",
            backgroundColor: "transparent",
          }}
        >
          Projects ({projects.length})
        </span>
        <div className="text-2xl md:text-3xl flex flex-wrap gap-2 font-bold leading-relaxed max-w-xl justify-center">
          <p>Recent</p>
          <p style={{ color: "#c492ff" }}>Projects</p>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center -mt-3 gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="p-2 px-4 flex items-center gap-2 cursor-pointer rounded-md border text-sm font-medium transition-all"
            style={{
              backgroundColor: activeCategory === cat ? "#c492ff" : "#0a1633",
              color: activeCategory === cat ? "#171717" : "#fafafa",
              borderColor: activeCategory === cat ? "#c492ff" : "#111a2d",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="flex flex-col relative border overflow-hidden rounded-2xl project-card"
            style={{ borderColor: "#111a2d" }}
          >
            {/* Glow effect */}
            <div
              className="absolute -bottom-20 -left-10 w-32 h-32 rounded-full pointer-events-none"
              style={{
                backgroundColor: "#c492ff",
                filter: "blur(60px)",
                opacity: 0.15,
              }}
            />

            {/* Project image placeholder */}
            <div
              className="w-full h-40 flex items-center justify-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #030915 0%, #091123 50%, #0a1633 100%)`,
              }}
            >
              <div className="text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "rgba(196,146,255,0.3)" }}
                >
                  {project.id.toString().padStart(2, "0")}
                </div>
                <div
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{
                    color: "#c492ff",
                    borderColor: "rgba(196,146,255,0.3)",
                    backgroundColor: "rgba(196,146,255,0.1)",
                  }}
                >
                  {project.highlight}
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="p-4 sm:p-5 h-full flex flex-col justify-between"
              style={{ backgroundColor: "#091123" }}
            >
              <p className="text-lg sm:text-xl font-bold">{project.title}</p>
              <p
                className="text-sm mt-2 leading-6"
                style={{ color: "#a1a1a1" }}
              >
                {project.description}
              </p>

              {/* Category badge */}
              <div
                className="w-fit inline-block rounded-2xl text-sm mt-3 px-4 py-1 text-white font-medium"
                style={{
                  backgroundColor:
                    categoryColors[project.category] || "#6b7280",
                }}
              >
                {project.category}
              </div>

              {/* Tech stack + link */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border font-medium"
                      style={{
                        borderColor: "rgba(196,146,255,0.4)",
                        color: "#c492ff",
                        backgroundColor: "rgba(196,146,255,0.08)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium transition-all hover:underline whitespace-nowrap"
                    style={{ color: "#c492ff" }}
                  >
                    Check Live
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
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
