import { cn } from "../../../lib/utils";
import { Card, CardContent } from "./card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <Card className={cn("shadow-card transition-smooth hover:scale-105 border-0 glass-effect", className)}>
      <CardContent className="p-8 text-center">
        <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};