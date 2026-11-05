import { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  initialUser,
  initialClinics,
  initialMedicines,
  scheduleDays,
  scheduleSlotsByDay,
  notificationsList
} from '../data/mockData';

export function useMedicineSchedule() {
  const [user, setUser] = useState(initialUser);
  const [clinics, setClinics] = useState(initialClinics);
  const [medicines, setMedicines] = useState(initialMedicines);
  const [days, setDays] = useState(scheduleDays);
  const [activeDayId, setActiveDayId] = useState("mon-28");
  const [scheduleSlots, setScheduleSlots] = useState(scheduleSlotsByDay);
  const [notifications, setNotifications] = useState(notificationsList);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Date");
  const [activeNav, setActiveNav] = useState("dashboard");

  // Modals & Drawers
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleDaySelect = (dayId) => {
    setActiveDayId(dayId);
    setDays((prev) =>
      prev.map((d) => ({
        ...d,
        active: d.id === dayId
      }))
    );
  };

  const toggleMedicineTaken = (medId) => {
    setMedicines((prev) =>
      prev.map((med) => {
        if (med.id === medId) {
          const nextState = !med.takenToday;
          if (nextState) {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#FF5C4D', '#FFA26B', '#34D399']
            });
            showToast(`Marked ${med.name} as taken! Great job keeping up with your health.`, 'success');
          } else {
            showToast(`Marked ${med.name} as untaken.`, 'info');
          }
          return { ...med, takenToday: nextState };
        }
        return med;
      })
    );
  };

  const addScheduleEvent = (eventData) => {
    const { title, subtitle, time, dayId, type } = eventData;
    const targetDay = dayId || activeDayId;

    const newSlot = {
      time,
      title,
      subtitle: subtitle || "Scheduled via CarePoint",
      type: type || "appointment",
      status: "Upcoming",
      badge: type === "medicine" ? "Medicine" : "Appointment",
      color: type === "medicine"
        ? "border-amber-400 bg-amber-400/10 text-amber-300"
        : "border-coral-400 bg-coral-400/10 text-coral-300"
    };

    setScheduleSlots((prev) => ({
      ...prev,
      [targetDay]: [...(prev[targetDay] || []), newSlot]
    }));

    showToast(`Added "${title}" to your schedule!`, 'success');
  };

  // Filtered & sorted clinics
  const filteredClinics = useMemo(() => {
    let list = [...clinics];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.address.toLowerCase().includes(q)
      );
    }

    if (sortBy === "Name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Rating") {
      list.sort((a, b) => b.rating - a.rating);
    }
    // "Date" keeps default curated order

    return list;
  }, [clinics, searchQuery, sortBy]);

  // Filtered medicines
  const filteredMedicines = useMemo(() => {
    if (!searchQuery.trim()) return medicines;
    const q = searchQuery.toLowerCase();
    return medicines.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.dosage.toLowerCase().includes(q) ||
        m.instructions.toLowerCase().includes(q)
    );
  }, [medicines, searchQuery]);

  const activeSlots = scheduleSlots[activeDayId] || [];

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return {
    user,
    setUser,
    clinics: filteredClinics,
    medicines: filteredMedicines,
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
  };
}

