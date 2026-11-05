import React from 'react';
import { Check } from 'lucide-react';
import { PillCapsuleIcon, TabletsGroupIcon } from '../../assets/illustrations/PillIcons';
import { useLanguage } from '../../context/LanguageContext';

export const MedicineItem = ({
  medicine,
  onToggleTaken,
  onViewDetails
}) => {
  const { t } = useLanguage();
  const isCapsule = medicine.name.toLowerCase().includes('ibuprofen');

  return (
    <div
      onClick={() => onViewDetails(medicine)}
      className={`group relative bg-white rounded-2xl p-3.5 shadow-sm hover:shadow-card transition-all duration-200 border cursor-pointer flex items-center justify-between gap-3 text-left rtl:text-right ${
        medicine.takenToday ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-100'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        {/* Pill Icon Graphic */}
        {isCapsule ? (
          <PillCapsuleIcon className="w-11 h-11 flex-shrink-0" />
        ) : (
          <TabletsGroupIcon className="w-11 h-11 flex-shrink-0" />
        )}

        {/* Medicine Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-coral-600 transition-colors truncate">
              {medicine.name}
            </h4>
            {medicine.takenToday && (
              <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                {t('medicines.taken')}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
            {medicine.frequency} <span className="mx-1">•</span> {medicine.date}
          </p>
        </div>
      </div>

      {/* Quick Action: Take Pill Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleTaken(medicine.id);
        }}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 ${
          medicine.takenToday
            ? 'bg-emerald-500 text-white shadow-sm'
            : 'bg-slate-100 text-slate-400 hover:bg-coral-100 hover:text-coral-600'
        }`}
        title={medicine.takenToday ? t('medicines.markUntaken') : t('medicines.markTaken')}
      >
        <Check size={16} strokeWidth={2.8} />
      </button>
    </div>
  );
};
