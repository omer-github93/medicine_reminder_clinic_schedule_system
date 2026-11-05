import React, { useState } from 'react';
import { X, ShieldCheck, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ProfileModal = ({
  user,
  isOpen,
  onClose,
  onSave
}) => {
  const [formData, setFormData] = useState({ ...user });
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in text-left rtl:text-right">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-coral-500 to-amber-400">
            <img
              src={formData.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=JoneDoe&backgroundColor=ffd5dc"}
              alt={user.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <span className="text-[11px] font-bold text-coral-500 uppercase tracking-wider">
              {t('profile.myProfile')}
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {formData.name}
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <ShieldCheck size={13} />
              {t('profile.premiumMember')}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">{t('profile.fullName')}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-coral-400"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">{t('profile.email')}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-coral-400"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">{t('profile.bloodType')}</label>
              <input
                type="text"
                value={formData.bloodType}
                onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-coral-400"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">{t('profile.memberSince')}</label>
              <input
                type="text"
                value={formData.memberSince}
                disabled
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">{t('profile.emergencyContact')}</label>
            <input
              type="text"
              value={formData.emergencyContact}
              onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-coral-400"
            />
          </div>

          <div className="flex items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold transition-colors"
            >
              {t('profile.cancel')}
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-[#FF5C4D] hover:bg-[#ea4838] text-white font-bold shadow-coral flex items-center justify-center gap-1.5 transition-colors"
            >
              <Check size={15} strokeWidth={2.5} />
              <span>{t('profile.saveChanges')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
