/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { Home, BookOpen, Layers, Menu, X, PlusCircle } from 'lucide-react';
import hershtikLogoFullFrame from '../assets/images/hershtik_logo_full_frame.png';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home' as PageId, label: 'Buyer Profile', icon: Home },
    { id: 'strategy' as PageId, label: 'Strategy & Markets', icon: BookOpen },
    { id: 'about' as PageId, label: 'Financial Strength', icon: Layers },
  ];

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#222222] text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Corporate Identity */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center space-x-3.5 cursor-pointer group shrink-0"
          >
            <img 
              src={hershtikLogoFullFrame} 
              alt="Hershtik Capital Corporate Circular Seal" 
              className="w-13 h-13 object-cover rounded-full border border-brand-accent/25 shadow-md shadow-brand-accent/5 group-hover:border-brand-accent/50 transition-colors shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="shrink-0">
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-medium tracking-wider text-xl text-white group-hover:text-brand-accent transition-colors">
                  HERSHTIK
                </span>
                <span className="font-sans font-normal tracking-light text-lg text-brand-accent">
                  CAPITAL
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-mono">
                SINGLE-FAMILY ACQUISITIONS
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-stretch h-20 space-x-6 lg:space-x-8 shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`inline-flex items-center space-x-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] transition-all duration-200 border-b-2 hover:border-brand-accent/60 hover:text-brand-accent/95 shrink-0 select-none cursor-pointer h-full ${
                    isActive 
                      ? 'border-brand-accent text-brand-accent' 
                      : 'border-transparent text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0 text-brand-accent/80 group-hover:text-brand-accent" />
                  <span className="whitespace-nowrap translate-y-[0.5px]">{item.label}</span>
                </button>
              );
            })}

            {/* Direct Submit CTA */}
            <div className="flex items-center pl-8 lg:pl-10 shrink-0">
              <button
                id="header-submit-deal-cta"
                onClick={() => handleNav('contact')}
                className={`flex items-center space-x-2 px-5 py-3 rounded-sm font-sans font-bold text-xs uppercase tracking-wider transition-all duration-350 scale-95 hover:scale-100 shrink-0 select-none cursor-pointer ${
                  currentPage === 'contact'
                    ? 'bg-brand-accent text-brand-navy-deep shadow-lg shadow-brand-accent/15'
                    : 'border border-brand-accent/60 text-brand-accent hover:bg-brand-accent hover:text-brand-navy-deep'
                }`}
              >
                <PlusCircle className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Submit a Deal</span>
              </button>
            </div>
          </nav>

          {/* Mobile hamburger menu trigger */}
          <div className="md:hidden flex items-center">
            <button
               id="mobile-menu-toggle"
               onClick={() => setIsOpen(!isOpen)}
               className="p-2 text-slate-400 hover:text-white hover:bg-[#1A1A1A] rounded-sm focus:outline-none transition-colors"
               aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#222222] px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNav(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3.5 text-left rounded-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-[#1C1C1C] text-brand-accent border-l-4 border-brand-accent font-semibold' 
                    : 'text-slate-350 hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <button
            id="mobile-nav-contact"
            onClick={() => handleNav('contact')}
            className={`flex items-center justify-center space-x-2 w-full mt-4 px-4 py-3.5 rounded-sm font-sans font-bold text-xs uppercase tracking-wider text-center transition-colors ${
              currentPage === 'contact'
                ? 'bg-brand-accent text-black'
                : 'bg-brand-accent/10 border border-brand-accent/35 text-brand-accent hover:bg-brand-accent hover:text-black'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Submit a Deal</span>
          </button>
        </div>
      )}
    </header>
  );
}
