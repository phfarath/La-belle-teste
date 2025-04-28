import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HighlightItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-secondary-400 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: <Heart size={32} />,
      title: "Serviço Humanizado",
      description: "Acreditamos em tratar cada paciente como um indivíduo único, oferecendo cuidados personalizados e atenção às suas necessidades específicas."
    },
    {
      icon: <Users size={32} />,
      title: "Médicos Qualificados",
      description: "Nossa equipe é composta por dermatologistas certificados e especialistas com ampla formação e experiência em medicina estética."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Tecnologia de Ponta",
      description: "Investimos nas mais recentes tecnologias e técnicas dermatológicas para garantir resultados ótimos em todos os tratamentos."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white">Por Que Escolher a Gente</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Na La Belle Cutanée, combinamos expertise, tecnologia e cuidados personalizados para oferecer serviços dermatológicos excepcionais.
          </p>
          <div className="w-20 h-1 bg-primary-600 dark:bg-secondary-400 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <HighlightItem
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;