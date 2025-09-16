import React from 'react';
import { Camera, Video, Search, Building } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Camera: Camera,
  Video: Video,
  Search: Search,
  Building: Building
};

const Services = () => {
  const { services } = mockData;

  return (
    <section id="servicos" className="section-spacing bg-gray-50">
      <div className="container-voo">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <h2 className="section-title animate-fade-in-up">
            Nossos Serviços
          </h2>
          <p className="body-text max-w-2xl mx-auto mt-4 animate-fade-in-up">
            Oferecemos soluções completas em fotografia e filmagem aérea com equipamentos de última geração
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div 
                key={service.id} 
                className="service-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6">
                  <IconComponent size={28} className="text-white" />
                </div>

                {/* Service Content */}
                <h3 className="subsection-title mb-3">
                  {service.title}
                </h3>
                
                <p className="body-text mb-4">
                  {service.description}
                </p>
                
                <p className="caption-text text-gray-500">
                  {service.details}
                </p>

                {/* Service CTA */}
                <div className="mt-6">
                  <button className="text-cyan-600 font-medium text-sm hover:text-cyan-700 transition-colors inline-flex items-center group">
                    Saiba mais
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-2xl">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="subsection-title mb-4 text-gray-800">
              Precisa de um serviço personalizado?
            </h3>
            <p className="body-text mb-6">
              Desenvolvemos soluções customizadas para atender às necessidades específicas do seu projeto
            </p>
            <button className="btn-primary">
              Conversar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;