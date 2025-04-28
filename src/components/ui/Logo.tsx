import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Logo: React.FC = () => {
  useTheme();
  
  return (
    <div className="flex items-center">
      <div>
      <img 
        src="/images/01 (1).png" 
        alt="La Belle Cutanee Logo" 
        className="h-12 mr-2"
      />
        <p className="text-[10px] tracking-wider uppercase text-gray-600 dark:text-gray-300 mt-[-2px]">
          Dermatologia Avançada
        </p>
      </div>
    </div>
  );
};

export default Logo;