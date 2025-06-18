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
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.email === email)) {
      setError('Email já cadastrado.');
      setSuccess('');
      return;
    }
    const newUser = { name, email, password, profile: {} };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setSuccess('Cadastro realizado com sucesso!');
    setError('');
    setTimeout(() => navigate('/login'), 1500);
  };
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background marmorizado */}
      {/* Overlay para legibilidade */}
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
              {success && <div className="mb-4 text-green-600 text-center">{success}</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                    required
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
                  />
                </div>
                <button type="submit" className="w-full py-3 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium">Cadastrar</button>
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
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>              <form
                onSubmit={e => {
                  e.preventDefault();
                  const users = JSON.parse(localStorage.getItem('users') || '[]');
                  const user = users.find((u: any) => u.email === email && u.password === password);
                  if (user) {
                    login(user);
                    navigate('/profile');
                  } else {
                    setError('Email ou senha inválidos.');
                    setSuccess('');
                  }
                }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                    required
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
                  />
                </div>
                <button type="submit" className="w-full py-3 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium">Entrar</button>
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
