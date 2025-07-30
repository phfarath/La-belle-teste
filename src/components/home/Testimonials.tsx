import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vanessa Vilaça",
    role: "Paciente desde 2015",
    quote: "Com a Dra. Roberta, a beleza é tratada com cuidado e confiança! Cada detalhe, é pensado, tanto na questão de cuidado com a pele, quanto na questao estética, sem abusos e/ou exageros, sempre o bom senso do natural e bonita e principalmente sem riscos. Dermatologia de excelência, onde cada detalhe e tratamento é pensado para realçar o melhor de você. Amo cada visita em sua clínica.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXjYl9zMMMiZfmTFAY1HYGSRdAAIJ1p1LhWSBzzOltWAMFW3y9w=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: 2,
    name: "Adriana Akemi Kuniy",
    role: "Paciente desde 2023",
    quote: "Clínica bem localizada e atendimento incrível! A dra Roberta Farah é uma excelente profissional. Dermatologista super competente. Ela recomenda o ideal para o paciente, não fica empurrando procedimentos. Super coerente com o biotipo da pessoa. Super recomendo !!!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUm6MZd0ihQpCRerhZnd2BbPyvdbWggEjH1ctaeVVXGoD4mdNUhFQ=w72-h72-p-rp-mo-ba3-br100"
  },
  {
    id: 3,
    name: "Marina Kuniy",
    role: "Paciente desde 2023",
    quote: "Clínica maravilhosa! Atendimento é perfeito, a doutora Roberta Pontes também é incrível! Uma dermatologista super competente e simpática. Recomendo demais!",
    image: "https://via.placeholder.com/72"
  },
  {
    id: 4,
    name: "Crys Matos",
    role: "Paciente desde 2020",
    quote: "Ótimo atendimento, Dra Roberta é muito atenciosa e se preocupa muito com o bem estar do paciente. Minha dermato da vida. A clínica é linda!",
    image: "https://via.placeholder.com/72"
  },
  {
    id: 5,
    name: "Elizandra Pessoa",
    role: "Paciente desde 2020",
    quote: "Dra. Roberta ja cuida de mim ha mais de 5 amos, é uma dermato maravilhosa! Recomendo 😉",
    image: "https://via.placeholder.com/72"
  },
  {
    id: 6,
    name: "Monica Hui",
    role: "Paciente desde 2021",
    quote: "Profissional maravilhosa… a Dra Roberta foi cuidadosa, detalhista e fez um procedimento que eu amei!! Super recomendo!!",
    image: "https://via.placeholder.com/72"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-primary-600 dark:bg-primary-800 text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">O Que Nossos Pacientes Dizem</h2>
          <div className="w-20 h-1 bg-secondary-400 dark:bg-secondary-300 mx-auto mt-4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 text-gray-900 dark:text-white"
            >
              <div className="absolute top-0 transform -translate-y-1/2 left-8 text-primary-500 dark:text-secondary-400">
                <Quote size={48} />
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-secondary-200 dark:border-primary-700"
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-lg md:text-xl italic mb-6 text-gray-700 dark:text-gray-200">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-playfair font-semibold text-primary-600 dark:text-secondary-400">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-primary-600 dark:text-secondary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-primary-600 dark:text-secondary-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;