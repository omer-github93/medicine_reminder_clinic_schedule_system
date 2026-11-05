import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3 animate-bounce-in">
      <div className="flex-shrink-0 mt-0.5">
        {isSuccess ? (
          <CheckCircle2 size={18} className="text-emerald-400" />
        ) : (
          <Info size={18} className="text-coral-400" />
        )}
      </div>

      <div className="flex-1 text-xs">
        <p className="font-medium text-slate-200 leading-snug">
          {toast.message}
        </p>
      </div>

      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white flex-shrink-0"
      >
        <X size={15} />
      </button>
    </div>
  );
};

