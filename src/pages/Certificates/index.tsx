import React from 'react';
import { motion } from 'framer-motion';
import { Download, Trophy, Star, Award } from 'lucide-react';
import { certificateLevels } from '../../data/certificateLevels';
import Certificate from '../../components/Certificate';

const CertificatesPage = () => {
  const userProgress = {
    totalCertificates: 8,
    currentLevel: certificateLevels[1], // Explorador Determinado
    nextLevel: certificateLevels[2], // Guardião da Sabedoria
    progressToNextLevel: 53 // 53% progress to next level
  };

  const certificates = [
    {
      id: '1',
      courseId: '1',
      courseName: 'Gestão Avançada de Pastagens',
      completionDate: '15/03/2024',
      instructorName: 'Dr. João Silva',
      grade: 9.5,
      thumbnail: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800'
    },
    {
      id: '2',
      courseId: '2',
      courseName: 'Nutrição Animal Avançada',
      completionDate: '10/03/2024',
      instructorName: 'Dra. Maria Santos',
      grade: 8.8,
      thumbnail: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800'
    },
    {
      id: '3',
      courseId: '3',
      courseName: 'Manejo Sanitário do Rebanho',
      completionDate: '05/03/2024',
      instructorName: 'Dr. Pedro Costa',
      grade: 9.2,
      thumbnail: 'https://images.unsplash.com/photo-1605118983127-00fe86695e6f?w=800'
    }
  ];

  return (
    <div className="p-8">
      {/* Level Progress */}
      <div className="bg-[#1E1E1E] rounded-xl p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Sua Jornada</h2>
            <p className="text-gray-400">
              {userProgress.currentLevel.description}
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 rounded-full bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]">
              <Trophy 
                className="h-12 w-12"
                style={{ color: userProgress.currentLevel.color }}
              />
            </div>
            <p className="text-lg font-bold text-white mt-2">
              {userProgress.currentLevel.name}
            </p>
          </div>
        </div>

        <div className="relative h-4 bg-[#2A2A2A] rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${userProgress.progressToNextLevel}%` }}
            className="absolute h-full"
            style={{ backgroundColor: userProgress.currentLevel.color }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">
            {userProgress.totalCertificates} certificados
          </span>
          {userProgress.nextLevel && (
            <span className="text-gray-400">
              Próximo nível: {userProgress.nextLevel.name} ({userProgress.nextLevel.minCertificates - userProgress.totalCertificates} certificados restantes)
            </span>
          )}
        </div>
      </div>

      {/* Levels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {certificateLevels.map((level) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1E1E1E] rounded-xl p-6 relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{level.name}</h3>
                <p className="text-sm text-gray-400">
                  {level.minCertificates}-{level.maxCertificates === Infinity ? '+' : level.maxCertificates} certificados
                </p>
              </div>
              <Award 
                className="h-8 w-8"
                style={{ color: level.color }}
              />
            </div>
            <p className="text-gray-300 text-sm">{level.description}</p>
            
            {userProgress.currentLevel.id === level.id && (
              <div className="absolute top-2 right-2">
                <span className="inline-block px-2 py-1 text-xs font-medium text-white rounded-full" style={{ backgroundColor: level.color }}>
                  Nível Atual
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Certificates Grid */}
      <h2 className="text-2xl font-bold text-white mb-6">Seus Certificados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1E1E1E] rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="relative aspect-video">
              <img 
                src={cert.thumbnail}
                alt={cert.courseName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#E50914] text-white px-4 py-2 rounded-lg hover:bg-[#b8070f] transition-colors">
                    <Download className="h-5 w-5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white">{cert.courseName}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                  <span className="text-white font-medium">{cert.grade}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Concluído em {cert.completionDate}</span>
                <span>{cert.instructorName}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;