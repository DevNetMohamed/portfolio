"use client";

import React, { useState } from "react";

type ContactMethod = "email" | "phone" | "linkedin" | "github" | "whatsapp";

interface ContactOption {
  id: ContactMethod;
  label: string;
  color: string;
  hoverBg: string;
  icon: React.ReactNode;
}

const contactOptions: ContactOption[] = [
  {
    id: "email",
    label: "Email",
    color: "#c492ff",
    hoverBg: "rgba(196,146,255,0.15)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone Call",
    color: "#22c55e",
    hoverBg: "rgba(34,197,94,0.15)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    color: "#25d366",
    hoverBg: "rgba(37,211,102,0.15)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    color: "#0a66c2",
    hoverBg: "rgba(10,102,194,0.15)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    color: "#fafafa",
    hoverBg: "rgba(250,250,250,0.1)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [activeMethod, setActiveMethod] = useState<ContactMethod>("email");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("mohamedadelhareidy@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  const getActionContent = () => {
    switch (activeMethod) {
      case "email":
        return (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label
                className="text-sm font-medium flex items-center gap-2"
                style={{ color: "#c492ff" }}
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
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                Email Address
              </label>
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-lg border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <span className="text-sm" style={{ color: "#a1a1a1" }}>
                  mohamedadelhareidy@gmail.com
                </span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md w-full p-4 text-base text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: "rgba(196,146,255,0.3)",
                border: "1px solid rgba(196,146,255,0.3)",
              }}
            >
              {copied ? "Copied!" : "Copy Email Address"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </button>
          </div>
        );
      case "phone":
        return (
          <div className="space-y-4">
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-lg border"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-sm" style={{ color: "#a1a1a1" }}>
                +201116957941
              </span>
            </div>
            <a href="tel:+201116957941" className="block">
              <button
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md w-full p-4 text-base text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "rgba(34,197,94,0.3)",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                Call Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </button>
            </a>
          </div>
        );
      case "whatsapp":
        return (
          <div className="space-y-4">
            <a
              href="https://wa.me/201116957941"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl w-full p-4 text-base text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "rgba(37,211,102,0.3)",
                  border: "1px solid rgba(37,211,102,0.3)",
                }}
              >
                Open Chat in WhatsApp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                </svg>
              </button>
            </a>
          </div>
        );
      case "linkedin":
        return (
          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md w-full p-4 text-base text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "rgba(10,102,194,0.3)",
                  border: "1px solid rgba(10,102,194,0.3)",
                }}
              >
                View LinkedIn Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
              </button>
            </a>
          </div>
        );
      case "github":
        return (
          <div className="space-y-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md w-full p-4 text-base text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "rgba(250,250,250,0.1)",
                  border: "1px solid rgba(250,250,250,0.2)",
                }}
              >
                View GitHub Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
              </button>
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="contact"
      className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      style={{ scrollMarginTop: "160px" }}
    >
      <div className="container relative z-10">
        <div className="flex flex-col justify-center">
          {/* Section header */}
          <div className="flex flex-col gap-2 mb-5 items-center text-center">
            <span
              className="inline-flex items-center justify-center border text-xs font-medium px-4 py-2 rounded-full"
              style={{ color: "#c492ff", borderColor: "#c492ff" }}
            >
              Contact
            </span>
            <div className="text-2xl md:text-3xl flex flex-wrap gap-2 font-bold leading-relaxed max-w-xl justify-center">
              <p>Contact Me?</p>
            </div>
            <p
              className="text-sm md:text-base max-w-xl"
              style={{ color: "#a1a1a1" }}
            >
              Choose how you want to reach out
            </p>
          </div>

          {/* Contact method selector */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {contactOptions.map((option) => {
                const isActive = activeMethod === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setActiveMethod(option.id)}
                    className="flex cursor-pointer flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300"
                    style={{
                      backgroundColor: isActive
                        ? option.hoverBg
                        : "rgba(255,255,255,0.05)",
                      borderColor: isActive
                        ? option.color + "80"
                        : "rgba(255,255,255,0.1)",
                      transform: isActive ? "scale(1.02)" : "scale(1)",
                      color: isActive ? option.color : "rgba(255,255,255,0.6)",
                    }}
                  >
                    <div
                      style={{
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.3s",
                      }}
                    >
                      {option.icon}
                    </div>
                    <span className="text-xs font-medium">{option.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Action area */}
            <div className="mt-6">{getActionContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
