import React from "react";
import { Heart, Instagram } from "lucide-react";
import Logo from "../../../public/images/ativo-14.png";

const quickLinks = [
  { href: "/", label: "Início" },
  { href: "/treatments", label: "Tratamentos" },
  { href: "/team", label: "Nossa Equipe" },
  { href: "/gallery", label: "Galeria da Clínica" },
];

const services = [
  { label: "Tratamento com Botox" },
  { label: "Peelings Químicos" },
  { label: "Tratamentos a Laser" },
  { label: "Controle de Acne" },
  { label: "Cuidados Anti-idade" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8 transition-colors duration-300" 
      role="contentinfo" 
      aria-label="Rodapé do site"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img src={Logo} alt="La Belle Cutanee" className="h-12 mb-4" />
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              La Belle Cutanee – Dermatologia Avançada e Cuidados Estéticos em São Paulo.
              Combinando tecnologia de ponta com atendimento humanizado para a saúde da sua pele.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.instagram.com/labelle_cutanee/"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="/treatments"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
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
                  href="mailto:roberta_pontes@labellecutanee.com.br"
                  className="hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                >
                  roberta_pontes@labellecutanee.com.br
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-1">
            Feito com
            <Heart className="w-4 h-4 fill-primary text-primary" aria-label="coração" />
            por La Belle Cutanee
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {currentYear} La Belle Cutanée. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
