import React, { useState } from 'react';
import { Plus, Save, Trash, Edit2, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';

interface Category {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  usedIn: {
    courses: boolean;
    ebooks: boolean;
  };
}

const CategoryManagement = () => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryData, setCategoryData] = useState<Category>({
    id: '',
    name: '',
    description: '',
    isActive: true,
    usedIn: {
      courses: true,
      ebooks: true
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Category data:', categoryData);
    setIsAddingCategory(false);
    setEditingCategory(null);
    setCategoryData({
      id: '',
      name: '',
      description: '',
      isActive: true,
      usedIn: {
        courses: true,
        ebooks: true
      }
    });
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setCategoryData(category);
    setIsAddingCategory(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Categorias</h2>
        <button
          onClick={() => setIsAddingCategory(true)}
          className="flex items-center gap-2 bg-[#E50914] text-white px-4 py-2 rounded-md hover:bg-[#b8070f] transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Nova Categoria</span>
        </button>
      </div>

      <Dialog.Root open={isAddingCategory} onOpenChange={setIsAddingCategory}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E1E1E] p-8 rounded-xl w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-2xl font-bold text-white">
                {editingCategory ? 'Editar Categoria' : 'Nova Categoria'}
              </Dialog.Title>
              <button 
                onClick={() => {
                  setIsAddingCategory(false);
                  setEditingCategory(null);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome da Categoria
                </label>
                <input
                  type="text"
                  value={categoryData.name}
                  onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })}
                  className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                  placeholder="Ex: Gestão"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descrição
                </label>
                <textarea
                  value={categoryData.description}
                  onChange={(e) => setCategoryData({ ...categoryData, description: e.target.value })}
                  className="w-full bg-[#2A2A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E50914] h-32"
                  placeholder="Descreva a categoria..."
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <Checkbox.Root
                    checked={categoryData.usedIn.courses}
                    onCheckedChange={(checked) => 
                      setCategoryData({
                        ...categoryData,
                        usedIn: { ...categoryData.usedIn, courses: checked as boolean }
                      })
                    }
                    className="h-5 w-5 bg-[#2A2A2A] rounded flex items-center justify-center"
                  >
                    <Checkbox.Indicator>
                      <div className="h-4 w-4 bg-[#E50914] rounded-sm" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-gray-300">Usar em Cursos</span>
                </label>

                <label className="flex items-center gap-3">
                  <Checkbox.Root
                    checked={categoryData.usedIn.ebooks}
                    onCheckedChange={(checked) => 
                      setCategoryData({
                        ...categoryData,
                        usedIn: { ...categoryData.usedIn, ebooks: checked as boolean }
                      })
                    }
                    className="h-5 w-5 bg-[#2A2A2A] rounded flex items-center justify-center"
                  >
                    <Checkbox.Indicator>
                      <div className="h-4 w-4 bg-[#E50914] rounded-sm" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-gray-300">Usar em E-books</span>
                </label>

                <label className="flex items-center gap-3">
                  <Checkbox.Root
                    checked={categoryData.isActive}
                    onCheckedChange={(checked) => 
                      setCategoryData({ ...categoryData, isActive: checked as boolean })
                    }
                    className="h-5 w-5 bg-[#2A2A2A] rounded flex items-center justify-center"
                  >
                    <Checkbox.Indicator>
                      <div className="h-4 w-4 bg-[#E50914] rounded-sm" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-gray-300">Categoria Ativa</span>
                </label>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingCategory(false);
                    setEditingCategory(null);
                  }}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#E50914] text-white px-6 py-2 rounded-md hover:bg-[#b8070f] transition-colors"
                >
                  <Save className="h-5 w-5" />
                  <span>Salvar Categoria</span>
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="space-y-4">
        {[
          { 
            id: '1',
            name: 'Gestão',
            description: 'Conteúdos relacionados à gestão pecuária',
            isActive: true,
            usedIn: { courses: true, ebooks: true }
          },
          {
            id: '2',
            name: 'Nutrição',
            description: 'Conteúdos sobre nutrição animal',
            isActive: true,
            usedIn: { courses: true, ebooks: true }
          },
          {
            id: '3',
            name: 'Reprodução',
            description: 'Conteúdos sobre reprodução animal',
            isActive: true,
            usedIn: { courses: true, ebooks: false }
          }
        ].map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between p-4 bg-[#2A2A2A] rounded-lg"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-white font-medium">{category.name}</h3>
                {!category.isActive && (
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    Inativa
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm">{category.description}</p>
              <div className="flex items-center gap-4 mt-2">
                {category.usedIn.courses && (
                  <span className="text-xs text-[#E50914]">Cursos</span>
                )}
                {category.usedIn.ebooks && (
                  <span className="text-xs text-[#E50914]">E-books</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => handleEdit(category)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Edit2 className="h-5 w-5" />
              </button>
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

export default CategoryManagement;