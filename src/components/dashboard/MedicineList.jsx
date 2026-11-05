import React, { useState } from 'react';
import { MedicineItem } from './MedicineItem';
import { useLanguage } from '../../context/LanguageContext';

export const MedicineList = ({
  medicines,
  onToggleTaken,
  onViewDetails
}) => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  // By default, display the 2 medicines shown in the original design
  const displayedMeds = showAll ? medicines : medicines.slice(0, 2);

  return (
    <section>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          {t('medicines.title')}
        </h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-bold text-coral-500 hover:text-coral-600 hover:underline transition-colors"
        >
          {showAll ? t('medicines.showLess') : t('medicines.viewAll')}
        </button>
      </div>

      {/* Medicines List Grid */}
      {medicines.length === 0 ? (
        <div className="bg-white rounded-2xl p-6 text-center text-slate-400 text-xs border border-dashed border-slate-200">
          No medicines found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {displayedMeds.map((med) => (
            <MedicineItem
              key={med.id}
              medicine={med}
              onToggleTaken={onToggleTaken}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
};
