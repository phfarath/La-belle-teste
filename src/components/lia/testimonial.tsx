import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Default testimonial data
const defaultTestimonial = {
  rating: 5,
  quote: "Em apenas 30 dias usando as recomendações da IA, minha pele melhorou 85%. Nunca imaginei que uma rotina personalizada pudesse fazer tanta diferença!",
  author: {
    name: "Maria Silva",
    avatar: "M",
    subtitle: "Usuária há 3 meses"
  }
};

interface Testimonial {
  rating: number;
  quote: string;
  author: {
    name: string;
    avatar: string;
    subtitle: string;
  };
}

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonial?: Testimonial;
  className?: string;
}

export const TestimonialSection = ({
  title = "Resultados Reais",
  subtitle = "Milhares de pessoas já transformaram sua pele conosco",
  testimonial = defaultTestimonial,
  className = "",
}: TestimonialSectionProps = {}) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-6 h-6 ${i < rating ? 'fill-primary text-primary' : 'text-gray-300'}`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section 
      className={`py-20 px-6 bg-background ${className}`}
      aria-labelledby="testimonial-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 
            id="testimonial-title"
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <Card 
          className="shadow-card border-0 glass-effect max-w-2xl mx-auto"
          role="article"
          aria-label="Depoimento de cliente"
        >
          <CardContent className="p-8">
            <div 
              className="flex justify-center mb-6"
              role="img"
              aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
            >
              {renderStars(testimonial.rating)}
            </div>
            
            <blockquote className="text-lg md:text-xl italic text-foreground mb-6 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div 
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4"
                aria-label={`Avatar de ${testimonial.author.name}`}
              >
                {testimonial.author.avatar}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">
                  {testimonial.author.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.author.subtitle}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
