import React from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

interface TreatmentCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  index: number;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        {/* <Link
          to={`/treatments/${id}`}
          className="inline-block py-2 px-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white rounded-md transition-colors font-medium text-sm"
        >
          Saiba Mais
        </Link> */}
      </div>
    </motion.div>
  );
};

export default TreatmentCard;