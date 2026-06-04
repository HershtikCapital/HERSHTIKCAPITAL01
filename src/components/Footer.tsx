/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { Mail, Phone, Linkedin, ArrowRight, Shield } from 'lucide-react';
import hershtikLogoFullFrame from '../assets/images/hershtik_logo_full_frame.png';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] text-slate-350 border-t border-[#222222] pt-20 pb-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Editorial Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3.5">
              <img 
                src={hershtikLogoFullFrame} 
                alt="Hershtik Capital corporate circular seal" 
                className="w-11 h-11 object-cover rounded-full border border-brand-accent/25"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-medium tracking-wider text-xl text-white">
                HERSHTIK <span className="text-brand-accent font-normal font-sans text-lg">CAPITAL</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-light">
              Hershtik Capital is an elite private real estate investment firm acquiring premier single-family residential assets in Texas & Tennessee. We prioritize hyper-velocity microdata underwriting, structural cash transactions, and absolute fee alignment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/kobi-hershtik-689862413/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-[#222222] bg-[#121212] flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-all text-slate-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:kobi@hershtikcapital.com?subject=New%20Property%20Deal%20-%20Hershtik%20Capital" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-[#222222] bg-[#121212] flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-all text-slate-400"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-white uppercase tracking-[0.15em] text-xs mb-4 border-l border-brand-accent pl-3">
              Corporate Index
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-slate-400 hover:text-brand-accent font-sans transition-colors text-left flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600" />
                  Buyer's Profile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('strategy')} 
                  className="text-slate-400 hover:text-brand-accent font-sans transition-colors text-left flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600" />
                  Markets & Thesis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-slate-400 hover:text-brand-accent font-sans transition-colors text-left flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600" />
                  Financial Capacity
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="text-slate-400 hover:text-brand-accent font-sans transition-colors text-left flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600" />
                  Submit Property
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-white uppercase tracking-[0.15em] text-xs border-l border-brand-accent pl-3">
              Acquisition Desks
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-500 text-[9px] font-mono tracking-wider">PRIMARY INGEST</p>
                  <a 
                    href="mailto:kobi@hershtikcapital.com?subject=New%20Property%20Deal%20-%20Hershtik%20Capital" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-accent text-sm font-sans font-medium transition-colors text-slate-200"
                  >
                    kobi@hershtikcapital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-500 text-[9px] font-mono tracking-wider">ACQUISITIONS DESK</p>
                  <span className="text-sm font-sans text-slate-300">
                    +1 (615) 300 0565
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-500 text-[9px] font-mono tracking-wider">INTERMEDIARY COMMISSIONS</p>
                  <span className="text-xs font-sans text-slate-400 font-light">
                    Always Protected & Paid Swifty
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box - Required Rule */}
        <div className="border-t border-[#222222] pt-8 text-xs text-slate-500 space-y-4 font-light">
          <p className="leading-relaxed">
            <strong className="text-slate-400">LEGAL & REGULATORY DISCLAIMER:</strong> Hershtik Capital LLC operates strictly as a proprietary principal real estate investment firm and capital conduit system. Hershtik Capital is a cash buyer and does not act as a licensed retail real estate brokerage representation or certified financial adviser. Submarket indices (including microdata tracking net domestic migrations, exurbs cumulative expansions, and Zillow Observed Rent Index (ZORI) surges from 2023 through 2026) represent high-fidelity mathematical evaluations for structural informational purposes and pipeline transparency. Past analytical demographic performance holds zero binding warranties for future yields or transactional returns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-[#222222]/45 text-[10px] font-mono text-slate-600 tracking-wider">
            <p>© {currentYear} Hershtik Capital LLC. All Rights Reserved. Single-Family Office Structure.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
