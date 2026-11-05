import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher = ({ className = "" }) => {
  const { lang, currentLangMeta, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-100/80 shadow-sm hover:shadow-md transition-all duration-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-coral-200"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img
          src={currentLangMeta.flagIcon}
          alt={currentLangMeta.name}
          className="w-5 h-5 rounded-full object-cover shadow-xs border border-slate-200/80 flex-shrink-0"
        />
        <span className="hidden sm:inline font-bold tracking-tight">{currentLangMeta.nativeName}</span>
        <ChevronDown
          size={13}
          className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
          <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 rounded-2xl bg-white/95 backdrop-blur-md p-1.5 shadow-xl border border-slate-100 ring-1 ring-black/5 z-50 animate-fade-in">
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100/80 mb-1 flex items-center justify-between">
              <span>Select Language</span>
              <Globe size={11} className="text-coral-500" />
            </div>

            <div className="space-y-0.5">
              {languages.map((item) => {
                const isSelected = item.code === lang;
                return (
                  <button
                    key={item.code}
                    onClick={() => {
                      changeLanguage(item.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${isSelected
                        ? 'bg-gradient-to-r from-coral-50 to-orange-50 text-coral-600 font-bold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.flagIcon}
                        alt={item.name}
                        className="w-5 h-5 rounded-full object-cover shadow-xs border border-slate-200/80 flex-shrink-0"
                      />
                      <div className="text-left rtl:text-right">
                        <span className="block leading-tight">{item.nativeName}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{item.name}</span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check size={14} className="text-coral-500 stroke-[2.5]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
      )}
        </div>
      );
};
