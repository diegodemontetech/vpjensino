import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

interface UserStats {
  averageGrade: number;
  totalHours: number;
  completedCourses: number;
  inProgressCourses: number;
}

interface Certificate {
  id: string;
  courseId: string;
  grade: number;
  issuedAt: string;
  course: {
    id: string;
    title: string;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  stats: UserStats;
  certificates: Certificate[];
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await api.get('/users/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Failed to load user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    const { token, user: userData } = response.data;
    
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const updateProfile = async (data: Partial<User>) => {
    const response = await api.put('/users/profile', data);
    setUser(response.data);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};