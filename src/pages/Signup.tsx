import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const { signup, login } = useAuth();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const result = await signup(email, password, name);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess('Cadastro realizado! Verifique seu e-mail para confirmar a conta e depois faça o login.');
      setTimeout(() => {
        setShowLogin(true);
      }, 3000);
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);

    if (result.error) {
      setError(result.error);
    } else {
      navigate('/profile');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 dark:opacity-10"
        style={{ backgroundImage: "url('/images/marble-background.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/80 z-10" />
      
      <div className="relative z-20 w-full max-w-md">
        <AnimatePresence mode="wait">
          {!showLogin ? (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Cadastro</h2>
              {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
              {success && <div className="mb-4 text-green-500 text-center">{success}</div>}
              
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                    required
                    disabled={loading}
                  />
                </div>
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
                    minLength={6}
                    disabled={loading}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <span className="text-gray-600 dark:text-gray-300">Já tem uma conta?</span>
                <button
                  onClick={() => setShowLogin(true)}
                  className="ml-2 text-primary-600 hover:underline dark:text-secondary-400 transition-colors"
                >
                  Entrar
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>
              {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Senha</label>
                  <input
                    type="password"
                    id="login-password"
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
                  onClick={() => setShowLogin(false)}
                  className="ml-2 text-primary-600 hover:underline dark:text-secondary-400 transition-colors"
                >
                  Cadastre-se
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Signup;
