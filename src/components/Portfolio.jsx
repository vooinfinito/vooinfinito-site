import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { mockData } from '../mock';

const Portfolio = () => {
  const { portfolio } = mockData;
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  const categories = ['Todos', ...new Set(portfolio.map(item => item.category))];
  const filteredPortfolio = activeFilter === 'Todos' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-spacing">
      <div className="container-voo">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <h2 className="section-title animate-fade-in-up">
            Nosso Portfolio
          </h2>
          <p className="body-text max-w-2xl mx-auto mt-4 animate-fade-in-up">
            Confira alguns dos nossos trabalhos mais recentes em diferentes segmentos
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-2xl">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Filter size={14} className="inline mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredPortfolio.map((item, index) => (
            <div 
              key={item.id}
              className="portfolio-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Portfolio Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="portfolio-image"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 bg-cyan-500 text-xs font-semibold rounded-full mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-200 text-sm">{item.description}</p>
                      </div>
                      <button className="ml-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="subsection-title mb-2 text-gray-800">
                  {item.title}
                </h3>
                
                <p className="caption-text">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-2xl">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
            <h3 className="subsection-title mb-4 text-gray-800">
              Gostou do que viu?
            </h3>
            <p className="body-text mb-6">
              Estes são apenas alguns exemplos. Temos muito mais para mostrar em uma conversa personalizada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                Ver Portfolio Completo
              </button>
              <button className="btn-secondary">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;