import { News } from '../types';

export const news: News[] = [
  {
    id: 'featured-1',
    title: 'O Futuro da Pecuária Sustentável no Brasil',
    thumbnail: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920',
    category: 'Sustentabilidade',
    date: '15 Mar 2024',
    readTime: '5 min de leitura',
    content: `
      <p>Uma análise profunda sobre como as novas tecnologias e práticas sustentáveis estão revolucionando o setor pecuário brasileiro, garantindo maior produtividade e respeito ao meio ambiente.</p>
      
      <h2>O Impacto da Tecnologia</h2>
      <p>A integração de tecnologias avançadas tem transformado significativamente a forma como gerenciamos o gado e os recursos naturais. Desde sistemas de monitoramento por GPS até análises de solo em tempo real, cada inovação contribui para uma produção mais eficiente e sustentável.</p>
      
      <h2>Práticas Sustentáveis</h2>
      <p>A adoção de práticas sustentáveis não é apenas uma tendência, mas uma necessidade para o futuro do setor. O manejo adequado das pastagens, a rotação eficiente do gado e o uso consciente dos recursos hídricos são apenas alguns exemplos de como podemos produzir mais com menos impacto ambiental.</p>
      
      <h2>Resultados Comprovados</h2>
      <p>Estudos recentes demonstram que propriedades que adotaram práticas sustentáveis registraram um aumento médio de 40% na produtividade, além de uma significativa redução nos custos operacionais.</p>
    `,
    author: {
      name: 'João Silva',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Especialista em Pecuária'
    },
    likes: 0,
    comments: []
  },
  // Add more news items with unique IDs and content
];