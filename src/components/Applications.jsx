import React from 'react';
import { Home, HardHat, Calendar, Megaphone, Wheat } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Home: Home,
  HardHat: HardHat,
  Calendar: Calendar,
  Megaphone: Megaphone,
  Wheat: Wheat
};

const Applications = () => {
  const { applications } = mockData;

  return (
    <section id="aplicacoes" className="section-spacing bg-gray-50">
      <div className="container-voo">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <h2 className="section-title animate-fade-in-up">
            Aplicações Ideais
          </h2>
          <p className="body-text max-w-2xl mx-auto mt-4 animate-fade-in-up">
            Nossos serviços atendem diversos segmentos com soluções personalizadas para cada necessidade
          </p>
        </div>

        {/* Applications Grid */}
        <div className="applications-grid">
          {applications.map((application, index) => {
            const IconComponent = iconMap[application.icon];
            
            return (
              <div 
                key={application.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Application Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg mb-4">
                  <IconComponent size={24} className="text-cyan-600" />
                </div>

                {/* Application Content */}
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  {application.title}
                </h3>
                
                <p className="body-text text-gray-600">
                  {application.description}
                </p>

                {/* Application CTA */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-cyan-600 font-medium text-sm hover:text-cyan-700 transition-colors inline-flex items-center group">
                    Ver casos de uso
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Applications Bottom Section */}
        <div className="mt-2xl text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="subsection-title mb-4 text-gray-800">
              Não encontrou seu segmento?
            </h3>
            <p className="body-text mb-6">
              Trabalhamos com diversos outros setores. Entre em contato para descobrir como podemos ajudar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                Falar com Especialista
              </button>
              <button className="btn-secondary">
                Ver Mais Segmentos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;