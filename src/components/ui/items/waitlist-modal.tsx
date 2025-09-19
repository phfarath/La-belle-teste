import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { HeroButton } from "./hero-button";
import { Input } from "./input";
import { motion } from "framer-motion";
import { useToast } from "./use-toast";
import { CheckCircle, Mail } from "lucide-react";
import { supabase } from "../../../lib/supabaseClient";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e email.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("waitlist").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          age: formData.age ? Number(formData.age) : null,
        },
      ]);
      if (error) throw error;
      setIsSubmitted(true);
      toast({
        title: "Inscrição realizada!",
        description: "Você foi adicionado(a) à nossa lista de espera.",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Algo deu errado. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", age: "" });
    setIsSubmitted(false);
    onClose();
  };

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetForm}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-900/90 via-black/90 to-pink-900/90 border-white/20 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="sr-only">La Belle Glow AI - Lista de Espera</DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <motion.div
            className="text-center text-white p-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CheckCircle className="w-20 h-20 mx-auto text-green-400 mb-6" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Você está na lista!
            </motion.h1>

            <motion.p
              className="text-xl mb-8 text-white/90"
              variants={itemVariants}
            >
              Obrigado por se juntar à nossa lista de espera. Em breve você receberá acesso exclusivo ao La Belle Glow AI.
            </motion.p>

            <motion.div variants={itemVariants}>
              <HeroButton
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                onClick={resetForm}
              >
                Fechar
              </HeroButton>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="text-center text-white p-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                La Belle Glow AI
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-normal">
                Em Breve
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              A revolução do skincare personalizado está chegando. Seja um dos primeiros a experimentar análise de pele com inteligência artificial.
            </motion.p>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 max-w-md mx-auto"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-xl font-semibold">Lista de Espera</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-purple-400 focus:ring-purple-400"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Seu melhor email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-purple-400 focus:ring-purple-400"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Seu telefone (WhatsApp)"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <Input
                    type="number"
                    placeholder="Sua idade"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    min="16"
                    max="100"
                    className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HeroButton
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:opacity-50"
                    glow
                  >
                    {isLoading ? "Inscrevendo..." : "Quero Testar o La Belle Glow AI"}
                  </HeroButton>
                </motion.div>
              </form>

              <p className="text-xs text-white/70 mt-4 text-center">
                Ao se inscrever, você concorda em receber atualizações sobre o lançamento.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
              variants={itemVariants}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-sm font-semibold mb-1 text-purple-300">Acesso Antecipado</h3>
                <p className="text-white/80 text-xs">Seja um dos primeiros a testar nossa tecnologia exclusiva</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-sm font-semibold mb-1 text-pink-300">Preço Especial</h3>
                <p className="text-white/80 text-xs">Condições exclusivas para membros da lista de espera</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-sm font-semibold mb-1 text-indigo-300">Suporte VIP</h3>
                <p className="text-white/80 text-xs">Atendimento prioritário e personalizado</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};
