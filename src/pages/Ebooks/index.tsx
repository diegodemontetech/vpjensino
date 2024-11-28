import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Download, Filter, BookOpen, Clock } from 'lucide-react';
import { Ebook } from '../../types';

const categories = ['Todos', 'Gestão', 'Nutrição', 'Reprodução', 'Sanidade'];

const ebooks: Ebook[] = [
  {
    id: '1',
    title: 'Manual Completo de Gestão de Pastagens',
    thumbnail: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800',
    author: 'Dr. João Silva',
    rating: 9.2,
    totalRatings: 245,
    description: 'Um guia abrangente sobre as melhores práticas de gestão de pastagens, incluindo técnicas modernas e sustentáveis.',
    downloadUrl: '#',
    category: 'Gestão',
    readTime: '2h 30min',
    pages: 156,
    publishDate: '2024-03-15'
  },
  // Add more ebooks here
];

const Ebooks = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEbooks = ebooks.filter(ebook => {
    const matchesCategory = activeCategory === 'Todos' || ebook.category === activeCategory;
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">E-books</h1>
          <p className="text-gray-400">Biblioteca digital especializada</p>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Buscar e-books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 bg-[#2A2A2A] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E50914]"
          />
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8 overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${activeCategory === category 
                ? 'bg-[#E50914] text-white' 
                : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        className="grid grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredEbooks.map((ebook) => (
          <motion.div
            key={ebook.id}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg"
          >
            <div className="flex">
              <div className="w-1/3 relative">
                <img 
                  src={ebook.thumbnail}
                  alt={ebook.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E50914] text-white text-xs font-medium px-2 py-1 rounded">
                    {ebook.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                    <span className="text-white font-medium">{ebook.rating}</span>
                    <span className="text-gray-400">({ebook.totalRatings})</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{ebook.pages} págs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{ebook.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {ebook.title}
                </h3>

                <p className="text-gray-400 text-sm mb-2">
                  por <span className="text-white">{ebook.author}</span>
                </p>

                <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                  {ebook.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Publicado em {new Date(ebook.publishDate).toLocaleDateString('pt-BR')}
                  </span>
                  <button className="flex items-center gap-2 bg-[#E50914] text-white px-4 py-2 rounded-md hover:bg-[#b8070f] transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ebooks;