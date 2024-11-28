import { Course } from '../types';

export const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Gestão Avançada de Pastagens',
    thumbnail: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800',
    progress: 45,
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
  // ... other courses
];