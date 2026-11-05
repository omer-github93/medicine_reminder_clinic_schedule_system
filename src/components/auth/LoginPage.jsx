import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { BotanicalCornerTop, BotanicalCornerBottom } from '../../assets/illustrations/BotanicalCorner';
import clinicHeroImg from '../../assets/images/clinic-hero.jpg';

export const LoginPage = ({ onLoginSuccess, onGuestBypass }) => {
  const { t, isRTL } = useLanguage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validation errors
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  // Validation function
  const validateField = (field, value) => {
    let error = '';

    if (field === 'email') {
      if (!value.trim()) {
        error = t('auth.errors.emailRequired');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        error = t('auth.errors.emailInvalid');
      }
    }

    if (field === 'password') {
      if (!value) {
        error = t('auth.errors.passwordRequired');
      } else if (value.length < 6) {
        error = t('auth.errors.passwordShort');
      }
    }

    return error;
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (touched.email || errors.email) {
      setErrors((prev) => ({
        ...prev,
        email: validateField('email', val)
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (touched.password || errors.password) {
      setErrors((prev) => ({
        ...prev,
        password: validateField('password', val)
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = field === 'email' ? email : password;
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, val)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ email: true, password: true });

    const emailErr = validateField('email', email);
    const passErr = validateField('password', password);

    setErrors({
      email: emailErr,
      password: passErr
    });

    if (emailErr || passErr) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess?.({
        name: email.split('@')[0].replace('.', ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || "Jone Doe",
        email: email.trim(),
        role: "Premium member"
      });
    }, 900);
  };

  const handleQuickDemo = () => {
    setEmail('jone.doe@healthmail.com');
    setPassword('carepoint2022');
    setErrors({ email: '', password: '' });
    setTouched({ email: true, password: true });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F7EBE5] overflow-x-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-8 selection:bg-coral-400 selection:text-white">
      {/* Decorative Botanical Branch Top Right */}
      <div className="fixed top-0 right-0 w-56 sm:w-80 pointer-events-none z-0 opacity-80">
        <BotanicalCornerTop className="w-full h-auto" />
      </div>

      {/* Decorative Botanical Branch Bottom Left */}
      <div className="fixed bottom-0 left-0 w-52 sm:w-72 pointer-events-none z-0 opacity-80">
        <BotanicalCornerBottom className="w-full h-auto" />
      </div>

      {/* Top Navbar Header */}
      <header className="relative z-20 w-full max-w-6xl mx-auto flex items-center justify-between py-2 mb-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF5C4D] to-[#FFA26B] p-0.5 shadow-coral flex items-center justify-center text-white">
            <Heart size={20} className="fill-white" />
          </div>
          <div>
            <span className="text-lg font-extrabold text-slate-900 tracking-tight block leading-tight">
              CarePoint
            </span>
            <span className="text-[10px] font-bold text-coral-500 uppercase tracking-wider block">
              Health & Medicine
            </span>
          </div>
        </div>

        {/* Right Tools: Language Switcher & Guest Direct View */}
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />

          {onGuestBypass && (
            <button
              onClick={onGuestBypass}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/80 hover:bg-white text-slate-700 text-xs font-semibold border border-slate-100 shadow-sm transition-all"
            >
              <span>Explore Dashboard</span>
              <ArrowRight size={13} className="rtl:rotate-180 text-coral-500" />
            </button>
          )}
        </div>
      </header>

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto bg-white/90 backdrop-blur-md rounded-[32px] shadow-2xl border border-white/80 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* LEFT: Login Form */}
          <div className="flex-1 p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-left rtl:text-right">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-50 border border-coral-100 text-coral-600 text-xs font-bold mb-4">
                <Sparkles size={12} className="text-coral-500" />
                <span>{t('auth.badge')}</span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                {t('auth.welcomeBack')}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mb-6 leading-relaxed">
                {t('auth.loginSubtitle')}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Email Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {t('auth.email')}
                    </label>
                    {errors.email && (
                      <span className="text-[11px] font-semibold text-rose-500 flex items-center gap-1 animate-fade-in">
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail size={17} className={errors.email ? 'text-rose-500' : ''} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={() => handleBlur('email')}
                      placeholder={t('auth.emailPlaceholder')}
                      className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 outline-none ${
                        errors.email
                          ? 'border-2 border-rose-500 bg-rose-50/25 text-rose-900 placeholder:text-rose-300 ring-2 ring-rose-100'
                          : 'border border-slate-200 focus:border-coral-400 focus:ring-4 focus:ring-coral-100/60 bg-white text-slate-800 placeholder:text-slate-400 hover:border-slate-300'
                      }`}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {t('auth.password')}
                    </label>
                    {errors.password && (
                      <span className="text-[11px] font-semibold text-rose-500 flex items-center gap-1 animate-fade-in">
                        <AlertCircle size={12} />
                        {errors.password}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock size={17} className={errors.password ? 'text-rose-500' : ''} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={handlePasswordChange}
                      onBlur={() => handleBlur('password')}
                      placeholder={t('auth.passwordPlaceholder')}
                      className={`w-full pl-10 rtl:pl-10 rtl:pr-10 pr-10 py-3 rounded-2xl text-sm font-medium transition-all duration-200 outline-none ${
                        errors.password
                          ? 'border-2 border-rose-500 bg-rose-50/25 text-rose-900 placeholder:text-rose-300 ring-2 ring-rose-100'
                          : 'border border-slate-200 focus:border-coral-400 focus:ring-4 focus:ring-coral-100/60 bg-white text-slate-800 placeholder:text-slate-400 hover:border-slate-300'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-3.5 rtl:pr-0 rtl:pl-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded text-coral-500 focus:ring-coral-300 border-slate-300 cursor-pointer accent-coral-500"
                    />
                    <span className="text-xs font-medium text-slate-600">
                      {t('auth.rememberMe')}
                    </span>
                  </label>

                  <button
                    type="button"
                    onClick={() => alert('Password reset instructions sent to your email.')}
                    className="text-xs font-bold text-coral-500 hover:text-coral-600 hover:underline transition-colors"
                  >
                    {t('auth.forgotPassword')}
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-[#FF5C4D] via-[#FF6A5C] to-[#FA7666] hover:from-[#ea4838] hover:to-[#f05a4b] text-white text-sm font-bold shadow-coral hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t('auth.signingIn')}</span>
                    </div>
                  ) : (
                    <>
                      <span>{t('auth.signIn')}</span>
                      <ArrowRight size={16} className="rtl:rotate-180" />
                    </>
                  )}
                </button>
              </form>

              {/* Quick Demo Fill Button */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center">
                <button
                  type="button"
                  onClick={handleQuickDemo}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200/80 transition-colors"
                >
                  <Sparkles size={12} className="text-amber-500" />
                  <span>{t('auth.quickDemo')}</span>
                </button>
              </div>
            </div>

            {/* Bottom Register Prompt */}
            <div className="pt-6 mt-4 text-center border-t border-slate-100 text-xs text-slate-500">
              <span>{t('auth.dontHaveAccount')} </span>
              <button
                type="button"
                onClick={handleQuickDemo}
                className="font-bold text-coral-500 hover:text-coral-600 hover:underline"
              >
                {t('auth.signUp')}
              </button>
            </div>
          </div>

          {/* RIGHT: Visual Showcase Panel */}
          <div className="hidden lg:flex lg:w-[45%] relative bg-[#121924] rounded-r-[32px] rtl:rounded-r-none rtl:rounded-l-[32px] overflow-hidden flex-col justify-between text-white p-8">
            {/* Background Clinic Hero Artwork */}
            <div className="absolute inset-0 opacity-45 pointer-events-none">
              <img
                src={clinicHeroImg}
                alt="Clinic Architecture Sunset"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121924] via-[#121924]/80 to-transparent" />
            </div>

            {/* Top Showcase Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Verified Medical Portal</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-300">
                24/7 Monitoring
              </span>
            </div>

            {/* Middle Feature Highlights */}
            <div className="relative z-10 my-auto py-8 space-y-4 text-left rtl:text-right">
              <h2 className="text-2xl font-extrabold tracking-tight text-white leading-snug">
                {t('auth.featureTitle')}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                {t('auth.featureDesc')}
              </p>

              {/* Micro-cards */}
              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-coral-500/80 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Annual Health Check Tomorrow</span>
                    <span className="text-[11px] text-slate-300">09:00 AM • Sekarwangi Clinic & Pharmacy</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/80 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Smart Dose Reminders</span>
                    <span className="text-[11px] text-slate-300">Ibuprofen & Aluminium Hydroxide tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>CarePoint Health v1.0</span>
              <span className="text-coral-400 font-semibold">Protected & HIPAA Aligned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <footer className="relative z-10 text-center text-xs text-slate-400 py-2">
        <p>© 2026 CarePoint Health System. All rights reserved.</p>
      </footer>
    </div>
  );
};

