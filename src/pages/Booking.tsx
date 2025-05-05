import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import BookingForm from '../components/booking/BookingForm';
import { CalendarClock, Clock, CreditCard, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Agende Sua Consulta" 
            subtitle="Marque uma consulta ou tratamento com nossos dermatologistas especialistas." 
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-900 dark:text-white">Informações de Agendamento</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CalendarClock className="w-5 h-5 text-primary-600 dark:text-secondary-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Horário da Clínica</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Segunda a Sexta: 8:00 - 18:00<br />
                      Sábado e Domingo: Fechado<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-primary-600 dark:text-secondary-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Duração da Consulta</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Consulta Inicial: 45-60 minutos<br />
                      Consultas de Retorno: 30 minutos<br />
                      Tratamentos: 30-90 minutos (varia conforme o procedimento)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CreditCard className="w-5 h-5 text-primary-600 dark:text-secondary-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Opções de Pagamento</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Aceitamos cartões de crédito/débito, planos de saúde (verificar cobertura) e oferecemos opções de financiamento para pacotes de tratamento maiores.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-secondary-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Dúvidas?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Entre em contato com nossa equipe de agendamento:<br />
                      <a 
                        href="mailto:labellecutanee@gmail.com" 
                        className="text-primary-600 dark:text-secondary-400 hover:underline"
                      >
                        labellecutanee@gmail.com
                      </a><br />
                      +55 (11) 91282-4050
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 dark:bg-gray-700 rounded-lg shadow-md p-6 mt-6 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80">
              <h3 className="text-lg font-playfair font-semibold mb-3 text-primary-700 dark:text-secondary-300">
                Preparando-se para Sua Visita
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Chegue 15 minutos antes para preencher a papelada</li>
                <li>• Traga uma lista de medicamentos e suplementos atuais</li>
                <li>• Evite usar maquiagem para consultas de pele</li>
                <li>• Evite exposição ao sol antes de tratamentos a laser</li>
                <li>• Traga seu cartão de plano de saúde, se aplicável</li>
              </ul>
            </div>
            
            <div className="mt-5 text-xs text-gray-500 dark:text-gray-400 italic text-center">
              Após o envio do formulário, nossa equipe entrará em contato o mais rápido possível para confirmar seu agendamento.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;