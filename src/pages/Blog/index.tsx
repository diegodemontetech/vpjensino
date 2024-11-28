import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Search, Filter, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = ['Todos', 'Tecnologia', 'Sustentabilidade', 'Gestão', 'Inovação', 'Mercado'];

const Blog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePostClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <div className="max-w-[1800px] mx-auto">
        <div className="relative h-[600px] mb-16">
          <img
            src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920"
            alt="Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl cursor-pointer"
                onClick={() => handlePostClick('featured-1')}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#E50914] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </span>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>15 Mar 2024</span>
                  </div>
                </div>

                <h1 className="font-ubuntu text-7xl font-bold text-white mb-6 leading-tight">
                  O Futuro da Pecuária Sustentável no Brasil
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 line-clamp-3">
                  Uma análise profunda sobre como as novas tecnologias e práticas sustentáveis estão revolucionando o setor pecuário brasileiro, garantindo maior produtividade e respeito ao meio ambiente.
                </p>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64"
                      alt="Author"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="text-white font-medium">João Silva</p>
                      <p className="text-sm text-gray-400">Especialista em Pecuária</p>
                    </div>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePostClick('featured-1');
                    }}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <span>Ler artigo completo</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="px-16">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-ubuntu text-4xl font-bold text-white mb-2">
                Últimas Notícias
              </h2>
              <p className="text-gray-400">
                Acompanhe as principais novidades do setor
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar notícias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 bg-[#2A2A2A] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <button className="p-2 rounded-lg bg-[#2A2A2A] text-gray-400 hover:text-white transition-colors">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${activeCategory === category 
                    ? 'bg-[#E50914] text-white' 
                    : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-8">
              <div className="grid grid-cols-2 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => handlePostClick(`post-${i + 1}`)}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img 
                        src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1530836369250-ef72a3f5cda8' : '1605118983127-00fe86695e6f'}?w=800`}
                        alt={`News ${i + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-[#E50914] font-medium">
                          {i % 2 === 0 ? 'Tecnologia' : 'Sustentabilidade'}
                        </span>
                        <span className="text-gray-400">14 Mar 2024</span>
                      </div>
                      
                      <h3 className="text-xl font-medium text-white group-hover:text-[#E50914] transition-colors line-clamp-2">
                        {i % 2 === 0 
                          ? 'Como a Inteligência Artificial está transformando a gestão pecuária' 
                          : 'Novos métodos de manejo sustentável aumentam produtividade'
                        }
                      </h3>
                      
                      <p className="text-gray-400 line-clamp-2">
                        {i % 2 === 0
                          ? 'Descubra como a IA está revolucionando o setor com previsões precisas e otimização de recursos.'
                          : 'Pesquisa revela que práticas sustentáveis podem aumentar a produtividade em até 40%.'
                        }
                      </p>
                      
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {Math.floor(Math.random() * 10) + 1} min de leitura
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <div className="col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#1E1E1E] rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Mais Lidas</h3>
                <div className="space-y-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <article 
                      key={i} 
                      className="flex gap-6 group cursor-pointer"
                      onClick={() => handlePostClick(`trending-${i + 1}`)}
                    >
                      <span className="text-4xl font-bold text-gray-700 group-hover:text-[#E50914] transition-colors">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="space-y-2">
                        <h4 className="text-white font-medium group-hover:text-[#E50914] transition-colors line-clamp-2">
                          {i === 0 
                            ? 'O impacto da tecnologia na produtividade pecuária' 
                            : 'Sustentabilidade: o futuro do agronegócio'
                          }
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span>{Math.floor(Math.random() * 10) + 1} min de leitura</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#1E1E1E] rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
                <p className="text-gray-400 mb-6">
                  Receba as últimas notícias e atualizações diretamente no seu e-mail.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full bg-[#2A2A2A] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                  />
                  <button className="w-full bg-[#E50914] text-white py-3 rounded-lg hover:bg-[#b8070f] transition-colors">
                    Inscrever-se
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;