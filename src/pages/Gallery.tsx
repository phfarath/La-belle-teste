import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageGallery from '../components/gallery/ImageGallery';

const Gallery: React.FC = () => {
  const clinicImages = [
    {
      id: 1,
      src: "public/images/ambiente/Ambiente (22).jpg",
      alt: "La Belle Cutanée recepção Area",
      category: "recepção"
    },
    {
      id: 2,
      src: "public/images/ambiente/Ambiente (30).jpg",
      alt: "Modern treatment Room",
      category: "salas"
    },
    {
      id: 3,
      src: "public/images/ambiente/Ambiente (31).jpg",
      alt: "consultas Office",
      category: "salas"
    },
    {
      id: 4,
      src: "public/images/ambiente/Ambiente (45).jpg",
      alt: "Premium Skincare Products Display",
      category: "salas"
    },
    {
      id: 5,
      src: "public/images/ambiente/foto-consultorio.jpg",
      alt: "Waiting Lounge",
      category: "recepção"
    },
    {
      id: 6,
      src: "public/images/ambiente/Lasers.jpg",
      alt: "Laser salas Room",
      category: "consultas"
    },
    {
      id: 7,
      src: "public/images/ambiente/Mesoterapia-Capilar.jpg",
      alt: "Clinic Building Exterior",
      category: "consultas"
    },
    {
      id: 8,
      src: "public/images/ambiente/Ambiente (18).jpg",
      alt: "Relaxation Area",
      category: "recepção"
    },
    {
      id: 9,
      src: "public/images/ambiente/Ambiente (52).jpg",
      alt: "Facial salas Room",
      category: "salas"
    },
    {
      id: 10,
      src: "public/images/ambiente/Esvasiadores.jpg",
      alt: "Product Testing Area",
      category: "consultas"
    },
    {
      id: 11,
      src: "public/images/ambiente/pequenas-cirurgias.jpg",
      alt: "Modern Vanity Area",
      category: "consultas"
    },
    {
      id: 12,
      src: "public/images/ambiente/Ambiente (8).jpg",
      alt: "Advanced Equipment",
      category: "recepção"
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