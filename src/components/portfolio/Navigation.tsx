"use client";

import React from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  variant: "desktop" | "mobile";
}

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 sm:size-6"
        aria-hidden="true"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    id: "portfolio",
    label: "Skills",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 sm:size-6"
        aria-hidden="true"
      >
        <path d="M12 12h.01" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 sm:size-6"
        aria-hidden="true"
      >
        <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
        <circle cx="14" cy="15" r="1" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 sm:size-6"
        aria-hidden="true"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 sm:size-6"
        aria-hidden="true"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <line x1="12" x2="12" y1="16" y2="12" />
        <line x1="12" x2="12.01" y1="8" y2="8" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 sm:size-6"
        aria-hidden="true"
      >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    ),
  },
];

export default function Navigation({
  activeSection,
  onNavigate,
  variant,
}: NavigationProps) {
  if (variant === "mobile") {
    return (
      <header
        className="block sm:hidden fixed bottom-0 z-50 w-full py-7 pb-5"
        style={{ background: "linear-gradient(to top, #000319, transparent)" }}
      >
        <div className="flex flex-col">
          <div
            role="tablist"
            className="relative flex items-center -space-x-2 overflow-x-auto overflow-y-hidden scrollbar-hide p-2 rounded-full border mx-auto max-w-xs w-full"
            style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onNavigate(item.id)}
                  className="relative shrink-0 grow items-center justify-center rounded-full px-3 py-2 text-xs font-medium transition-colors flex max-w-16 w-full flex-col gap-0 cursor-pointer"
                  style={{
                    color: isActive ? "#c492ff" : "#a1a1a1",
                    backgroundColor: isActive
                      ? "rgba(196, 146, 255, 0.1)"
                      : "transparent",
                  }}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: "rgba(196, 146, 255, 0.1)",
                        opacity: 1,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.icon}</span>
                  <span
                    className="relative z-10 whitespace-nowrap"
                    style={{ fontSize: "10px" }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className="hidden sm:block sticky top-0 z-50 py-7"
      style={{ background: "linear-gradient(to bottom, #000319, transparent)" }}
    >
      <div className="flex flex-col">
        <div
          role="tablist"
          className="relative flex w-full items-center -space-x-2 overflow-x-auto overflow-y-hidden scrollbar-hide p-2 rounded-full border mx-auto max-w-2xl"
          style={{ backgroundColor: "#091123", borderColor: "#111a2d" }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onNavigate(item.id)}
                className="relative items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors flex max-w-30 w-full flex-1 flex-col gap-0 cursor-pointer"
                style={{
                  color: isActive ? "#c492ff" : "#a1a1a1",
                }}
              >
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: "rgba(196, 146, 255, 0.1)",
                      opacity: 1,
                    }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>
                <span className="relative z-10 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
