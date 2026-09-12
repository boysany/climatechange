import React from 'react';

export function CxLogoMark({
  className = '',
  height = 32,
}: {
  className?: string;
  height?: number;
}) {
  // Standard 520x280 aspect ratio (~1.85:1) matching the reference brandmark
  const width = Math.round((height * 520) / 280);

  return (
    <svg
      viewBox="0 0 520 280"
      width={width}
      height={height}
      className={`cx-brand-emblem ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
      aria-label="Climate change Digital Labs Brandmark"
    >
      <defs>
        {/* Continuous top-to-bottom vibrant royal electric gradient */}
        <linearGradient
          id="cxBrandGradient"
          x1="260"
          y1="20"
          x2="260"
          y2="260"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00A2FF" />
          <stop offset="25%" stopColor="#0072F5" />
          <stop offset="65%" stopColor="#003EB3" />
          <stop offset="100%" stopColor="#001242" />
        </linearGradient>
      </defs>

      {/* Unified Multi-Layer Vector Geometry of 'C' and 'X' */}
      <g>
        {/* Stroke 1: Left 'C' & Continuous Rising Diagonal Arm of 'X' */}
        <path
          d={`
            M 312 30
            L 155 30
            C 90 30, 42 78, 42 140
            C 42 202, 90 250, 155 250
            L 245 250
            C 260 250, 274 242, 284 230
            L 462 30
            L 404 30
            L 246 202
            C 238 206, 226 210, 214 210
            L 155 210
            C 116 210, 94 180, 94 140
            C 94 100, 116 70, 155 70
            L 312 70
            Z
          `}
          fill="url(#cxBrandGradient)"
        />

        {/* Stroke 2: Falling Diagonal Arm of 'X' (From inside C mouth down to bottom right) */}
        <path
          d={`
            M 264 96
            C 272 96, 282 100, 288 108
            L 404 250
            L 462 250
            L 326 96
            Z
          `}
          fill="url(#cxBrandGradient)"
        />

        {/* Crossing Blend Overlay: Top-Right and Bottom-Right Wings of 'X' */}
        <path
          d={`
            M 354 138
            L 462 30
            L 404 30
            L 320 120
            Z
          `}
          fill="url(#cxBrandGradient)"
        />
        <path
          d={`
            M 345 125
            L 462 250
            L 404 250
            L 310 145
            Z
          `}
          fill="url(#cxBrandGradient)"
        />
      </g>

      {/* High-Tech Circuit Traces & Solder Nodes on the Left Spine */}
      <g className="cx-circuit-nodes" stroke="#FFFFFF" fill="#FFFFFF">
        {/* Trace 1 (Top) */}
        <line x1="42" y1="102" x2="114" y2="102" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="114" cy="102" r="6.5" strokeWidth="0" />

        {/* Trace 2 (Upper Middle) */}
        <line x1="42" y1="126" x2="88" y2="126" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="88" cy="126" r="6.5" strokeWidth="0" />

        {/* Trace 3 (Lower Middle with standalone node) */}
        <line x1="42" y1="152" x2="70" y2="152" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="94" cy="152" r="5" strokeWidth="0" />

        {/* Trace 4 (Bottom) */}
        <line x1="42" y1="176" x2="102" y2="176" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="102" cy="176" r="6.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default function CcdlLogo({
  className = '',
  height = 28,
  showLabel = true,
  variant = 'full',
}: {
  className?: string;
  height?: number;
  showLabel?: boolean;
  variant?: 'full' | 'compact' | 'icon';
}) {
  return (
    <div
      className={`ccdl-brand-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      {/* Precision CX Gradient Circuit Mark */}
      <div
        className="ccdl-logo-icon-mark"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flexShrink: 0,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <CxLogoMark height={height + 2} />
      </div>

      {variant !== 'icon' && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            className="ccdl-brand-title"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 900,
              fontSize: `${Math.max(15, height * 0.76)}px`,
              letterSpacing: '0.04em',
              lineHeight: 1,
              color: 'var(--ink)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            AGENCY
          </span>
        </div>
      )}
    </div>
  );
}


