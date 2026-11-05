import React from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';

export const Header = ({
  searchQuery,
  setSearchQuery,
  unreadCount,
  onOpenNotifications,
  onToggleMobileMenu,
  isMobileMenuOpen
}) => {
  const { t } = useLanguage();

  return (
    <header className="flex items-center justify-between gap-3 sm:gap-4 mb-6">
      {/* Mobile menu button */}
      <button
        onClick={onToggleMobileMenu}
        className="lg:hidden p-2.5 rounded-xl bg-white/80 shadow-sm border border-slate-100 text-slate-700 hover:bg-white"
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Search Input Bar */}
      <div className="relative flex-1 max-w-xl">
        <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-4 rtl:pl-0 rtl:pr-4 flex items-center pointer-events-none text-slate-400">
          <Search size={18} strokeWidth={2.2} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('header.searchPlaceholder')}
          className="w-full pl-11 rtl:pl-4 rtl:pr-11 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-2xl text-sm font-medium text-slate-700 placeholder:text-slate-400 shadow-sm hover:shadow-md focus:shadow-md border border-transparent focus:border-coral-200 focus:bg-white focus:outline-none transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-3.5 rtl:pr-0 rtl:pl-3.5 flex items-center text-slate-400 hover:text-slate-600"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* Language Switcher & Notification Bell */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <LanguageSwitcher />

        <div className="relative">
          <button
            onClick={onOpenNotifications}
            className="relative p-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-600 hover:text-coral-500 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200 border border-slate-100/60"
            title={t('header.notifications')}
          >
            <Bell size={19} strokeWidth={2} />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 rtl:-right-auto rtl:-left-0.5 w-4 h-4 rounded-full bg-[#FF5C4D] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
