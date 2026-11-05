import React from 'react';
import { X, Clock, AlertCircle, RefreshCw, Check } from 'lucide-react';
import { PillCapsuleIcon, TabletsGroupIcon } from '../../assets/illustrations/PillIcons';
import { useLanguage } from '../../context/LanguageContext';

export const MedicineDetailModal = ({
  medicine,
  isOpen,
  onClose,
  onToggleTaken,
  onRefill
}) => {
  const { t } = useLanguage();
  if (!isOpen || !medicine) return null;

  const isCapsule = medicine.name.toLowerCase().includes('ibuprofen');
  const percentRemaining = Math.round((medicine.remaining / medicine.total) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in text-left rtl:text-right">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5">
          {isCapsule ? (
            <PillCapsuleIcon className="w-14 h-14" />
          ) : (
            <TabletsGroupIcon className="w-14 h-14" />
          )}

          <div>
            <span className="text-[11px] font-bold text-coral-500 uppercase tracking-wider">
              {t('modal.medicineTitle')}
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {medicine.name}
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              {medicine.dosage} • {medicine.frequency}
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-4 text-xs">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
              <Clock size={14} className="text-coral-500" />
              <span>{t('medicines.usageInstructions')}</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {medicine.instructions}
            </p>
          </div>

          {/* Schedule times */}
          <div>
            <span className="font-bold text-slate-700 block mb-1.5">
              {t('medicines.reminderSlots')}
            </span>
            <div className="flex gap-2">
              {medicine.timeSlots.map((time, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-coral-50 text-coral-600 font-semibold border border-coral-100 text-xs"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          {/* Stock remaining bar */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-slate-700">{t('medicines.remainingSupply')}</span>
              <span className={percentRemaining < 30 ? 'text-rose-500' : 'text-slate-600'}>
                {medicine.remaining} of {medicine.total} ({percentRemaining}%)
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  percentRemaining < 30 ? 'bg-rose-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${percentRemaining}%` }}
              ></div>
            </div>
            {percentRemaining < 30 && (
              <p className="text-[11px] text-rose-500 font-medium mt-2 flex items-center gap-1">
                <AlertCircle size={12} />
                <span>Low stock: Consider ordering a prescription refill soon.</span>
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-5 mt-4 border-t border-slate-100">
          <button
            onClick={() => {
              onRefill(medicine);
              onClose();
            }}
            className="flex-1 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <RefreshCw size={14} />
            <span>{t('medicines.refillRequest')}</span>
          </button>

          <button
            onClick={() => {
              onToggleTaken(medicine.id);
              onClose();
            }}
            className={`flex-1 py-2.5 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
              medicine.takenToday
                ? 'bg-slate-800 hover:bg-slate-900'
                : 'bg-[#FF5C4D] hover:bg-[#ea4838] shadow-coral'
            }`}
          >
            <Check size={15} strokeWidth={2.5} />
            <span>{medicine.takenToday ? t('medicines.markUntaken') : t('medicines.markTaken')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
