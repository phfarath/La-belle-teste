import { FeatureCard } from "../../components/ui/items/feature-card";
import aiAnalysisIcon from "../../../public/images/lia/ai-analysis-icon.jpg";
import routineIcon from "../../../public/images/lia/routine-icon.jpg";
import progressIcon from "../../../public/images/lia/progress-icon.jpg";

// Features data configuration
const defaultFeatures = [
  {
    icon: aiAnalysisIcon,
    title: "Análise Inteligente",
    description: "Nossa IA analisa sua pele em tempo real para recomendações personalizadas baseadas nas suas características únicas."
  },
  {
    icon: routineIcon,
    title: "Rotina Personalizada",
    description: "Receba uma rotina de skincare sob medida para o seu tipo de pele, preocupações e estilo de vida."
  },
  {
    icon: progressIcon,
    title: "Acompanhamento de Progresso",
    description: "Monitore a evolução da sua pele ao longo do tempo com fotos e métricas detalhadas."
  }
];

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
}

export const FeaturesSection = ({
  title = "Como Funciona",
  subtitle = "Tecnologia de ponta para cuidar da sua pele com precisão científica",
  features = defaultFeatures,
  className = "",
}: FeaturesSectionProps = {}) => {
  return (
    <section 
      className={`py-20 px-6 bg-background ${className}`}
      aria-labelledby="features-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="features-title"
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={`feature-${index}`} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
