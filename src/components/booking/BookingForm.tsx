import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../contexts/AuthContext';

interface Treatment {
  id: number;
  title: string;
}

const BookingForm: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment_id: '',
    preferred_date: '',
    preferred_time: '',
    message: ''
  });
  
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTreatments = async () => {
      const { data, error } = await supabase.from('treatments').select('id, title');
      if (error) {
        console.error("Erro ao buscar tratamentos:", error);
      } else {
        setTreatments(data || []);
      }
    };
    fetchTreatments();
  }, []);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.full_name || '',
        email: user.email || ''
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('appointments').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferred_date: formData.preferred_date,
        preferred_time: formData.preferred_time,
        message: formData.message,
        treatment_id: formData.treatment_id ? parseInt(formData.treatment_id) : null,
        user_id: user?.id || null
      });

      if (insertError) throw insertError;
      
      setSubmitted(true);
    } catch (err: any) {
      setError('Ocorreu um erro ao enviar seu agendamento. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome Completo*</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Endereço de Email*</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Número de Telefone*</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
              <div>
                <label htmlFor="treatment_id" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Interesse em Tratamento*</label>
                <select id="treatment_id" name="treatment_id" value={formData.treatment_id} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md">
                  <option value="">Selecione um tratamento</option>
                  {treatments.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Data Preferida*</label>
                <input type="date" id="preferred_date" name="preferred_date" value={formData.preferred_date} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
              <div>
                <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Horário Preferido*</label>
                <select id="preferred_time" name="preferred_time" value={formData.preferred_time} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md">
                  <option value="">Selecione um horário</option>
                  <option value="Manhã (9h - 12h)">Manhã (9h - 12h)</option>
                  <option value="Tarde (12h - 17h)">Tarde (12h - 17h)</option>
                  <option value="Noite (17h - 20h)">Noite (17h - 20h)</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Informações Adicionais</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="Compartilhe preocupações ou perguntas específicas."></textarea>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="text-center">
              <button type="submit" disabled={loading} className="inline-block py-3 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors font-medium disabled:opacity-50">
                {loading ? <Loader2 className="animate-spin" /> : 'Agendar Consulta'}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div key="confirmation" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 text-success-500 rounded-full mb-6">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-playfair font-semibold mb-3 text-gray-900 dark:text-white">Solicitação Recebida!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">Obrigado! Entraremos em contato em breve para confirmar seu agendamento.</p>
            <button onClick={() => setSubmitted(false)} className="inline-block py-2 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors font-medium">
              Agendar Outro Horário
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingForm;
