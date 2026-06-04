/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { VALUE_PROPS, BUYING_CRITERIA } from '../data';
import { Zap, Briefcase, ShieldCheck, ArrowRight, CheckCircle, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import heroSingleFamily from '../assets/images/hero_single_family.png';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  // Map our dynamic data icons with pristine brand accent styling
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightning':
        return <Zap className="w-7 h-7 text-brand-accent" />;
      case 'Briefcase':
        return <Briefcase className="w-7 h-7 text-brand-accent" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-brand-accent" />;
      default:
        return <Zap className="w-7 h-7 text-brand-accent" />;
    }
  };

  return (
    <div className="space-y-40 pb-36">
      
      {/* Editorial Hero Section with Quiet Luxury Overlay */}
      <section className="relative min-h-[720px] bg-brand-navy flex items-center pt-32 pb-28 overflow-hidden">
        {/* Subtle, luxurious dark background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/95 to-brand-navy-deep/80 z-10" />
        
        {/* Background Image of Premium Residential Asset */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={heroSingleFamily}
            alt="Hershtik Capital Real Estate Acquisition Asset"
            className="w-full h-full object-cover object-center scale-102 filter grayscale-[20%] sepia-[10%]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full flex flex-col items-center text-center">
          <div className="max-w-4xl space-y-10 flex flex-col items-center">
            {/* Elegant Earmark */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-sm text-brand-accent text-xs font-mono tracking-[0.2em] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Capital Performance</span>
            </motion.div>

            {/* Premium Editorial Header */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-[1.12] text-center"
            >
              Systemic Operational Excellence in US <span className="text-brand-accent italic">Single-Family</span> Real Estate.
            </motion.h1>

            {/* Requested Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-light text-center"
            >
              Hershtik Capital is your reliable, agile cash buyer in Texas and Tennessee. We streamline the acquisition process to close single-family deals fast, with zero friction.
            </motion.p>

            {/* Clean Editorial CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-6 pt-4 justify-center items-center"
            >
              <button
                id="hero-submit-cta"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-brand-accent text-brand-navy-deep font-sans font-semibold rounded-sm text-xs uppercase tracking-[0.15em] hover:bg-brand-accent/90 transition-all flex items-center justify-center space-x-2.5 shadow-xl hover:shadow-brand-accent/10"
              >
                <span>Submit a Property</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="hero-strategy-cta"
                onClick={() => {
                  setCurrentPage('strategy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-transparent border border-brand-stone/35 text-white font-sans font-medium rounded-sm text-xs uppercase tracking-[0.15em] hover:bg-white/5 transition-all"
              >
                View Target Markets
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Underwriting Financial Capacity Indicator */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-brand-navy border border-brand-navy-light/60 rounded-sm p-12 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/85">
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-4xl sm:text-5xl font-mono font-light text-brand-accent">24h</span>
            <span className="text-slate-400 text-xs font-mono uppercase tracking-[0.2em] mt-4">Underwriting Decision</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-4xl sm:text-5xl font-mono font-light text-brand-stone-light">0%</span>
            <span className="text-slate-400 text-xs font-mono uppercase tracking-[0.2em] mt-4">Financing Delays</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-4xl sm:text-5xl font-mono font-light text-brand-accent">As-Is</span>
            <span className="text-slate-400 text-xs font-mono uppercase tracking-[0.2em] mt-4">Close Unconditionally</span>
          </div>
        </div>
      </section>

      {/* Value Prop for Partners Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-brand-accent font-mono font-semibold">PARTNERSHIP VALUE FOR AGENTS & WHOLESALERS</h2>
          <p className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-white">
            Our Three Structural Pillars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
          {VALUE_PROPS.map((prop) => (
            <div 
              key={prop.id}
              className="bg-brand-navy/65 p-10 border border-[#222222] rounded-sm hover:border-brand-accent/40 hover:bg-brand-navy transition-all flex flex-col justify-between space-y-8 text-center"
            >
              <div className="space-y-6 flex flex-col items-center">
                <div className="p-3.5 bg-[#1C1C1C] rounded-sm mx-auto border border-[#333333] flex items-center justify-center">
                  {renderIcon(prop.icon)}
                </div>
                <h3 className="text-xl font-display font-medium text-white tracking-wide text-center">{prop.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light text-center">{prop.description}</p>
              </div>
              <div className="border-t border-[#222222] pt-6 flex items-center justify-center w-full">
                <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">{prop.shortLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Asset Buying Profile Section */}
      <section className="bg-[#0A0A0A] border-y border-[#222222] py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-accent font-mono font-semibold">BUYING PARAMETERS</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
              Quiet & Decisive Underwriting Profile
            </h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              To guarantee our rapid 24-hour response and institutional performance, we target on-market pocket listings and off-market assignments matching these exact standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {BUYING_CRITERIA.map((criteria, i) => (
              <div key={i} className="bg-brand-navy/30 border border-[#222222] p-8 rounded-sm hover:border-brand-accent/40 transition-all flex flex-col items-center text-center justify-between">
                <div className="flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <div className="space-y-1.5 flex flex-col items-center">
                    <h4 className="text-white text-xs font-sans font-bold uppercase tracking-[0.1em] text-center">{criteria.category}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-light text-center">{criteria.details}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Exclusively Detached Housing Highlight Box */}
            <div className="p-8 bg-brand-navy/90 border border-brand-accent/30 rounded-sm flex flex-col items-center text-center space-y-4 md:col-span-2 lg:col-span-1">
              <ShieldAlert className="w-5 h-5 text-brand-accent shrink-0" />
              <div className="space-y-1.5 animate-pulse flex flex-col items-center">
                <h4 className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-brand-accent text-center">EXCLUSIVELY DETACHED HOUSING</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light text-center">
                  We specialize wholly in suburban detached housing formats. This single-minded focus removes environmental, commercial zoning, or complex structural review delays from our pipeline entirely.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Commission Guarantee Strip */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-brand-navy border border-[#222222] p-12 md:p-16 rounded-sm flex flex-col items-center justify-center text-center gap-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="space-y-4 relative z-10 max-w-3xl flex flex-col items-center text-center">
            <h3 className="text-brand-accent font-mono text-[10px] uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2">
              <span>● COMMISSIONS RECOGNIZED & SECURED</span>
            </h3>
            <h4 className="text-2xl sm:text-3xl text-white font-display font-medium tracking-tight text-center">
              We protect your wholesale spreads and listing commissions.
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed font-light text-center">
              Submit on-market pocket listings or executive wholesale assignments. Our acquisitions desk honors your fees and closes swift cash transfers.
            </p>
          </div>
          <button
            id="register-buyers-list-cta"
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-brand-accent text-brand-navy-deep font-sans font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-brand-accent/90 transition-all shrink-0 w-full md:w-auto text-center"
          >
            Submit Property
          </button>
        </div>
      </section>

    </div>
  );
}
