import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseSection from '../../components/CourseSection';
import NewsCard from '../../components/NewsCard';
import CategoryFilter from '../../components/CategoryFilter';
import { Course, News } from '../../types';
import { featuredCourses } from '../../data/courses';

const categories = ['Todos', 'Gestão', 'Nutrição', 'Reprodução', 'Sanidade', 'Sustentabilidade'];

const news: News[] = [
  {
    id: '1',
    title: 'Como a Inteligência Artificial está revolucionando a pecuária moderna',
    thumbnail: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800',
    category: 'Tecnologia',
    date: '15 Mar 2024',
    readTime: '5 min de leitura',
    content: '',
    author: {
      name: 'João Silva',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    }
  },
  {
    id: '2',
    title: 'Novos métodos de manejo sustentável aumentam produtividade em 40%',
    thumbnail: 'https://images.unsplash.com/photo-1605118983127-00fe86695e6f?w=800',
    category: 'Sustentabilidade',
    date: '14 Mar 2024',
    readTime: '7 min de leitura',
    content: '',
    author: {
      name: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  },
  {
    id: '3',
    title: 'VPJ Alimentos lidera ranking de bem-estar animal no Brasil',
    thumbnail: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800',
    category: 'Institucional',
    date: '13 Mar 2024',
    readTime: '4 min de leitura',
    content: '',
    author: {
      name: 'Pedro Costa',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    }
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Todos');

  const handleStartCourse = () => {
    navigate('/courses/1');
  };

  const handleMoreInfo = () => {
    navigate('/courses');
  };

  const handleCourseClick = (course: Course) => {
    navigate(`/courses/${course.id}`);
  };

  const handleNewsClick = (news: News) => {
    navigate(`/blog/${news.id}`);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <div className="flex-1 px-8 pb-16">
        <motion.div 
          className="relative h-[500px] rounded-xl overflow-hidden mb-16 mt-6 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={handleStartCourse}
        >
          <img 
            src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920"
            alt="Featured Course"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-[#E50914] text-white text-sm font-medium rounded-md mb-4">
                  Em Destaque
                </span>
                <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                  Curso Completo de Gestão Pecuária
                </h1>
                <p className="text-gray-300 text-lg mb-8 line-clamp-2">
                  Aprenda as melhores práticas de gestão para maximizar a produtividade e rentabilidade do seu negócio pecuário.
                </p>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartCourse();
                    }}
                    className="bg-[#E50914] text-white px-8 py-4 rounded-md hover:bg-[#b8070f] transition-colors text-lg font-medium"
                  >
                    Começar Agora
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMoreInfo();
                    }}
                    className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/30 transition-colors text-lg font-medium"
                  >
                    Mais Informações
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <CourseSection 
          title="Destaques" 
          icon={<TrendingUp className="h-6 w-6 text-[#E50914]" />}
          courses={featuredCourses}
          onCourseClick={handleCourseClick}
        />

        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl text-white font-semibold">Últimas Notícias</h2>
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-[#E50914] hover:text-[#b8070f] transition-colors"
            >
              <span>Ver todas</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {news.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleNewsClick(item)}
                className="cursor-pointer"
              >
                <NewsCard news={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;