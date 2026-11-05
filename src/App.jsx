import React, { useState } from 'react';
import { useMedicineSchedule } from './hooks/useMedicineSchedule';
import { MainLayout } from './components/layout/MainLayout';
import { AnnualCheckBanner } from './components/dashboard/AnnualCheckBanner';
import { ClinicList } from './components/dashboard/ClinicList';
import { MedicineList } from './components/dashboard/MedicineList';
import { LoginPage } from './components/auth/LoginPage';
import { LogIn, LayoutDashboard } from 'lucide-react';

// Modals
import { AddScheduleModal } from './components/modals/AddScheduleModal';
import { ClinicDetailModal } from './components/modals/ClinicDetailModal';
import { MedicineDetailModal } from './components/modals/MedicineDetailModal';
import { ProfileModal } from './components/modals/ProfileModal';
import { NotificationDrawer } from './components/modals/NotificationDrawer';
import { Toast } from './components/ui/Toast';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('page') === 'login') return 'login';
    }
    return 'dashboard';
  });

  const {
    user,
    setUser,
    clinics,
    medicines,
    days,
    activeDayId,
    activeSlots,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    activeNav,
    setActiveNav,
    notifications,
    unreadCount,
    markAllNotificationsRead,
    handleDaySelect,
    toggleMedicineTaken,
    addScheduleEvent,
    isAddModalOpen,
    setIsAddModalOpen,
    selectedClinic,
    setSelectedClinic,
    selectedMedicine,
    setSelectedMedicine,
    isProfileModalOpen,
    setIsProfileModalOpen,
    isNotificationsOpen,
    setIsNotificationsOpen,
    toastMessage,
    showToast
  } = useMedicineSchedule();

  const handleBookAppointment = (clinic) => {
    addScheduleEvent({
      title: `${clinic.name} Consultation`,
      subtitle: `${clinic.category} • ${clinic.address}`,
      time: "10:00 - 11:00",
      dayId: activeDayId,
      type: "appointment"
    });
  };

  const handleRefillRequest = (medicine) => {
    showToast(`Prescription refill request sent for ${medicine.name}!`, 'success');
  };

  const handleLogout = () => {
    setCurrentPage('login');
    showToast('You have logged out. Please sign in to continue.', 'info');
  };

  const handleLoginSuccess = (userData) => {
    if (userData?.email) {
      setUser((prev) => ({
        ...prev,
        name: userData.name || prev.name,
        email: userData.email || prev.email
      }));
    }
    setCurrentPage('dashboard');
    showToast(`Welcome back, ${userData?.name || user.name}!`, 'success');
  };

  const handleShowTestInfo = () => {
    showToast('Preparation: Fasting 8 hours prior to the test is recommended.', 'info');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'login' ? (
        <LoginPage
          onLoginSuccess={handleLoginSuccess}
          onGuestBypass={() => setCurrentPage('dashboard')}
        />
      ) : (
        <MainLayout
          user={user}
          activeNav={activeNav}
          onNavClick={setActiveNav}
          onEditProfile={() => setIsProfileModalOpen(true)}
          onLogout={handleLogout}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          unreadCount={unreadCount}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          days={days}
          activeDayId={activeDayId}
          onSelectDay={handleDaySelect}
          slots={activeSlots}
          onAddSchedule={() => setIsAddModalOpen(true)}
        >
          {/* Main Dashboard Hero & Sections */}
          <AnnualCheckBanner
            onAddToCalendar={() => setIsAddModalOpen(true)}
            onShowInfo={handleShowTestInfo}
          />

          <ClinicList
            clinics={clinics}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onClinicClick={setSelectedClinic}
            onViewMap={setSelectedClinic}
          />

          <MedicineList
            medicines={medicines}
            onToggleTaken={toggleMedicineTaken}
            onViewDetails={setSelectedMedicine}
          />
        </MainLayout>
      )}

      {/* Floating View Switcher Helper (bottom-left) for easy previewing */}
      <div className="fixed bottom-5 left-5 rtl:left-auto rtl:right-5 z-40">
        <button
          onClick={() => setCurrentPage(currentPage === 'dashboard' ? 'login' : 'dashboard')}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold backdrop-blur-md shadow-xl border border-white/20 transition-all transform hover:scale-105"
          title="Toggle between Login Page and Dashboard"
        >
          {currentPage === 'dashboard' ? (
            <>
              <LogIn size={14} className="text-coral-400" />
              <span>Preview Login Page</span>
            </>
          ) : (
            <>
              <LayoutDashboard size={14} className="text-amber-400" />
              <span>Back to Dashboard</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Modals & Drawers */}
      <AddScheduleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={addScheduleEvent}
        days={days}
        activeDayId={activeDayId}
      />

      <ClinicDetailModal
        clinic={selectedClinic}
        isOpen={Boolean(selectedClinic)}
        onClose={() => setSelectedClinic(null)}
        onBookAppointment={handleBookAppointment}
      />

      <MedicineDetailModal
        medicine={selectedMedicine}
        isOpen={Boolean(selectedMedicine)}
        onClose={() => setSelectedMedicine(null)}
        onToggleTaken={toggleMedicineTaken}
        onRefill={handleRefillRequest}
      />

      <ProfileModal
        user={user}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onSave={(updated) => {
          setUser(updated);
          showToast('Profile updated successfully!', 'success');
        }}
      />

      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllRead={markAllNotificationsRead}
      />

      {/* Floating Feedback Toast */}
      <Toast toast={toastMessage} onClose={() => {}} />
    </div>
  );
}
