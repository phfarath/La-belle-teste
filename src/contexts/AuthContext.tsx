import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Session, User as SupabaseUser } from '@supabase/supabase-js';
import { Loader2 } from 'lucide-react';

interface UserProfile extends SupabaseUser {
  full_name: string;
}

interface AuthContextType {
  user: UserProfile | null;
  session: Session | null;
  isLoggedIn: boolean;
  loading: boolean;
  logout: () => Promise<void>;
  signup: (email: string, password: string, fullName: string) => Promise<{ error: string | null }>;

  login: (email: string, password: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('AuthContext: Inicializando...');
    
    // Primeiro, verificar se já existe uma sessão
    const getInitialSession = async () => {
      try {
        console.log('AuthContext: Verificando sessão inicial...');
        const { data: { session }, error } = await supabase.auth.getSession();
        console.log('AuthContext: Sessão inicial resultado:', { session, error });
        
        if (error) {
          console.error('AuthContext: Erro ao obter sessão:', error);
          setLoading(false);
          return;
        }

        setSession(session);
        if (session?.user) {
          console.log('AuthContext: Usuário encontrado na sessão:', session.user);
          // Por simplicidade, vamos usar o usuário sem buscar perfil adicional
          setUser(session.user as UserProfile);
        } else {
          console.log('AuthContext: Nenhum usuário na sessão');
          setUser(null);
        }
        setLoading(false);
        console.log('AuthContext: Inicialização completa');
      } catch (error) {
        console.error('AuthContext: Erro fatal durante inicialização:', error);
        setLoading(false);
      }
    };

    getInitialSession();

    // Escutar mudanças na autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('AuthContext: Mudança de estado:', event, session);
        setSession(session);
        setLoading(false);
        
        if (session?.user) {
          console.log('AuthContext: Usuário logado:', session.user);
          setUser(session.user as UserProfile);
        } else {
          console.log('AuthContext: Usuário deslogado');
          setUser(null);
        }
      }
    );

    return () => {
      console.log('AuthContext: Limpando listeners');
      authListener.subscription.unsubscribe();
    };
  }, []);

  interface AuthResponse {
    error: string | null;
  }

  const signup = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    return { error: error ? error.message : null };
  };
  const login = async (email: string, password: string): Promise<{ error: string | null }> => {
    console.log('AuthContext: Tentando fazer login com:', email);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      console.log('AuthContext: Resultado do login:', { error });
      return { error: error ? error.message : null };
    } catch (e) {
      console.error('AuthContext: Exceção durante login:', e);
      return { error: 'Erro inesperado durante o login' };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  const value = {
    user,
    session,
    isLoggedIn: !!user,
    loading,
    logout,
    signup,
    login,
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <Loader2 className="animate-spin text-primary-600" size={48} />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
