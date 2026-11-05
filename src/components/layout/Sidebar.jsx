import React from 'react';
import {
  LayoutGrid,
  CalendarCheck,
  FlaskConical,
  FileText,
  Stethoscope,
  Calendar,
  LogOut,
  Pencil,
  ChevronDown
} from 'lucide-react';
import profileCardBg from '../../assets/images/profile-card-bg.jpg';
import { useLanguage } from '../../context/LanguageContext';

export const Sidebar = ({
  user,
  activeNav,
  onNavClick,
  onEditProfile,
  onLogout
}) => {
  const { t } = useLanguage();

  const navList = [
    { id: 'dashboard', label: t('nav.dashboard'), icon: LayoutGrid, hasDot: false },
    { id: 'appointment', label: t('nav.appointment'), icon: CalendarCheck, hasDot: true },
    { id: 'medical-test', label: t('nav.medicalTest'), icon: FlaskConical, hasDot: false },
    { id: 'medical-report', label: t('nav.medicalReport'), icon: FileText, hasDot: false },
    { id: 'doctors', label: t('nav.doctors'), icon: Stethoscope, hasDot: false },
    { id: 'calendar', label: t('nav.calendar'), icon: Calendar, hasDot: false },
  ];

  return (
    <aside className="w-full lg:w-[260px] xl:w-[280px] flex-shrink-0 flex flex-col rounded-[28px] overflow-hidden bg-white shadow-card">
      {/* Top Profile Card with Exact Artwork Background */}
      <div className="relative w-full rounded-t-[28px] overflow-hidden select-none bg-[#FA6A59]">
        {/* Exact Artwork Image */}
        <img
          src={profileCardBg}
          alt="Profile Card Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        {/* Content Overlay */}
        <div className="relative z-10 p-5 pt-4 flex flex-col justify-between min-h-[330px] xl:min-h-[350px] text-white">
          {/* Top Header Row */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-white/95 tracking-wide drop-shadow-xs">
              {t('profile.myProfile')}
            </span>
            <button
              onClick={onEditProfile}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center transition-colors text-white shadow-xs"
              title={t('profile.editProfile')}
            >
              <Pencil size={13} strokeWidth={2.5} />
            </button>
          </div>

          {/* User Info Center */}
          <div className="flex flex-col items-center text-center mt-1">
            {/* Avatar with clean white ring border */}
            <div className="relative w-16 h-16 rounded-full p-0.5 bg-white shadow-md mb-2">
              <img
                src={user.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=JoneDoe&backgroundColor=ffd5dc"}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <h2 className="text-base font-bold text-white tracking-tight leading-tight drop-shadow-xs">
              {user.name}
            </h2>

            <button
              onClick={onEditProfile}
              className="inline-flex items-center gap-1 text-xs font-medium text-white/90 hover:text-white mt-0.5 transition-colors"
            >
              <span>{t('profile.premiumMember')}</span>
              <ChevronDown size={13} strokeWidth={2.5} />
            </button>
          </div>

          {/* Spacer to give room for the hands holding medicine illustration at the bottom */}
          <div className="h-24 xl:h-28" />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 bg-white px-5 py-6 flex flex-col justify-between">
        <ul className="space-y-1.5">
          {navList.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-slate-900 font-semibold bg-slate-50'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      size={18}
                      className={isActive ? 'text-slate-800' : 'text-slate-400'}
                      strokeWidth={isActive ? 2.2 : 1.9}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.hasDot && (
                    <div className="flex items-center gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C4D]"></span>
                      <span className="text-[10px] text-coral-400 font-bold ml-1 rtl:mr-1">+</span>
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Logout Button */}
        <div className="pt-6 border-t border-slate-100">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50/60 transition-colors"
          >
            <LogOut size={18} strokeWidth={1.9} />
            <span>{t('nav.logout')}</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};
