import React, { ReactNode, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Imagem de fundo marmorizada para todo o site */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/marble-background.jpg" 
          alt="Fundo marmorizado" 
          className="w-full h-full object-cover"
        />
        {/* Overlay para melhorar a legibilidade - muito mais claro no tema light */}
        <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/75"></div>
      </div>
      
      <div className="min-h-screen flex flex-col relative z-10">
        <Header scrolled={scrolled} />
        <AnimatePresence mode="wait">
          <motion.main 
            className="flex-grow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;