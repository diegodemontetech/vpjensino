export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  duration: string;
  rating: number;
  instructor: string;
  category: string;
  status: 'not_started' | 'in_progress' | 'completed';
  progress: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  attachments?: {
    name: string;
    url: string;
  }[];
}

export interface News {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface CertificateLevel {
  id: string;
  name: string;
  description: string;
  minCertificates: number;
  maxCertificates: number;
  icon: string;
  color: string;
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  grade: number;
  issuedAt: string;
  course: {
    id: string;
    title: string;
  };
}

export interface UserProgress {
  totalCertificates: number;
  currentLevel: CertificateLevel;
  nextLevel?: CertificateLevel;
  progressToNextLevel: number;
}

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  replies: Reply[];
}

export interface Reply {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
}