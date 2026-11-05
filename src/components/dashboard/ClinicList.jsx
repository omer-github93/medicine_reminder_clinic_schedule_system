import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { ClinicCard } from './ClinicCard';
import { useLanguage } from '../../context/LanguageContext';

export const ClinicList = ({
  clinics,
  sortBy,
  onSortChange,
  onClinicClick,
  onViewMap
}) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const { t } = useLanguage();

  const sortOptions = [
    { key: "Date", label: t('clinics.sortDate') },
    { key: "Name", label: t('clinics.sortName') },
    { key: "Rating", label: t('clinics.sortRating') },
  ];

  const currentSortLabel = sortOptions.find(o => o.key === sortBy)?.label || sortBy;

  return (
    <section className="mb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          {t('clinics.title')}
        </h2>

        {/* Sort By Dropdown */}
        <div className="relative flex items-center gap-2">
          <span className="text-xs font-medium text-slate-400">{t('clinics.sortBy')}</span>
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182330] hover:bg-[#202e3f] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <span>{currentSortLabel}</span>
              <ChevronDown size={13} className={`transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-1.5 w-32 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-30">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      onSortChange(opt.key);
                      setIsSortOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>{opt.label}</span>
                    {sortBy === opt.key && <Check size={13} className="text-coral-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Clinic Cards Grid */}
      {clinics.length === 0 ? (
        <div className="bg-white rounded-2xl p-6 text-center text-slate-400 text-xs border border-dashed border-slate-200">
          No clinics match your search query.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {clinics.map((clinic) => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
              onClick={onClinicClick}
              onSelectMap={onViewMap}
            />
          ))}
        </div>
      )}
    </section>
  );
};
