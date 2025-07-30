import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title: string;
  subtitle?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, subtitle }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('todas');

  const filteredImages = filter === 'todas'
    ? images
    : images.filter(image => image.category === filter);

  const categories = ['todas', ...new Set(images.map(image => image.category))];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1 bg-primary-600 dark:bg-secondary-400 mx-auto mt-4"></div>
        </div>

        {/* Filter Controls */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white dark:bg-secondary-500'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category === 'todas'
                  ? 'Todas as fotos'
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                />
                <p className="text-white text-center mt-4">{selectedImage.alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImageGallery;