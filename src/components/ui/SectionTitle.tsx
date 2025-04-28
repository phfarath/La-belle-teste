import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className={`font-playfair text-3xl md:text-4xl font-semibold mb-4 ${
        light ? 'text-white' : 'text-gray-900 dark:text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg ${
          light ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 mt-4 ${centered ? 'mx-auto' : ''} bg-primary-600 dark:bg-secondary-400`}></div>
    </motion.div>
  );
};

export default SectionTitle;