import React, { useState } from 'react';
import { X, Calendar, Clock, Pill, Stethoscope, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AddScheduleModal = ({
  isOpen,
  onClose,
  onSave,
  days,
  activeDayId
}) => {
  const [type, setType] = useState('appointment');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [time, setTime] = useState('09:00 - 10:00');
  const [selectedDay, setSelectedDay] = useState(activeDayId);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      subtitle: subtitle.trim() || (type === 'appointment' ? 'Clinic Consultation' : 'Prescription Dose'),
      time,
      dayId: selectedDay,
      type
    });

    setTitle('');
    setSubtitle('');
    onClose();
  };

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

        {/* Modal Header */}
        <div className="mb-5">
          <span className="text-xs font-bold text-coral-500 uppercase tracking-wider">
            {t('modal.schedulePlanner')}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            {t('modal.addToCalendarTitle')}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {t('modal.addToCalendarDesc')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type Selector */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl">
            <button
              type="button"
              onClick={() => setType('appointment')}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition-all ${
                type === 'appointment'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Stethoscope size={15} className={type === 'appointment' ? 'text-coral-500' : ''} />
              <span>{t('modal.clinicVisit')}</span>
            </button>

            <button
              type="button"
              onClick={() => setType('medicine')}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition-all ${
                type === 'medicine'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Pill size={15} className={type === 'medicine' ? 'text-amber-500' : ''} />
              <span>{t('modal.medicineDose')}</span>
            </button>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {type === 'appointment' ? t('modal.appointmentTitle') : t('modal.medicineTitle')}
            </label>
            <input
              type="text"
              required
              placeholder={type === 'appointment' ? 'e.g., Annual Check Consultation' : 'e.g., Ibuprofen 200mg'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
            />
          </div>

          {/* Subtitle / Location */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {type === 'appointment' ? t('modal.clinicDoctor') : t('modal.dosageInstructions')}
            </label>
            <input
              type="text"
              placeholder={type === 'appointment' ? 'e.g., Sekarwangi Clinic • Room 302' : 'e.g., 1 pill after lunch with water'}
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
            />
          </div>

          {/* Day Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t('modal.selectDay')}
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {days.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedDay(d.id)}
                  className={`py-2 rounded-xl text-center border text-xs font-bold transition-all ${
                    selectedDay === d.id
                      ? 'bg-coral-500 border-coral-500 text-white shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="text-[10px] uppercase font-normal">{t(`schedule.days.${d.dayName}`) || d.dayName}</div>
                  <div>{d.dateNum}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t('modal.timeSlot')}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['09:00 - 10:00', '12:00 - 14:00', '18:00 - 19:00'].map((slotTime) => (
                <button
                  key={slotTime}
                  type="button"
                  onClick={() => setTime(slotTime)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-semibold border transition-all ${
                    time === slotTime
                      ? 'bg-slate-900 border-slate-900 text-white'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {slotTime}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-colors"
            >
              {t('profile.cancel')}
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-[#FF5C4D] hover:bg-[#ea4838] text-white text-xs font-bold shadow-coral transition-colors flex items-center justify-center gap-1.5"
            >
              <Check size={15} strokeWidth={2.5} />
              <span>{t('modal.confirmAndAdd')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
