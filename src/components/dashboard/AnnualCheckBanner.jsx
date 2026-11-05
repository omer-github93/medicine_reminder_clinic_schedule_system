import React, { useState } from 'react';
import { Plus, MoreHorizontal, Calendar, Info } from 'lucide-react';
import annualCheckupImg from '../../assets/images/annual-checkup-illustration.jpg';
import { useLanguage } from '../../context/LanguageContext';

export const AnnualCheckBanner = ({ onAddToCalendar, onShowInfo }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="relative bg-white rounded-[26px] p-6 lg:p-7 shadow-card border border-slate-100/60 overflow-hidden mb-6">
      {/* 3 dots menu button */}
      <div className="absolute top-5 right-5 rtl:right-auto rtl:left-5 z-20">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          title="More options"
        >
          <MoreHorizontal size={18} />
        </button>

        {showMenu && (
          <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30 text-xs">
            <button
              onClick={() => {
                setShowMenu(false);
                onShowInfo?.();
              }}
              className="w-full text-left rtl:text-right px-3.5 py-2 hover:bg-slate-50 flex items-center gap-2 text-slate-700"
            >
              <Info size={14} className="text-slate-400 flex-shrink-0" />
              <span>{t('hero.prepInstructions')}</span>
            </button>
            <button
              onClick={() => {
                setShowMenu(false);
                onAddToCalendar();
              }}
              className="w-full text-left rtl:text-right px-3.5 py-2 hover:bg-slate-50 flex items-center gap-2 text-slate-700"
            >
              <Calendar size={14} className="text-slate-400 flex-shrink-0" />
              <span>{t('hero.reschedule')}</span>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Column Content */}
        <div className="flex-1 z-10 w-full text-left rtl:text-right">
          <span className="text-xs font-semibold text-coral-500 uppercase tracking-wider block mb-2">
            {t('hero.tag')}
          </span>

          <h1 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            {t('hero.title')}
          </h1>

          <p className="text-xs sm:text-sm font-medium text-slate-400 mb-5 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            {t('hero.subtitle')}
          </p>

          <button
            onClick={onAddToCalendar}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6559] to-[#FA7666] hover:from-[#f8564a] hover:to-[#f06352] text-white text-xs sm:text-sm font-semibold shadow-coral hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Plus size={16} strokeWidth={2.8} />
            <span>{t('hero.addToCalendar')}</span>
          </button>
        </div>

        {/* Right Column Illustration (Exact Master Image) */}
        <div className="w-full sm:w-[260px] md:w-[290px] lg:w-[320px] flex justify-center md:justify-end flex-shrink-0 mt-3 md:mt-0">
          <img
            src={annualCheckupImg}
            alt={t('hero.title')}
            className="w-full max-w-[280px] sm:max-w-[310px] h-auto object-contain select-none mix-blend-multiply"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
