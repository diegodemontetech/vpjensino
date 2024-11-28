import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const courseService = {
  async completeLesson(courseId: string, lessonId: string) {
    const response = await api.post(`/courses/${courseId}/lessons/${lessonId}/complete`);
    return response.data;
  },

  async submitQuiz(courseId: string, quizId: string, answers: Record<string, number>) {
    const response = await api.post(`/courses/${courseId}/quiz/${quizId}/submit`, { answers });
    return response.data;
  },

  async getCertificate(courseId: string) {
    const response = await api.get(`/courses/${courseId}/certificate`);
    return response.data;
  },
};

export const userService = {
  async getProfile() {
    const response = await api.get('/users/profile');
    return response.data;
  },

  async updateProfile(data: any) {
    const response = await api.put('/users/profile', data);
    return response.data;
  },
};

export default api;