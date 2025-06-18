import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { User, Edit3, Save, LogOut, History, Lightbulb, Calendar, Stethoscope } from 'lucide-react';

interface Atendimento {
  data: string;
  descricao: string;
}

const Profile: React.FC = () => {
  const [nome, setNome] = useState('');
  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
  const [sugestoes, setSugestoes] = useState<string[]>([]);
  const navigate = useNavigate();
  const { user, logout, updateUser } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    setNome(user.name);
    setAtendimentos(user.atendimentos || []);
    setSugestoes(user.sugestoes || []);
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSave = () => {
    if (!user) return;
    const users = JSON.parse(sessionStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((u: any) => u.email === user.email);

    if (userIndex !== -1) {
      const updatedUser = {
        ...users[userIndex],
        name: nome,
      };
      users[userIndex] = updatedUser;
      sessionStorage.setItem('users', JSON.stringify(users));
      updateUser(updatedUser);
      alert('Perfil atualizado com sucesso!');
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen pt-24 pb-16 relative bg-gray-50/50 dark:bg-gray-900/50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 dark:opacity-10"
        style={{ backgroundImage: "url('/images/marble-background.jpg')" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary-600 dark:bg-primary-700 rounded-full flex items-center justify-center shadow-lg">
              <User size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-900 dark:text-white mb-2">
            Painel do Paciente
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Acompanhe seus tratamentos e recomendações.
          </p>
          <div className="w-20 h-1 bg-primary-600 dark:bg-secondary-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <Edit3 size={20} className="text-primary-600 dark:text-secondary-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Informações Pessoais</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={user.email}
                    disabled
                    className="w-full p-3 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSave}
                className="w-full flex items-center justify-center py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors font-medium"
              >
                <Save size={20} className="mr-2" />
                Salvar Alterações
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center py-3 px-6 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors font-medium"
              >
                <LogOut size={20} className="mr-2" />
                Sair da Conta
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <History size={24} className="text-primary-600 dark:text-secondary-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Histórico de Atendimentos</h3>
                </div>
                <span className="text-sm font-bold text-white bg-primary-600 dark:bg-secondary-400 rounded-full px-3 py-1">
                  {atendimentos.length}
                </span>
              </div>

              <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                {atendimentos.length === 0 ? (
                  <div className="text-center py-8 px-4 border-2 border-dashed rounded-lg">
                    <Calendar size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500 dark:text-gray-400">Nenhum atendimento registrado ainda.</p>
                    <p className="text-sm mt-2">Seus registros aparecerão aqui após cada consulta.</p>
                  </div>
                ) : (
                  atendimentos.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-primary-600 dark:border-secondary-400"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {a.descricao}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {a.data}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Lightbulb size={24} className="text-primary-600 dark:text-secondary-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sugestões Personalizadas</h3>
                </div>
                <span className="text-sm font-bold text-white bg-primary-600 dark:bg-secondary-400 rounded-full px-3 py-1">
                  {sugestoes.length}
                </span>
              </div>

              <div className="space-y-3">
                {sugestoes.length === 0 ? (
                  <div className="text-center py-8 px-4 border-2 border-dashed rounded-lg">
                    <Stethoscope size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500 dark:text-gray-400">Nenhuma sugestão disponível.</p>
                    <p className="text-sm mt-2">Nossas recomendações aparecerão aqui conforme seus atendimentos.</p>
                  </div>
                ) : (
                  sugestoes.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-lg border border-primary-200 dark:border-primary-700"
                    >
                      <p className="text-gray-900 dark:text-white">{s}</p>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
