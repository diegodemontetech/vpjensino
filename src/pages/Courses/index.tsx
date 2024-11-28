import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';
import CategoryFilter from '../../components/CategoryFilter';
import { Course } from '../../types';

const categories = ['Todos', 'Gestão', 'Nutrição', 'Reprodução', 'Sanidade', 'Sustentabilidade'];

const courses: Course[] = [
  {
    id: '1',
    title: 'Gestão Avançada de Pastagens',
    thumbnail: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800',
    progress: 0,
    duration: '4h 30min',
    rating: 9.2,
    category: 'Gestão',
    date: '2024-03-15',
    description: 'Aprenda técnicas modernas de gestão de pastagens para maximizar a produtividade.',
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    lessons: [
      {
        id: 'l1',
        title: 'Introdução ao Manejo de Pastagens',
        duration: '45min',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        completed: false
      },
      {
        id: 'l2',
        title: 'Técnicas de Rotação',
        duration: '1h',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        completed: false
      }
    ],
    status: 'not_started'
  },
  // Add more courses here with similar structure
];

const Courses = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'Todos' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCourseClick = (course: Course) => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Cursos</h1>
          <p className="text-gray-400">Explore nossa biblioteca de conhecimento</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 bg-[#2A2A2A] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            />
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <motion.div 
        className="grid grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => handleCourseClick(course)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;