import React from 'react';

export const PillCapsuleIcon = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center rounded-full bg-rose-50 p-2.5 ${className}`}>
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Pill 1 */}
      <rect x="7" y="14" width="14" height="24" rx="7" transform="rotate(-35 7 14)" fill="#FFA299" />
      <path d="M7 14 C10 9 19 12 21 17 L12 29 C8 24 5 19 7 14 Z" fill="#FF5C4D" />
      {/* Small tablet */}
      <ellipse cx="28" cy="27" rx="6" ry="4" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="1.5" transform="rotate(20 28 27)" />
      <line x1="25" y1="26" x2="31" y2="28" stroke="#FDBA74" strokeWidth="1" />
    </svg>
  </div>
);

export const TabletsGroupIcon = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center rounded-full bg-amber-50 p-2.5 ${className}`}>
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White oval tablet 1 */}
      <ellipse cx="16" cy="18" rx="8" ry="5" fill="#FFFFFF" stroke="#FED7AA" strokeWidth="1.5" transform="rotate(-25 16 18)" />
      <line x1="12" y1="16" x2="20" y2="20" stroke="#FDBA74" strokeWidth="1" />
      {/* White oval tablet 2 */}
      <ellipse cx="24" cy="25" rx="7.5" ry="4.5" fill="#FFFFFF" stroke="#FED7AA" strokeWidth="1.5" transform="rotate(30 24 25)" />
      <line x1="20" y1="27" x2="28" y2="23" stroke="#FDBA74" strokeWidth="1" />
    </svg>
  </div>
);

export const ClinicBuildingIcon = ({ type = "pharmacy", className = "w-11 h-11" }) => {
  if (type === "pharmacy") {
    return (
      <div className={`relative flex items-center justify-center rounded-full bg-[#FFEAE5] p-2 ${className}`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Pharmacy clinic icon */}
          <rect x="10" y="12" width="20" height="22" rx="2" fill="#FA8271" />
          <polygon points="20,5 8,14 32,14" fill="#C2410C" />
          {/* Windows */}
          <rect x="13" y="16" width="5" height="5" rx="1" fill="#FFFFFF" />
          <rect x="22" y="16" width="5" height="5" rx="1" fill="#FFFFFF" />
          {/* Door with cross */}
          <rect x="16" y="24" width="8" height="10" rx="1" fill="#FFFFFF" />
          <rect x="19" y="26" width="2" height="6" fill="#EF4444" />
          <rect x="17" y="28" width="6" height="2" fill="#EF4444" />
        </svg>
      </div>
    );
  }

  if (type === "pet") {
    return (
      <div className={`relative flex items-center justify-center rounded-full bg-[#EBEBFF] p-2 ${className}`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Pet clinic icon */}
          <rect x="10" y="13" width="20" height="21" rx="2" fill="#818CF8" />
          <polygon points="20,6 8,15 32,15" fill="#4F46E5" />
          {/* Paw print mark */}
          <circle cx="16" cy="20" r="1.8" fill="#FFFFFF" />
          <circle cx="24" cy="20" r="1.8" fill="#FFFFFF" />
          <circle cx="20" cy="18" r="1.8" fill="#FFFFFF" />
          <ellipse cx="20" cy="24" rx="3.5" ry="2.5" fill="#FFFFFF" />
          {/* Door */}
          <rect x="16" y="27" width="8" height="7" rx="1" fill="#EEF2FF" />
        </svg>
      </div>
    );
  }

  // 24/7 clinic
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-[#E0F7F6] p-2 ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Modern hospital building */}
        <rect x="9" y="11" width="22" height="23" rx="2" fill="#14B8A6" />
        <rect x="6" y="19" width="28" height="15" rx="2" fill="#0D9488" />
        {/* Hospital cross */}
        <circle cx="20" cy="15" r="3.5" fill="#FFFFFF" />
        <rect x="19.2" y="12.5" width="1.6" height="5" rx="0.5" fill="#0D9488" />
        <rect x="17.5" y="14.2" width="5" height="1.6" rx="0.5" fill="#0D9488" />
        {/* Windows */}
        <rect x="9" y="22" width="5" height="4" rx="0.5" fill="#CCFBF1" />
        <rect x="17.5" y="22" width="5" height="4" rx="0.5" fill="#CCFBF1" />
        <rect x="26" y="22" width="5" height="4" rx="0.5" fill="#CCFBF1" />
        {/* Entrance */}
        <rect x="17" y="28" width="6" height="6" rx="1" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

