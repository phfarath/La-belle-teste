import React from 'react';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import Testimonials from '../components/home/Testimonials';
import TreatmentRecommender from '../components/home/TreatmentRecommender';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Highlights />
      
      {/* Tratamentos Populares */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white">Tratamentos Populares</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Descubra nossos tratamentos mais procurados para realçar sua beleza natural e melhorar a saúde da pele.
            </p>
            <div className="w-20 h-1 bg-primary-600 dark:bg-secondary-400 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Botox",
                description: "Reduza linhas finas e rugas com nossos tratamentos de Botox de precisão para uma aparência natural e renovada.",
                image: "/images/tratamentos/Botox.png"
              },
              {
                title: "Preenchimento com Ácido Hialurônico",
                description: "Restaure o volume e a firmeza da pele com nossos preenchimentos dérmicos de ácido hialurônico, proporcionando um aspecto jovem e saudável.",
                image: "/images/tratamentos/preenchimento.png"
              },
              {
                title: "Lasers",
                description: "Tratamentos avançados a laser para pigmentação, cicatrizes, remoção de pelos e rejuvenescimento da pele.",
                image: "/images/tratamentos/Laser.png"
              }
            ].map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-900 dark:text-white">{treatment.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{treatment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/treatments"
              className="inline-block py-3 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white rounded-md transition-colors font-medium"
            >
              Ver Todos os Tratamentos
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <TreatmentRecommender />
      
      {/* Chamada para Ação */}
      <section className="py-16 md:py-24 bg-primary-600 dark:bg-primary-800 text-white transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">Pronto para Experimentar a Diferença?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-100 mb-8">
              Agende sua consulta hoje e dê o primeiro passo para uma pele mais saudável e bonita.
            </p>
            <Link
              to="/contact"
              className="inline-block py-3 px-8 bg-white text-primary-600 hover:bg-gray-100 rounded-md transition-colors font-medium text-lg"
            >
              Agendar Consulta
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;