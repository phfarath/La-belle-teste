import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactMap from '../components/contact/ContactMap';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Entre em Contato" 
          subtitle="Estamos aqui para responder às suas perguntas e fornecer as informações de que você precisa." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-playfair font-semibold mb-6 text-gray-900 dark:text-white">
                Entre em Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-secondary-400">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Telefone</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      +55 (11) 5555-5555
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-secondary-400">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      <a 
                        href="mailto:contact@labellecutanee.com" 
                        className="hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                      >
                        contact@labellecutanee.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-secondary-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Endereço</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-000<br />
                      Brazil
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-secondary-400">
                      <Clock className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Horário</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Segunda - Sexta: 9:00 AM - 7:00 PM<br />
                      Sábado: 9:00 AM - 2:00 PM<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-primary-700 dark:text-white">
                Siga-nos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fique atualizado com nossos últimos tratamentos, promoções e dicas de cuidados com a pele seguindo-nos nas redes sociais.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-primary-600 dark:text-secondary-400 hover:bg-primary-100 dark:hover:bg-gray-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-primary-600 dark:text-secondary-400 hover:bg-primary-100 dark:hover:bg-gray-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-primary-600 dark:text-secondary-400 hover:bg-primary-100 dark:hover:bg-gray-900 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <ContactMap />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white text-center">
            Envie-nos uma Mensagem
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome Completo*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Endereço de Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Assunto*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensagem*
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-block py-3 px-8 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white rounded-md transition-colors font-medium"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;