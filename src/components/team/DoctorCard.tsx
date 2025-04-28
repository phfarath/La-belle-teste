import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DoctorCardProps {
  name: string;
  specialty: string;
  credentials: string;
  bio: string;
  image: string;
  index: number;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ 
  name, 
  specialty, 
  credentials, 
  bio, 
  image, 
  index 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="h-auto max-h-80 overflow-hidden">
        <div className="relative pt-[100%]"> {/* Proporção quadrada para o container */}
          <img 
            src={image} 
            alt={`Dr. ${name}`} 
            className="absolute top-0 left-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-1 text-gray-900 dark:text-white">Dr. {name}</h3>
        <p className="text-primary-600 dark:text-secondary-400 font-medium mb-1">{specialty}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{credentials}</p>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {bio}
          </p>
        </motion.div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-block text-primary-600 dark:text-secondary-400 hover:text-primary-700 dark:hover:text-secondary-500 transition-colors font-medium text-sm"
        >
          {isExpanded ? 'Mostrar Menos' : 'Ler Biografia'}
        </button>
      </div>
    </motion.div>
  );
};

export default DoctorCard;