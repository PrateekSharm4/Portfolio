import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Mail, Phone, ExternalLink, Send } from 'lucide-react';
import { personal } from '../data/portfolioData';
import { sendContactEmail } from '../services/emailService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Mobile number is required.';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Enter a valid 10-digit mobile number.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionError(null);
    try {
      const res = await sendContactEmail(formData);
      if (res.success) {
        setSubmittedEmail(formData.email);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        setSubmissionError(res.error || 'Email dispatch failed. Please check your EmailJS Public Key.');
      }
    } catch (err) {
      console.error(err);
      setSubmissionError('Network error while connecting to EmailJS.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/[0.07] scroll-mt-24">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B4A] font-semibold">
          Initiate Contact
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F6]">
          Contact Me
        </h2>
        <p className="text-sm text-[#A1A1AA] max-w-xl">
          Interested in full-stack engineering roles, IoT telemetry deployments, or hackathon collaboration? Reach out below to receive my direct contact details.
        </p>
      </div>

      {/* Two-Column Elevated Card Container */}
      <div className="card-elevation rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (7 cols) — Form */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="pb-4 border-b border-white/[0.06]">
              <div>
                <h3 className="text-base font-semibold text-[#F4F4F6]">
                  Send Inquiry & Get Contact Card
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Automated thank-you email will deliver Prateek's direct channels.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {/* 1. Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="visitor-name"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] font-semibold"
                >
                  Your Name <span className="text-[#FF6B4A]">*</span>
                </label>
                <input
                  id="visitor-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Mercer"
                  className={`w-full px-4 py-2.5 rounded-lg bg-[#0E1015] border text-sm text-[#F4F4F6] placeholder-[#52525B] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] transition-colors ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-400 font-mono mt-1">{errors.name}</p>}
              </div>

              {/* 2. Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="visitor-email"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] font-semibold"
                >
                  Email ID <span className="text-[#FF6B4A]">*</span>
                </label>
                <input
                  id="visitor-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@acme-ventures.com"
                  className={`w-full px-4 py-2.5 rounded-lg bg-[#0E1015] border text-sm text-[#F4F4F6] placeholder-[#52525B] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] transition-colors ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-400 font-mono mt-1">{errors.email}</p>}
              </div>

              {/* 3. Mobile Number */}
              <div className="space-y-1.5">
                <label
                  htmlFor="visitor-phone"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] font-semibold"
                >
                  Mobile Number <span className="text-[#FF6B4A]">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-white/10 bg-[#0E1015] text-xs font-mono text-[#A1A1AA]">
                    +91
                  </span>
                  <input
                    id="visitor-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className={`w-full px-4 py-2.5 rounded-r-lg bg-[#0E1015] border text-sm text-[#F4F4F6] placeholder-[#52525B] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400 font-mono mt-1">{errors.phone}</p>}
              </div>

              {/* 4. Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="visitor-message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] font-semibold"
                >
                  Message <span className="text-[#52525B] text-[10px]">(Optional)</span>
                </label>
                <textarea
                  id="visitor-message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team or project scope..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0E1015] border border-white/10 focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] text-sm text-[#F4F4F6] placeholder-[#52525B] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submission Error Alert */}
              {submissionError && (
                <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-xs font-mono text-red-400">
                  {submissionError}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 bg-[#FF6B4A] text-[#0B0C0F] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:bg-[#FF5430] transition-colors duration-150 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Dispatching Confirmation...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Send & Receive My Contact Card</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Column (5 cols) — Direct Channels & Post-Submit Banner */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Post-Submit Confirmation Banner */}
            {submittedEmail && (
              <div className="p-4 rounded-xl border border-[#FF6B4A]/40 bg-[#FF6B4A]/10 text-sm space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF6B4A] uppercase">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Card Dispatched</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Thank-you email with Prateek Sharma's direct contact details has been sent to{' '}
                  <span className="text-[#F4F4F6] font-mono font-semibold">{submittedEmail}</span>.
                </p>
              </div>
            )}

            {/* Direct Channels Stack */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] px-1 font-semibold flex items-center gap-2">
                <span>Direct Channels</span>
                <span className="h-[1px] flex-1 bg-white/[0.06]" />
              </div>

              <div className="space-y-2.5">
                
                {/* Email */}
                <div className="p-3.5 rounded-xl bg-[#0E1015] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                      Email Address
                    </span>
                    <span className="text-xs font-medium text-[#F4F4F6] truncate block mt-0.5">
                      {personal.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-1.5 rounded bg-[#13151C] border border-white/[0.08] text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all shrink-0 flex items-center gap-1 text-[11px] font-mono"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FF6B4A]" />
                        <span className="text-[#FF6B4A] text-[10px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mobile Phone */}
                <div className="p-3.5 rounded-xl bg-[#0E1015] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                      Mobile Direct
                    </span>
                    <span className="text-xs font-medium text-[#F4F4F6] truncate block mt-0.5">
                      {personal.phone}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-1.5 rounded bg-[#13151C] border border-white/[0.08] text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all shrink-0 flex items-center gap-1 text-[11px] font-mono"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FF6B4A]" />
                        <span className="text-[#FF6B4A] text-[10px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="p-3.5 rounded-xl bg-[#0E1015] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                      Professional Network
                    </span>
                    <span className="text-xs font-medium text-[#F4F4F6] truncate block mt-0.5">
                      LinkedIn Profile
                    </span>
                  </div>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-[#13151C] border border-white/[0.08] text-[#A1A1AA] hover:text-[#FF6B4A] hover:border-white/20 transition-all shrink-0 flex items-center gap-1 text-[11px] font-mono"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* GitHub */}
                <div className="p-3.5 rounded-xl bg-[#0E1015] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                      Code Repositories
                    </span>
                    <span className="text-xs font-medium text-[#F4F4F6] truncate block mt-0.5">
                      GitHub Profile
                    </span>
                  </div>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-[#13151C] border border-white/[0.08] text-[#A1A1AA] hover:text-[#FF6B4A] hover:border-white/20 transition-all shrink-0 flex items-center gap-1 text-[11px] font-mono"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
