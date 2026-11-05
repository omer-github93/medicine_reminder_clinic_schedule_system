import React from 'react';

export const ConsultationScene = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="consultationBg" cx="70%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2EE" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient soft glow */}
      <circle cx="180" cy="110" r="85" fill="url(#consultationBg)" />

      {/* Wall Clock */}
      <circle cx="155" cy="45" r="13" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="155" cy="45" r="1.5" fill="#374151" />
      <line x1="155" y1="45" x2="155" y2="38" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="155" y1="45" x2="162" y2="45" stroke="#E11D48" strokeWidth="1.2" strokeLinecap="round" />

      {/* Clinic table / credenza in background */}
      <rect x="70" y="105" width="45" height="55" rx="3" fill="#EAD7CE" />
      <rect x="70" y="105" width="45" height="5" fill="#CBB6AA" />
      {/* Drawer knobs */}
      <circle cx="92" cy="120" r="2" fill="#8C7368" />
      <circle cx="92" cy="138" r="2" fill="#8C7368" />

      {/* Floor Shadows */}
      <ellipse cx="120" cy="168" rx="22" ry="5" fill="#E2E8F0" opacity="0.7" />
      <ellipse cx="185" cy="168" rx="20" ry="5" fill="#E2E8F0" opacity="0.7" />

      {/* Potted Plant */}
      <g>
        {/* Pot */}
        <polygon points="90,165 106,165 103,148 93,148" fill="#D4735B" />
        <rect x="91" y="146" width="14" height="3" rx="1" fill="#C25A41" />
        {/* Plant Leaves */}
        <path d="M98 147 C92 135 84 133 82 125 C88 128 95 136 98 147 Z" fill="#2E7D32" />
        <path d="M99 146 C98 130 102 120 106 112 C106 122 103 135 100 146 Z" fill="#388E3C" />
        <path d="M100 147 C104 136 112 132 118 128 C113 134 107 141 100 147 Z" fill="#4CAF50" />
      </g>

      {/* DOCTOR (Left) */}
      <g>
        {/* Hair */}
        <path d="M112 55 C112 50 118 43 125 43 C132 43 136 48 136 54 C134 54 131 52 127 53 C122 54 117 56 112 55 Z" fill="#5D4037" />
        {/* Face / Head */}
        <circle cx="125" cy="55" r="9" fill="#FBD3B6" />
        {/* Glasses / Face details */}
        <circle cx="128" cy="54" r="2" fill="#1E293B" />
        {/* Stethoscope around neck */}
        <path d="M120 68 C118 78 123 88 126 88 C129 88 132 78 131 68" stroke="#0D9488" strokeWidth="1.5" fill="none" />
        <circle cx="126" cy="89" r="2" fill="#94A3B8" />

        {/* Teal Doctor's Coat */}
        <path d="M114 66 C118 64 133 64 137 66 L142 128 C135 130 120 130 110 128 Z" fill="#0E7490" />
        {/* Inner white shirt & tie */}
        <polygon points="123,66 128,66 126,82 124,82" fill="#FFFFFF" />
        <polygon points="125,69 127,69 126,78" fill="#155E75" />
        {/* Lapel collar */}
        <path d="M118 66 L124 85 L120 85 Z" fill="#0891B2" />
        <path d="M133 66 L127 85 L131 85 Z" fill="#0891B2" />

        {/* Doctor's Arm (Holding Medical Clipboard) */}
        {/* Left Arm / Folder */}
        <path d="M114 74 L110 98 L116 100" stroke="#0E7490" strokeWidth="5" strokeLinecap="round" />
        <rect x="108" y="94" width="10" height="15" rx="1" fill="#FEF08A" stroke="#713F12" strokeWidth="0.8" transform="rotate(10 108 94)" />
        {/* Right Arm (Gesturing in conversation) */}
        <path d="M136 74 C140 85 146 95 152 92" stroke="#0E7490" strokeWidth="4.5" strokeLinecap="round" />
        {/* Hand */}
        <circle cx="154" cy="92" r="2.5" fill="#FBD3B6" />

        {/* Legs / Grey Trousers */}
        <line x1="119" y1="128" x2="119" y2="165" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="130" y1="128" x2="130" y2="165" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />

        {/* Shoes */}
        <rect x="114" y="163" width="9" height="4" rx="2" fill="#0F172A" />
        <rect x="127" y="163" width="9" height="4" rx="2" fill="#0F172A" />
      </g>

      {/* PATIENT (Right) */}
      <g>
        {/* Hair - Bun */}
        <circle cx="188" cy="51" r="5" fill="#7C2D12" />
        <path d="M176 56 C176 50 182 44 188 47 C193 49 194 56 193 60 C188 62 181 60 176 56 Z" fill="#7C2D12" />
        {/* Face */}
        <circle cx="183" cy="56" r="8.5" fill="#FCD3B6" />
        {/* Eye */}
        <circle cx="179" cy="55" r="1" fill="#1E293B" />

        {/* Mustard / Coral Top */}
        <path d="M176 66 C180 64 190 64 194 66 L195 98 C188 100 181 100 175 98 Z" fill="#F59E0B" />

        {/* Brown Shoulder Bag Strap & Bag */}
        <line x1="180" y1="65" x2="173" y2="105" stroke="#92400E" strokeWidth="1.5" />
        <rect x="168" y="102" width="10" height="14" rx="2" fill="#B45309" />
        <rect x="170" y="104" width="6" height="3" fill="#D97706" />

        {/* Long Warm Rust Skirt */}
        <path d="M175 98 C182 99 188 99 195 98 L197 142 C188 144 179 144 172 142 Z" fill="#C2410C" />

        {/* Legs */}
        <line x1="178" y1="142" x2="178" y2="164" stroke="#FCD3B6" strokeWidth="3" />
        <line x1="189" y1="142" x2="189" y2="164" stroke="#FCD3B6" strokeWidth="3" />

        {/* Shoes */}
        <rect x="174" y="163" width="7" height="4" rx="2" fill="#7C2D12" />
        <rect x="187" y="163" width="7" height="4" rx="2" fill="#7C2D12" />
      </g>
    </svg>
  );
};

