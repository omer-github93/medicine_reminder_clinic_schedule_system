export const initialUser = {
  name: "Jone Doe",
  role: "Premium member",
  email: "jone.doe@healthmail.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JoneDoe&backgroundColor=ffd5dc",
  memberSince: "Aug 2021",
  bloodType: "O+",
  emergencyContact: "+62 812 3456 7890",
};

export const initialClinics = [
  {
    id: "sekarwangi",
    name: "Sekarwangi",
    category: "Clinic & pharmacy",
    badgeColor: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-500",
    accentColor: "#F59E0B",
    type: "pharmacy",
    rating: 4.9,
    reviews: 128,
    distance: "1.2 km away",
    address: "Jl. Raya Sekarwangi No. 45, Cibadak",
    phone: "(0266) 531-288",
    openingHours: "08:00 - 21:00",
    services: ["General Consultation", "Prescription Pharmacy", "Blood Pressure Check", "Vaccination"],
    mapCoords: { lat: -6.891, lng: 106.772 }
  },
  {
    id: "orely",
    name: "Orely Clinic",
    category: "Pet Clinic",
    badgeColor: "bg-purple-100 text-purple-700",
    iconBg: "bg-indigo-500",
    accentColor: "#6366F1",
    type: "pet",
    rating: 4.8,
    reviews: 94,
    distance: "2.5 km away",
    address: "Jl. Boulevard Indah Blok C2, Sukabumi",
    phone: "(0266) 534-112",
    openingHours: "09:00 - 18:00",
    services: ["Pet General Checkup", "Vaccines", "Grooming & Health", "Emergency Pet Care"],
    mapCoords: { lat: -6.902, lng: 106.785 }
  },
  {
    id: "cibadak",
    name: "Cibadak Parkud",
    category: "Clinic 24/7",
    badgeColor: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-teal-500",
    accentColor: "#0D9488",
    type: "247",
    rating: 5.0,
    reviews: 215,
    distance: "3.1 km away",
    address: "Jl. Perintis Kemerdekaan No. 102",
    phone: "(0266) 532-999",
    openingHours: "Open 24 Hours",
    services: ["24/7 Emergency Room", "Radiology", "Minor Surgery", "General Practitioner"],
    mapCoords: { lat: -6.885, lng: 106.760 }
  }
];

export const initialMedicines = [
  {
    id: "med-1",
    name: "Ibuprofen karoten",
    dosage: "200mg capsule",
    frequency: "2 pills perday",
    date: "Jan 24, 2022",
    takenToday: false,
    color: "#FF7B6B",
    bgClass: "bg-red-50",
    timeSlots: ["09:00", "18:00"],
    remaining: 14,
    total: 30,
    instructions: "Take with or after food with a full glass of water. For pain & anti-inflammation."
  },
  {
    id: "med-2",
    name: "Alumunium Hydroxide",
    dosage: "400mg tablet",
    frequency: "3 pills perday",
    date: "Jan 25, 2022",
    takenToday: true,
    color: "#FFA26B",
    bgClass: "bg-orange-50",
    timeSlots: ["08:00", "13:00", "20:00"],
    remaining: 21,
    total: 40,
    instructions: "Chew thoroughly before swallowing. Take between meals or at bedtime for acid reflux."
  },
  {
    id: "med-3",
    name: "Amoxicillin Trihydrate",
    dosage: "500mg capsule",
    frequency: "3 pills perday",
    date: "Jan 28, 2022",
    takenToday: false,
    color: "#60A5FA",
    bgClass: "bg-blue-50",
    timeSlots: ["07:00", "15:00", "23:00"],
    remaining: 9,
    total: 21,
    instructions: "Antibiotic course. Finish full prescribed course even if symptoms improve."
  },
  {
    id: "med-4",
    name: "Vitamin C 1000mg + Zinc",
    dosage: "1 effervescent tablet",
    frequency: "1 pill perday",
    date: "Jan 30, 2022",
    takenToday: true,
    color: "#34D399",
    bgClass: "bg-emerald-50",
    timeSlots: ["10:00"],
    remaining: 25,
    total: 30,
    instructions: "Dissolve in 200ml cool water, drink after breakfast for daily immunity support."
  }
];

