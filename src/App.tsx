/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import StrategyView from './components/StrategyView';
import AboutView from './components/AboutView';
import SubmitView from './components/SubmitView';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'strategy':
        return <StrategyView setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutView setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <SubmitView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col selection:bg-brand-accent/30 selection:text-brand-accent">
      
      {/* Main Corporate Sticky Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Multi-Screen Content Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Institutional Legal Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
