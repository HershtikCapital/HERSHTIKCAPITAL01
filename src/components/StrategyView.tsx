/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { MARKET_INSIGHTS, HISTORICAL_CHART_DATA } from '../data';
import { Users, Zap, TrendingUp, ShieldAlert, Layers, ChevronRight, GraduationCap, DollarSign, Home, Compass } from 'lucide-react';

interface StrategyViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function StrategyView({ setCurrentPage }: StrategyViewProps) {
  const [selectedYear, setSelectedYear] = useState<string>('2026');

  const selectedData = HISTORICAL_CHART_DATA.find(d => d.year === selectedYear) || HISTORICAL_CHART_DATA[3];

  // Helper to render Three structural pillars icons
  const getThreeDIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'structural demographics':
        return <Users className="w-5 h-5 text-brand-accent" />;
      case 'geographic mobility':
        return <Compass className="w-5 h-5 text-brand-accent" />;
      case 'economic capital resilience':
        return <Zap className="w-5 h-5 text-brand-accent" />;
      default:
        return <Layers className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <div className="space-y-40 pb-36">
      
      {/* Intro Hero Thesis */}
      <section className="bg-brand-navy-deep border-b border-[#222222] pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
            <h2 className="text-xs uppercase tracking-[0.25em] text-brand-accent font-mono font-medium text-center">THE SUNBELT ADVANTAGE</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.15] text-center">
              {MARKET_INSIGHTS.intro}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light text-center">
              {MARKET_INSIGHTS.thesis}
            </p>
          </div>

          {/* Core Pillars Tech-Grid Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 bg-[#161616] p-10 border border-[#222222] rounded-sm">
            {MARKET_INSIGHTS.threeDs.map((d, index) => (
              <div key={index} className="space-y-4 flex flex-col items-center text-center">
                <div className="flex flex-col items-center space-y-3.5">
                  <div className="p-2.5 bg-brand-navy-light rounded-sm border border-[#333333]/40 w-fit mx-auto">
                    {getThreeDIcon(d.title)}
                  </div>
                  <h3 className="text-white font-display text-lg font-medium text-center">{d.title}</h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light text-center">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demographics Growth Rate Chart (SaaS-Quality Vector Canvas) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-brand-navy rounded-sm border border-[#222222] p-10 md:p-14 space-y-12">
          <div className="flex flex-col items-center text-center justify-center gap-6">
            <div className="space-y-2 flex flex-col items-center">
              <span className="text-brand-accent text-xs font-mono uppercase tracking-[0.2em] font-medium flex items-center space-x-1.5 justify-center">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Migration Dynamics Chart</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight text-center">
                Net Annualized Migration Expansion Rates
              </h3>
              <p className="text-xs text-slate-400 font-light max-w-xl text-center">
                Demographic performance comparison showing annualized local growth index records of Dallas and Nashville against national trends.
              </p>
            </div>

            {/* Clean Timeline Slider Control */}
            <div className="flex bg-brand-navy-deep p-1 rounded border border-[#222222] justify-center">
              {HISTORICAL_CHART_DATA.map((d) => (
                <button
                  key={d.year}
                  onClick={() => setSelectedYear(d.year)}
                  className={`px-5 py-2.5 text-xs font-mono font-semibold rounded-sm transition-all uppercase tracking-wider ${
                    selectedYear === d.year
                      ? 'bg-brand-accent text-brand-navy-deep'
                      : 'text-slate-400 hover:text-white hover:bg-brand-navy-light'
                  }`}
                >
                  {d.year}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Vector Chart Area & Metrics Sidepanel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-brand-navy-deep p-8 rounded-sm border border-[#222222]">
            {/* SVG Visual Bars Area */}
            <div className="lg:col-span-8">
              <div className="relative w-full h-[300px] bg-[#050505] rounded-sm p-6 border border-[#222222]/40 flex flex-col justify-between">
                {/* Y-Axis Label Overlays */}
                <div className="absolute right-4 top-4 text-[9px] text-slate-500 font-mono">CYCLE PEAK STATE</div>
                <div className="absolute left-3 top-3 text-[10px] text-slate-650 font-mono text-slate-500">6.0%</div>
                <div className="absolute left-3 top-[130px] text-[10px] text-slate-650 font-mono text-slate-500">4.0%</div>
                <div className="absolute left-3 top-[230px] text-[10px] text-slate-650 font-mono text-slate-500">2.0%</div>

                {/* SVG Drawing */}
                <svg className="w-full h-full pt-8 pb-4" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="600" y2="10" stroke="#222222" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="600" y2="100" stroke="#222222" strokeDasharray="4 4" />
                  <line x1="0" y1="180" x2="600" y2="180" stroke="#333333" strokeWidth="1.5" />

                  {/* Dallas Bar (Deep Gold Gradient) */}
                  <rect
                    x="80"
                    y={180 - (selectedData.dallasGrowth * 26)}
                    width="70"
                    height={selectedData.dallasGrowth * 26}
                    fill="url(#dallasGrad)"
                    rx="1"
                    className="transition-all duration-500"
                  />
                  
                  {/* Nashville Bar (Sophisticated Bronze/Amber Gradient) */}
                  <rect
                    x="250"
                    y={180 - (selectedData.nashvilleGrowth * 26)}
                    width="70"
                    height={selectedData.nashvilleGrowth * 26}
                    fill="url(#nashvilleGrad)"
                    rx="1"
                    className="transition-all duration-500"
                  />

                  {/* US Average Bar (Muted Stone Gray) */}
                  <rect
                    x="420"
                    y={180 - (selectedData.nationalAverage * 26)}
                    width="70"
                    height={selectedData.nationalAverage * 26}
                    fill="#5A554E"
                    rx="1"
                    className="transition-all duration-500"
                  />

                  {/* Text Markers */}
                  <text x="115" y="196" fill="#D5CFC9" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">DALLAS DFW</text>
                  <text x="285" y="196" fill="#D5CFC9" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">NASHVILLE</text>
                  <text x="455" y="196" fill="#8C8275" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="500">US AVERAGE</text>

                  {/* Definition Elements */}
                  <defs>
                    <linearGradient id="dallasGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#85681D" />
                    </linearGradient>
                    <linearGradient id="nashvilleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C5A880" />
                      <stop offset="100%" stopColor="#7E6340" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* KPI Performance breakdown column */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-white font-display font-medium text-sm border-b border-[#222222] pb-3 text-slate-300">
                Annual Horizon Performance ({selectedYear})
              </h4>
              <div className="space-y-4 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Dallas-Fort Worth Migration:</span>
                  <span className="text-base font-bold text-brand-accent">+{selectedData.dallasGrowth}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Greater Nashville Migration:</span>
                  <span className="text-base font-bold text-brand-accent">+{selectedData.nashvilleGrowth}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">US US standard benchmark:</span>
                  <span className="text-sm text-slate-400">+{selectedData.nationalAverage}%</span>
                </div>
              </div>
              <div className="bg-[#0E0E0E] p-5 border border-[#222222] rounded-sm text-xs text-slate-400 leading-relaxed font-light">
                Both Dallas and Nashville expand at nearly triple the speed of traditional domestic markets, ensuring steady single-family residential yield stability and rental rate preservation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Target Real Estate Market Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-brand-accent font-mono font-medium">GEOGRAPHIC MARKETS</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">Active Core Performance Markets</h3>
        </div>

        <div className="space-y-32">
          {MARKET_INSIGHTS.markets.map((m, index) => (
            <div 
              key={m.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Frame & Local Indicators */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-brand-accent/5 rounded-sm blur-md" />
                  <div className="relative rounded-sm overflow-hidden border border-[#222222] bg-brand-navy-deep">
                    <img 
                      src={m.image} 
                      alt={m.name} 
                      className="w-full h-[360px] object-cover filter brightness-[85%] group-hover:scale-102 transition-transform duration-700 font-light"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-black/20 to-transparent opacity-90" />
                    
                    {/* Primary Stats Panel overlay */}
                    <div className="absolute bottom-4 inset-x-4 grid grid-cols-3 gap-2">
                      {m.stats.map((stat, idx) => (
                        <div key={idx} className="bg-brand-navy-deep/95 border border-[#222222]/60 p-3 rounded-sm text-center">
                          <p className="text-[9px] text-slate-450 font-mono uppercase tracking-widest">{stat.label}</p>
                          <p className="text-[11px] text-brand-accent font-bold font-mono mt-1">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submarket high velocity exurb summary cards */}
                <div className="bg-[#161616] p-6 border border-[#222222] rounded-sm space-y-4 flex flex-col items-center text-center">
                  <div className="flex items-center space-x-2.5 text-brand-accent justify-center">
                    <ShieldAlert className="w-4 h-4 text-brand-accent shrink-0" />
                    <h4 className="text-xs font-mono uppercase tracking-widest font-semibold text-center">{m.mitigationTitle}</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed text-center">
                    {m.mitigationDescription}
                  </p>
                </div>
              </div>

              {/* Deep Analytical Data Dashboard Panel */}
              <div className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-center text-center">
                <div className="flex flex-col items-center w-full">
                  <span className="text-brand-accent text-xs font-mono uppercase tracking-[0.2em] font-medium text-center block w-full">{m.subtitle}</span>
                  <h3 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mt-1 text-center w-full">{m.name}</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mt-4 text-center lg:text-left">
                    {m.description}
                  </p>
                </div>

                {/* Granular Analytical real estate data matrices (Requested real-estate details) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#222222]/65 w-full">
                  
                  {/* KPI Column 1: Demographic Influx */}
                  <div className="space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
                    <h4 className="text-white text-xs font-sans font-bold uppercase tracking-[0.1em] flex items-center justify-center space-x-2 w-full md:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span>DEMOGRAPHIC INFLUX</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-400 text-center md:text-left">
                      <li><strong className="text-slate-200">Metro Residents:</strong> {m.demographics.population}</li>
                      <li><strong className="text-slate-200">Migration Pattern:</strong> {m.demographics.migration}</li>
                      <li><strong className="text-slate-200">Relative Rank:</strong> {m.demographics.comparison}</li>
                    </ul>
                  </div>

                  {/* KPI Column 2: Market Indicators */}
                  <div className="space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
                    <h4 className="text-white text-xs font-sans font-bold uppercase tracking-[0.1em] flex items-center justify-center space-x-2 w-full md:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span>REAL ESTATE INDICATORS</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-400 text-center md:text-left">
                      <li><strong className="text-slate-200">Median Value:</strong> {m.indicators.medianValue}</li>
                      <li><strong className="text-slate-200">Renter Pool:</strong> {m.indicators.renterPool}</li>
                      <li><strong className="text-slate-200">ZORI Rent 10-Yr:</strong> {m.indicators.zoriSurge}</li>
                    </ul>
                  </div>

                  {/* KPI Column 3: Economic Resilience */}
                  <div className="space-y-3 md:col-span-2 pt-2 border-t border-[#222222]/40 flex flex-col items-center text-center md:items-start md:text-left">
                    <h4 className="text-white text-xs font-sans font-bold uppercase tracking-[0.1em] flex items-center justify-center space-x-2 w-full md:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span>SOCIO-ECONOMIC RESILIENCE</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400 w-full text-center sm:text-left">
                      <div className="flex flex-col items-center sm:items-start">
                        {m.id === 'dfw' ? (
                          <>
                            <div><strong className="text-slate-200">Median Income:</strong> {m.resilience.householdIncome}</div>
                            <div className="mt-1"><strong className="text-slate-200">Poverty Index:</strong> {m.resilience.povertyRate}</div>
                          </>
                        ) : (
                          <>
                            <div><strong className="text-slate-200">Income Strength:</strong> {m.resilience.householdIncome}</div>
                            <div className="mt-1"><strong className="text-slate-200">Education Index:</strong> {m.resilience.education}</div>
                          </>
                        )}
                      </div>
                      <div className="bg-[#0E0E0E] p-3 border border-[#222222]/30 rounded-sm text-[11px] text-slate-400 font-light text-center sm:text-left">
                        {m.id === 'dfw'
                          ? 'Dallas poverty levels sits 2.5% below the national average while household incomes are over 10% higher.'
                          : 'Over 43.3% of Nashvillians hold higher education degrees (almost 20% higher than US average), securing high rental density.'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Robust Local Expert Takeaway Callout (Requested Takeaway block) */}
      <section className="bg-brand-navy border-y border-[#222222] py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-accent font-mono font-bold">LOCAL ACQUISITIONS DESK TAKEAWAY</span>
          <h4 className="text-2xl sm:text-3xl text-white font-display font-medium tracking-tight max-w-4xl mx-auto leading-relaxed">
            "Velocity is our competitive edge. Mobility rates in DFW and Nashville sit 20% above the national average, creating constant transactional opportunities."
          </h4>
          <p className="text-slate-300 text-sm max-w-3xl mx-auto leading-relaxed font-light">
            We know that the real yields are moving into the hyper-growth suburbs like Celina and Princeton. Bring us single-family deals in these corridors—we protect your commissions and wholesale fees, underwrite in 24 hours, and close in cash.
          </p>
          <div className="pt-6">
            <button
              id="strategy-submit-cta"
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-brand-accent text-brand-navy-deep font-sans font-semibold rounded-sm text-xs uppercase tracking-[0.15em] hover:bg-brand-accent/90 transition-all shadow-md hover:shadow-brand-accent/10"
            >
              Partner with Hershtik Capital
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
