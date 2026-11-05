import React, { useState } from 'react';
import { MoreHorizontal, Plus, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const SchedulePanel = ({
  days,
  activeDayId,
  onSelectDay,
  slots,
  onAddSchedule
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showExpandedDetails, setShowExpandedDetails] = useState(false);
  const { t } = useLanguage();

  // Time matrix for the 5 columns exactly matching the attachment
  const timeMatrix = {
    'mon-28': ['9:00', '10:00', '-', '18:00'],
    'tue-29': ['9:00', '-', '12:00', '18:00'],
    'wed-30': ['9:00', '10:00', '-', '18:00'],
    'thu-1': ['', '10:00', '-', '18:00'],
    'fri-2': ['9:00', '10:00', '-', ''],
  };

  const activeDay = days.find((d) => d.id === activeDayId) || days[0];

  const getTranslatedDayName = (dayName) => {
    return t(`schedule.days.${dayName}`) || dayName;
  };

  return (
    <div className="bg-[#121924] text-white p-5 rounded-b-[28px] flex flex-col justify-between select-none">
      <div>
        {/* Title & Options Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-white tracking-tight">
            {t('schedule.title')}
          </h3>

          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              title="Schedule options"
            >
              <MoreHorizontal size={17} />
            </button>

            {showOptions && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-1 w-40 bg-slate-800 text-slate-200 rounded-xl shadow-xl border border-slate-700 py-1.5 z-30 text-xs">
                <button
                  onClick={() => {
                    setShowOptions(false);
                    onAddSchedule();
                  }}
                  className="w-full text-left rtl:text-right px-3.5 py-1.5 hover:bg-slate-700 flex items-center gap-2"
                >
                  <Plus size={13} className="text-coral-400 flex-shrink-0" />
                  <span>{t('schedule.addReminder')}</span>
                </button>
                <button
                  onClick={() => {
                    setShowOptions(false);
                    setShowExpandedDetails(!showExpandedDetails);
                  }}
                  className="w-full text-left rtl:text-right px-3.5 py-1.5 hover:bg-slate-700 flex items-center gap-2"
                >
                  <Clock size={13} className="text-slate-400 flex-shrink-0" />
                  <span>{showExpandedDetails ? t('schedule.collapse') : t('schedule.details')}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* WHITE TIMETABLE CONTAINER (Exact match to design attachment) */}
        <div className="bg-white rounded-[22px] p-2.5 pb-4 shadow-lg text-slate-800">
          {/* Day Headers Row */}
          <div className="grid grid-cols-5 gap-1 text-center mb-3">
            {days.map((d) => {
              const isActive = d.id === activeDayId;
              const translatedName = getTranslatedDayName(d.dayName);
              // Use short abbreviation for 5-col fit
              const shortName = translatedName.length > 4 ? translatedName.slice(0, 3) : translatedName;
              return (
                <button
                  key={d.id}
                  onClick={() => onSelectDay(d.id)}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF5C4D] text-white shadow-md shadow-coral-500/25 font-bold scale-[1.03]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                  }`}
                  title={translatedName}
                >
                  <span className={`text-[10px] uppercase tracking-wider truncate max-w-[42px] ${isActive ? 'text-white/90' : 'text-slate-400'}`}>
                    {shortName}
                  </span>
                  <span className="text-sm font-extrabold mt-0.5">
                    {d.dateNum}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Time Columns Matrix */}
          <div className="grid grid-cols-5 gap-1 text-center text-xs font-semibold text-slate-600">
            {days.map((d) => {
              const colTimes = timeMatrix[d.id] || [];
              const isActive = d.id === activeDayId;
              return (
                <div
                  key={d.id}
                  onClick={() => onSelectDay(d.id)}
                  className={`flex flex-col items-center space-y-2 py-1 rounded-lg cursor-pointer transition-colors ${
                    isActive ? 'bg-coral-50/50' : 'hover:bg-slate-50'
                  }`}
                >
                  {colTimes.map((t, idx) => (
                    <span
                      key={idx}
                      className={`h-5 flex items-center justify-center text-[11px] ${
                        t === '-'
                          ? 'text-slate-300 font-normal'
                          : isActive
                          ? 'text-slate-900 font-bold'
                          : 'text-slate-600'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Day Agenda Summary below the matrix */}
        <div className="mt-3.5 space-y-2">
          <div className="flex items-center justify-between text-xs px-1">
            <span className="text-slate-400 font-medium">
              {t('schedule.agendaFor')} <strong className="text-white">{getTranslatedDayName(activeDay.dayName)} {activeDay.dateNum}</strong>
            </span>
            <button
              onClick={() => setShowExpandedDetails(!showExpandedDetails)}
              className="text-coral-400 hover:text-coral-300 text-[11px] font-semibold"
            >
              {showExpandedDetails ? t('schedule.collapse') : t('schedule.details')}
            </button>
          </div>

          {showExpandedDetails && (
            <div className="space-y-1.5 animate-fade-in">
              {slots.length === 0 ? (
                <div className="py-4 text-center text-xs text-slate-400">
                  {t('schedule.noItems')}
                </div>
              ) : (
                slots.map((slot, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs text-left rtl:text-right"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="text-coral-400 font-bold text-[11px] block">
                        {slot.time}
                      </span>
                      <span className="text-white font-medium truncate block">
                        {slot.title}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 font-medium flex-shrink-0">
                      {slot.badge}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="mt-4 pt-3 border-t border-slate-800">
        <button
          onClick={onAddSchedule}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FF5C4D] to-[#FF7062] hover:from-[#ea4838] hover:to-[#f05a4b] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-coral transition-all duration-150"
        >
          <Plus size={15} strokeWidth={2.5} />
          <span>{t('schedule.addNewReminder')}</span>
        </button>
      </div>
    </div>
  );
};
