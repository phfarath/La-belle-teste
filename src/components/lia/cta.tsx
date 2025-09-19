import { HeroButton } from "../../components/ui/items/hero-button";
import { useState } from "react";
import { WaitlistModal } from "../../components/ui/items/waitlist-modal";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  benefits?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const CTASection = ({
  title = "Pronta para Transformar Sua Pele?",
  description = "Entre na lista de espera e seja a primeira a experimentar nossa análise de pele com IA. Sua jornada para uma pele radiante começa aqui!",
  buttonText = "Entre na Lista de Espera",
  benefits = "✨ Sem compromisso • Tecnologia avançada",
  onButtonClick,
  className = "",
}: CTASectionProps = {}) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      setIsWaitlistOpen(true);
    }
  };

  return (
    <>
      <section 
        className={`py-20 px-6 gradient-hero text-gray-900 dark:text-white ${className}`}
        aria-labelledby="cta-title"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="cta-title"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <HeroButton 
              glow 
              className="min-w-[250px] bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
              onClick={handleButtonClick}
              aria-label={`${buttonText} - Começar agora`}
            >
              {buttonText}
            </HeroButton>
          </div>
          
          <p 
            className="text-sm mt-6 text-gray-600 dark:text-gray-300"
            aria-label="Benefícios do serviço"
          >
            {benefits}
          </p>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
};