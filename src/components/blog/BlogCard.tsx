import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  summary: string;
  image: string;
  date: string;
  author: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, image, date, author, index }) => {
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
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Calendar size={16} className="mr-1" />
          <span className="mr-3">{date}</span>
          <span>Por {author}</span>
        </div>
        <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{summary}</p>
        <a
          href="#"
          className="inline-block text-primary-600 dark:text-secondary-400 hover:text-primary-700 dark:hover:text-secondary-500 transition-colors font-medium"
        >
          Leia Mais
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;