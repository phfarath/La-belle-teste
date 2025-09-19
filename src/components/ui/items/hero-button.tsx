import { cn } from "../../../lib/utils";
import { Button } from "./button";
import { ButtonProps } from "./button";

interface HeroButtonProps extends ButtonProps {
  glow?: boolean;
}

export const HeroButton = ({ className, glow = false, ...props }: HeroButtonProps) => {
  return (
    <Button
      className={cn(
        "gradient-primary text-primary-foreground px-8 py-6 text-lg font-semibold transition-smooth hover:scale-105",
        glow && "shadow-glow animate-glow",
        className
      )}
      {...props}
    />
  );
};