export const scheduleDays = [
  { id: "mon-28", dayName: "Mon", dateNum: "28", active: true },
  { id: "tue-29", dayName: "Tue", dateNum: "29", active: false },
  { id: "wed-30", dayName: "Wed", dateNum: "30", active: false },
  { id: "thu-1", dayName: "Thu", dateNum: "1", active: false },
  { id: "fri-2", dayName: "Fri", dateNum: "2", active: false },
];

export const scheduleSlotsByDay = {
  "mon-28": [
    {
      time: "9:00 - 10:00",
      title: "Annual Physical Checkup",
      subtitle: "Sekarwangi Clinic • Room 302",
      type: "appointment",
      status: "Upcoming",
      badge: "Checkup",
      color: "border-coral-400 bg-coral-400/10 text-coral-300"
    },
    {
      time: "12:00 - 18:00",
      title: "Alumunium Hydroxide",
      subtitle: "Dose 2 (1 tablet after lunch)",
      type: "medicine",
      status: "Pending",
      badge: "Medicine",
      color: "border-amber-400 bg-amber-400/10 text-amber-300"
    },
    {
      time: "18:00",
      title: "Ibuprofen karoten",
      subtitle: "Evening dose with dinner",
      type: "medicine",
      status: "Scheduled",
      badge: "Medicine",
      color: "border-teal-400 bg-teal-400/10 text-teal-300"
    }
  ],
  "tue-29": [
    {
      time: "9:00 - 10:00",
      title: "Morning Routine Vitamins",
      subtitle: "Vitamin C + Zinc with water",
      type: "medicine",
      status: "Scheduled",
      badge: "Vitamins",
      color: "border-emerald-400 bg-emerald-400/10 text-emerald-300"
    },
    {
      time: "12:00 - 18:00",
      title: "Blood Pressure Monitoring",
      subtitle: "CarePoint Digital Sphygmomanometer",
      type: "appointment",
      status: "Scheduled",
      badge: "Self-Check",
      color: "border-indigo-400 bg-indigo-400/10 text-indigo-300"
    },
    {
      time: "18:00",
      title: "Alumunium Hydroxide",
      subtitle: "Evening dose before bedtime",
      type: "medicine",
      status: "Scheduled",
      badge: "Medicine",
      color: "border-amber-400 bg-amber-400/10 text-amber-300"
    }
  ],
  "wed-30": [
    {
      time: "9:00 - 10:00",
      title: "Lab Blood Test Results",
      subtitle: "Sekarwangi Clinic & Pharmacy",
      type: "appointment",
      status: "Upcoming",
      badge: "Lab Test",
      color: "border-sky-400 bg-sky-400/10 text-sky-300"
    },
    {
      time: "18:00",
      title: "Evening Medication",
      subtitle: "Ibuprofen 200mg",
      type: "medicine",
      status: "Scheduled",
      badge: "Medicine",
      color: "border-teal-400 bg-teal-400/10 text-teal-300"
    }
  ],
  "thu-1": [
    {
      time: "10:00",
      title: "Orely Pet Clinic - Milo's Check",
      subtitle: "Vaccination Booster",
      type: "appointment",
      status: "Scheduled",
      badge: "Pet Care",
      color: "border-purple-400 bg-purple-400/10 text-purple-300"
    },
    {
      time: "18:00",
      title: "Daily Vitamins & Calcium",
      subtitle: "Evening dose",
      type: "medicine",
      status: "Scheduled",
      badge: "Supplements",
      color: "border-amber-400 bg-amber-400/10 text-amber-300"
    }
  ],
  "fri-2": [
    {
      time: "9:00 - 10:00",
      title: "Consultation Review",
      subtitle: "Dr. Alistair - Cibadak Parkud",
      type: "appointment",
      status: "Scheduled",
      badge: "Consultation",
      color: "border-coral-400 bg-coral-400/10 text-coral-300"
    }
  ]
};

export const notificationsList = [
  {
    id: 1,
    title: "Annual Checkup Tomorrow",
    desc: "Your comprehensive health check is scheduled for 09:00 AM at Sekarwangi Clinic.",
    time: "20 min ago",
    unread: true,
    type: "appointment"
  },
  {
    id: 2,
    title: "Medicine Refill Alert",
    desc: "Ibuprofen karoten has 14 pills left. Order a refill soon.",
    time: "2 hours ago",
    unread: true,
    type: "medicine"
  },
  {
    id: 3,
    title: "Lab Test Ready",
    desc: "Your cholesterol and lipid panel results are ready for download.",
    time: "1 day ago",
    unread: false,
    type: "report"
  }
];

