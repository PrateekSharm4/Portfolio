import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
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
      errs.name = 'Name is required';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Enter a valid 10-digit Indian mobile number';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await sendContactEmail(formData);
      setSubmittedEmail(formData.email);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-16 border-t border-[#26262C] scroll-mt-20">
      
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-[#F4F4F6]">
          Contact Me
        </h2>
        <p className="text-sm text-[#A1A1AA] mt-1">
          Have an engineering opportunity, contract build, or project to discuss? Drop a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Column — Direct Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            
            {/* 1. Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-[#A1A1AA] mb-1.5 uppercase tracking-wider">
                Your Name <span className="text-[#F4F4F6]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Mercer"
                className={`w-full px-3.5 py-2.5 rounded bg-[#16161A] border text-sm text-[#F4F4F6] placeholder-[#52525B] focus:outline-none transition-colors duration-150 ${
                  errors.name ? 'border-red-500' : 'border-[#26262C] focus:border-[#71717A]'
                }`}
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            {/* 2. Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-[#A1A1AA] mb-1.5 uppercase tracking-wider">
                Email ID <span className="text-[#F4F4F6]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                className={`w-full px-3.5 py-2.5 rounded bg-[#16161A] border text-sm text-[#F4F4F6] placeholder-[#52525B] focus:outline-none transition-colors duration-150 ${
                  errors.email ? 'border-red-500' : 'border-[#26262C] focus:border-[#71717A]'
                }`}
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>

            {/* 3. Mobile Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-mono text-[#A1A1AA] mb-1.5 uppercase tracking-wider">
                Mobile Number <span className="text-[#F4F4F6]">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-[#26262C] bg-[#121215] text-xs font-mono text-[#A1A1AA]">
                  +91
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className={`w-full px-3.5 py-2.5 rounded-r bg-[#16161A] border text-sm text-[#F4F4F6] placeholder-[#52525B] focus:outline-none transition-colors duration-150 ${
                    errors.phone ? 'border-red-500' : 'border-[#26262C] focus:border-[#71717A]'
                  }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>

            {/* 4. Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[#A1A1AA] mb-1.5 uppercase tracking-wider">
                Message <span className="text-[#52525B]">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Brief project or role details..."
                className="w-full px-3.5 py-2.5 rounded bg-[#16161A] border border-[#26262C] focus:border-[#71717A] text-sm text-[#F4F4F6] placeholder-[#52525B] focus:outline-none transition-colors duration-150 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-4 bg-[#E4E4E7] text-[#0E0E10] font-medium text-sm rounded hover:bg-white transition-colors duration-150 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send & Get My Contact Details'}
            </button>

          </form>
        </div>

        {/* Right Column — Direct Info & Post-Submit Confirmation */}
        <div className="space-y-6">
          
          {/* Post-Submit Confirmation Banner */}
          {submittedEmail && (
            <div className="p-4 rounded border border-[#26262C] bg-[#16161A] text-sm space-y-1">
              <p className="font-medium text-[#F4F4F6]">
                Thank you for reaching out.
              </p>
              <p className="text-[#A1A1AA]">
                Thank-you email with my contact details has been sent to{' '}
                <span className="text-[#F4F4F6] font-mono">{submittedEmail}</span>.
              </p>
            </div>
          )}

          {/* Plain Text Direct Contact Block */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] font-semibold">
              Direct Contact
            </h3>
            
            <div className="rounded-lg border border-[#26262C] bg-[#16161A] divide-y divide-[#26262C] text-sm">
              
              {/* Email */}
              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#A1A1AA] font-mono">Email</div>
                  <div className="text-[#F4F4F6] mt-0.5">{personal.email}</div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  className="p-1.5 text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors duration-150"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Mobile */}
              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#A1A1AA] font-mono">Mobile</div>
                  <div className="text-[#F4F4F6] mt-0.5">{personal.phone}</div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  className="p-1.5 text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors duration-150"
                  aria-label="Copy mobile number"
                  title="Copy mobile number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#A1A1AA] font-mono">LinkedIn</div>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:underline mt-0.5 inline-block"
                  >
                    linkedin.com/in/prateeksharma-dev ↗
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#A1A1AA] font-mono">GitHub</div>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:underline mt-0.5 inline-block"
                  >
                    github.com/prateeksharma-dev ↗
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
