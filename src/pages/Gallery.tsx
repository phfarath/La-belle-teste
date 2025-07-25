import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageGallery from '../components/gallery/ImageGallery';

const Gallery: React.FC = () => {
  const clinicImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "La Belle Cutanée Reception Area",
      category: "reception"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Modern Treatment Room",
      category: "treatment"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3994840/pexels-photo-3994840.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Consultation Office",
      category: "consultation"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/8472874/pexels-photo-8472874.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Premium Skincare Products Display",
      category: "products"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Waiting Lounge",
      category: "reception"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Laser Treatment Room",
      category: "treatment"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/4021766/pexels-photo-4021766.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Clinic Building Exterior",
      category: "exterior"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/12794525/pexels-photo-12794525.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Relaxation Area",
      category: "reception"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Facial Treatment Room",
      category: "treatment"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Product Testing Area",
      category: "products"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/8460118/pexels-photo-8460118.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Modern Vanity Area",
      category: "reception"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/4210311/pexels-photo-4210311.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Advanced Equipment",
      category: "equipment"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Galeria da Clínica" 
          subtitle="Faça um tour virtual por nossas instalações de última geração, projetadas com seu conforto e cuidado em mente." 
        />
        
        <ImageGallery 
          images={clinicImages} 
          title="Nosso Ambiente"
        />
        
        <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white">Visite-nos Pessoalmente</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Experimente nossas instalações premium e conheça nossa equipe de especialistas pessoalmente. 
            Agende um tour pela nossa clínica ou marque uma consulta para saber mais sobre nossos tratamentos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="py-2 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white rounded-md transition-colors font-medium"
            >
              Entre em Contato
            </a>
            {/* <a
              href="/booking"
              className="py-2 px-6 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-md transition-colors font-medium"
            >
              Marcar Consulta
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;