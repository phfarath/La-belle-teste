import { HeroButton } from "../../components/ui/items/hero-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import heroImage from "../../../public/images/lia/20250918_2319_Silhueta em Roxo_remix_01k5fw7avsej1raafjhewja6cz.png";

// Floating elements configuration with Framer Motion animations
const floatingElements = [
  { size: "w-20 h-20", position: "top-20 left-10", delay: 0 },
  { size: "w-16 h-16", position: "bottom-32 right-16", delay: 0.5 },
  { size: "w-12 h-12", position: "top-1/3 right-1/4", delay: 1 },
];

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  videoUrl?: string;
}

export const HeroSection = ({
  title = "Seu Rosto,",
  subtitle = "Nossa Tecnologia",
  description = "Descubra uma rotina de skincare personalizada com análise inteligente da sua pele. Powered by La Belle Cutanee.",
  primaryButtonText = "Lista de Espera",
  onPrimaryClick,
  videoUrl,
}: HeroSectionProps = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Seção principal - Análise de pele com IA"
      style={{ y, opacity }}
    >
      {/* Video Background */}
      {videoUrl ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback para navegadores sem suporte a vídeo */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </video>
      ) : (
        /* Fallback Image Background */
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" aria-hidden="true" />
      
      {/* Animated Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.position} bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-sm border border-white/10`}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title}
          </motion.span>
          <br />
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {subtitle}
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HeroButton 
              glow 
              className="min-w-[200px] bg-gradient-to-r from-purple-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              onClick={onPrimaryClick}
              aria-label={`${primaryButtonText} - Iniciar análise gratuita da pele`}
            >
              {primaryButtonText}
            </HeroButton>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};
