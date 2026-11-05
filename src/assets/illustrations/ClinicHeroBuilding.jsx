import React from 'react';
import clinicHeroImg from '../images/clinic-hero.jpg';

export const ClinicHeroBuilding = ({ className = "" }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-t-[28px] bg-[#FA8271] ${className}`}>
      {/* Exact High-Resolution Artwork Image */}
      <img
        src={clinicHeroImg}
        alt="+ CLINIC + Building Illustration at Sunset"
        className="w-full h-auto object-cover block select-none"
        loading="eager"
      />

      {/* Seamless curved dark wave transition into 'Your Schedule' panel (#121924) */}
      <div className="absolute -bottom-1 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 400 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50 L0 30 C110 25 240 10 400 2 L400 50 Z"
            fill="#121924"
          />
        </svg>
      </div>
    </div>
  );
};
