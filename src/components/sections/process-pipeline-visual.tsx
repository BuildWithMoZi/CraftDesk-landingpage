"use client";

import { motion } from "framer-motion";

const NODES = [
  { step: "01", y: 52 },
  { step: "02", y: 108 },
  { step: "03", y: 164 },
  { step: "04", y: 220 },
];

export function ProcessPipelineVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className='relative mt-8 hidden aspect-[4/5] w-full max-w-[260px] md:block lg:max-w-[280px]'
      aria-hidden>
      <div className='pointer-events-none absolute -left-6 top-1/4 h-32 w-32 rounded-full bg-[var(--orange)]/10 blur-3xl' />

      <svg
        viewBox='0 0 240 280'
        fill='none'
        className='relative h-full w-full'
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient id='process-core-glow' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='var(--orange)' stopOpacity='0.9' />
            <stop offset='100%' stopColor='var(--orange-light)' stopOpacity='0.6' />
          </linearGradient>
          <filter id='process-soft-glow' x='-40%' y='-40%' width='180%' height='180%'>
            <feGaussianBlur stdDeviation='3' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        {/* Faint grid */}
        <g opacity='0.35' stroke='var(--border)' strokeWidth='0.5'>
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={`h-${y}`} x1='16' y1={y} x2='224' y2={y} />
          ))}
          {[48, 96, 144, 192].map((x) => (
            <line key={`v-${x}`} x1={x} y1='24' x2={x} y2='256' />
          ))}
        </g>

        {/* Code brackets — dev aesthetic */}
        <text
          x='28'
          y='248'
          fill='var(--muted)'
          opacity='0.35'
          fontSize='28'
          fontFamily='ui-monospace, monospace'
          fontWeight='300'>
          {"{ }"}
        </text>
        <text
          x='178'
          y='42'
          fill='var(--muted)'
          opacity='0.3'
          fontSize='14'
          fontFamily='ui-monospace, monospace'>
          {"</>"}
        </text>

        {/* React-inspired orbital atom */}
        <g transform='translate(72, 118)'>
          <g className='process-orbit-slow'>
            <ellipse
              cx='0'
              cy='0'
              rx='44'
              ry='16'
              stroke='var(--orange)'
              strokeOpacity='0.45'
              strokeWidth='1.2'
            />
          </g>
          <g className='process-orbit-mid'>
            <ellipse
              cx='0'
              cy='0'
              rx='44'
              ry='16'
              stroke='var(--foreground)'
              strokeOpacity='0.2'
              strokeWidth='1'
            />
          </g>
          <g className='process-orbit-fast'>
            <ellipse
              cx='0'
              cy='0'
              rx='44'
              ry='16'
              stroke='var(--orange)'
              strokeOpacity='0.25'
              strokeWidth='0.8'
            />
          </g>
          <circle cx='0' cy='0' r='10' fill='url(#process-core-glow)' filter='url(#process-soft-glow)' />
          <circle cx='0' cy='0' r='4' fill='var(--foreground)' fillOpacity='0.9' />
        </g>

        {/* Pipeline spine */}
        <path
          d='M 168 52 L 168 220'
          stroke='var(--border)'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
        <path
          d='M 168 52 L 168 220'
          stroke='var(--orange)'
          strokeWidth='1.5'
          strokeLinecap='round'
          pathLength={100}
          className='process-spine-pulse'
        />

        {/* Connector from atom to pipeline */}
        <path
          d='M 116 118 C 132 118, 148 90, 168 52'
          stroke='var(--border)'
          strokeWidth='1'
          strokeDasharray='4 6'
          opacity='0.7'
        />
        <path
          d='M 116 118 C 132 118, 148 175, 168 220'
          stroke='var(--border)'
          strokeWidth='1'
          strokeDasharray='4 6'
          opacity='0.7'
        />

        {/* Step nodes */}
        {NODES.map((node, index) => (
          <g key={node.step}>
            <circle
              cx='168'
              cy={node.y}
              r='14'
              fill='var(--surface)'
              stroke='var(--border)'
              strokeWidth='1.2'
            />
            <circle
              cx='168'
              cy={node.y}
              r='5'
              fill='var(--orange)'
              className='process-node-pulse'
              style={{ animationDelay: `${index * 0.5}s` }}
            />
            <text
              x='196'
              y={node.y + 4}
              fill='var(--muted)'
              fontSize='10'
              fontFamily='ui-monospace, monospace'
              fontWeight='600'>
              {node.step}
            </text>
            <line
              x1='182'
              y1={node.y}
              x2='192'
              y2={node.y}
              stroke='var(--border)'
              strokeWidth='1'
            />
          </g>
        ))}

        {/* Floating particles */}
        {[
          { cx: 200, cy: 78, r: 1.5 },
          { cx: 210, cy: 140, r: 1 },
          { cx: 198, cy: 198, r: 1.2 },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill='var(--orange)'
            opacity='0.5'
            className='process-node-pulse'
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
