import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface AppointmentData {
  name: string;
  email: string;
  phone?: string;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
  treatment_id?: number;
}

export const useAppointments = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createAppointment = async (appointmentData: AppointmentData) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([{
          ...appointmentData,
          status: 'pending'
        }])
        .select()
        .single();

      if (error) throw error;

      return { success: true, data };
    } catch (err: any) {
      console.error('Erro ao criar agendamento:', err);
      setError(err.message || 'Erro ao agendar consulta');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const getUserAppointments = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }

      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          treatments (
            title,
            description
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return { success: true, data };
    } catch (err: any) {
      console.error('Erro ao buscar agendamentos:', err);
      setError(err.message || 'Erro ao carregar agendamentos');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    createAppointment,
    getUserAppointments,
    loading,
    error
  };
};
