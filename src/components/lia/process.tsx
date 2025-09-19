import { Card, CardContent } from "../../components/ui/items/card";

// Process steps data configuration
const defaultProcessSteps = [
  {
    step: "01",
    title: "Conhecemos Você",
    description: "Informações básicas sobre seu perfil e histórico de cuidados com a pele"
  },
  {
    step: "02", 
    title: "Identificamos Seu Tipo",
    description: "Análise do seu tipo de pele: seca, oleosa, mista, normal ou sensível"
  },
  {
    step: "03",
    title: "Suas Preocupações",
    description: "Identificamos acne, manchas, rugas, poros dilatados e outras preocupações"
  },
  {
    step: "04",
    title: "Análise Completa",
    description: "Nossa IA cria uma rotina personalizada e acompanha seu progresso"
  }
];

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}

export const ProcessSection = ({
  title = "Seu Caminho Para a Pele Perfeita",
  subtitle = "Um processo simples e intuitivo que se adapta às suas necessidades",
  steps = defaultProcessSteps,
  className = "",
}: ProcessSectionProps = {}) => {
  return (
    <section 
      className={`py-20 px-6 gradient-secondary ${className}`}
      aria-labelledby="process-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="process-title"
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card 
              key={`step-${step.step}`} 
              className="shadow-card transition-smooth hover:scale-105 border-0 bg-white/50 backdrop-blur-sm"
              role="article"
              aria-labelledby={`step-${step.step}-title`}
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="text-4xl font-bold text-primary mb-4" 
                  aria-label={`Passo ${step.step}`}
                >
                  {step.step}
                </div>
                <h3 
                  id={`step-${step.step}-title`}
                  className="text-lg font-semibold mb-3 text-foreground"
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
