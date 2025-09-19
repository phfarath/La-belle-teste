import { useState } from "react";
import { HeroSection } from "../components/lia/hero";
import { FeaturesSection } from "../components/lia/features";
import { ProcessSection } from "../components/lia/process";
import { CTASection } from "../components/lia/cta";
import { ScrollAnimation } from "../components/ui/items/scroll-animation";
import { WaitlistModal } from "../components/ui/items/waitlist-modal";

const Lia = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  // Exemplo de URL de vídeo - substitua pela sua URL de vídeo real
  // const heroVideoUrl = "/path/to/your/hero-video.mp4";

  const handlePrimaryClick = () => {
    setIsWaitlistModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <HeroSection
        onPrimaryClick={handlePrimaryClick}
        // videoUrl={heroVideoUrl} // Descomente e adicione a URL do seu vídeo
      />

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
      
      <ScrollAnimation direction="up" delay={0.1}>
        <FeaturesSection />
      </ScrollAnimation>
      
      <ScrollAnimation direction="up" delay={0.2}>
        <ProcessSection />
      </ScrollAnimation>
      
      {/* <ScrollAnimation direction="fade" delay={0.1}>
        <TestimonialSection />
      </ScrollAnimation> */}
      
      <ScrollAnimation direction="scale" delay={0.1}>
        <CTASection />
      </ScrollAnimation>
    </main>
  );
};

export default Lia;
