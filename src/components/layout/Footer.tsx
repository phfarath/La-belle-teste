import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              La Belle Cutanee – Dermatologia Avançada e Cuidados Estéticos em São Paulo. 
              Combinando tecnologia de ponta com atendimento humanizado para a saúde da sua pele.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.instagram.com/labelle_cutanee/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Início' },
                { to: '/treatments', label: 'Tratamentos' },
                { to: '/team', label: 'Nossa Equipe' },
                { to: '/gallery', label: 'Galeria da Clínica' },
                // { to: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                { label: 'Tratamento com Botox' },
                { label: 'Peelings Químicos' },
                { label: 'Tratamentos a Laser' },
                { label: 'Controle de Acne' },
                { label: 'Cuidados Anti-idade' },
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/treatments" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Contato</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Av. Prefeito Fábio Prado, 211, Jardim Vila Mariana, 4º Andar - Sala 47
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                São Paulo - SP, 04116-000
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                +55 (11) 91282-4050
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <a 
                  href="mailto:labellecutanee@gmail.com" 
                  className="hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                >
                  labellecutanee@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} La Belle Cutanée. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;