import React, { useState } from 'react';
import { Plus, Save, Trash, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

const UserManagement = () => {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    group: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    console.log('User data:', userData);
    setIsAddingUser(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Usuários</h2>
        <button
          onClick={() => setIsAddingUser(true)}
          className="flex items-center gap-2 bg-[#E50914] text-white px-4 py-2 rounded-md hover:bg-[#b8070f] transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Novo Usuário</span>
        </button>
      </div>

      <Dialog.Root open={isAddingUser} onOpenChange={setIsAddingUser}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E1E1E] p-8 rounded-xl w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-2xl font-bold text-white">
                Novo Usuário
              </Dialog.Title>
              <button 
                onClick={() => setIsAddingUser(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  value={userData.confirmPassword}
                  onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                  className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Função
                </label>
                <select
                  value={userData.role}
                  onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                  className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                >
                  <option value="">Selecione...</option>
                  <option value="admin">Administrador</option>
                  <option value="instructor">Instrutor</option>
                  <option value="student">Aluno</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Grupo
                </label>
                <select
                  value={userData.group}
                  onChange={(e) => setUserData({ ...userData, group: e.target.value })}
                  className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                >
                  <option value="">Selecione...</option>
                  <option value="group1">Administradores</option>
                  <option value="group2">Instrutores</option>
                  <option value="group3">Alunos</option>
                </select>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsAddingUser(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#E50914] text-white px-6 py-2 rounded-md hover:bg-[#b8070f] transition-colors"
                >
                  <Save className="h-5 w-5" />
                  <span>Salvar Usuário</span>
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="space-y-4">
        {['João Silva', 'Maria Santos', 'Pedro Costa'].map((user) => (
          <div
            key={user}
            className="flex items-center justify-between p-4 bg-[#2A2A2A] rounded-lg"
          >
            <span className="text-gray-300">{user}</span>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-[#E50914] transition-colors">
                <Trash className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;