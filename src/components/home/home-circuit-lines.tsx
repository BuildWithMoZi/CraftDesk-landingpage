"use client";

const circuits = [
  {
    id: "tl",
    d: "M 16 26 L 34 26 L 34 44 L 50 46",
    duration: 3.8,
    delay: 0,
  },
  {
    id: "bl",
    d: "M 16 70 L 30 70 L 30 54 L 50 52",
    duration: 4.2,
    delay: 0.6,
  },
  {
    id: "tr",
    d: "M 84 28 L 66 28 L 66 44 L 50 46",
    duration: 3.6,
    delay: 0.3,
  },
  {
    id: "br",
    d: "M 84 68 L 70 68 L 70 54 L 50 52",
    duration: 4.4,
    delay: 0.9,
  },
];

const junctions = [
  { cx: 34, cy: 26 },
  { cx: 34, cy: 44 },
  { cx: 30, cy: 70 },
  { cx: 30, cy: 54 },
  { cx: 66, cy: 28 },
  { cx: 66, cy: 44 },
  { cx: 70, cy: 68 },
  { cx: 70, cy: 54 },
  { cx: 50, cy: 49 },
];

export function HomeCircuitLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[5] hidden h-full w-full md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.35" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central hub */}
      <circle
        cx="50"
        cy="49"
        r="1.2"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.15"
        className="circuit-hub"
      />
      <circle cx="50" cy="49" r="0.35" fill="var(--orange)" className="circuit-hub-core" />

      {/* Junction nodes at 90° bends */}
      {junctions.map((j, i) => (
        <circle
          key={`${j.cx}-${j.cy}-${i}`}
          cx={j.cx}
          cy={j.cy}
          r="0.45"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.12"
          className="circuit-junction"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}

      {circuits.map((circuit) => (
        <g key={circuit.id}>
          {/* Base track */}
          <path
            d={circuit.d}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.18"
            vectorEffect="non-scaling-stroke"
          />

          {/* Subtle static accent on corners */}
          <path
            d={circuit.d}
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Orange pulse traveling node → center */}
          <path
            d={circuit.d}
            fill="none"
            stroke="var(--orange)"
            strokeWidth="0.3"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={100}
            className="circuit-pulse-orange"
            style={{
              animationDuration: `${circuit.duration}s`,
              animationDelay: `${circuit.delay}s`,
            }}
            filter="url(#circuit-glow)"
          />

          {/* White pulse — reverse direction, lighter */}
          <path
            d={circuit.d}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="0.22"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={100}
            className="circuit-pulse-white"
            style={{
              animationDuration: `${circuit.duration + 1.4}s`,
              animationDelay: `${circuit.delay + 1.6}s`,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
