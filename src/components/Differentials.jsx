import React from 'react';
import { Zap, Palette, Users, Clock } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Zap: Zap,
  Palette: Palette,
  Users: Users,
  Clock: Clock
};

const Differentials = () => {
  const { differentials } = mockData;

  return (
    <section id="diferenciais" className="section-spacing">
      <div className="container-voo">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <h2 className="section-title animate-fade-in-up">
            Nossos Diferenciais
          </h2>
          <p className="body-text max-w-2xl mx-auto mt-4 animate-fade-in-up">
            O que nos torna únicos no mercado de fotografia e filmagem aérea
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
          
          {/* Left Side - Differentials List */}
          <div className="space-y-8">
            {differentials.map((differential, index) => {
              const IconComponent = iconMap[differential.icon];
              
              return (
                <div 
                  key={differential.id}
                  className="flex items-start space-x-4 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="subsection-title mb-2 text-gray-800">
                      {differential.title}
                    </h3>
                    <p className="body-text">
                      {differential.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Feature Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1668836733970-9ed7e53cd2ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxkcm9uZSUyMGFlcmlhbCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc1NzY4NDM5OXww&ixlib=rb-4.1.0&q=85" 
                alt="Drone em ação"
                className="w-full h-96 object-cover"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              
              {/* Image Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="font-semibold text-lg mb-2">
                  Tecnologia de Ponta
                </h4>
                <p className="text-gray-200 text-sm">
                  Utilizamos drones DJI de última geração com câmeras 4K e estabilização gimbal para garantir a máxima qualidade.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-2xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
                <div className="text-sm text-gray-300">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5 Anos</div>
                <div className="text-sm text-gray-300">de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-sm text-gray-300">Satisfação dos Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24h</div>
                <div className="text-sm text-gray-300">Tempo de Resposta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;