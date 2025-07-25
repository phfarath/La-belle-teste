import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Logo: React.FC = () => {
  const { theme } = useTheme();
  
  // Define qual logo usar com base no tema
  const logoSrc = theme === 'light' 
    ? "/images/Ativo 14.png"  // Logo para o tema claro
    : "/images/01 (1).png";   // Logo para o tema escuro

  return (
    <div className="flex items-center">
      <div>
      <img 
        src={logoSrc} 
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