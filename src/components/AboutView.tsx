/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Activity, Award, Check, DollarSign, ArrowRight, Layers, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import kobiHershtikFullPortrait from '../assets/images/kobi_hershtik_full_portrait.png';

interface AboutViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function AboutView({ setCurrentPage }: AboutViewProps) {
  
  const corePillars = [
    {
      title: 'Precision Sizing Model',
      subtitle: 'Systemic Over Emotional Guidance',
      description: 'We do not execute speculative or emotional bids. We model localized asset yield tolerances, demographic inflows, and submarket microdata to produce direct, objective buying prices within hours.',
      icon: Activity
    },
    {
      title: 'Systemic Operational Excellence',
      subtitle: 'Decisive Frictional Zero Decay',
      description: 'Traditional private equity allocators run opportunities through countless unhurried committees. We organize acquisitions around rapid data feeds and streamlined structures, making us agile, decisive, and smooth.',
      icon: Cpu
    },
    {
      title: 'Transactional Integrity',
      subtitle: 'Double-End Alignment',
      description: 'A transaction is only successful when all stakeholders are protected. We protect wholesaling margins, defend listing agent fees, and clear problematic title situations with speed and expertise.',
      icon: Award
    }
  ];

  return (
    <div className="space-y-40 pb-36">
      
      {/* Editorial Header Section */}
      <section className="bg-brand-navy-deep pt-28 pb-24 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Core Belief & Institutional Philosophy */}
            <div className="lg:col-span-12 space-y-8 flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="text-brand-accent text-xs font-mono uppercase tracking-[0.25em] font-semibold flex items-center justify-center space-x-2">
                <span>● INSTITUTIONAL PHILOSOPHY</span>
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white leading-[1.15] text-center">
                A smart, precise, and system-driven organization is the only way to unlock exceptional economic value.
              </h1>
              
              <p className="text-slate-350 text-base leading-relaxed font-light text-center">
                Hershtik Capital was founded on a singular core belief: true value is unlocked when smart systems, precise microdata modeling, and agile processes override slow legacy procedures. Real estate acquisition is historically bogged down by bloated corporate structures and mortgage review friction.
              </p>
              
              <p className="text-slate-400 text-sm leading-relaxed font-light text-center">
                We operate on strict operational protocols. By leveraging direct liquidity lanes and a deep proprietary index of Tennessee and Texas residential demographics, we remove conventional appraisal blockages entirely. What results is a friction-free capital channel capable of closing complex single-family assignments with speed and uncompromised precision.
              </p>
            </div>

            {/* Quick Summary Sidebar/Visual Block */}
            <div className="lg:col-span-12 bg-[#161616] border border-[#222222] p-10 rounded-sm space-y-8 max-w-2xl mx-auto w-full flex flex-col items-center text-center">
              <h3 className="text-white font-display font-medium text-lg uppercase tracking-wider border-b border-brand-navy-light pb-4 text-center w-full">
                The Hershtik Capital Desk
              </h3>
              
              <ul className="space-y-5 text-sm font-mono text-slate-300 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 md:space-y-0 text-left">
                <li className="flex items-center space-x-3.5">
                  <Check className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>24-Hour Firm Written Commitments</span>
                </li>
                <li className="flex items-center space-x-3.5">
                  <Check className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Strict Detached Single-Family Residence Focus</span>
                </li>
                <li className="flex items-center space-x-3.5">
                  <Check className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>100% Cash Purchase (No Bank Appraisals)</span>
                </li>
                <li className="flex items-center space-x-3.5">
                  <Check className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Direct Principal-to-Principal Underwriting</span>
                </li>
              </ul>

              <div className="pt-5 border-t border-brand-navy-light flex items-center justify-center text-[10px] text-slate-400 font-mono w-full">
                <span>INTAKE: KOBI@HERSHTIKCAPITAL.COM</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder & Managing Principal Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1.5 bg-brand-accent/10 rounded-sm blur-md" />
            <div className="relative overflow-hidden rounded-sm border border-brand-accent/25 bg-brand-navy-deep">
              <img
                src={kobiHershtikFullPortrait}
                alt="Kobi Hershtik, Founder & Managing Principal of Hershtik Capital"
                className="w-full h-[520px] object-contain bg-white filter brightness-[95%] contrast-[102%] transition-all duration-500 rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/80 to-transparent p-6 text-center">
                <p className="text-white font-display text-lg font-medium tracking-wide">Kobi Hershtik</p>
                <p className="text-brand-accent text-xs font-mono uppercase tracking-[0.2em] mt-1">Founder & Managing Principal</p>
              </div>
            </div>
          </div>

          {/* Core Message & Direct Pipeline oversight */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-center text-center">
            <div className="space-y-3 flex flex-col items-center text-center">
              <span className="text-brand-accent text-xs font-mono uppercase tracking-[0.25em] font-semibold text-center">FOUNDER'S PERSPECTIVE</span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight text-center">
                Direct Principal Oversight of Your Single-Family Pipeline
              </h2>
            </div>
            
            <p className="text-slate-355 text-base leading-relaxed font-light italic border-l-2 border-brand-accent pl-6 text-center max-w-2xl">
              "When you present a single-family asset to Hershtik Capital, you deal directly with principal decision-makers. We have eliminated bureaucratic investment committees and rigid financing approvals. We evaluate deals inside 24 hours, protect your commissions, and deploy discretionary cash to close fast and clean."
            </p>

            <div className="space-y-4 text-slate-400 text-sm font-light text-center max-w-2xl">
              <p>
                As founder of Hershtik Capital, Kobi Hershtik is personally invested in forming frictionless, multi-transaction relationships with elite wholesalers, land gatherers, and listing agents across Dallas and Nashville. Under his systemic direction, our real estate acquisitions desk acts with high velocity and bulletproof reliability in every submarket corridor.
              </p>
              <p>
                By bridging institutional liquidity with deep demographic expertise, we ensure that every off-market assignment and pocket listing receives institutional underwriting precision. Bring us suburban detached family assets—we enforce closing compliance and immediate capital allocation.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 items-center justify-center">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 bg-brand-accent rounded-sm inline-block animate-ping" />
                <span className="text-xs font-mono text-slate-350 tracking-wider">ACTIVE BUYING MODE</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a 
                href="mailto:kobi@hershtikcapital.com?subject=New%20Property%20Deal%20-%20Hershtik%20Capital" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
              >
                Direct Line: kobi@hershtikcapital.com
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Operational Pillars */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-brand-accent font-mono font-bold">OPERATIONAL PROTOCOLS</h2>
          <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">Systematic Sourcing Mechanics</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {corePillars.map((p, index) => {
            const IconComponent = p.icon;
            return (
              <div 
                key={index} 
                className="bg-brand-navy/55 p-10 rounded-sm border border-[#222222] hover:border-brand-accent/40 hover:bg-brand-navy transition-all space-y-6 text-center flex flex-col items-center-none justify-between"
              >
                <div className="space-y-6 flex flex-col items-center text-center">
                  <div className="p-3.5 bg-[#161616] rounded-sm mx-auto text-brand-accent border border-[#333333] flex items-center justify-center w-fit">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h4 className="text-slate-500 text-xs font-mono uppercase tracking-[0.15em] text-center">{p.subtitle}</h4>
                    <h3 className="text-xl font-display font-medium text-white mt-2 tracking-wide text-center">{p.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-light text-center">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Accredited Partners Section: Backed By Capital (Requested) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-brand-navy border border-[#222222] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          
          {/* Accent decoration bar on left */}
          <div className="absolute left-0 inset-y-0 w-1 bg-brand-accent" />
          
          <div className="lg:col-span-8 p-12 lg:p-16 space-y-8 pl-16 flex flex-col items-center lg:items-center text-center justify-center">
            <div className="inline-flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-sm text-brand-accent text-[10px] font-mono uppercase tracking-widest mx-auto">
              <DollarSign className="w-3.5 h-3.5 text-brand-accent" />
              <span>Accredited Investment Ecosystem</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-display font-medium tracking-tight leading-tight text-center">
              Backed by Capital. Structured for Permanent Liquidity and Swift Performance.
            </h3>

            <p className="text-slate-300 text-base leading-relaxed font-light text-center max-w-2xl">
              Hershtik Capital is powered by a robust ecosystem of accredited investors. This unified institutional framework ensures immediate, uncompromised liquidity on demand. We perform on contracts without financing contingencies or bureaucratic banking delays.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed font-light text-center max-w-2xl">
              Our core strategic accounts maintain persistent cash allocations ready for deployable dispatch in the Dallas and Nashville metroplexes. Wholesalers and listing brokers can rest assured that once our desk issues a commitment, funding is fully secured and guaranteed.
            </p>

            {/* Compliance Note */}
            <div className="flex items-center justify-center space-x-3 text-slate-500 text-xs font-mono pt-6 border-t border-[#222222] max-w-xl w-full">
              <Layers className="w-4 h-4 text-brand-accent/70" />
              <span>SEC Rule 506(c) Regulation D qualified capital partnerships.</span>
            </div>
          </div>

          {/* Sidebar proof of funds statement */}
          <div className="lg:col-span-4 bg-[#0A0A0A] p-12 lg:p-16 border-t lg:border-t-0 lg:border-l border-[#222222]/80 flex flex-col justify-between items-center text-center space-y-10">
            <div className="space-y-4 flex flex-col items-center text-center">
              <h4 className="text-slate-400 text-xs font-mono uppercase tracking-[0.15em] text-center">PERMANENT LIQUIDITY</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-light text-center">
                We work directly with prominent, accredited title companies in Texas and Tennessee to issue proof of funds and close operations cleanly, without risk of regulatory re-pricing.
              </p>
            </div>

            <div className="space-y-6 w-full flex flex-col items-center justify-center">
              <div className="space-y-1 font-mono text-center">
                <span className="text-[10px] text-slate-550 uppercase text-center block">FINANCING CONTINGENCY STATE</span>
                <p className="text-xl font-bold text-brand-accent text-center">0% RISK // FULL CASH</p>
              </div>

              <button
                id="about-contact-cta"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-4 bg-brand-accent text-brand-navy-deep hover:bg-brand-accent/90 text-xs font-sans font-bold uppercase tracking-[0.15em] text-center transition-colors rounded-sm flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
