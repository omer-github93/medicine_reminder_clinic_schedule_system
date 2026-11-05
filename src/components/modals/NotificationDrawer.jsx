import React from 'react';
import { X, Bell, CheckCheck, Calendar, Pill, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const NotificationDrawer = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead
}) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'appointment':
        return <Calendar size={16} className="text-coral-500" />;
      case 'medicine':
        return <Pill size={16} className="text-amber-500" />;
      case 'report':
        return <FileText size={16} className="text-blue-500" />;
      default:
        return <Bell size={16} className="text-slate-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end rtl:justify-start p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-fade-in text-left rtl:text-right">
      <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-slate-100 relative mt-12 sm:mt-16 mr-0 sm:mr-4 rtl:mr-0 rtl:ml-0 sm:rtl:ml-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <div className="flex items-center gap-2">
            <Bell size={17} className="text-coral-500" />
            <h3 className="text-sm font-bold text-slate-900">{t('header.notifications')}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1 rtl:pr-0 rtl:pl-1">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded-2xl border transition-all ${
                item.unread
                  ? 'bg-coral-50/40 border-coral-100'
                  : 'bg-slate-50 border-slate-100'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-white shadow-xs">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.title}
                    </h4>
                    {item.unread && (
                      <span className="w-2 h-2 rounded-full bg-coral-500 flex-shrink-0"></span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 mt-3 border-t border-slate-100">
          <button
            onClick={onMarkAllRead}
            className="w-full py-2 rounded-xl text-xs font-semibold text-coral-600 hover:bg-coral-50 flex items-center justify-center gap-1.5 transition-colors"
          >
            <CheckCheck size={14} />
            <span>{t('header.markAllRead')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
