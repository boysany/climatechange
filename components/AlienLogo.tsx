import React from 'react';

export default function AlienLogo({
  className = '',
  height = 32,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <svg
      viewBox="0 0 248 48"
      height={height}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Letter A */}
      <path
        d="M 6 42 L 28 6 L 50 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="33" r="2.8" fill="currentColor" />

      {/* Letter L with dot */}
      <path
        d="M 72 6 L 72 42 L 94 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="103" cy="42" r="2.8" fill="currentColor" />

      {/* Letter i */}
      <circle cx="126" cy="7" r="2.8" fill="currentColor" />
      <path
        d="M 126 19 L 126 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
      />

      {/* Letter E (3 bars + middle dot) */}
      <path
        d="M 148 10 L 176 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
      />
      <path
        d="M 148 24 L 168 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
      />
      <circle cx="178" cy="24" r="2.8" fill="currentColor" />
      <path
        d="M 148 38 L 176 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
      />

      {/* Letter N with bottom-left dot */}
      <circle cx="200" cy="42" r="2.8" fill="currentColor" />
      <path
        d="M 200 32 L 200 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
      />
      <path
        d="M 200 6 L 230 42 L 230 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
