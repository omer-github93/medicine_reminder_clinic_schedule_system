import React, { useState } from 'react';
import { BotanicalCornerTop, BotanicalCornerBottom } from '../../assets/illustrations/BotanicalCorner';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { RightPanel } from './RightPanel';

export const MainLayout = ({
  user,
  activeNav,
  onNavClick,
  onEditProfile,
  onLogout,
  searchQuery,
  setSearchQuery,
  unreadCount,
  onOpenNotifications,
  days,
  activeDayId,
  onSelectDay,
  slots,
  onAddSchedule,
  children
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#F7EBE5] overflow-x-hidden flex items-center justify-center p-3 sm:p-6 lg:p-8 selection:bg-coral-400 selection:text-white">
      {/* Decorative Botanical Branch Top Right */}
      <div className="fixed top-0 right-0 w-56 sm:w-80 pointer-events-none z-0 opacity-85">
        <BotanicalCornerTop className="w-full h-auto" />
      </div>

      {/* Decorative Botanical Branch Bottom Left */}
      <div className="fixed bottom-0 left-0 w-52 sm:w-72 pointer-events-none z-0 opacity-85">
        <BotanicalCornerBottom className="w-full h-auto" />
      </div>

      {/* Main Dashboard Card Container */}
      <div className="relative z-10 w-full max-w-[1400px] bg-[#FDFBF9]/80 backdrop-blur-md rounded-[34px] shadow-2xl border border-white/60 p-4 sm:p-5 lg:p-6 transition-all">
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-stretch">
          {/* Left Column: Sidebar (Desktop) */}
          <div className="hidden lg:block">
            <Sidebar
              user={user}
              activeNav={activeNav}
              onNavClick={onNavClick}
              onEditProfile={onEditProfile}
              onLogout={onLogout}
            />
          </div>

          {/* Mobile Sidebar Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex">
              <div className="w-[280px] h-full p-4 bg-transparent animate-slide-in">
                <Sidebar
                  user={user}
                  activeNav={activeNav}
                  onNavClick={(id) => {
                    onNavClick(id);
                    setIsMobileMenuOpen(false);
                  }}
                  onEditProfile={() => {
                    onEditProfile();
                    setIsMobileMenuOpen(false);
                  }}
                  onLogout={onLogout}
                />
              </div>
              <div
                className="flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
            </div>
          )}

          {/* Center Column: Main Content */}
          <main className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              {/* Header: Search Bar & Notifications */}
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                unreadCount={unreadCount}
                onOpenNotifications={onOpenNotifications}
                onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                isMobileMenuOpen={isMobileMenuOpen}
              />

              {/* Main Children (Hero Banner, Clinic List, Medicine List) */}
              {children}
            </div>
          </main>

          {/* Right Column: Top Clinic Banner + Your Schedule */}
          <div className="w-full lg:w-auto">
            <RightPanel
              days={days}
              activeDayId={activeDayId}
              onSelectDay={onSelectDay}
              slots={slots}
              onAddSchedule={onAddSchedule}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

