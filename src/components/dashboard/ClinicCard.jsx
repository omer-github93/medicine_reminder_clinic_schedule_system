import React from 'react';
import { MapPin, ChevronRight, Star } from 'lucide-react';
import { ClinicBuildingIcon } from '../../assets/illustrations/PillIcons';
import { useLanguage } from '../../context/LanguageContext';

export const ClinicCard = ({ clinic, onClick, onSelectMap }) => {
  const { t } = useLanguage();

  return (
    <div
      onClick={() => onClick(clinic)}
      className="group relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-card transition-all duration-200 border border-slate-100 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 text-left rtl:text-right"
    >
      {/* Top Section */}
      <div>
        {/* Icon & Rating Badge */}
        <div className="flex items-start justify-between mb-3">
          <ClinicBuildingIcon type={clinic.type} className="w-11 h-11" />
          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
            <Star size={11} className="fill-amber-400 text-amber-400" />
            {clinic.rating}
          </span>
        </div>

        {/* Clinic Name & Category */}
        <h3 className="text-sm font-bold text-slate-900 group-hover:text-coral-600 transition-colors tracking-tight">
          {clinic.name}
        </h3>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          {clinic.category}
        </p>
      </div>

      {/* Bottom Action: View Map */}
      <div className="mt-4 pt-3 border-t border-slate-50">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectMap(clinic);
          }}
          className="w-full flex items-center justify-between text-xs font-semibold text-coral-500 hover:text-coral-600 group-hover:underline transition-colors"
        >
          <span className="flex items-center gap-1">
            <MapPin size={13} strokeWidth={2.2} />
            <span>{t('clinics.viewMap')}</span>
          </span>
          <ChevronRight size={14} className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
};
