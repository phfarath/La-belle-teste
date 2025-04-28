import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Concern {
  id: string;
  label: string;
}

interface Treatment {
  title: string;
  description: string;
  imageUrl: string;
}

const concernOptions: Concern[] = [
  { id: 'acne', label: 'Acne' },
  { id: 'wrinkles', label: 'Rugas e Linhas Finas' },
  { id: 'pigmentation', label: 'Pigmentação' },
  { id: 'dryness', label: 'Ressecamento' },
  { id: 'redness', label: 'Vermelhidão e Sensibilidade' },
  { id: 'sagging', label: 'Pele Flácida' },
];

const treatmentMapping: Record<string, Treatment> = {
  'acne': {
    title: 'Protocolo Avançado de Tratamento de Acne',
    description: 'Nosso protocolo especializado em acne combina peelings químicos, terapia LED e tratamentos tópicos personalizados para eliminar as espinhas e prevenir futuras erupções.',
    imageUrl: 'https://images.pexels.com/photos/7446983/pexels-photo-7446983.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  'wrinkles': {
    title: 'Rejuvenescimento Anti-Idade',
    description: 'Combata os sinais de envelhecimento com nossa abordagem abrangente usando Botox, preenchimentos dérmicos e tratamentos estimulantes de colágeno para uma pele visivelmente mais lisa.',
    imageUrl: 'https://images.pexels.com/photos/8128081/pexels-photo-8128081.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  'pigmentation': {
    title: 'Correção de Pigmentação',
    description: 'Nossos tratamentos avançados com laser e peelings químicos reduzem efetivamente a hiperpigmentação, melasma e danos causados pelo sol para uma pele mais uniforme.',
    imageUrl: 'https://images.pexels.com/photos/7990205/pexels-photo-7990205.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  'dryness': {
    title: 'Terapia de Hidratação',
    description: 'Restaure a hidratação e fortaleça sua barreira cutânea com nossos tratamentos hidratantes, incluindo infusões de ácido hialurônico e máscaras especializadas.',
    imageUrl: 'https://images.pexels.com/photos/7446025/pexels-photo-7446025.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  'redness': {
    title: 'Programa Calmante para Pele Sensível',
    description: 'Reduza a inflamação e fortaleça sua pele com nossos protocolos suaves, projetados especificamente para tipos de pele reativa e sensível.',
    imageUrl: 'https://images.pexels.com/photos/4046567/pexels-photo-4046567.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  'sagging': {
    title: 'Aperto e Lifting da Pele',
    description: 'Restaure a firmeza e elasticidade com nossos tratamentos de lifting não cirúrgicos usando radiofrequência, tecnologia de ultrassom e indução de colágeno.',
    imageUrl: 'https://images.pexels.com/photos/6476088/pexels-photo-6476088.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
};

const TreatmentRecommender: React.FC = () => {
  const [selectedConcern, setSelectedConcern] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedConcern(e.target.value);
    setShowResult(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedConcern) {
      setShowResult(true);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white">
            Recomendador de Tratamentos
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Não sabe qual tratamento é ideal para você? Nosso recomendador virtual pode ajudar você a encontrar a solução perfeita para suas preocupações com a pele.
          </p>
          <div className="w-20 h-1 bg-primary-600 dark:bg-secondary-400 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <label htmlFor="concern" className="block text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Qual é sua principal preocupação com a pele?
              </label>
              <select
                id="concern"
                value={selectedConcern}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent"
                required
              >
                <option value="">Selecione sua preocupação</option>
                {concernOptions.map((concern) => (
                  <option key={concern.id} value={concern.id}>
                    {concern.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white rounded-md transition-colors font-medium"
              disabled={!selectedConcern}
            >
              Obter Recomendação
            </button>
          </motion.form>

          {showResult && selectedConcern && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={treatmentMapping[selectedConcern].imageUrl}
                    alt={treatmentMapping[selectedConcern].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-playfair font-semibold mb-4 text-primary-600 dark:text-secondary-400">
                    Recomendado: {treatmentMapping[selectedConcern].title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {treatmentMapping[selectedConcern].description}
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      to="#"
                      className="inline-block py-2 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white rounded-md transition-colors font-medium"
                    >
                      Saiba Mais
                    </Link>
                    <Link
                      to="/booking"
                      className="inline-block py-2 px-6 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-md transition-colors font-medium"
                    >
                      Agendar Consulta
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TreatmentRecommender;