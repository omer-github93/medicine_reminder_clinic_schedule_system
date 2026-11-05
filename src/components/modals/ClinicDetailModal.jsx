import React from 'react';
import { X, MapPin, Phone, Clock, Star, CheckCircle, Navigation, Calendar } from 'lucide-react';
import { ClinicBuildingIcon } from '../../assets/illustrations/PillIcons';
import { useLanguage } from '../../context/LanguageContext';

export const ClinicDetailModal = ({
  clinic,
  isOpen,
  onClose,
  onBookAppointment
}) => {
  const { t } = useLanguage();
  if (!isOpen || !clinic) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in text-left rtl:text-right">
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative">
        {/* Header Graphic / Map preview banner */}
        <div className="relative h-36 bg-gradient-to-r from-slate-800 to-slate-900 p-5 flex flex-col justify-between overflow-hidden">
          {/* Decorative map grid lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#FFFFFF" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>

          {/* Top Badges */}
          <div className="relative z-10 flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-coral-500 text-white">
              {t('clinics.verified')}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-white/90 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              {clinic.rating} ({clinic.reviews} {t('clinics.reviews')})
            </span>
          </div>

          {/* Clinic Name in banner */}
          <div className="relative z-10 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {clinic.name}
              </h2>
              <p className="text-xs text-white/80">{clinic.category}</p>
            </div>
            <ClinicBuildingIcon type={clinic.type} className="w-12 h-12 shadow-lg" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          {/* Location & Info Grid */}
          <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-coral-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 block">{clinic.address}</span>
                <span className="text-slate-400">{clinic.distance}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Clock size={16} className="text-coral-500 flex-shrink-0" />
              <span>{clinic.openingHours}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-coral-500 flex-shrink-0" />
              <span>{clinic.phone}</span>
            </div>
          </div>

          {/* Provided Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 mb-2.5 uppercase tracking-wider">
              {t('clinics.servicesTitle')}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {clinic.services.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2 rounded-xl border border-slate-100">
                  <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                  <span className="truncate">{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                alert(`Directions to ${clinic.name} (${clinic.address})`);
              }}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation size={14} className="text-coral-500" />
              <span>{t('clinics.directions')}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onBookAppointment(clinic);
              }}
              className="flex-1 py-2.5 rounded-xl bg-[#FF5C4D] hover:bg-[#ea4838] text-white text-xs font-bold shadow-coral flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar size={14} />
              <span>{t('clinics.bookAppointment')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
