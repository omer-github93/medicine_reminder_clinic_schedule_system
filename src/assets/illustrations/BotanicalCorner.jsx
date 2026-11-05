import React from 'react';

export const BotanicalCornerTop = ({ className = "" }) => (
  <svg
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Stem */}
    <path
      d="M320 0 C280 40 220 80 160 110 C100 140 40 130 0 160"
      stroke="#5A7D5A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M210 85 C190 60 160 50 140 45"
      stroke="#5A7D5A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M140 118 C130 145 110 165 95 180"
      stroke="#5A7D5A"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Leaves */}
    <path
      d="M270 20 C270 20 285 5 305 10 C300 30 285 35 270 20 Z"
      fill="#4F7942"
      opacity="0.85"
    />
    <path
      d="M245 45 C230 35 220 15 235 5 C255 10 260 30 245 45 Z"
      fill="#5E8C52"
      opacity="0.8"
    />
    <path
      d="M190 70 C175 60 170 40 185 30 C205 35 205 55 190 70 Z"
      fill="#6B9B5F"
      opacity="0.85"
    />
    <path
      d="M150 100 C135 90 130 70 145 60 C165 65 165 85 150 100 Z"
      fill="#4F7942"
      opacity="0.9"
    />
    <path
      d="M100 130 C85 125 75 105 90 95 C110 100 115 118 100 130 Z"
      fill="#5E8C52"
      opacity="0.85"
    />
    <path
      d="M60 145 C45 140 35 120 50 110 C70 115 75 133 60 145 Z"
      fill="#6B9B5F"
      opacity="0.8"
    />

    {/* Berries / Goji / Rosehip fruits */}
    <ellipse cx="140" cy="180" rx="8" ry="14" transform="rotate(-15 140 180)" fill="#E24A3B" />
    <ellipse cx="158" cy="175" rx="7" ry="13" transform="rotate(10 158 175)" fill="#F05A4B" />
    <ellipse cx="178" cy="155" rx="8" ry="14" transform="rotate(25 178 155)" fill="#D83E30" />
    <circle cx="138" cy="168" r="2" fill="#5A7D5A" />
    <circle cx="157" cy="164" r="2" fill="#5A7D5A" />
    <circle cx="180" cy="144" r="2" fill="#5A7D5A" />
  </svg>
);

export const BotanicalCornerBottom = ({ className = "" }) => (
  <svg
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Stem curving up */}
    <path
      d="M10 250 C30 180 50 120 120 50 C140 30 180 15 220 5"
      stroke="#5A7D5A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M50 160 C75 160 100 170 120 185"
      stroke="#5A7D5A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M80 110 C60 90 50 70 45 45"
      stroke="#5A7D5A"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Leaves */}
    <path
      d="M45 45 C30 35 15 45 10 65 C25 75 40 65 45 45 Z"
      fill="#4F7942"
      opacity="0.8"
    />
    <path
      d="M70 85 C55 80 45 95 50 115 C70 110 80 95 70 85 Z"
      fill="#6B9B5F"
      opacity="0.85"
    />
    <path
      d="M120 185 C135 195 155 190 165 170 C150 160 130 168 120 185 Z"
      fill="#5E8C52"
      opacity="0.85"
    />
    <path
      d="M95 145 C115 135 125 115 115 100 C95 105 85 125 95 145 Z"
      fill="#4F7942"
      opacity="0.9"
    />
    <path
      d="M150 75 C170 65 180 45 170 30 C150 35 140 55 150 75 Z"
      fill="#5E8C52"
      opacity="0.8"
    />
    <path
      d="M210 25 C230 15 240 -5 230 -20 C210 -15 200 5 210 25 Z"
      fill="#6B9B5F"
      opacity="0.8"
    />
  </svg>
);

