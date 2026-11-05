import React from 'react';

export const ProfileHandsMedicine = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="hillGradient1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFA69E" />
          <stop offset="100%" stopColor="#FA7268" />
        </linearGradient>
        <linearGradient id="hillGradient2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8577" />
          <stop offset="100%" stopColor="#E65345" />
        </linearGradient>
      </defs>

      {/* Background Soft Hills / Dunes */}
      <path
        d="M0 80 Q70 60 140 85 T280 75 L280 160 L0 160 Z"
        fill="url(#hillGradient1)"
        opacity="0.6"
      />
      <path
        d="M0 100 Q80 85 160 105 T280 95 L280 160 L0 160 Z"
        fill="url(#hillGradient2)"
      />

      {/* Decorative berries / leaves */}
      {/* Left small branch */}
      <path d="M0 110 C20 105 35 95 40 80" stroke="#3F623F" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="35" cy="85" r="3" fill="#D32F2F" />
      <circle cx="42" cy="78" r="3" fill="#E53935" />
      <path d="M22 102 C28 98 32 105 28 110 Z" fill="#4CAF50" />

      {/* Right small branch */}
      <path d="M280 105 C255 100 240 88 235 70" stroke="#3F623F" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="242" cy="78" r="3" fill="#D32F2F" />
      <circle cx="233" cy="68" r="3.2" fill="#E53935" />
      <path d="M255 96 C248 94 246 102 250 105 Z" fill="#4CAF50" />

      {/* HAND 1 (Left): Reaching up holding capsule */}
      <g>
        {/* Arm */}
        <path
          d="M35 160 L45 95 C45 95 50 85 58 85 C66 85 70 95 72 160 Z"
          fill="#8D5524"
        />
        {/* Fingers holding capsule */}
        {/* Thumb */}
        <path d="M47 98 C43 90 48 80 54 82 C57 85 54 94 51 98 Z" fill="#996030" />
        {/* Index finger */}
        <path d="M54 82 C56 72 61 72 63 78 L60 90 Z" fill="#8D5524" />
        {/* Other fingers curled */}
        <path d="M62 82 C65 84 66 90 62 94 Z" fill="#7D491F" />
        <path d="M64 88 C67 90 68 96 64 100 Z" fill="#7D491F" />

        {/* Capsule held between fingers */}
        <g transform="rotate(-15 60 70)">
          <rect x="55" y="62" width="6" height="14" rx="3" fill="#FFFFFF" />
          <rect x="55" y="69" width="6" height="7" rx="3" fill="#E11D48" />
        </g>
      </g>

      {/* HAND 2 (Center): Holding medicine bottle */}
      <g>
        {/* Arm */}
        <path
          d="M115 160 L122 105 C122 105 125 98 135 98 C145 98 150 105 158 160 Z"
          fill="#C68642"
        />

        {/* Medicine Bottle */}
        <rect x="127" y="58" width="22" height="36" rx="3" fill="#B45309" stroke="#78350F" strokeWidth="1" />
        {/* Cap */}
        <rect x="131" y="52" width="14" height="6" rx="1.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
        {/* White label on bottle */}
        <rect x="129" y="67" width="18" height="18" rx="1" fill="#FFFFFF" />
        {/* Label lines */}
        <line x1="132" y1="72" x2="144" y2="72" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="132" y1="76" x2="142" y2="76" stroke="#94A3B8" strokeWidth="1" />
        <line x1="132" y1="80" x2="139" y2="80" stroke="#94A3B8" strokeWidth="1" />

        {/* Fingers wrapping around bottle */}
        <path d="M125 72 C120 74 120 80 126 80 L134 80 L134 74 Z" fill="#D4956B" />
        <path d="M125 79 C120 81 120 87 126 87 L134 87 L134 81 Z" fill="#C68642" />
        <path d="M126 86 C122 88 122 93 127 93 L134 93 L134 88 Z" fill="#B87635" />
      </g>

      {/* HAND 3 (Right): Open palm displaying white pills */}
      <g>
        {/* Arm */}
        <path
          d="M200 160 L208 100 C208 100 215 90 228 90 C240 90 248 100 255 160 Z"
          fill="#F1C27D"
        />
        {/* Palm & fingers */}
        <path
          d="M210 98 C205 90 210 80 218 84 C225 86 226 94 225 102 Z"
          fill="#FFDBAC"
        />
        {/* Fingers spread open flat */}
        <path d="M218 84 C222 75 228 75 230 82 L228 92 Z" fill="#F1C27D" />
        <path d="M228 82 C232 74 238 75 239 82 L236 94 Z" fill="#FFDBAC" />
        <path d="M237 83 C241 77 246 78 246 86 L242 96 Z" fill="#F1C27D" />
        <path d="M245 87 C249 83 253 85 252 92 L246 99 Z" fill="#E0AC69" />

        {/* 3 White Pills floating / on palm */}
        <ellipse cx="225" cy="72" rx="4.5" ry="3.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" transform="rotate(-20 225 72)" />
        <ellipse cx="236" cy="68" rx="4" ry="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" transform="rotate(15 236 68)" />
        <ellipse cx="244" cy="74" rx="4.5" ry="3.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" transform="rotate(-10 244 74)" />
        {/* Pill score line */}
        <line x1="223" y1="71" x2="227" y2="73" stroke="#CBD5E1" strokeWidth="0.6" />
        <line x1="242" y1="73" x2="246" y2="75" stroke="#CBD5E1" strokeWidth="0.6" />
      </g>
    </svg>
  );
};

