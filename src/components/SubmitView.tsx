/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PropertySubmission } from '../types';
import { Mail, Phone, Calendar, Clock, Check, Linkedin, Sparkles, Send, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import kobiHershtikFullPortrait from '../assets/images/kobi_hershtik_full_portrait.png';

export default function SubmitView() {
  const [submissions, setSubmissions] = useState<PropertySubmission[]>([]);
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: 'TX',
    zipCode: '',
    propertyType: 'Single Family Detached',
    askingPrice: '',
    estimatedArv: '',
    estimatedRehab: '',
    submitterName: '',
    submitterEmail: '',
    submitterPhone: '',
    submitterRole: 'wholesaler',
    hasCommissionProtected: true,
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successDealId, setSuccessDealId] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  // Available mockup hours for scheduler
  const availableSlots = [
    '09:00 AM Central',
    '10:30 AM Central',
    '01:00 PM Central',
    '03:30 PM Central',
    '04:30 PM Central',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError(null);
    
    const randomId = 'HK-' + Math.floor(100000 + Math.random() * 900000);
    const newSubmission: PropertySubmission = {
      id: randomId,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      propertyType: formData.propertyType,
      askingPrice: Number(formData.askingPrice) || 0,
      estimatedArv: formData.estimatedArv ? Number(formData.estimatedArv) : undefined,
      estimatedRehab: formData.estimatedRehab ? Number(formData.estimatedRehab) : undefined,
      submitterName: formData.submitterName,
      submitterEmail: formData.submitterEmail,
      submitterPhone: formData.submitterPhone,
      submitterRole: formData.submitterRole as any,
      hasCommissionProtected: formData.hasCommissionProtected,
      notes: formData.notes,
      submittedAt: new Date().toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    try {
      const response = await fetch("https://formspree.io/f/xjgdbllk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ticketId: randomId,
          ...formData,
          email: formData.submitterEmail,
          message: `New Deal Submission at ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode} for asking price of $${formData.askingPrice}. Submitter Name: ${formData.submitterName} (${formData.submitterRole}), Phone: ${formData.submitterPhone}. Notes: ${formData.notes || 'None'}.`,
          submittedAt: newSubmission.submittedAt
        })
      });

      if (response.ok) {
        setSubmissions([newSubmission, ...submissions]);
        setSuccessDealId(randomId);
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setFormError(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setFormError("Form submission to Acquisitions Desk failed. Please try again.");
        }
      }
    } catch (err) {
      console.error(err);
      setFormError("A network error occurred during submission. Please check your connection and try again.");
    } finally {
      setFormSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      address: '',
      city: '',
      state: 'TX',
      zipCode: '',
      propertyType: 'Single Family Detached',
      askingPrice: '',
      estimatedArv: '',
      estimatedRehab: '',
      submitterName: '',
      submitterEmail: '',
      submitterPhone: '',
      submitterRole: 'wholesaler',
      hasCommissionProtected: true,
      notes: ''
    });
    setFormError(null);
    setIsSubmitted(false);
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime) return;

    setBookingSubmitting(true);
    setBookingError(null);

    const clientEmail = submissions[0]?.submitterEmail || formData.submitterEmail || "Unspecified partner email";

    try {
      const response = await fetch("https://formspree.io/f/xjgdbllk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          formType: "10-Minute Briefing Reservation",
          requestedDate: bookingDate,
          requestedTimeSlot: bookingTime,
          clientPhone: bookingPhone,
          scheduledWith: "Kobi Hershtik",
          email: clientEmail,
          clientEmail: clientEmail,
          message: `Booking: 10-Minute Briefing with Kobi Hershtik requested for ${bookingDate} at ${bookingTime}. Phone: ${bookingPhone}.`
        })
      });

      if (response.ok) {
        setIsBooked(true);
      } else {
        setBookingError("Booking reservation failed. Please check details and try again.");
      }
    } catch (err) {
      console.error(err);
      setBookingError("A connection error occurred. Please try again.");
    } finally {
      setBookingSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 space-y-28">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-xs uppercase tracking-[0.25em] text-brand-accent font-mono font-bold">TRANSACT AS A PARTNER</h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight">
          Submit Properties & Initiate Quick Underwriting
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed font-light">
          Provide your asset metrics below. Our single-family acquisitions desk will review your details and submit a formal response within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Direct Action & Calendly Booking Simulator */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-12">
          
          {/* Institutional Contact Card */}
          <div className="bg-brand-navy border border-[#222222] p-8 rounded-sm space-y-6 flex flex-col items-start text-left">
            <h3 className="text-white text-base font-display font-medium uppercase tracking-wider border-b border-[#222222] pb-3 text-left w-full">
              Direct Acquisition Contacts
            </h3>

            <div className="space-y-6 w-full flex flex-col items-start">
              <div className="flex flex-col sm:flex-row items-start text-left gap-4">
                <div className="p-2.5 bg-[#161616] rounded-sm text-brand-accent shrink-0 border border-[#333333] w-fit">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-mono tracking-wider text-left">PRIORITY PORTAL</p>
                  <a 
                    href="mailto:kobi@hershtikcapital.com?subject=New%20Property%20Deal%20-%20Hershtik%20Capital" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-accent text-white font-sans text-sm font-semibold transition-colors block mt-0.5 text-left"
                  >
                    kobi@hershtikcapital.com
                  </a>
                  <p className="text-slate-455 text-xs mt-1.5 leading-relaxed font-light text-left">Send raw spreadsheets, pocket packages, or custom deal flow reports directly.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start text-left gap-4">
                <div className="p-2.5 bg-[#161616] rounded-sm text-brand-accent shrink-0 border border-[#333333] w-fit">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-mono tracking-wider text-left">DIRECT HOTLINE</p>
                  <span className="text-slate-200 font-sans text-sm font-semibold block mt-0.5 text-left">
                    +1 (615) 300 0565
                  </span>
                  <p className="text-slate-455 text-xs mt-1.5 leading-relaxed font-light text-left">Call our primary acquisitions desks in Texas & Tennessee directly.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start text-left gap-4">
                <div className="p-2.5 bg-[#161616] rounded-sm text-brand-accent shrink-0 border border-[#333333] w-fit">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-mono tracking-wider text-left">INVESTOR NETWORK</p>
                  <a 
                    href="https://www.linkedin.com/in/kobi-hershtik-689862413/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-brand-accent text-white font-sans text-sm font-semibold transition-colors block mt-0.5 text-left"
                  >
                    linkedin.com/in/kobi-hershtik-689862413/
                  </a>
                  <p className="text-slate-455 text-xs mt-1.5 leading-relaxed font-light text-left">Connect with our institutional executive profiles on LinkedIn.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Calendly Call Booking Component */}
          <div className="bg-brand-navy border border-[#222222] p-8 rounded-sm space-y-6 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full filter blur-xl pointer-events-none" />
            
            <div className="space-y-4 w-full flex flex-col items-center">
              <span className="text-brand-accent text-[10px] font-mono uppercase tracking-widest font-semibold flex items-center justify-center space-x-1.5 w-full mx-auto">
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule a 10-Minute Briefing</span>
              </span>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 bg-[#0F0F0F]/50 p-3.5 rounded-sm border border-[#222222]/60 w-full text-center sm:text-left">
                <img 
                  src={kobiHershtikFullPortrait} 
                  alt="Kobi Hershtik, Founder" 
                  className="w-12 h-12 object-cover rounded-full border border-brand-accent/25"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-white text-xs font-sans font-bold tracking-wide">Kobi Hershtik</h4>
                  <p className="text-slate-455 text-[10px] font-mono uppercase tracking-wider">Founder & Managing Principal</p>
                </div>
              </div>

              <h3 className="text-white text-lg font-display font-medium leading-tight text-center w-full">
                Introductory Pipeline Review
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed text-center">
                Connect directly with founder Kobi Hershtik. Book a concise structural mapping session to discuss target inventory rules.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isBooked ? (
                <form onSubmit={handleBooking} className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Select Date</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Select Call Slot</label>
                    <select
                      required
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent font-mono"
                    >
                      <option value="">-- Choose Slot --</option>
                      {availableSlots.map((slot, i) => (
                        <option key={i} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Contact Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (615) 300 0565"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent font-mono"
                    />
                  </div>

                  {bookingError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-sm text-[10px] font-mono leading-relaxed">
                      {bookingError}
                    </div>
                  )}

                  <button
                    id="calendly-booking-submit"
                    type="submit"
                    disabled={bookingSubmitting}
                    className="w-full py-3.5 bg-brand-accent text-brand-navy-deep rounded-sm text-xs uppercase tracking-[0.15em] font-sans font-bold hover:bg-brand-accent/90 disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
                  >
                    {bookingSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-3.5 w-3.5 text-brand-navy-deep" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Reservations Desk Connecting...</span>
                      </span>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5" />
                        <span>Confirm 10-Min Briefing</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 rounded-sm p-6 space-y-4"
                >
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs uppercase font-mono font-bold tracking-wider">BRIEFING SECURED</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Your brief consultation invites containing meeting credentials have been booked for <strong className="text-white">{bookingDate}</strong> at <strong className="text-white">{bookingTime}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setBookingDate('');
                      setBookingTime('');
                      setBookingPhone('');
                    }}
                    className="text-[10px] text-brand-accent hover:text-white underline font-mono cursor-pointer block pt-2"
                  >
                    Reset & Book Another Briefing
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Column: Dynamic submission Form */}
        <div className="lg:col-span-12 xl:col-span-7 font-light">
          <div className="bg-brand-navy border border-[#222222] rounded-sm p-8 sm:p-10 space-y-8">
            
            <div className="border-b border-[#222222] pb-4 flex flex-col items-center text-center">
              <h3 className="text-white text-base font-display font-medium uppercase tracking-wider text-center">
                Deals Ingest Engine
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-light text-center">
                Submit property metrics below. Direct underwriting calculations begin immediately.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Section A: Property Metrics */}
                  <div className="space-y-4 flex flex-col items-center text-center">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent text-center w-full block">
                      1. Property Profile & Financials
                    </h4>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Property Street Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="e.g. 1408 Belmont Ave"
                        className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">City</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Dallas / Nashville"
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Target State</label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent"
                        >
                          <option value="TX">Texas (DFW)</option>
                          <option value="TN">Tennessee (Nashville)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Zip Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="e.g. 75201"
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Property Category</label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent"
                        >
                          <option value="Single Family Detached">Single Family Detached</option>
                          <option value="Townhome / Rowhouse">Townhome / Rowhouse</option>
                          <option value="Duplex / Triplex">Duplex or Triplex (Yield Focus)</option>
                          <option value="Value-Add Suburban Tract">Value-Add Infill Slot</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Asking Buy Price ($)</label>
                        <input
                          type="number"
                          name="askingPrice"
                          required
                          value={formData.askingPrice}
                          onChange={handleInputChange}
                          placeholder="e.g. 295000"
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Estimated ARV (Optional)</label>
                        <input
                          type="number"
                          name="estimatedArv"
                          value={formData.estimatedArv}
                          onChange={handleInputChange}
                          placeholder="e.g. 410000"
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent font-mono"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Est. Rehab Repair Cost (Optional)</label>
                        <input
                          type="number"
                          name="estimatedRehab"
                          value={formData.estimatedRehab}
                          onChange={handleInputChange}
                          placeholder="e.g. 45000"
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section B: Submitter details */}
                  <div className="space-y-4 pt-6 border-t border-[#222222] flex flex-col items-center text-center">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent text-center w-full block">
                      2. Submitter Profile & Protections
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Your Role</label>
                        <select
                          name="submitterRole"
                          value={formData.submitterRole}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent"
                        >
                          <option value="wholesaler">Wholesaler (Off-market assignment)</option>
                          <option value="agent">Real Estate Agent (On/Off market listing)</option>
                          <option value="broker">Licensed Managing Broker</option>
                          <option value="owner">Direct Property Owner</option>
                          <option value="other">Other Referral Partner</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Full Name</label>
                        <input
                          type="text"
                          name="submitterName"
                          required
                          value={formData.submitterName}
                          onChange={handleInputChange}
                          placeholder="e.g. Marcus Miller"
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Contact Email</label>
                        <input
                          type="email"
                          name="submitterEmail"
                          required
                          value={formData.submitterEmail}
                          onChange={handleInputChange}
                          placeholder="marcus@agentnexus.com"
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Mobile Phone</label>
                        <input
                          type="tel"
                          name="submitterPhone"
                          required
                          value={formData.submitterPhone}
                          onChange={handleInputChange}
                          placeholder="(555) 019-2834"
                          className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent font-mono"
                        />
                      </div>
                    </div>

                    {/* Checkbox commission confirmation */}
                    <div className="bg-[#0F0F0F] p-4 border border-[#222222] rounded-sm flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="hasCommissionProtected"
                        name="hasCommissionProtected"
                        checked={formData.hasCommissionProtected}
                        onChange={handleInputChange}
                        className="mt-1 accent-brand-accent h-4 w-4 rounded-sm border-[#222222] bg-[#0F0F0F]"
                      />
                      <label htmlFor="hasCommissionProtected" className="text-xs text-slate-300 leading-relaxed cursor-pointer select-none">
                        <strong className="text-white block font-sans text-xs uppercase tracking-wider mb-0.5">Commission & Fee Guarantee</strong>
                        By submitting this file, I confirm I wish to protect my wholesale assignment spread, alignment premium, or standard listing commission. Hershtik Capital supports broker fees fully.
                      </label>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Additional Notes & Access Instructions</label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Provide details such as lockbox coordinates, tenure state, or specific distressed situations..."
                        className="w-full bg-[#0F0F0F] border border-[#222222] rounded-sm text-xs px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-accent"
                      />
                    </div>
                  </div>

                  {formError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-sm text-xs font-mono text-center leading-relaxed">
                      {formError}
                    </div>
                  )}

                  <button
                    id="submit-property-form-btn"
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full py-4 bg-brand-accent text-brand-navy-deep font-sans font-bold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-brand-accent/90 disabled:opacity-50 transition-all flex items-center justify-center space-x-2 shadow-lg animate-none duration-150"
                  >
                    {formSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-4 w-4 text-brand-navy-deep" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Analyzing & Underwriting Asset Metrics...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Deploy Asset Data to Acquisitions Desk</span>
                      </>
                    )}
                  </button>

                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 py-6 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-450 border-emerald-400/20 shadow-md">
                    <Check className="w-8 h-8 text-emerald-450" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-medium text-white">Deal Successfully Logged</h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                      Thank you. Your property submission has been mapped under Ticket ID <strong className="text-brand-accent font-mono">{successDealId}</strong>. A capital lead technician will complete underwriting review in 24 hours.
                    </p>
                  </div>

                  <div className="bg-[#0F0F0F] p-6 rounded-sm border border-[#222222] max-w-md mx-auto text-left text-xs font-mono space-y-1 text-slate-450">
                    <div><span className="text-slate-550">TICKET:</span> {successDealId}</div>
                    <div><span className="text-slate-550">STATION:</span> Dallas/Nashville Buying Desk</div>
                    <div><span className="text-slate-550">ASSET:</span> {formData.address}, {formData.city}, {formData.state}</div>
                    <div><span className="text-slate-550">EST. RATIO:</span> ${Number(formData.askingPrice).toLocaleString()} Asking</div>
                    <div><span className="text-slate-550">PROTECTED:</span> {formData.hasCommissionProtected ? 'YES' : 'NO'}</div>
                  </div>

                  <div className="pt-4 flex justify-center space-x-4">
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 bg-[#0F0F0F] border border-[#222222] text-slate-300 rounded-sm text-xs uppercase tracking-wider font-semibold hover:text-white hover:border-brand-accent transition-all"
                    >
                      Submit Another Deal
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>

      {/* Persistent Client Deal Ledger (Shows in-session listings beautifully!) */}
      {submissions.length > 0 && (
        <section className="bg-brand-navy border border-[#222222] rounded-sm p-8 space-y-6">
          <div>
            <h3 className="text-white text-base font-display font-medium uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-brand-accent rounded-full inline-block animate-pulse" />
              <span>Your Session Pipeline Ledger</span>
            </h3>
            <p className="text-xs text-slate-455 font-light leading-relaxed">
              The properties you have logged during this browser session. Live tracking status.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#222222] text-slate-500 font-mono option-header">
                  <th className="py-3 px-4 font-normal tracking-wider">Ticket ID</th>
                  <th className="py-3 px-4 font-normal tracking-wider">Address</th>
                  <th className="py-3 px-4 font-normal tracking-wider">Price/ARV</th>
                  <th className="py-3 px-4 font-normal tracking-wider">Submitter</th>
                  <th className="py-3 px-4 font-normal tracking-wider">Commission</th>
                  <th className="py-3 px-4 font-normal text-right tracking-wider">Acquisition State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222222]/50 text-slate-300 font-sans">
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-brand-navy-light/40 transition-colors">
                    <td className="py-4 px-4 font-mono font-semibold text-brand-accent">{sub.id}</td>
                    <td className="py-4 px-4 font-medium text-slate-200">
                      {sub.address}, {sub.city}, {sub.state} {sub.zipCode}
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-300">
                      ${sub.askingPrice.toLocaleString()} 
                      {sub.estimatedArv && ` / $${sub.estimatedArv.toLocaleString()} ARV`}
                    </td>
                    <td className="py-4 px-4">
                      {sub.submitterName} <span className="text-slate-500 text-[10px] uppercase block font-mono">{sub.submitterRole}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-0.5 rounded-sm text-[9px] font-mono bg-brand-accent/10 text-brand-accent border border-brand-accent/25">
                        {sub.hasCommissionProtected ? 'PROTECTED' : 'STANDARD'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-brand-accent/10 text-brand-accent font-mono text-[10px] tracking-wider uppercase border border-brand-accent/15">
                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping" />
                        <span>Underwriting Desk Review</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

    </div>
  );
}
