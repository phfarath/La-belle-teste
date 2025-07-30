import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Imagem de Fundo com Sobreposição */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ambiente/ambiente-18.jpg"
          alt="Clínica La Belle Cutanee"
          className="h-full w-full object-cover object-center"
        />
        {/* Gradiente com menos tom rosa, mais neutro e transparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/60 to-gray-100/50 dark:from-gray-900/70 dark:to-gray-800/60"></div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-gray-900 dark:text-white leading-tight">
            Sua pele merece cuidados profissionais
          </h1>
          
          <p className="mt-6 text-xl text-gray-800 dark:text-gray-100 max-w-2xl">
            Na La Belle Cutanee, combinamos dermatologia de ponta com tratamentos estéticos personalizados para ajudar você a alcançar uma pele saudável e radiante.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="btn-primary text-center"
            >
              Agendar Consulta
            </Link>
            <Link
              to="/treatments"
              className="btn-secondary text-center"
            >
              Explorar Tratamentos
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Indicador de Rolagem */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-900 dark:text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Role para Baixo</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;