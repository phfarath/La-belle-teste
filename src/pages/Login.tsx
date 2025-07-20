import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Simulação de autenticação
      const users = JSON.parse(sessionStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      if (user) {
        await login(email, password);
        navigate('/profile');
      } else {
        setError('Email ou senha inválidos');
      }
    } catch (err) {
      setError('Email ou senha inválidos');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background marmorizado */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 dark:opacity-10"
        style={{ backgroundImage: "url('/images/marble-background.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/80 z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              required
              disabled={loading}
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <span className="text-gray-600 dark:text-gray-300">Não tem uma conta?</span>
          <button 
            onClick={() => navigate('/signup')} 
            className="ml-2 text-primary-600 hover:underline dark:text-secondary-400"
          >
            Cadastre-se
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
